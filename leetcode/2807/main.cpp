#include <iostream>
#include <algorithm>
#include <vector>
#include <queue>
#include <numeric>

using namespace std;

struct ListNode
{
    int val;
    ListNode *next;
    ListNode() : val(0), next(nullptr) {}
    ListNode(int x) : val(x), next(nullptr) {}
    ListNode(int x, ListNode *next) : val(x), next(next) {}
};

class Solution
{
public:
    ListNode *insertGreatestCommonDivisors(ListNode *head)
    {
        ListNode *curr = head;

        if (curr == nullptr || curr->next == nullptr)
        {
            return head;
        }

        ListNode *next = head->next;

        while (next != nullptr)
        {
            int gcd = std::gcd(curr->val, next->val);

            ListNode *gcdNode = new ListNode(gcd, next);
            curr->next = gcdNode;
            curr = next;
            next = next->next;
        }

        return head;
    }
};

int main(void)
{
    Solution *sol = new Solution();

    int n, value;
    cin >> n >> value;

    ListNode *head = new ListNode(value);
    ListNode *cur = head;
    for (int i = 1; i < n; i++)
    {
        cin >> value;
        cur->next = new ListNode(value);
        cur = cur->next;
    }

    ListNode *list = sol->insertGreatestCommonDivisors(head);
    while (list != nullptr)
    {
        cout << list->val << " ";
        list = list->next;
    };
    cout << "\n";

    return 0;
}
