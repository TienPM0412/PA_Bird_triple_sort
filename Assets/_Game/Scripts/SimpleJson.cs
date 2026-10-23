using System;
using System.Collections.Generic;
using System.Globalization;
using System.Text;

/// Parser JSON tối giản, viết tay để chạy được trên Playworks
/// (Playworks không hỗ trợ JsonUtility, còn Newtonsoft không có lúc chạy).
/// Kết quả: object -> Dictionary<string, object>, array -> List<object>,
/// số -> double, chuỗi -> string, true/false -> bool, null -> null.
public static class SimpleJson
{
    public static object Parse(string json)
    {
        if (json == null) throw new FormatException("JSON is null.");

        int index = 0;
        object value = ParseValue(json, ref index);
        SkipWhitespace(json, ref index);
        if (index < json.Length)
        {
            throw new FormatException("Unexpected character '" + json[index] + "' at position " + index + ".");
        }

        return value;
    }

    /// Đọc JSON có gốc là mảng các object, vd: [ { ... }, { ... } ].
    public static List<Dictionary<string, object>> ParseObjectArray(string json, string sourceName)
    {
        List<object> array = Parse(json) as List<object>;
        if (array == null)
        {
            throw new FormatException(sourceName + " must contain a JSON array at its root.");
        }

        List<Dictionary<string, object>> result = new List<Dictionary<string, object>>(array.Count);
        for (int i = 0; i < array.Count; i++)
        {
            Dictionary<string, object> item = array[i] as Dictionary<string, object>;
            if (item == null)
            {
                throw new FormatException(sourceName + " contains a non-object item at index " + i + ".");
            }

            result.Add(item);
        }

        return result;
    }

    public static int GetInt(Dictionary<string, object> obj, string key, int fallback = 0)
    {
        object value;
        if (!obj.TryGetValue(key, out value) || value == null) return fallback;
        if (value is double) return (int)(double)value;
        if (value is bool) return (bool)value ? 1 : 0;
        return fallback;
    }

    public static float GetFloat(Dictionary<string, object> obj, string key, float fallback = 0f)
    {
        object value;
        if (!obj.TryGetValue(key, out value) || value == null) return fallback;
        if (value is double) return (float)(double)value;
        return fallback;
    }

    public static bool GetBool(Dictionary<string, object> obj, string key, bool fallback = false)
    {
        object value;
        if (!obj.TryGetValue(key, out value) || value == null) return fallback;
        if (value is bool) return (bool)value;
        if (value is double) return (double)value != 0d;
        return fallback;
    }

    public static string GetString(Dictionary<string, object> obj, string key, string fallback = "")
    {
        object value;
        if (!obj.TryGetValue(key, out value) || value == null) return fallback;
        string text = value as string;
        if (text != null) return text;
        if (value is double) return ((double)value).ToString(CultureInfo.InvariantCulture);
        return fallback;
    }

    private static object ParseValue(string json, ref int index)
    {
        SkipWhitespace(json, ref index);
        if (index >= json.Length) throw new FormatException("Unexpected end of JSON.");

        char c = json[index];
        if (c == '{') return ParseObject(json, ref index);
        if (c == '[') return ParseArray(json, ref index);
        if (c == '"') return ParseString(json, ref index);
        if (c == '-' || (c >= '0' && c <= '9')) return ParseNumber(json, ref index);
        if (Matches(json, index, "true")) { index += 4; return true; }
        if (Matches(json, index, "false")) { index += 5; return false; }
        if (Matches(json, index, "null")) { index += 4; return null; }

        throw new FormatException("Unexpected character '" + c + "' at position " + index + ".");
    }

