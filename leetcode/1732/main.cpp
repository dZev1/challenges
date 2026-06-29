#include <algorithm>
#include <bits/stdc++.h>
#include <ranges>

using namespace std;

class Solution {
public:
/*
int largestAltitude(vector<int> &gain) {
  size_t n = gain.size();
  vector<int> altitudes = {0};

  for (size_t i = 1; i < n + 1; i++) {
    altitudes.push_back(altitudes.at(i - 1) + gain.at(i - 1));
  }
  auto it = max_element(altitudes.begin(), altitudes.end());
  return *it.base();
}
*/

  int largestAltitude(vector<int> &gain) {
    int curr_alt = 0;
    int max_alt = 0;

    for (auto g : gain) {
      curr_alt += g;
      max_alt = max(curr_alt, max_alt);
    }
    return max_alt;
  }
};

int main(void) {
  Solution *sol = new Solution();

  int cases;
  cin >> cases;

  for (; cases > 0; cases--) {
    size_t size;
    cin >> size;
    vector<int> vec;
    for (size_t i = 0; i < size; i++) {
      int num;
      cin >> num;
      vec.push_back(num);
    }

    cout << sol->largestAltitude(vec) << "\n";
  }
  return 0;
}
