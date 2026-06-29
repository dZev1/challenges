#include <iostream>
#include <algorithm>
#include <vector>
#include <queue>
#include <string>

using namespace std;

class Solution
{
public:
  bool checkOnesSegment(string s)
  {
    size_t n = s.size();

    for (size_t i = 0; i < n - 1; i++) {
        if (s.at(i) == '0' && s.at(i + 1) == '1')
            return false;
    }
    
    return true;
  }
};

int main(void)
{
    Solution *solution = new Solution();

    int n;
    cin >> n;
    string testCase;

    for (int i = 0; i < n; i++) {
        cin >> testCase;
        
        cout << solution->checkOnesSegment(testCase) << "\n";
    }
}
