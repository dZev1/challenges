#include <bits/stdc++.h>

using namespace std;

int main(void) {
  int k, n, w;
  cin >> k >> n >> w;
  int total = 0;

  for (; w > 0; w--) {
    total += k * w;
  }

  cout << max(0, total - n) << "\n";
}
