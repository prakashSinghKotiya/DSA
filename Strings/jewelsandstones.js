// 771. Jewels and Stones
// You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have.
//  Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.
// Letters are case sensitive, so "a" is considered a different type of stone from "A".
// Example 1:
// Input: jewels = "aA", stones = "aAAbbbb"
// Output: 3


//logic : storing the unique data into set ie the jewels and just looping over every stones and incresing count if present .
var numJewelsInStones = function(jewels, stones) {
    let j = new Set(jewels)
    let count = 0
    for (i= 0 ; i< stones.length ; i++){
        if(j.has(stones[i])){
            count++
        }

    }
    return count
}


// we can use set for if asked remove dublicates , find unique values etc