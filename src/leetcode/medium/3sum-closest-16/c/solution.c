int cmpfunc (const void *a, const void *b) {
   return *(int*)a - *(int*)b;
}

int threeSumClosest(int* nums, int numsSize, int target) {
  if (numsSize < 3) return 0;

  int closest = nums[0] + nums[1] + nums[2];
  qsort(nums, numsSize, sizeof(int), cmpfunc);

  for (int first = 0; first < numsSize - 2; first += 1) {
    int second = first + 1;
    int third = numsSize - 1;

    while (second < third) {
      int num = nums[first] + nums[second] + nums[third];

      if (abs(num - target) < abs(closest - target)) closest = num;

      if (num < target) {
        second += 1;
      } else if (num > target) {
        third -= 1;
      } else {
         return num;
      }
    }
  }

  return closest;
}
