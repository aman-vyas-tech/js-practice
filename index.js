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
 