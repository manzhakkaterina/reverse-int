module.exports = function reverse (n) {
let answer = '';
let str_answer = '';
if (n < 0) {n = Math.abs(n);}
str_answer = String(n);
let kol = str_answer.length;
let j = kol - 1;
  for (let i = 0; i <= kol - 1; i++) {
    answer = answer + str_answer[j];
    j--;
  }
  return Number(answer); 
}
