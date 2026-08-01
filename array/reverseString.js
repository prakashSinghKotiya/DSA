// In-place means that an algorithm modifies the input data structure directly 
// without using extra memory proportional to the input size

var reverseString = function(s) {

    let length = s.length
    let loop = Math.floor(length / 2)
  
      for (i=0 ;  i < loop   ; i++){

        let temp = s[i]
        s[i] = s[length - 1 -i ]
        s[length -1 -i ] = temp


      }
    }