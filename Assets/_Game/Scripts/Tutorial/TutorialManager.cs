// using System.Collections;
// using System.Collections.Generic;
// using TMPro;
// using UnityEngine;

// /// <summary>
// /// Tutorial level 1 và level 2, mỗi cái là một coroutine chạy theo từng bước.
// /// Mỗi bước: hiện gợi ý → yield chờ event của game → chuyển bước.
// /// Level 1:
// ///   1. Highlight cả bong bóng chứa chim, tay chỉ vào chim → chờ bấm.
// ///   2. Chim bay vào dock → highlight dock, giải thích dock nhận đúng loại chim.
// ///   3. Highlight OrderBoard (icon + số lượng order) dưới các dock.
// ///   4. Highlight dock, nói cần gom đủ 3 con → tap để kết thúc tutorial.
// /// Level 2:
// ///   1. Highlight lồng, tay chỉ lần lượt 3 con chim trong lồng → bấm hết để nổ lồng.
// ///   2. Giải thích lồng mới sẽ rơi xuống → tap để kết thúc.
// ///
// /// Manager chỉ điều phối: toàn bộ UI (lớp tối, bubble, tay chỉ, tap-to-continue) nằm trong
// /// BirdSortGuideUI. Highlight = đổi layer các Renderer của vật sang "BirdTut" để Camera-tut vẽ
// /// đè lên lớp tối; chỉ đổi layer GameObject chứa Renderer, không đụng Collider nên vẫn bấm được.
// /// </summary>
// public class TutorialManager : Singleton<TutorialManager>
// {
//     private const string HighlightLayerName = "BirdTut";

//     private const string ContinueHint = "Tap anywhere to continue";

//     private struct SavedRenderer
//     {
//         public GameObject go;
//         public int layer;
//     }

//     // private BirdSortGuideUI guide;
//     private Coroutine running;
//     private readonly List<System.IDisposable> activeWaits = new();
//     private readonly List<SavedRenderer> highlighted = new();
//     private Transform allowedTarget;
//     private int highlightLayer = -1;
//     private Coroutine watcher;
//     private bool inGameTutActive;
//     private bool freeNestGranted;

//     public bool IsRunning => running != null || inGameTutActive;

//     /// <summary>
//     /// Số lồng được spawn trước khi tạm dừng spawn (-1 = không giữ). Level 2 chỉ cho 1 lồng rơi xuống
//     /// để highlight; các lồng còn lại được thả khi tutorial kết thúc hoặc bị huỷ.
//     /// </summary>
//     public int GetSpawnHoldLimit(int levelId)
//     {
//         return levelId == 2 && VariableSystem.IndexLevel == 1 ? 1 : -1;
//     }

//     private static void ReleaseSpawnHold()
//     {
//         BoardManager board = LevelManager.Ins != null ? LevelManager.Ins.BoardManager : null;
//         if (board != null) board.ReleaseSpawnHold();
//     }

//     public void TryStart(int levelId)
//     {
//         // Không release: BoardManager.Init vừa đặt spawn hold cho level này.
//         Stop();

//         if (levelId == 1 && VariableSystem.IndexLevel == 0)
//         {
//             running = StartCoroutine(RunFirstLevelTutorial());
//         }
//         else if (levelId == 2 && VariableSystem.IndexLevel == 1)
//         {
//             running = StartCoroutine(RunSecondLevelTutorial());
//         }

//         // Tut hàng chờ không gắn với level: chạy ở mọi level cho tới khi người chơi đã xem hết.
//         if (!VariableSystem.IsTutorialHoldingDone || !VariableSystem.IsTutorialOneSlotDone)
//         {
//             watcher = StartCoroutine(WatchHoldingArea());
//         }
//     }

//     /// <summary>Huỷ tutorial giữa chừng (thoát level, restart). Không đánh dấu hoàn thành.</summary>
//     public void Cancel()
//     {
//         Stop();
//         ReleaseSpawnHold();
//     }

