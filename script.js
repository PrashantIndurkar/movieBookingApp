var runningSum = function(nums) {
    const result = [];
    const currentSum = 0;

    for (let i = 0; i<nums.length; i++){
        let cv = nums[i]
        currentSum =  currentSum + cv;
        result.push(currentSum)
    }
    return result;

  };
  runningSum([1,2,3,4])