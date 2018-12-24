class Solution {
public:
  int threeSumClosest(vector<int>& nums, int target) {
    int res = 0;
    int n = nums.size();

    if (n < 3) {
      return res;
    }

    int closest = nums[0] + nums[1] + nums[2];
    std::sort(nums.begin(), nums.end());

    for (int first = 0; first < n - 2; first += 1) {
      if (first > 0 && nums[first] == nums[first - 1]) {
        continue;
      }
      int second = first + 1;
      int third = n - 1;

      while (second < third) {
        int sum = nums[first] + nums[second] + nums[third];

        if (abs(sum - target) < abs(closest - target)) {
          closest = sum;
        }

        if (sum < target) {
          second += 1;
        } else if (sum > target) {
          third -= 1;
        } else {
          return sum;
        }
      }
    }

    return closest;
  }
};