//     private void Stop()
//     {
//         if (running != null)
//         {
//             StopCoroutine(running);
//             running = null;
//         }

//         for (int i = 0; i < activeWaits.Count; i++)
//         {
//             activeWaits[i].Dispose();
//         }
//         activeWaits.Clear();

//         if (watcher != null)
//         {
//             StopCoroutine(watcher);
//             watcher = null;
//         }
//         inGameTutActive = false;
//         freeNestGranted = false;

//         ClearHighlight();
//         allowedTarget = null;
//         SetDim(false);
//         // if (guide != null) guide.Close();
//     }

//     /// <summary>
//     /// ControllerManager hỏi trước khi cho click. Khi tutorial chạy, chỉ target hiện tại
//     /// (nếu có) được phép click; các bước chỉ đọc thì không click được gì.
//     /// </summary>
//     public bool CanClick(Component clickable)
//     {
//         if (!IsRunning) return true;
//         return allowedTarget != null && clickable != null &&
//                (clickable.transform == allowedTarget || clickable.transform.IsChildOf(allowedTarget));
//     }

//     /// <summary>Lớp tối của tutorial: chặn UI bên dưới nhưng ControllerManager vẫn cho click xuyên xuống chim.</summary>
//     // public bool IsTutorialDim(GameObject go)
//     // {
//     //     return IsRunning && guide != null && guide.IsDim(go);
//     // }

//     private IEnumerator RunFirstLevelTutorial()
//     {
//         if (!Setup())
//         {
//             running = null;
//             yield break;
//         }

//         // Chờ board spawn xong và có chim đúng loại dock đang cần.
//         Bird target;
//         BubbleBase bubble;
//         while (!FindTutorialBird(out target, out bubble))
//         {
//             yield return null;
//         }

//         yield return new WaitForSeconds(2f);

//         // --- Bước 1: highlight cả bong bóng chứa chim, tay chỉ vào chim; bấm con nào cũng được ---
//         SetDim(true);
//         Highlight(bubble.transform);
//         allowedTarget = bubble.transform;
//         // guide.ShowStep("Tap a bird", false, null, BirdSortGuideTextPosition.HoldingArea);
//         // guide.PointAt(target.transform);
//         // Chụp danh sách chim trước: TopContainer nhận event trước và đã tách chim khỏi bong bóng
//         // (SetParent(null)) khi tới lượt tutorial, nên không thể lọc bằng IsChildOf.
//         var birdsInBubble = new HashSet<Bird>(bubble.Birds);
//         var click = Wait<OnBirdClickEvent>(e => e.bird != null && birdsInBubble.Contains(e.bird));
//         yield return click;
//         Bird clicked = click.Result.bird;
//         // guide.HideHand();
//         // guide.HideMascot();

//         // --- Bước 2: chim bay tới dock/slot → giới thiệu dock ---
//         allowedTarget = null;
//         // guide.ClearStep();
//         ClearHighlight();
//         Highlight(clicked.transform); // chim vẫn sáng trong lúc bay
//         yield return new WaitUntil(() => clicked == null || clicked.BirdState == BirdState.Colleced);
//         yield return new WaitForSeconds(0.3f);

//         BirdDock dock = FindDockWithBirds();
//         ClearHighlight();
//         if (dock != null) Highlight(dock.transform);
//         // guide.ShowStep("It will go to the target nest automatically.", true, ContinueHint, BirdSortGuideTextPosition.FishGoesToTank);
//         // yield return WaitForTap();

//         // --- Bước 3: OrderBoard (icon + số lượng) của các dock đang có order ---
//         ClearHighlight();
//         Transform boardAnchor = HighlightOrderBoards();
//         // guide.ShowStep("Target bird are shown here", true, ContinueHint, BirdSortGuideTextPosition.OrderShownHere);
//         // yield return WaitForTap();

