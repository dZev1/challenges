#include <algorithm>
#include <bits/stdc++.h>
#include <vector>

using namespace std;

int main(void) {
  int x1, x2, x3;
  cin >> x1 >> x2 >> x3;

  vector<int> c = {x1, x2, x3};
  sort(c.begin(), c.end());

  int dL = c.at(1) - c.at(0);
  int dR = c.at(2) - c.at(1);

  cout << dL + dR << "\n";
}
