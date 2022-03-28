// Intro to Arrays
//1 Given a binary array nums, return the maximum number of consecutive 1's in the array.
    //Input: nums = [1,1,0,1,1,1]
    var findMaxConsecutiveOnes = function(nums) {
    var number = 0;
    var maxCount = 0;
        for (var i = 0; i<nums.length; i++){
            if(nums[i] ===1){
                number++;
            }else{
                maxCount = Math.max(maxCount, number);
                number=0;
            }
        }
        return Math.max(maxCount, number);
    };

//Given an array nums of integers, return how many of them contain an even number of digits.
    //Input: nums = [12,345,2,6,7896]
    //Output: 2
    var findNumbers = function(nums) {
    var even = 0;
    for (var i =0; i <nums.length; i++){
        var numToStr = nums[i].toString().length
            if(numToStr%2 === 0){
                even++;
            }else{
                continue;
            }
         }
     return even;
    };
//Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.
    //Input: nums = [-4,-1,0,3,10]
    //Output: [0,1,9,16,100]

    var sortedSquares = function(nums) {
    return result=nums.map((x=>x**2)).sort((a,b) => a - b);
    };  
