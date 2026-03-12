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
    bool matches(const string& word, const string& pattern)
    {
        if (word.size() != pattern.size())
            return false;
        unordered_map<char, char> f;
        unordered_map<char, char> inv_f;
        size_t i = 0;

        for (i = 0; i < pattern.size(); i++)
        {
            char patLetter = pattern[i];
            char wrdLetter = word[i];

            if (f.find(patLetter) != f.end())
            {
                if (f[patLetter] != wrdLetter)
                    return false;
            }
            else
            {
                if (inv_f.find(wrdLetter) != inv_f.end()) return false;

                f[patLetter] = wrdLetter;
                inv_f[wrdLetter] = patLetter;
            }
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
