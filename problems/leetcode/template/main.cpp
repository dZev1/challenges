#include <iostream>
#include <algorithm>
#include <vector>
#include <queue>

using namespace std;

class Solution
{
  void function() {

  }
};

int main(void)
{
    Solution *sol = new Solution();

    int n;
    cin >> n;
    vector<vector<int>> edges(n);
    for (int i = 0; i < n; i++)
    {
        vector<int> edge(3);
        cin >> edge[0] >> edge[1] >> edge[2];

        edges[i] = edge;
    }

    cout << sol->minCost(n, edges) << endl;

    return 0;
}
