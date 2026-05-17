// /**Median of two sorted arrays
//  * @param {number[]} nums1
//  * @param {number[]} nums2
//  * @return {number}
//  */
//  var findMedianSortedArrays = function(nums1, nums2) {
//     let newArray = [...nums1,...nums2];
//     newArray.sort((a,b) => a-b);
//     let middleNum = Math.floor(newArray.length/2)
//     if(newArray.length % 2 === 0) {
//         return (newArray[middleNum -1] + newArray[middleNum])/2
//     } else {
//         //  let indexf = newArray.length/2;
//          return newArray[middleNum]
//     }
// };

// console.log(findMedianSortedArrays([1,2],[3,4]))

// console.log(findMedianSortedArrays([1,2],[3]))

// console.log(findMedianSortedArrays([1,2],[3,4,5,6]))

// /**Input: nums = [-1,0,1,2,-1,-4] [-4, -1, -1, 0, 1, 2]
// *  Output: [[-1,-1,2],[-1,0,1]]
//  * @param {number[]} nums
//  * @return {number[][]}
//  */
//  var threeSum = function(nums) {
//     nums.sort((a,b) => a-b);
//     let result = [];

//     //[-4, -1, -1, 0, 1, 2]
//     for(let i = 0; i < nums.length - 2; i++) {
//         if (i > 0 && nums[i] === nums[i - 1]) continue;
//         let left = i+1; let right = nums.length-1;
//         while(left < right) {
//             let sum = nums[i] + nums[left] + nums[right];
//             if( sum === 0) {
//                 result.push([nums[i], nums[left], nums[right]]);
//                 while (left < right && nums[left] === nums[left + 1]) left++;
//                 while (left < right && nums[right] === nums[right - 1]) right--;

//                 left++;
//                 right--;
//             }
//             if(sum < 0) {
//                 left++;
//             }
//             if(sum > 0) {
//                 right--;
//             }
//         }
//     }
//     return result;
// };

// console.log(threeSum([-1,0,1,2,-1,-4]));

// /**
//  * @param {number[]} nums [-4,-1,1,2], target = 1
//  * @param {number} target
//  * @return {number}
//  */
//  var threeSumClosest = function(nums, target) {
//      nums.sort((a, b) => a-b);
//      let closestSum = Infinity;
//      for(let i = 0; i < nums.length - 2; i++) {
//          let left = i+1, right = nums.length - 1;
//          let sum = nums[i] + nums[left] + nums[right];
//          console.log(nums[i]+" "+nums[left] +" " +nums[right])
//          if(sum === target) return sum;
//          console.log(target+" "+sum +" " +Math.abs(target - sum)+" "+Math.abs(target - closestSum))
//          if(Math.abs(target - sum) < Math.abs(target - closestSum)){
//              closestSum = sum;
//          }
//          if(sum < target) left++;
//          if(sum  > target) right--;
//      }
//      return closestSum;

// };

// console.log(threeSumClosest([-1,2,1,-4],1))

// var threeSumClosest = function(nums, target) {
//     nums.sort((a, b) => a - b);
//     let closestSum = Infinity;

//     for (let i = 0; i < nums.length - 2; i++) {
//         let left = i + 1, right = nums.length - 1;

//         while (left < right) {
//             let sum = nums[i] + nums[left] + nums[right];

//             // ✅ Update closestSum **before** moving pointers
//             if (Math.abs(target - sum) < Math.abs(target - closestSum)) {
//                 closestSum = sum;
//             }

//             // ✅ Now decide whether to move `left` or `right`
//             if (sum < target) {
//                 left++;   // Move left pointer to increase sum
//             } else {
//                 right--;  // Move right pointer to decrease sum
//             }
//         }
//     }
//     return closestSum;
// };

// // console.log(threeSumClosest([0,0,0],1))

// /**
//  * @param {number[]} nums nums = [1,0,-1,0,-2,2], target = 0
//  * @param {number} target
//  * @return {number[][]}
//  */
//  var fourSum = function(nums, target) {
//     nums.sort((a, b) => a - b);
//     let result = [];

//     //[-4, -1, -1, 0, 1, 2]
//     for(let i = 0; i < nums.length - 3; i++) {
//         if (i > 0 && nums[i] === nums[i - 1]) continue;

//         for(let j = i+1; i < nums.length - 2; j++) {
//         if (j > i+1 && nums[j] === nums[j - 1]) continue;
//         let left = j+1; let right = nums.length-1;
//         while(left < right) {
//             let sum = nums[i] + nums[j] + nums[left] + nums[right];
//             if( sum === target) {
//                 result.push([nums[i], nums[j], nums[left], nums[right]]);
//                 while (left < right && nums[left] === nums[left + 1]) left++;
//                 while (left < right && nums[right] === nums[right - 1]) right--;

