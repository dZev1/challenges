#include <iostream>
#include <algorithm>
#include <vector>

using namespace std;

void vecToString(vector<vector<int>> vec);

class Solution
{
public:
    vector<vector<int>> minimumAbsDifference(vector<int> &arr)
    {
        int minDiff, diff;
        vector<vector<int>> result = vector<vector<int>>{};

        size_t n = arr.size();
        sort(arr.begin(), arr.end());

        minDiff = abs(arr[1] - arr[0]);

        for (size_t i = 0; i < n - 1; i++)
        {
            diff = abs(arr[i + 1] - arr[i]);
            if (diff < minDiff)
            {
                result.clear();
                minDiff = diff;
            }
            if (diff == minDiff) result.push_back({arr[i], arr[i + 1]});
        }

        return result;
    }
};

int main()
{
    Solution *solution = new Solution();

    int n;
    cin >> n;
    vector<int> nums(n);
    for (int i = 0; i < n; i++)
    {
        cin >> nums[i];
    }

    vecToString(solution->minimumAbsDifference(nums));

    return 0;
}

void vecToString(vector<vector<int>> vec)
{

    for (vector<int> list : vec)
    {
        for (int e : list)
        {
            cout << e << " ";
        }
        cout << endl;
    }
}