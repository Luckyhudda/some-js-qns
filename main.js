// Q. WAP to swap the two numbers without using a third variable

let num1 = 12;
let num2 = 21;

function swapNum(num1,num2){
    [num1,num2] = [num2,num1]
    return `num1 = ${num1}, \nnum2 = ${num2}`
}
console.log(swapNum(num1,num2));
console.log(swapNum(1,2));


// Q. WAP to find the largest and smallest numbers among the three.

let numOne = 12;
let numTow = 21;
let numThree = 45;

function largSmall(num1,num2,num3){
   let largest = (num1 > num2) ? (num1 > num3) ? num1 : num3 : (num2 > num3) ? num2 : num3
   let smallest =  (num1 < num2) ? (num1 < num3) ? num1 : num3 : (num2 < num3) ? num2 : num3

   return `largest num is ${largest}, \nsmallest num is ${smallest}`
}

console.log(largSmall(numOne,numTow,numThree));
console.log(largSmall(3,2,1));



// WAP finds out if any year is a leap year or not.

let year = 2024;

function leapYear(year){
    if((year % 4 === 0 || year % 100 === 0) || (year % 400 === 0)){
        return `${year} is a leapYear`
    }
    return `${year} is Not a leapYear`
}
console.log(leapYear(year));
console.log(leapYear(2023));

// // [13:30] Tarun

// Q. WAP to return the absolute number of a given input

// Example:
// Input1 - 15
// Output - 15
// Input2 - -4
// Output - 4

let absIn = 15;
function absValue(n){
   if(n<0){
    return -1 * n
   }
   return n
}
console.log(absValue(absIn));


// Q. WAP to create a result mark sheet that has 5 subjects. Need to print as an output:
// Name of student
// Marks in all 5 subjects
// Total Marks
// Percentage
// Division as
// more than 75% -- Distinction
// 60% - 75% -- 1 Div
// 50% - 60% -- 2 Div
// 33% - 50% -- 3 Div
// 0 - 33% -- Failed


let studentName = 'Lucky Hudda'
let marks = [70,50,80,60,99]
function markSheet(stuName,math,history, hindi, english, computer){
   let  totalMark = math + history + hindi + english + computer;
    let Percentage = (totalMark * 100) / 500 
    let Division;
    if(Percentage > 0 && Percentage <33){
     Division = 'Failed'
    }
    if(Percentage > 33 && Percentage <50){
      Division = '3 Div'
    }
    if(Percentage > 50 && Percentage <60){
      Division = '2 Div'
    }
    if(Percentage > 60 && Percentage <70){
      Division = '1 Div'
    }
    if(Percentage > 75){
      Division = 'Distinction'
    }

    return `Student Name : ${stuName} \nPercentage : ${Percentage}% \nDivision: ${Division}`
}
console.log(markSheet(studentName,...marks));


//Q. WAP to calculate the HCF of any two numbers

let num_1 = 45;
let num_2 = 12;

function findHCF(num1,num2){
    let n = num1 > num2 ? num1 : num2;
    let finalHcf =1;
    for(let i = 0; i<=n;i++){
        if(num1 % i === 0 && num2 % i === 0){
            finalHcf = i
        }
       
    }
    return finalHcf;
}
console.log(findHCF(num_1,num_2));
// // Q. WAP to calculate the factorial of any number.
// Example
// Input - 5 Output - 120

let inp = 5;

function factorial(num){
    if(num===0 || num === 1){
        return 1;
    }
    return num * factorial(num-1)
}
console.log(factorial(inp));

// / Q. WAP to return the count of digits for an input.
// Input - 123     Output - 3
let digit = 123;

function countDigit(n){
return n.toString().length
}
console.log(countDigit(digit));



// Q. WAP to check if any number is a palindrome number
// Palindrome Number - when the reverse number is the same as the original number.
// Example
// Input -121
// Output - true
// Input - 123
// Output - false

let pNum = 121;
 function palindromeNum(num){
    let  a = num.toString().split('').reverse().join('');
    a = Number(a)
    
     if(a === num){
         return true
     } return false
 }
 console.log(palindromeNum(pNum));






// Q. WAP to check given number is an Armstrong number or not.
// Armstrong number - It is a number that is equal to the sum of cubes of its digits.
// Example:
// Input1 - 153
// Output - true
// Input2 - 256
// Output - false


let givinNum = 153;

function ArmstrongNum(n){
    let sum = 0
    let arr = n.toString().split('')
    for(let i = 0; i<arr.length;i++){
        sum += Math.pow(arr[i],3)
    }
    if(sum === n){
        return true
    }
    return false

}
console.log(ArmstrongNum(givinNum));