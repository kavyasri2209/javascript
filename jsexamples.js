/*Check whether a student has passed or failed based on marks*/
function checkPassOrFail(marks) {
    if(marks>=40){
        console.log('"Pass"');
    }
    else{
        console.log('"Fail"')
    }
}
let marks=30;
checkPassOrFail(marks)


/*Round off a number to specified decimal places*/
function roundOff(num, ndigits) {
   console.log(num.toFixed(ndigits));
}
let num=8.44444444666666667;
let ndigits=1;
roundOff(num, ndigits) 

/*Convert degrees to radians*/
function degreesToRadians(degrees) {
    let radians=((Math.PI)/180)*degrees
    console.log(radians);
}
let degrees=90;
degreesToRadians(degrees) 


/*Write a program that prints ‘Hello World’ to the screen.*/
function helloworld(){
    console.log("Hello World!");
}
helloworld()

/*Calculate the area of a circle given its radius*/
function areaOfCircle(radius) {
    let area=Math.PI*radius*radius
    console.log(area);
}
areaOfCircle(5)

/*Write a program that asks the user for their name and greets them with their name.*/
function greetuser(name){
    console.log("Hello"+name+"!");
}
greetuser("kavya")

/*Modify the previous program such that only the users Alice and Bob are greeted with their names.*/
function greetselecteduser(name){
    if(name==="Alice" || name==="Bob"){
        console.log("Hello"+name+"!");
    }
}
greetselecteduser("Alice")
greetselecteduser("kavya")

/*WAP to get custom input from the user and print it*/
function printinput(input){
    console.log(input);
}
printinput("This is a custom input")

/*WAP to take input from the user and check whether the number is even or odd*/
function checkEvenOrOdd(num){
    if(num%2===0){
        console.log("Even");
    }   
    else{
        console.log("Odd");
    }
}  
let userInput = prompt("Enter a number:");
let number = parseInt(userInput); 
checkEvenOrOdd(4)
checkEvenOrOdd(7)

/*WAP to take input from the user and check whether the number is prime or not*/        
function checkPrime(num) {
    if (num <= 1) {
        console.log("Not prime");
        return;
    }   
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            console.log("Not prime");
            return;
        }   
    }
    console.log("Prime");
}
checkPrime(11)
checkPrime(4)

/*WAP to take input from the user and find the factorial of a number*/
function factorial(num) {
    let fact = 1;   
    for (let i = 2; i <= num; i++) {
        fact *= i;
    }
    console.log(fact);
}   
factorial(5)
factorial(7)

/*WAP to take input from the user and find the largest of three numbers*/
function largestOfThree(a, b, c) {
    let largest = a;
    if (b > largest) {
        largest = b;
    }   
    if (c > largest) {
        largest = c;
    }   
    console.log(largest);
}

largestOfThree(10, 20, 15)
largestOfThree(5, 3, 8)

/*WAP to check whether the year is a leap year or not*/
function checkLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        console.log("Leap year");
    } else {
        console.log("Not a leap year");
    }   
}
checkLeapYear(2020)
checkLeapYear(1900)
checkLeapYear(2000) 
checkLeapYear(2021)

/*WAP to print the Fibonacci sequence up to n terms*/
function fibonacci(n) {
    let a = 0, b = 1, nextTerm;
    console.log("Fibonacci Series:");   
    for (let i = 1; i <= n; i++) {
        console.log(a);
        nextTerm = a + b;
        a = b;
        b = nextTerm;
    }
}
fibonacci(7)
fibonacci(10)

