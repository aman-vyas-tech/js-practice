//1.  N of of Palindromes in string

var str = "abaweqrweqfqweewdqewfefweqcecqrefewf";
function palin(s) {
for(let i=0; i<(s.length/2)-1; i++) {
	if(s[i] === s[s.length-i]){
   	return false;
   }
}
return true;
}

function iterate() {
let count = 0;
	for(let i=0; i<str.length;i++) {
  	for(let j=i+1;j<str.length;j++) {
    		if(palin(str.substring(i,j))) {
        	count+=1;
        }
    }
 }
 return count;
 }
 let noofplains= iterate();
 console.log(noofplains); 


//  2. Transpose of matrix

let arr = [[1,2,3,4], [3,4,5,6], [4,5,6,7]];
let transarr = [];
for(let j=0; j< arr[0].length; j++) {
  	transarr.push([]);
}
for(let i=0; i<arr.length; i++) {
  for(let j=0; j<= arr.length; j++) {
  	transarr[j].push(arr[i][j]);
  }
}
// console.log(transarr);
 