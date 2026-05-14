#include <iostream>
#include <vector>

using namespace std;

// por localidad de cache, es mejor la solucion que no está comentada. La solución comentada es la original que hice yo, pero no es la mejor
// obviamente.

class Solution {
public:
  bool isGood(vector<int> &nums) {
    const int max = nums.size() - 1;
    vector<int> counter(max + 1);

    for (auto num : nums) {
      if (num > max)
        return false;
      counter[num]++;
    }

    for (int i = 1; i < max; i++) {
      if (counter[i] != 1)
        return false;
    }

    return counter[max] == 2;

    /*
    auto it = max_element(nums.begin(), nums.end());
    int max = *it;
    unordered_map<int, int> hash = unordered_map<int, int>();

    for (auto num : nums) {
        auto it = hash.find(num);

        if (it == hash.end()) {
            hash[num] = 1;
        } else {
            if (num != max) return false;
            hash[num]++;
        }
    }

    return hash[max] == 2;
    */
  }
};

int main(void) {
  Solution *sol = new Solution();

  int n;
  cin >> n;
  vector<int> nums(n);
  for (int i = 0; i < n; i++) {
    cin >> nums[i];
  }

  cout << sol->isGood(nums) << endl;

  return 0;
}