/*WAP to find the sum of digits of a number*/
function sumOfDigits(num) {
    let sum = 0;    
    while (num != 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    console.log(sum);
}
sumOfDigits(1234)
sumOfDigits(5678)

/*WAP to check whether a string is a palindrome or not*/
function checkPalindrome(str) {
    let reversedStr = str.split('').reverse().join('');
    if (str === reversedStr) {
        console.log("Palindrome");
    }
    else {
        console.log("Not a palindrome");
    }
}
checkPalindrome("racecar")
checkPalindrome("hello")
checkPalindrome("madam")

/*WAP to find the GCD (Greatest Common Divisor) of two numbers*/
function gcd(a, b) {
    while (b != 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }   
    console.log(a);
}
gcd(48, 18)
gcd(56, 98)
gcd(101, 10)

/*WAP to find the LCM (Least Common Multiple) of two numbers*/
function lcm(a, b) {
    let gcdValue;
    let x = a, y = b;
    while (y != 0) {
        let temp = y;
        y = x % y;
        x = temp;
    }       
    gcdValue = x;
    let lcmValue = (a * b) / gcdValue;
    console.log(lcmValue);
}
lcm(4, 5)
lcm(12, 15)
lcm(7, 3)

/*WAP to reverse a string*/
function reverseString(str) {
    let reversedStr = str.split('').reverse().join('');
    console.log(reversedStr);
}
reverseString("hello")
reverseString("JavaScript")

/*WAP to count the number of vowels in a string*/
function countVowels(str) {
    let count = 0;
    let vowels = 'aeiouAEIOU';
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    console.log(count);
}       
countVowels("hello")
countVowels("JavaScript")
countVowels("aeiou")
countVowels("xyz")  

/*WAP to find the length of a string without using the built-in length property*/
function stringLength(str) {
    let length = 0; 
    for (let char of str) {
        length++;
    }
    console.log(length);
}
stringLength("hello")
stringLength("JavaScript")
stringLength("")
stringLength("OpenAI")

/*WAP to convert a string to uppercase*/
function toUpperCase(str) {
    let upperStr = '';
    for (let char of str) {
        if (char >= 'a' && char <= 'z') {
            upperStr += String.fromCharCode(char.charCodeAt(0) - 32);
        }
        else {
            upperStr += char;
        }
    }
    console.log(upperStr);
}   
toUpperCase("hello")
toUpperCase("JavaScript")
toUpperCase("OpenAI")

/*WAP to convert a string to lowercase*/
function toLowerCase(str) {
    let lowerStr = '';
    for (let char of str) {
        if (char >= 'A' && char <= 'Z') {
            lowerStr += String.fromCharCode(char.charCodeAt(0) + 32);
        }
        else {
            lowerStr += char;
        }       

    }
    console.log(lowerStr);
}
toLowerCase("HELLO")

/*WAP to find the largest element in an array*/
function largestInArray(arr) {
    let largest = arr[0];   
    for (let num of arr) {
        if (num > largest) {
            largest = num;
        }
    }
    console.log(largest);
}

largestInArray([3, 5, 7, 2, 8])
largestInArray([-10, -5, -3, -1])
largestInArray([0, 0, 0, 0])

/*WAP to find the smallest element in an array*/
function smallestInArray(arr) {
    let smallest = arr[0];  
    for (let num of arr) {
        if (num < smallest) {
            smallest = num;
        }
    }       
    console.log(smallest);
}

smallestInArray([3, 5, 7, 2, 8])
smallestInArray([-10, -5, -3, -1])
smallestInArray([0, 0, 0, 0])

/*WAP to calculate the sum of all elements in an array*/
function sumOfArray(arr) {
    let sum = 0;
    for (let num of arr) {
        sum += num;
    }
    console.log(sum);
}
sumOfArray([1, 2, 3, 4, 5])

/*WAP to calculate the average of all elements in an array*/
function averageOfArray(arr) {
    let sum = 0;    
    for (let num of arr) {
        sum += num;
    }
    let average = sum / arr.length;
    console.log(average);
}
averageOfArray([1, 2, 3, 4, 5])
averageOfArray([10, 20, 30])

/*WAP to find the second largest element in an array*/
function secondLargestInArray(arr) {
    let largest = -Infinity;   
    let secondLargest = -Infinity;
    for (let num of arr) {
        if (num > largest) {
            secondLargest = largest;
            largest = num;
        } else if (num > secondLargest && num != largest) {
            secondLargest = num;
        }
    }
    console.log(secondLargest);
}
secondLargestInArray([3, 5, 7, 2, 8])

/*WAP to find the second smallest element in an array*/
function secondSmallestInArray(arr) {
    let smallest = Infinity;
    let secondSmallest = Infinity;
    for (let num of arr) {
        if (num < smallest) {
            secondSmallest = smallest;
            smallest = num;
        } else if (num < secondSmallest && num != smallest) {
            secondSmallest = num;
        }
    }
    console.log(secondSmallest);
}
secondSmallestInArray([3, 5, 7, 2, 8])

/*WAP to reverse an array*/
function reverseArray(arr) {
    let reversedArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArr.push(arr[i]);
    }
    console.log(reversedArr);
}
reverseArray([1, 2, 3, 4, 5])
reverseArray(['a', 'b', 'c', 'd'])

/*WAP to find the sum of even and odd numbers in an array*/
function sumEvenOdd(arr) {
    let sumEven = 0;    
    let sumOdd = 0;
    for (let num of arr) {
        if (num % 2 === 0) {
            sumEven += num;
        } else {
            sumOdd += num;
        }
    }
    console.log("Sum of even numbers: " + sumEven);
    console.log("Sum of odd numbers: " + sumOdd);
}
sumEvenOdd([1, 2, 3, 4, 5, 6])  