    private static Dictionary<string, object> ParseObject(string json, ref int index)
    {
        Dictionary<string, object> result = new Dictionary<string, object>();
        index++; // {

        SkipWhitespace(json, ref index);
        if (index < json.Length && json[index] == '}')
        {
            index++;
            return result;
        }

        while (true)
        {
            SkipWhitespace(json, ref index);
            if (index >= json.Length || json[index] != '"')
            {
                throw new FormatException("Expected property name at position " + index + ".");
            }

            string key = ParseString(json, ref index);

            SkipWhitespace(json, ref index);
            if (index >= json.Length || json[index] != ':')
            {
                throw new FormatException("Expected ':' at position " + index + ".");
            }

            index++;
            result[key] = ParseValue(json, ref index);

            SkipWhitespace(json, ref index);
            if (index >= json.Length) throw new FormatException("Unexpected end of JSON object.");

            char c = json[index++];
            if (c == '}') return result;
            if (c != ',') throw new FormatException("Expected ',' or '}' at position " + (index - 1) + ".");
        }
    }

    private static List<object> ParseArray(string json, ref int index)
    {
        List<object> result = new List<object>();
        index++; // [

        SkipWhitespace(json, ref index);
        if (index < json.Length && json[index] == ']')
        {
            index++;
            return result;
        }

        while (true)
        {
            result.Add(ParseValue(json, ref index));

            SkipWhitespace(json, ref index);
            if (index >= json.Length) throw new FormatException("Unexpected end of JSON array.");

            char c = json[index++];
            if (c == ']') return result;
            if (c != ',') throw new FormatException("Expected ',' or ']' at position " + (index - 1) + ".");
        }
    }

    private static string ParseString(string json, ref int index)
    {
        index++; // "
        StringBuilder builder = new StringBuilder();

        while (index < json.Length)
        {
            char c = json[index++];
            if (c == '"') return builder.ToString();

            if (c != '\\')
            {
                builder.Append(c);
                continue;
            }

            if (index >= json.Length) break;

            char escaped = json[index++];
            switch (escaped)
            {
                case '"': builder.Append('"'); break;
                case '\\': builder.Append('\\'); break;
                case '/': builder.Append('/'); break;
                case 'b': builder.Append('\b'); break;
                case 'f': builder.Append('\f'); break;
                case 'n': builder.Append('\n'); break;
                case 'r': builder.Append('\r'); break;
                case 't': builder.Append('\t'); break;
                case 'u':
                    if (index + 4 > json.Length) throw new FormatException("Invalid unicode escape in JSON string.");
                    int code = 0;
                    for (int i = 0; i < 4; i++)
                    {
                        code = code * 16 + HexValue(json[index + i]);
                    }

                    builder.Append((char)code);
                    index += 4;
                    break;
                default:
                    throw new FormatException("Invalid escape '\\" + escaped + "' in JSON string.");
            }
        }

        throw new FormatException("Unterminated JSON string.");
    }

    private static double ParseNumber(string json, ref int index)
    {
        int start = index;
        while (index < json.Length)
        {
            char c = json[index];
            if ((c >= '0' && c <= '9') || c == '-' || c == '+' || c == '.' || c == 'e' || c == 'E')
            {
                index++;
                continue;
            }

            break;
        }

        string number = json.Substring(start, index - start);

        // Playworks chỉ có double.Parse(string); trên web luôn đọc dấu '.' là dấu thập phân.
        return double.Parse(number);

    }

    // Tự đọc hex vì Playworks có thể không có int.Parse(string, NumberStyles, IFormatProvider).
    private static int HexValue(char c)
    {
        if (c >= '0' && c <= '9') return c - '0';
        if (c >= 'a' && c <= 'f') return c - 'a' + 10;
        if (c >= 'A' && c <= 'F') return c - 'A' + 10;
        throw new FormatException("Invalid hex digit '" + c + "' in JSON unicode escape.");
    }

    private static void SkipWhitespace(string json, ref int index)
    {
        while (index < json.Length)
        {
            char c = json[index];
            if (c != ' ' && c != '\t' && c != '\n' && c != '\r' && c != '﻿') return;
            index++;
        }
    }

    private static bool Matches(string json, int index, string word)
    {
        return index + word.Length <= json.Length && string.CompareOrdinal(json, index, word, 0, word.Length) == 0;
    }
}
