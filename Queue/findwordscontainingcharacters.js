// 2942. Find Words Containing Character
// You are given a 0-indexed array of strings words and a character x.
// Return an array of indices representing the words that contain the character x.
// Note that the returned array may be in any order.
// Example 1:
// Input: words = ["leet","code"], x = "e" 
// Output: [0,1]

// Explanation: outer looop for strings inner loop for characters in the string and checking if the character is equal to
//  x then pushing the index of the word into the result array and breaking the inner loop to avoid duplicate indices.

var findWordsContaining = function(words, x) {
    let res = []

    for(i = 0 ; i < words.length; i++){
        for (j = 0; j < words[i].length; j++){
            if(words[i][j] === x){
                res.push(i)
                break
            } }
    }
    return res
}

// easy way

//  for(i=0 ; i < words.length; i++){
//         if(words[i].includes(x)){
//             res.push(i)
//         }
//     }
//     return res