/*Write a function that checks whether an element occurs in a list.*/   
function checkElementInArray(arr, element) {
    for (let item of arr) {
        if (item === element) {
            console.log("Element found");
            return;
        }
    }
    console.log("Element not found");
}
checkElementInArray([1, 2, 3, 4, 5], 3)
checkElementInArray(['a', 'b', 'c'], 'd')
checkElementInArray([true, false, true], false)
checkElementInArray([], 1)

/*Write a function that returns the elements on odd positions in a list. */
function elementsAtOddPositions(arr) {
    let result = [];    
    for (let i = 1; i < arr.length; i += 2) {
        result.push(arr[i]);
    }
    console.log(result);

}
elementsAtOddPositions([1, 2, 3, 4, 5, 6])
elementsAtOddPositions(['a', 'b', 'c', 'd', 'e'])

/*Write a function that returns the cumulative sum of a list of numbers.*/
function cumulativeSum(arr) {
    let result = [];
    let sum = 0;
    for (let num of arr) {
        sum += num;
        result.push(sum);
    }
    console.log(result);
}
cumulativeSum([1, 2, 3, 4, 5])
cumulativeSum([10, 20, 30])

/*Write a function that computes the running total of a list. */
function runningTotal(arr) {
    let result = [];
    let total = 0;  
    for (let num of arr) {
        total += num;
        result.push(total);
    }
    console.log(result);
}
runningTotal([1, 2, 3, 4, 5])
runningTotal([10, 20, 30])

/*Write a function that tests whether a string is a palindrome. */
function isPalindrome(str) {
    let reversedStr = str.split('').reverse().join('');
    if (str === reversedStr) {
        console.log("Palindrome");
    }
    else {
        console.log("Not a palindrome");
    }
}
isPalindrome("racecar")

/*Write three functions that compute the sum of the numbers in a list: using a for-loop, 
a while-loop and recursion. (Subject to availability of these constructs in your language of choice.)*/
function sumUsingForLoop(arr) {
    let sum = 0;    
    for (let num of arr) {
        sum += num;
    }
    console.log("Sum using for-loop: " + sum);
}
function sumUsingWhileLoop(arr) {
    let sum = 0;
    let i = 0;
    while (i < arr.length) {
        sum += arr[i];
        i++;
    }
    console.log("Sum using while-loop: " + sum);
}
function sumUsingRecursion(arr, n) {
    if (n <= 0) {
        return 0;
    }
    return arr[n - 1] + sumUsingRecursion(arr, n - 1);
}
let array = [1, 2, 3, 4, 5];
sumUsingForLoop(array);
sumUsingWhileLoop(array);
let sumRecursion = sumUsingRecursion(array, array.length);
console.log("Sum using recursion: " + sumRecursion);

/*Write a function that concatenates two lists. [a,b,c], [1,2,3] → [a,b,c,1,2,3]*/
function concatenateArrays(arr1, arr2) {
    let result = arr1.concat(arr2);
    console.log(result);
}   
concatenateArrays(['a', 'b', 'c'], [1, 2, 3])

/*Write a function that takes a list and returns a new list with unique elements of the first list.*/
function uniqueElements(arr) {
    let uniqueArr = []; 
    for (let item of arr) {
        if (!uniqueArr.includes(item)) {
            uniqueArr.push(item);
        }
    }
    console.log(uniqueArr);
}
uniqueElements([1, 2, 2, 3, 4, 4, 5])
uniqueElements(['a', 'b', 'a', 'c', 'b'])

/*Write a function that combines two lists by alternatingly taking elements, e.g. [a,b,c], [1,2,3] → [a,1,b,2,c,3].*/
function combineAlternately(arr1, arr2) {
    let result = [];
    let length = Math.min(arr1.length, arr2.length);    
    for (let i = 0; i < length; i++) {
        result.push(arr1[i]);
        result.push(arr2[i]);
    }
    console.log(result);
}
combineAlternately(['a', 'b', 'c'], [1, 2, 3])
combineAlternately(['x', 'y'], [10, 20, 30, 40])

/*Write a function that takes a list of strings an prints them, one per line, in a rectangular frame. For example the list ["Hello", "World", "in", "a", "frame"] gets printed as:

*********
* Hello *
* World *
* in    *
* a     *
* frame *
**********/
function printInFrame(arr) {
    let maxLength = 0;
    for (let str of arr) {
        if (str.length > maxLength) {
            maxLength = str.length;
        }   
    }
    let border = '*'.repeat(maxLength + 4);
    console.log(border);
    for (let str of arr) {
        let padding = ' '.repeat(maxLength - str.length);
        console.log(`* ${str}${padding} *`);
    }   
    console.log(border);
}
printInFrame(["Hello", "World", "in", "a", "frame"]);
printInFrame(["This", "is", "a", "test"]);
 









        







    


