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

// 6. Sort and Array
let arr = [2,1,3,5,6,9];

for(let i=0; i<arr.length-1;i++) {
	let temp =0;
	if(arr[i] > arr[i+1]) {
  	temp = arr[i+1];
    arr[i+1] = arr[i];
    arr[i] = temp;
  }
}
console.log(arr);

//7. Create obj from two array 

function createArray(arr1, arr2) {
	let obj ={};
  arr1.forEach((item, i)=> {
  	obj[item] = arr2[i]
  });
  return obj;
}

// With object assign method
function createArray1(arr1, arr2) {
	let obj ={};
	obj = Object.assign({}, {...arr1});
  return obj;
}

const result = createArray([1,2,3,4,5], [5,6,7,8,9]);
console.log(result);

// 8. Prototypal Inheritance in JS

class A {
    a = 'a'
  }
  
  A.prototype.c = 'c'
  
  class B extends A {
    b = 'b'
  }
  
  class C extends B {
    d = 'd'
  }
  
  const a = new A()
  const b = new B()
  const c = new C()
  
  /* console.log(a.a)
  console.log(a.b)
  console.log(a.c)
  console.log(b.a)
  console.log(b.b) */
  console.log(b.__proto__.c == a.__proto__.c, c)

  //9.  Fucntion Constructors True Methods and Variables

  function A(dev1, dev2) {
    this.dev1 = "dev1";
    this.dev2 = 'dev';
    this.dev3 = "sss";
    this.printDev2 = function () {
        console.log(this.dev2, dev3);
    } 
    function print() {
      console.log(this.dev3,  this.dev1);
    }
    print();
  }
  
  const a =  new  A("aman","radhika");
  const b =  new A("aman vyas","radhika");
  /* console.log(a.printDev2()); */
  /* console.log(a.dev1);
  console.log(a.dev2); */
  console.log(b);

  // 10. Fetch async await .then

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    let response = {};
    // through await 
    response = await data.json();  
    console.log(response);
    
    // Through .then
    data.json().then(r=> {
    	response = r;
      console.log(response);
      }); 

    
  };
  fetchData();
  


 