//         // --- Bước 4: nói cần gom đủ 3 con, tap xong là kết thúc tutorial ---
//         ClearHighlight();
//         if (dock != null) Highlight(dock.transform);
//         // guide.ShowStep("Get three birds to finish it!", true, ContinueHint, BirdSortGuideTextPosition.ThreeFishFinish);
//         // yield return WaitForTap();

//         ClearHighlight();
//         SetDim(false);
//         // guide.Close();
//         activeWaits.Clear();
//         VariableSystem.IsTutorialFirstLevelDone = true;
//         running = null;
//     }

//     private IEnumerator RunSecondLevelTutorial()
//     {
//         if (!Setup())
//         {
//             ReleaseSpawnHold();
//             running = null;
//             yield break;
//         }

//         BubbleBase cage;
//         while ((cage = FindCageBubble()) == null)
//         {
//             yield return null;
//         }

//         yield return new WaitForSeconds(1.8f);

//         // --- Bước 1: highlight lồng, tay chỉ lần lượt từng con chim cho tới khi bấm hết ---
//         SetDim(true);
//         Highlight(cage.transform);
//         allowedTarget = cage.transform;
//         // guide.ShowStep("Match to pop the cage.", false, null, BirdSortGuideTextPosition.HoldingArea);

//         // Chụp danh sách trước: chim bị bấm sẽ rời khỏi lồng ngay (xem ghi chú ở level 1).
//         var remaining = new List<Bird>(cage.Birds);
//         while (remaining.Count > 0)
//         {
//             Bird next = PickNextBird(remaining);
//             // guide.PointAt(next.transform);
//             var click = Wait<OnBirdClickEvent>(e => e.bird != null && remaining.Contains(e.bird));
//             yield return click;
//             remaining.Remove(click.Result.bird);
//             StartCoroutine(UnhighlightWhenCollected(click.Result.bird)); // chim vẫn sáng lúc bay để không bị lồng (BirdTut) đè lên
//             // guide.HideHand();
//             yield return new WaitForSeconds(0.25f);
//         }

//         // // --- Bước 2: chờ lồng nổ và chim bay xong, rồi giải thích lồng mới rơi xuống ---
//         // allowedTarget = null;
//         // float timeout = Time.time + 4f;
//         // yield return new WaitUntil(() => Time.time > timeout ||
//         //     ((cage == null || !cage.gameObject.activeInHierarchy) && !TopContainer.Ins.IsAnim()));

//         ClearHighlight();
//         // guide.ShowStep("When cages pop, new one will fall down and uncover more bird!", true, ContinueHint, BirdSortGuideTextPosition.HoldingArea);
//         // yield return WaitForTap();

//         SetDim(false);
//         // guide.Close();
//         activeWaits.Clear();
//         ReleaseSpawnHold(); // hết tutorial → cho các lồng còn lại rơi như bình thường
//         // guide.HideMascot();
//         running = null;
//     }

//     #region Tut hàng chờ (mọi level)

//     /// <summary>
//     /// BuyNestUI hỏi khi mở: true đúng một lần, ở bước "Let's tap to unlock a nest! (Free for once)".
//     /// Đóng popup rồi mở lại sẽ trả false → nút không còn Free.
//     /// </summary>
//     public bool ConsumeFreeNest()
//     {
//         bool free = freeNestGranted;
//         freeNestGranted = false;
//         return free;
//     }

//     /// <summary>Chờ tới khi hàng chờ có chim (lần đầu) hoặc chỉ còn 1 slot trống rồi chạy tut tương ứng.</summary>
//     private IEnumerator WatchHoldingArea()
//     {
//         while (!VariableSystem.IsTutorialHoldingDone || !VariableSystem.IsTutorialOneSlotDone)
//         {
//             yield return null;

//             // Nhường cho tut level 1/2 và chờ chim bay xong mới đếm slot.
//             TopContainer top = TopContainer.Ins;
//             SlotContainer slots = top != null ? top.SlotContainer : null;
//             if (running != null || slots == null || top.HasEnded || top.IsAnim() || top.animatingCount > 0)
//             {
//                 continue;
//             }

