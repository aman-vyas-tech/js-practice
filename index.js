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


// 3. Remove Duplicate elemnts from array 
let arr1 = [1,2,4,1,2,3,4,5,6,4,3,7];

let newarr = [];

for(let i=0; i<=arr1.length-1; i++) {
		if(!newarr.includes(arr1[i])) {
    	newarr.push(arr1[i]);
    }
}
console.log(newarr);

4. // Max Repititions in array and count 

let arr2 = [1,2,4,1,2,3,4,5,6,4,3,7];

let newarr1 = [];
let maxCount= {
}

for(let i=0; i<=arr2.length-1; i++) {
		if(!newarr1.includes(arr2[i])) {
    	newarr1.push(arr2[i]);
      maxCount[arr[i]] =1;	
    } else {
    	maxCount[arr2[i]] +=1;
    }
}
console.log(maxCount);
let max = 0;
for(let key of Object.keys(maxCount)) {
  if(max < maxCount[key]) {
  	max = maxCount[key]
  }
}
console.log(max);

// 5. Missing values in array 

let arr3 = [2,1,3,5,6,9];
let missingValues =[];

arr3 = arr3.sort();
console.log(arr3);
for(i=1; i<arr3[arr3.length-1]; i++) {
	if(!arr3.includes(i)) {
  		missingValues.push(i);
  } 
  console.log(i);
}
console.log(missingValues);

 