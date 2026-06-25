#include <bits/stdc++.h>

using namespace std;

int main(void) {
  int n;
  cin >> n;

  while (n > 0) {
    int k, x;
    cin >> k >> x;

    for (int i = 0; i < k; i++) {
      x <<= 1;
    }

    cout << x << "\n";
    n--;
  }
}