//             if (!VariableSystem.IsTutorialHoldingDone && slots.OccupiedCount >= 1)
//             {
//                 yield return RunHoldingAreaTutorial(slots);
//             }
//             else if (!VariableSystem.IsTutorialOneSlotDone && slots.OccupiedCount > 0 && slots.EmptyCount == 1)
//             {
//                 yield return RunOneSlotTutorial(slots);
//             }
//         }

//         watcher = null;
//     }

//     private IEnumerator RunHoldingAreaTutorial(SlotContainer slots)
//     {
//         if (!BeginInGameTutorial())
//         {
//             VariableSystem.IsTutorialHoldingDone = true; // thiếu layer/prefab: bỏ qua, tránh lặp lại mỗi frame
//             yield break;
//         }

//         HighlightSlots(slots);
//         // guide.ShowStep("Bird that don't match the target will go to the holding area.", true, ContinueHint, BirdSortGuideTextPosition.HoldingArea);
//         // yield return WaitForTap();

//         // guide.ShowStep("If the holding area fills up, you'll fail the level!", true, ContinueHint, BirdSortGuideTextPosition.HoldingFullFails);
//         // yield return WaitForTap();

//         EndInGameTutorial();
//         VariableSystem.IsTutorialHoldingDone = true;
//     }

//     private IEnumerator RunOneSlotTutorial(SlotContainer slots)
//     {
//         if (!BeginInGameTutorial())
//         {
//             VariableSystem.IsTutorialOneSlotDone = true;
//             yield break;
//         }

//         // --- Bước 1: hàng chờ sáng lên, báo còn 1 slot ---
//         HighlightSlots(slots);
//         // guide.ShowStep("Only 1 slot left in the holding area!", true, ContinueHint, BirdSortGuideTextPosition.OneSlotLeft);
//         // yield return WaitForTap();

//         // --- Bước 2: nest sáng lên, tay chỉ vào nest, bấm để mở popup (nút Free) ---
//         BirdDock nest = FindLockedDock();
//         if (nest != null)
//         {
//             ClearHighlight();
//             Highlight(nest.transform);
//             allowedTarget = nest.transform;
//             freeNestGranted = true;
//             // guide.ShowStep("Let's tap to unlock a nest! (Free for once)", false, null, BirdSortGuideTextPosition.UnlockTank);
//             // guide.PointAt(nest.transform);

//             // Chờ popup mở (BuyNestUI.Initialize đã lấy quyền Free ở đây).
//             // yield return new WaitUntil(() => UIManager.Ins.IsOpened<BuyNestUI>());
//             freeNestGranted = false;
//             // guide.ClearStep();
//             ClearHighlight();
//             allowedTarget = null;
//             SetDim(false);

//             // Popup đóng (đã mở nest hoặc tắt) → xong; mở lại sẽ không còn Free.
//             // yield return new WaitUntil(() => !UIManager.Ins.IsOpened<BuyNestUI>());
//         }

//         EndInGameTutorial();
//         VariableSystem.IsTutorialOneSlotDone = true;
//     }

//     private bool BeginInGameTutorial()
//     {
//         if (!Setup()) return false;

//         inGameTutActive = true;
//         // SetDim(true);
//         return true;
//     }

//     private void EndInGameTutorial()
//     {
//         ClearHighlight();
//         allowedTarget = null;
//         // SetDim(false);
//         // if (guide != null)
//         // {
//         //     guide.HideMascot();
//         //     guide.Close();
//         // }
//         inGameTutActive = false;
//     }

//     /// <summary>Sáng từng slot của hàng chờ cùng chim đang nằm trong đó.</summary>
//     private void HighlightSlots(SlotContainer slots)
//     {
//         foreach (BirdSlot slot in slots.TileSlots)
//         {
//             if (slot == null) continue;

//             Highlight(slot.transform);
//             if (!slot.IsEmpty && slot.Tile != null && slot.Tile.Transform != null)
//             {
//                 Highlight(slot.Tile.Transform);
//             }
//         }
//     }

