class Solution {
public:
  vector<vector<int>> threeSum(vector<int>& nums) {
    vector<vector<int>> res;
    if (nums.size() < 3) {
      return res;
    }
    std::sort(nums.begin(), nums.end());

    int positiveIndex = std::distance(nums.begin(), std::find(nums.begin(), nums.end(), 0));

    for (int first = 0; first <= positiveIndex; first += 1) {
      // skip same nums[first]
      if (first > 0 && nums[first] == nums[first - 1]) {
        continue;
      }

      int second = first + 1;
      int third = nums.size() - 1;

      while (second < third) {
        int sum = nums[first] + nums[second] + nums[third];

        if (sum < 0) {
          second += 1;
        } else if (sum > 0) {
          third -= 1;
        } else {
          res.push_back({nums[first], nums[second], nums[third]});

          while (second < third && nums[second] == nums[second + 1]) {
            // skip same nums[second]
            second += 1;
          }
          while (second < third && nums[third] == nums[third - 1]) {
            third -= 1;
          }

          second += 1;
          third -= 1;
        }
      }
    }

    return res;
  }
};
