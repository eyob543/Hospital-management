// const input = document.querySelector("input");
// const btn = document.querySelector("button");
// const div = document.querySelector("div");
// const users = ["Eyob", "Tinsae", "Robel", "Yeabsera"];
// let min = users[0].length;
// users.forEach((user) => {
//    min = user.length < min ? user.length : min; 
// })
// input.addEventListener("input", () => {
//     if(input.value.length >= min){
//        const check= users.some(user => user == input.value);
//        if(!check){
//             div.innerText = "No such user";
//        }else{
//             div.innerText = "Found";
//        }
//     }
// });
const word = "HelkeH";
let last = word.length - 1;
let i = 0;
while(last > i){
   if(word[last] !== word[i]){
     console.log("NOT palindrome.")
     break;
   }
   i++;
   last--;
   if (last <= i)
   console.log("palindrome");
}