//     private static BirdDock FindLockedDock()
//     {
//         DockContainer docks = TopContainer.Ins.DockContainer;
//         if (docks == null) return null;

//         foreach (BirdDock dock in docks.DockTiles)
//         {
//             if (dock != null && dock.isLock && !dock.IsChangingOrder) return dock;
//         }
//         return null;
//     }

//     #endregion

//     private IEnumerator UnhighlightWhenCollected(Bird bird)
//     {
//         yield return new WaitUntil(() => bird == null || bird.BirdState == BirdState.Colleced);
//         if (bird != null) Unhighlight(bird.transform);
//     }

//     // private IEnumerator WaitForTap()
//     // {
//     //     guide.ResetTap();
//     //     while (!guide.WasTapped)
//     //     {
//     //         yield return null;
//     //     }
//     //     guide.ClearStep();
//     // }

//     private WaitForGameEvent<T> Wait<T>(System.Func<T, bool> filter = null) where T : IGameEvent
//     {
//         var wait = new WaitForGameEvent<T>(filter);
//         activeWaits.Add(wait);
//         return wait;
//     }

//     #region Highlight (Camera-tut + layers)

//     private bool Setup()
//     {
//         highlightLayer = LayerMask.NameToLayer(HighlightLayerName);
//         if (highlightLayer < 0)
//         {
//             Debug.LogWarning($"Tutorial cần layer '{HighlightLayerName}'.", this);
//             return false;
//         }

//         // guide = UIManager.Ins.OpenUI<BirdSortGuideUI>();
//         // if (guide == null)
//         // {
//         //     Debug.LogWarning("Không mở được BirdSortGuideUI (thiếu prefab Resources/UI/BirdSortGuideUI).", this);
//         //     return false;
//         // }

//         return true;
//     }

//     // private void SetDim(bool visible)
//     // {
//     //     if (guide != null) guide.SetDim(visible);
//     // }

//     private void Highlight(Transform target)
//     {
//         foreach (Renderer r in target.GetComponentsInChildren<Renderer>(true))
//         {
//             if (r.gameObject.layer == highlightLayer) continue; // đã sáng (slot và chim lồng nhau): không lưu layer BirdTut làm layer gốc
//             highlighted.Add(new SavedRenderer { go = r.gameObject, layer = r.gameObject.layer });
//             r.gameObject.layer = highlightLayer;
//         }
//     }

//     /// <summary>Trả layer cũ cho các renderer thuộc target (vd. chim đã bay ra khỏi lồng).</summary>
//     private void Unhighlight(Transform target)
//     {
//         for (int i = highlighted.Count - 1; i >= 0; i--)
//         {
//             GameObject go = highlighted[i].go;
//             if (go == null || !go.transform.IsChildOf(target)) continue;

//             go.layer = highlighted[i].layer;
//             highlighted.RemoveAt(i);
//         }
//     }

//     private void ClearHighlight()
//     {
//         for (int i = 0; i < highlighted.Count; i++)
//         {
//             if (highlighted[i].go != null)
//             {
//                 highlighted[i].go.layer = highlighted[i].layer;
//             }
//         }
//         highlighted.Clear();
//     }

//     #endregion

//     #region Lookup helpers

//     /// <summary>Chim đang rảnh, không bị obstacle chặn, cùng loại với dock đang có order.</summary>
//     private static bool FindTutorialBird(out Bird bird, out BubbleBase owner)
//     {
//         bird = null;
//         owner = null;
//         BoardManager board = LevelManager.Ins.BoardManager;
//         DockContainer docks = TopContainer.Ins.DockContainer;
//         if (board == null || docks == null) return false;

//         foreach (BubbleBase bubble in board.bubbleActive)
//         {
//             if (bubble == null || !bubble.CanTapBird) continue;

//             foreach (Bird candidate in bubble.Birds)
//             {
//                 if (candidate == null || candidate.BirdState != BirdState.Idle) continue;

