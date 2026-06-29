#include <iostream>
#include <algorithm>
#include <vector>
#include <queue>
#include <unordered_map>

using namespace std;

class Solution
{
public:
    vector<string> findAndReplacePattern(vector<string> &words, string pattern)
    {
        vector<string> result;
        for (auto word : words)
        {
            if (matches(word, pattern))
            {
                result.push_back(word);
            }
        }

        return result;
    }

private:
    bool matches(const string &word, const string &pattern)
    {
        if (word.size() != pattern.size())
            return false;
        // una posicion por caracter ascii
        size_t p_last_seen[256] = {0};
        size_t w_last_seen[256] = {0};
        size_t i;

        for (i = 0; i < pattern.size(); i++)
        {
            char p = pattern[i];
            char w = word[i];

            if (p_last_seen[(size_t) p] != w_last_seen[(size_t) w])
            {
                return false;
            }

            p_last_seen[(size_t) p] = i + 1;
            w_last_seen[(size_t) w] = i + 1;
        }

        return true;
    }
};

int main(void)
{
    Solution *sol = new Solution();

    int n;
    cin >> n;
    vector<string> words(n);
    for (int i = 0; i < n; i++)
    {
        cin >> words[i];
    }
    string pattern;
    cin >> pattern;

    vector<string> solution = sol->findAndReplacePattern(words, pattern);

    for (auto word : solution)
    {
        cout << word << "\n";
    }

    return 0;
}