//                 left++;
//                 right--;
//             }
//             if(sum < 0) {
//                 left++;
//             }
//             if(sum > 0) {
//                 right--;
//             }
//         }
//     }
// }
//     return result;
// };

// console.log(fourSum([1,0,-1,0,-2,2],0))

/**Removes deuplicate from a sroted array
 * @param {number[]} nums
 * @return {number}
 */
//  var removeDuplicates = function(nums) {
//     let i = 0;
//     for(let j = 1;j < nums.length;j++) {
//         if(nums[i] !== nums[j]) {
//             i++
//             nums[i] = nums[j];
//         }
//     }
//     return i+1;
// };

// console.log(removeDuplicates([1,1,2]))

/**Remove element from an array in place
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let i = 0;
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== val) {
      nums[i] = nums[j];
      i++;
    }
  }
  return i;
};
let nums = [3, 2, 2, 3];
let val = 3;
let k = removeElement(nums, val);

console.log(k); // Output: 2
console.log(nums.slice(0, k));

//Search in  Sorted Array
/** [4,5,6,7,0,1,2], target = 0
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0,
    right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor(left + right / 2);
    if (nums[mid] === target) return mid;
    else if (nums[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
};

console.log(search([0, 1, 2, 4, 5, 6, 7], 1));

//Search in rotated Sorted Array using binary search (modified)
/** [4,5,6,7,0,1,2], target = 0
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchRotated = function (nums, target) {
  let left = 0,
    right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor(left + right / 2);
    if (nums[mid] === target) return mid;
    if (nums[left] <= nums[mid]) {
      if (nums[left] <= target && target < nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      if (nums[mid] < target && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  return -1;
};

console.log(searchRotated([4, 5, 6, 7, 0, 1, 2], 4));

/**Find First and Last Position of Element in Sorted Array
 * @param {number[]} nums nums = [5,7,7,8,8,10], target = 8
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  function findFirst(nums, target) {
    let left = 0,
      right = nums.length - 1,
      first = -1;
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (nums[mid] == target) {
        first = mid;
        right = mid - 1;
      } else if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return first;
  }

  function findLast(nums, target) {
    let left = 0,
      right = nums.length - 1,
      last = -1;
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (nums[mid] == target) {
        last = mid;
        left = mid + 1;
      } else if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return last;
  }

  return [findFirst(nums, target), findLast(nums, target)];
};

console.log(searchRange([5, 7, 7, 8, 8, 10], 8)); // Output: [3,4]
console.log(searchRange([5, 7, 7, 8, 8, 10], 6));

/**Search target insert position
 * @param {number[]} nums  nums = [1,3,5,6], target = 5
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let left = 0,
    right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) return mid;
    else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return left;
};

console.log(searchInsert([1, 3, 5, 6], 2));

/**Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc"
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let charset = new Set();
  let left = 0;
  maxLength = 0;
  for (let right = 0; right < s.length - 1; right++) {
    while (charset.has(s[right])) {
      // if duplicate is found
      charset.delete(s[left]);
      left++;
    }
    charset.add(s[right]);
    maxLength = Math.max(maxLength, right - left + 1);
  }
  return maxLength;
};

console.log(lengthOfLongestSubstring("abcabcbb"));

const obj = {
  name: "Tom",
  greet() {
    setTimeout(
      function () {
        console.log("My name is " + this.name);
      }.bind(this),
      0,
    );
  },
};

obj.greet();

const user1 = {
  name: "Alice",
};

const user2 = {
  name: "Bob",
};

function greet() {
  console.log(`Hi, I'm ${this.name}`);
}

greet.apply(user1); // Hi, I'm Alice
greet.call(user2); // Hi, I'm Bob

//CALLBACKS
//Implement map function using callbacks
function myMap(arr, callback) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i], i, arr));
    console.log(result);
  }
}

myMap([1, 2, 3, 4], (num) => num * 2);

//Implement filter function using callbacks
function myFilter(arr, callback) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) result.push(arr[i]);
    console.log(result);
  }
}

myFilter([1, 2, 3, 4], (num) => num < 4);

//creating a closure function with a private variable

function bankAccount() {
  let balance = 100;
  return {
    checkBalance() {
      console.log("balance is " + balance);
    },
  };
}

const bank = bankAccount();
bank.checkBalance();

//closure with setTimeout
function a(msg) {
  setTimeout(() => {
    console.log("Returning the passed msg - " + msg);
  }, 100);
}

a(
  "Eventhough parent function has finished executing, setTimeout remembers the msg variable becuase of closures",
);

//Create a function once() that allows another function to run only once — even if it's called multiple times.
function once(fn) {
  let called = false;
  let result;
  return function (...args) {
    if (!called) {
      result = fn(...args);
      called = true;
    }
    return result;
  };
}

const val123 = once(() => console.log("Function called"));
val123();
val123();

//Create a counter function using closures that increments a number on each call.

function counter() {
  let count = 0;
  return function () {
    return count++;
  };
}
const myCounter = counter();
myCounter();

//Create a function makeMultiplier(factor) that returns a function to multiply a number by the given factor.
function makeMultiplier(factor) {
  return function (number) {
    return number * factor;
  };
}

const multiplier = makeMultiplier(10);
console.group(multiplier(4));

// Write a function createToggle() that returns a function.
//Each time the returned function is called, it should toggle between returning "ON" and "OFF".
function createToggle() {
  let toggle = "OFF";
  return function () {
    if (toggle == "OFF") {
      toggle = "ON";
    } else {
      toggle = "OFF";
    }
    return toggle;
  };
}
const doToggle = createToggle();
console.log(doToggle());
console.log(doToggle());
console.log(doToggle());

//Write a function secureCounter(start) that returns an object with two methods:
function secureCounter(value) {
  let count = value;
  return {
    increment() {
      return (count = count + 1);
    },
    decrement() {
      return (count = count - 1);
    },
  };
}

const sec = secureCounter(10);
console.log(sec.increment());
console.log(sec.decrement());

//Implement a memoize function in JavaScript.

// Create:
function memoize(fn) {
  let cache = {};
  return function (...args) {
    let key = JSON.stringify(args);

    if (cache[key]) {
      return cache[key];
    }
    const result = fn(...args);
    cache[key] = result;
    return result;
  };
}

function multiply(a, b) {
  return a * b;
}

const memoizedMultiply = memoize(multiply);
console.log(memoizedMultiply(2, 3)); // Calculating... 6
console.log(memoizedMultiply(2, 3));

//fetchData using await/async
async function getData() {
  try {
    const response = await fetchData();
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

getData();

//Given a signed 32-bit integer x, return x with its digits reversed.
// If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1],
//  then return 0.
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let sign = Math.sign(x);
  const reversedString = Math.abs(x).toString().split("").reverse().join("");
  const result = parseInt(reversedString);
  return result * sign;
};

//Palindrome number: String approach
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) return false;
  const plaindromeNum = x.toString().split("").reverse().join("");
  if (x == plaindromeNum) {
    return true;
  } else {
    return false;
  }
};

//Palindrome number: Math approach
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) return false;
  const reversedNum = 0;
  const digit = x % 10;
  while (x > 0) {
    reversedNum = reversedNum * 10 + digit;
    x = Math.floor(x / 10);
  }
  return x == reversedNum;
};

//Container With Most Water
/**
 * @param {number[]} height
 * @return {number}
 */
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let area = 0;
  let i = 0;
  let j = height.length - 1;
  while (i < j) {
    let currentArea = (j - i) * Math.min(height[i], height[j]);
    area = Math.max(area, currentArea);
    if (height[i] < height[j]) {
      i++;
    } else {
      j--;
    }
  }

  return area;
};


//Remove nth node from end of list 
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {

    let dummy = new ListNode(0);
    dummy.next = head;

    let slow = dummy ;
    let fast = dummy;
    for(let i =0; i <=n;i++) {
        fast = fast.next;
    }

    while(fast !== null) {
        slow= slow.next;
        fast = fast.next
    }

    slow.next = slow.next.next;
    return dummy.next;
    
};


//Reverse a string
function reverseString(s) {
  let arr = [];
  for(let i = s.length - 1; i >=0;i--) {
     arr.push(s[i]);
  }
  return arr.join("")
}


//Best time of buying and selling a stock
//[7,1,5,4,10,9,8,6]
function maxProfit(prices) {
let minPrice = prices[0];
let maxProfit = 0;
for(let i = 1; i < prices.length;i++) {
  minPrice = Math.min(minPrice, prices[i]);
  let profit = prices[i] - minPrice;

  maxProfit = Math.max(maxProfit, profit)
}
return maxProfit;
}
console.log(maxProfit([7,1,5,4,10,9,8,6]))