//                 foreach (BirdDock dock in docks.DockTiles)
//                 {
//                     if (dock != null && !dock.isLock && dock.birdId == candidate.UniqueElementID)
//                     {
//                         bird = candidate;
//                         owner = bubble;
//                         return true;
//                     }
//                 }
//             }
//         }

//         return false;
//     }

//     /// <summary>Lồng còn tap được, ưu tiên lồng có nhiều chim khớp dock đang mở và ít chim (dễ nổ).</summary>
//     private static BubbleBase FindCageBubble()
//     {
//         BoardManager board = LevelManager.Ins.BoardManager;
//         DockContainer docks = TopContainer.Ins.DockContainer;
//         if (board == null || docks == null) return null;

//         BubbleBase best = null;
//         int bestScore = int.MinValue;
//         foreach (BubbleBase bubble in board.bubbleActive)
//         {
//             if (bubble == null || !bubble.CanTapBird || bubble.BirdCount == 0) continue;

//             int matches = 0;
//             foreach (Bird bird in bubble.Birds)
//             {
//                 if (bird != null && MatchesOpenDock(bird, docks)) matches++;
//             }

//             int score = matches * 10 - bubble.BirdCount;
//             if (score > bestScore)
//             {
//                 bestScore = score;
//                 best = bubble;
//             }
//         }
//         return best;
//     }

//     private static Bird PickNextBird(List<Bird> candidates)
//     {
//         DockContainer docks = TopContainer.Ins.DockContainer;
//         Bird fallback = null;
//         foreach (Bird bird in candidates)
//         {
//             if (bird == null || bird.BirdState != BirdState.Idle) continue;
//             if (docks != null && MatchesOpenDock(bird, docks)) return bird;
//             fallback ??= bird;
//         }
//         return fallback != null ? fallback : candidates[0];
//     }

//     private static bool MatchesOpenDock(Bird bird, DockContainer docks)
//     {
//         foreach (BirdDock dock in docks.DockTiles)
//         {
//             if (dock != null && !dock.isLock && dock.birdId == bird.UniqueElementID) return true;
//         }
//         return false;
//     }

//     /// <summary>Highlight OrderBoard của mọi dock đang mở; trả về board đầu tiên để đặt bubble chữ.</summary>
//     private Transform HighlightOrderBoards()
//     {
//         DockContainer docks = TopContainer.Ins.DockContainer;
//         Transform first = null;
//         if (docks == null) return null;

//         foreach (BirdDock dock in docks.DockTiles)
//         {
//             if (dock == null || dock.isLock) continue;

//             Transform board = dock.OrderBoard != null ? dock.OrderBoard : dock.transform;
//             Highlight(board);
//             first ??= board;
//         }
//         return first;
//     }

//     private static BirdDock FindDockWithBirds()
//     {
//         DockContainer docks = TopContainer.Ins.DockContainer;
//         if (docks == null) return null;

//         BirdDock fallback = null;
//         foreach (BirdDock dock in docks.DockTiles)
//         {
//             if (dock == null || dock.isLock) continue;
//             if (dock.Tiles.Count > 0) return dock;
//             fallback ??= dock;
//         }
//         return fallback;
//     }

//     /// <summary>Gộp bounds của mọi Renderer con (SpriteRenderer, Spine MeshRenderer, TMP...).</summary>
//     public static bool TryGetWorldBounds(Transform target, out Bounds bounds)
//     {
//         bounds = default;
//         if (target == null) return false;

//         bool found = false;
//         foreach (Renderer r in target.GetComponentsInChildren<Renderer>())
//         {
//             if (!r.enabled || !r.gameObject.activeInHierarchy) continue;
//             if (!found) { bounds = r.bounds; found = true; }
//             else bounds.Encapsulate(r.bounds);
//         }

//         if (!found)
//         {
//             bounds = new Bounds(target.position, Vector3.one);
//         }
//         return true;
//     }

//     #endregion
// }
