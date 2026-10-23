#if UNITY_EDITOR
using UnityEditor;
using UnityEditor.SceneManagement;

public class SceneSwitcher
{
    // Phím tắt: Shift + 1
    [MenuItem("Tools/Scenes/Open Loading #1")]
    public static void OpenLoading()
    {
        EditorSceneManager.SaveCurrentModifiedScenesIfUserWantsTo();
        EditorSceneManager.OpenScene("Assets/_Game/Scenes/Loading.unity");
    }


    [MenuItem("Tools/Scenes/Open Gameplay #2")]
    public static void OpenGameplay()
    {
        EditorSceneManager.SaveCurrentModifiedScenesIfUserWantsTo();
        EditorSceneManager.OpenScene("Assets/_Game/Scenes/Gameplay.unity");
    }

    [MenuItem("Tools/Scenes/Open Home #3")]
    public static void OpenHome()
    {
        EditorSceneManager.SaveCurrentModifiedScenesIfUserWantsTo();
        EditorSceneManager.OpenScene("Assets/_Game/Scenes/suamau.unity");
    }
    [MenuItem("Tools/Scenes/Open Test #4")]
    public static void OpenTest()
    {
        EditorSceneManager.SaveCurrentModifiedScenesIfUserWantsTo();
        EditorSceneManager.OpenScene("Assets/_Game/Scenes/Test.unity");
    }

    [MenuItem("Tools/Scenes/Open Tool #5")]
    public static void OpenTool()
    {
        EditorSceneManager.SaveCurrentModifiedScenesIfUserWantsTo();
        EditorSceneManager.OpenScene("Assets/_Game/Scenes/Tool.unity");
    }
}
#endif