function getMax(...nums) {
  let maximum = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > maximum) {
      maximum = nums[i];
    }
  }

  return maximum;
}

console.log(getMax(1, 22, 3, 25, 35, 35.3));
