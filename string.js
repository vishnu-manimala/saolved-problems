//  reverse word inplace from string
// *************************************
// function reverse(s){
//     let strings = s.split(' '); //splits words from string and stores
//     stringRev = []
//     strings.forEach(word=>{
//         let revWord = ""
//         for(i = word.length-1; i>=0; i--){
//             revWord += word [i]; //reverses each word in array
//         }
//         stringRev.push(revWord); // adds reversed word to array
//     })
//     return stringRev.join(' '); // joins reversed words to string and returns
// }
// console.log(reverse("hi aswin"));


// Leetcode 151 : Reverse Words in a String
// *****************************************
// function reverse(s){
//     let string = s.split(' ');
//     let ans = "";
    
//     for(let i = string.length-1; i >= 0; i--){
//         if(string[i]){
//             ans += (ans?" ":"")+string[i];
//         }
//     }
    
    
//     return ans;
// }

// console.log(reverse("hi  vishnu how   are you  "))