// Given a string s consisting of words and spaces, return the length of the last word in the string.
// A word is a maximal substring consisting of non-space characters only.
// Example 1:
// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.


//logic :  running loop from end to start starting the count exact from the last when the first non space character is found 
// and then counting the length of the last word until a space is found and then returning the count.


var lengthOfLastWord = function(s) {

    let length = s.length

    let count = 0

    while  (length >= 0) {
        if (s[length] !== " ") {
            count++
        } else if (count > 0) {
            break
        }
        length--
    }

    return count
}