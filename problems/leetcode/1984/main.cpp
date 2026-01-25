#include <vector>
#include <algorithm>
#include <iostream>

using namespace std;

class Solution {
public:
    int minimumDifference(vector<int> &nums, int k) {
        int result;
        if (k == 1) {
            return 0;
        }

        sort(nums.begin(), nums.end());
        
        result = __INT_MAX__;
        for (size_t i = 0; i <= nums.size() - k; i++) {
            result = min(result, nums[i + k - 1] - nums[i]);
        }

        return result;
    }
};

int main (void) {
    Solution *solution = new Solution();
    
    int n, k;
    cin >> n >> k;
    vector<int> nums(n);
    for (int i = 0; i < n; i++) {
        cin >> nums[i];
    }

    cout << solution->minimumDifference(nums, k) << endl;
    delete solution;
    return 0;
}
