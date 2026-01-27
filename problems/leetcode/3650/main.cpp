#include <iostream>
#include <algorithm>
#include <vector>
#include <queue>

using namespace std;

class Solution
{
public:
    int minCost(int n, vector<vector<int>> &edges)
    {
        vector<vector<pair<int, int>>> adj(n);

        for (auto &edge : edges)
        {
            int u = edge[0];
            int v = edge[1];
            int w = edge[2];

            adj[u].push_back({v, w});
            adj[v].push_back({u, 2 * w});
        }
        if (adj[n - 1].size() == 0 || adj[0].size() == 0)
            return -1;

        vector<int> dist(n, __INT_MAX__);

        priority_queue<pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>>> pq;

        dist[0] = 0;
        pq.emplace(0, 0);

        while (!pq.empty())
        {
            auto top = pq.top();
            pq.pop();

            int d = top.first;
            int u = top.second;

            if (d > dist[u])
                continue;
            if (u == n - 1)
                return d;

            for (auto &p : adj[u])
            {
                int v = p.first;
                int w = p.second;

                if (dist[u] + w < dist[v])
                {
                    dist[v] = dist[u] + w;
                    pq.emplace(dist[v], v);
                }
            }
        }

        return -1;
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
