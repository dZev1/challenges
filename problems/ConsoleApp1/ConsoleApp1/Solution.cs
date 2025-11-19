namespace ConsoleApp1;

public class Solution
{
    public bool HasDuplicate(int[] nums)
    {
        var hashset = new HashSet<int>();

        foreach (var num in nums)
        {
            if (hashset.Contains(num))
            {
                return true;
            }

            hashset.Add(num);
        }

        return false;
    }

    public int[] ProductExceptSelf(int[] nums)
    {
        var res = new int[nums.Length];
        var pre = 1;
        var post = 1;

        for (var i = 0; i < res.Length; i++)
        {
            res[i] = 1;
        }

        for (var i = 0; i < res.Length; i++)
        {
            res[i] = pre;
            pre *= nums[i];
        }

        for (var i = nums.Length; i > -1; i--)
        {
            res[i] *= post;
            post *= nums[i];
        }

        return res;
    }
    
    public 
}