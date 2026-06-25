#include <algorithm>
#include <bits/stdc++.h>
#include <vector>

using namespace std;

int main(void) {
  int s, d;
  cin >> s >> d;

  vector<pair<int, int>> dragons;

  for (int i = 0; i < d; i++) {
    int x, y;
    cin >> x >> y;

    dragons.push_back({x, y});
  }

  sort(dragons.begin(), dragons.end());

  for (auto dragon : dragons) {
    if (s > dragon.first) {
      d--;
      s += dragon.second;
    } else {
      break;
    }
  }

  cout << (d == 0 ? "YES" : "NO") << "\n";
}
