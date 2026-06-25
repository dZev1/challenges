#include <algorithm>
#include <bits/stdc++.h>

using namespace std;

class Solution {
public:
  string processStr(string s) {
    string result;

    for (auto c : s) {
      switch (c) {
      case '*':
        if (!result.empty())
          result.pop_back();
        break;
      case '#':
        result += result;
        break;
      case '%':
        reverse(result.begin(), result.end());
        break;
      default:
        result += c;
        break;
      }
    }

    return result;
  }
};

int main(void) {
  Solution *sol = new Solution();
  int n;
  cin >> n;

  for (; n > 0; n--) {
    string s;
    cin >> s;

    cout << sol->processStr(s) << "\n";
  }

  return 0;
}
