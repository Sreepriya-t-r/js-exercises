// 1. Write a program to  find numbers which are multiples of  both 5 and 25 between 1000 and 1500.

for(let i=1000;i<1500;i++){
    if(i%5==0 && i%25==0){
        console.log(i);
    }
}


// 2. Find the sum of even numbers within a range.

let sum=0;
for(let i = 0;i <= 20 ;i++){
    if(i% 2 == 0){
         sum += i;
       
    }
   
}
   console.log(` ${sum}`);

// 3. Find the Factorial of a Number

let a=5;
let fact=1;
for(i=1;i<=a;i++){
fact*=i;
}
console.log(`${fact}`);


// 4. Write a program which prints the multiples of 3 in between 0-100.
for(let i=1;i<100;i++){
    if(i%3==0){
        console.log(i);
    }
}




// 5. Calculate the sum of numbers from 1 to 10 using a loop.
let add=0;
for(let i = 1;i <=10 ;i++){
    
         add += i;
   
   
}
   console.log(` ${add}`);



// 6. Write a program to print first 10 fibnocci numbers.

let fib=0;
let m=1;

for(i=1;i<=10;i++){
    console.log(` ${fib}`);
    n=fib+m;
    fib=m;
    m=n;
}





// 7. Write a program to find the largest element in a nested array.
let nestedArray = [
    [1, 5, 9],
    [2, 3, 12],
    [7, 6, 11]
];
let largest = nestedArray[0][0]; 
for (let i = 0; i < nestedArray.length; i++) {
    for (let j = 0; j < nestedArray[i].length; j++) {
        if (nestedArray[i][j] > largest) {
            largest = nestedArray[i][j];
        }
    }
}

console.log(` ${largest}`);



// 8. Display multiplication table of 8 using JS. ( 8*1=8 to 8*10=80)

let Multiplication = 8;
for (let i = 1; i <= 10; i++) {
    console.log(`${Multiplication}*${i} = ${Multiplication * i}`);
}



// 9. Find the sum of even numbers from 200 to 500.

let s=0;
for(let i = 200;i <= 500 ;i++){
    if(i% 2 == 0){
         s += i;
       
    }
   
}
   console.log(` ${s}`);

// 10. Print Odd Numbers between 1 and 50.


for(let i = 1;i <= 50 ;i++){
    if(i% 2 != 0){
        
        console.log(` ${i}`);
       
    }
   
}
   

// 11. Create a resume for yourself using a JavaScript program.

const user={Name:"Sreepriya T R",place:"Trivandrum",age:"21",gender:"Female",email:"sree@gmail.com",phone:"2314546970",Address:"123,Main Street",Degree: "Bachelor of Science in Computer Science",EXperience:"Mearn stack Intern at luminar "} 
for(key in user){
    console.log(`${key} = ${user[key]}`)
}

// 12. create an object in JavaScript using two arrays, where the first array contains 5 keys (e.g., 'name', 'age', etc.) and the second array contains 5 corresponding values (e.g., 'Sahad', '24', etc.), by iterating through the arrays with a for loop.


let keys=['name','age','occupation','phone','email'];

let values = ['Sreepriya','21','Developer','124621354','sree@gmail.com']
let person = {};
for (let i=0; i<keys.length; i++) {
    person[keys[i]] = values[i];
}
console.log(person);


// 13. Write a JavaScript program that prints all the even numbers from 1 to 100 using looping statement.

for(let i = 1;i <= 100 ;i++){
    if(i% 2 == 0){
        
        console.log(` ${i}`);
       
    }
   
}


// 14. Print prime numbers between 1 and 100.

for (let i = 2; i <= 100; i++) {
    let isPrime = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j === 0) {
            isPrime = false; 
            break; 
          }
    }
   if (isPrime) {
        console.log(i);  
    }
}

// 15.Palindrome or not
let number = 121; 
let original = number;
let reversed = 0;
let remainder;

while (number>0) {
    remainder=number%10;       
    reversed=reversed*10+remainder; 
    number=Math.floor(number/10); 
}

if (original===reversed) {
    console.log(`${original} is a palindrome.`);
} else {
    console.log(`${original} is not a palindrome.`);
}
