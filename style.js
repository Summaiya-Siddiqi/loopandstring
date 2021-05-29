//************************************************Chapter17-20************************************************//
//*************************************************Array and LOOP***********************************************//
//Q no 1..........................................................................
// Declare and initialize an empty multidimensional array.
// (Array of arrays)

// var arr =[
//     []
// ]

//Q no 2........................................................................
// 2. Declare and initialize a multidimensional array
// representing the following matrix:

// var arr =[
//     [0,1,2,3],[1,0,1,2],[2,1,0,1]
// ];
// for(var a=0;a<4;a++){
//     for(var b=0;b<4;b++){
//     document.write(arr[a][b] +" ");
// }
// document.write("<br>");
// }

//Q no 3........................................................................
// Write a program to print numeric counting from 1 to 10.

// for(var i=1;i<=10;i++){
//     document.write(i+"<br>");
// }

//Q no 4.......................................................................
// Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.

// var tableno = prompt("Enter the number of table:");
// var length = prompt("Enter the length of table");
// document.write("Multiplication table of:"+tableno +"<br>");
// document.write("Length:"+length +"<br>");
// for(var i=1;i<=length;++i){
//     document.write(tableno + " * "+ i + " = "+ tableno*i +"<br>");
// }



//Q no 5.........................................................................
//  Write a program to print items of the following array
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”,
// “strawberry”]

// var fruits = ["apple", "banana", "mango", "orange","strawberry"];
// for(var i=0;i<fruits.length;i++){
//     document.write(fruits[i] + "<br>");
// }
// for(var i=0;i<fruits.length;i++){
// document.write("Element at index "+i+" is "+ fruits[i]+"<br>");
// }


//Q no 6...........................................................................
// Generate the following series in your browser. See
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

// document.write("<h4>Counting</h4>");
// for(var i=1;i<=15;i++){
//        document.write(i+",");
//      }
//      document.write("<h4> Reverse Counting</h4>");
//      for(var i=15;i>=1;i--){
//         document.write(i+",");
//       }
//       document.write("<h4>Even</h4>");
//       for(var i=0;i<=20;i++ ){
//           if(i % 2==0){
//             document.write(i+",");
//           }  
//       } 
//       document.write("<h4>Odd</h4>");
//       for(var i=1;i<=20;i++ ){
//           if(i % 2!==0){
//             document.write(i+",");
//           }  
//       } 
//       document.write("<h4>Series</h4>");
//       for(var i=1;i<=20;i++ ){
//           if(i % 2==0){
//             document.write(i+"k,");
//           }  
//       } 


//Q no 7......................................................................
// You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array.
// After searching, prompt the user whether the given item is
// found in the list or not.


//     var bakeryitem= ["cake", "apple pie", "cookie", "chips", "patties"];

//    var check = prompt("Welcome to abc bakery .What do you want to order sir/ma'am ?");
   
//    for(var i=0 ; i<=4;i++){
//    if(check === bakeryitem[i]){
      
//        alert(check+" is available at index "+i+"  in our bakery ");
//    break;
//    }
//    else{
//        alert("we are sorry "+ check + "is not available in our bakery");
//    }
//    }


//Q no 8.........................................................................
// Write a program to identify the largest number in the
// given array.
// A = [24, 53, 78, 91, 12].

// var num =[24,53,78,91,12];
// document.write("Array items "+num +"<br>");
// document.write("The largest number is "+Math.max(...num));

//Q no 9..........................................................................
// Write a program to identify the smallest number in the
// given array.
// A = [24, 53, 78, 91, 12]
// var num =[24,53,78,91,12];
// document.write("Array items "+num +"<br>");
// document.write("The smallest number is "+Math.min(...num));

//Q no 10........................................................................
// Write a program to print multiples of 5 ranging 1 to 100.


// for(var i =1; i<=100;i++)
// {
//     if(i % 5==0){
//         document.write(i+",");
//     }
// }
//*****************************************Chapter21-25******************************************* //
//**********************************************String*********************************************//
//Q no 1
// Write a program that takes two user inputs for first and 
// last name using prompt and merge them in a new variable 
// titled fullName. Greet the user using his full name.

// var firstname = prompt("Enter your first name");
// var lastname = prompt("Enter your last name");
// var fullname = (firstname +" "+ lastname);
// alert(fullname+" \n welcome to JSwebsite \n Hope you have a good day");

 //Q no 2........................................................................................
//  Write a program to take a user input about his favorite 
// mobile phone model. Find and display the length of user 
// input in your browser

// var str = prompt("Enter your favorite mobile phone model");
//   var n = str.length;
//   document.write("My favorite phone is: "+str +"<br>");
//   document.write("Length of string: "+n);



//Q no 3......................................................................................
// Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser .

// var str = "Pakistani";
//   var n = str.indexOf("n");
//  document.write("String: "+str +"<br>");
//  document.write("Index of 'n': "+n);
 

//Q no 4.....................................................................................
// Write a program to find the last index of letter “l” in the 
// word “Hello World” and display the result in your browser.

//  var str = "Hello World";
//   var n = str.lastIndexOf("l");
//  document.write("String: "+str +"<br>");
// document.write("Last Index of 'l': "+n);

//Q no 5.....................................................................................
// Write a program to find the character at 3rd index in the 
// word “Pakistani” and display the result in your browser.

// var str = "Pakistani";
//   var n = str.charAt(3);
//  document.write("String: "+str +"<br>");
//  document.write("Character at index 3: "+n);

//Q no 6.......................................................................................
// Repeat Q1 using string concat() method.

// var firstname = prompt("Enter your first name");
// var lastname = prompt("Enter your last name");
// var str1 = firstname;
// var str2 = lastname;
// var fullname = str1.concat(str2);
// alert(fullname+" \n welcome to JSwebsite \n Hope you have a good day");


//Q no 7........................................................................................
// . Write a program to replace the “Hyder” to “Islam” in the 
// word “Hyderabad” and display the result in your browser.

// var newword = "Hyderabad";
// document.write("City: " + newword +"<br>");
// document.write("After replacement: "+newword.replace("Hyder" , "Islam"));

//Q no 8........................................................................................
// Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and 
// football together.”;

// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var str = message.replaceAll("and","&");
// document.write(str);

//Q no 9..........................................................................................
// Write a program that converts a string “472” to a number 
// 472. Display the values & types in your browser

// var value = "427";
// document.write("Value: "+value+"<br>");
// document.write("Type: "+typeof value + "<br>");

// var newvalue = parseInt(value );

// document.write("Value: "+newvalue +"<br>");
// document.write("Type: " +typeof newvalue + "<br>");

//Q no 10.........................................................................................
// Write a program that takes user input. Convert and 
// show the input in capital letters.

// var input = prompt("Enter the word to show in uppercase");
// var word = input.toUpperCase();
// document.write("User input: "+input+"<br>");
// document.write("UPPER CASE: "+word);

//Q no 11..........................................................................................
// Write a program that takes user input. Convert and 
// show the input in title case.

// var char =prompt("Enter your word");
// var firstchar = char.slice(0,1);
// var otherchar = char.slice(1);
// firstchar = firstchar.toUpperCase();
// var fullword = firstchar + otherchar;
// document.write("User input: "+ char+"<br>");
// document.write("Title case: "+fullword);


//Q no 12........................................................................................
// Write a program that converts the variable num to 
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.

// var num = 35.36;
// var stringvalue =3536;
// var str = stringvalue.toString();
// document.write("Number: "+ num+"<br>");
// document.write("Result: "+ str+" and type of num is now " +typeof str);

//Q no 13.......................................................................................
// Write a program to take user input and store username 
// in a variable. If the username contains any special symbol 
// among [@ . , !], prompt the user to enter a valid username. 
// For character codes of [@ .
// Note:
// ASCII code of ! is 33
// ASCII code of , is 44
// ASCII code of . is 46
// ASCII code of @ is 64

// var input = prompt("Enter your username");
// var char = ["@",".",",","!"];
// for(var i=0 ; i<=4;i++ ){
// if(input === char[i])
// {
//     alert("Please enter a valid username");
// }
// else{
//     alert("username is correct");
// }
// }

//Q no 14.....................................................................................
// You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an 
// array. After searching, prompt the user whether the given 
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user 
// enters cookie, Cookie, COOKIE or coOkIE, program 
// should inform about its availability. Example.


// var bakeryitem= ["cake", "apple pie", "cookie", "chips", "patties"];

//   var check = prompt("Welcome to abc bakery .What do you want to order sir/ma'am ?");
//    check=check.toLowerCase();

//    for(var i=0 ; i<=4;i++){
//    if(check === bakeryitem[i]){
      
//        alert(check+" is available at index "+i+"  in our bakery ");
//    break;
//    }
//    else{
//        alert("we are sorry "+ check + "is not available in our bakery");
//    }
//    }


//Q no 15....................................................................................
// Write a program to take password as an input from 
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.

// var password = prompt("Enter the password");
  
//     // at least one number, one lowercase and one uppercase letter
//     // at least six characters
//     var re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
 
//     var passwordresult=re.test(password);
//     if(passwordresult== true){
//         alert("Your password is correct");
//        }
//        else{
//            alert("Please enter  a valid password");
//        }
   
  

//Q no 16.....................................................................................
// Write a program to convert the following string to an 
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.

// var s = "University of Karachi";
// for (var i = 0; i < s.length; i++) {
//     document.write(s.charAt(i)+"<br>");
// }

//Q no 17......................................................................................
// Write a program to display the last character of a user input.

// var str = prompt("Enter a word");
// document.write("User input: "+str+"<br>");
// document.write("Last Character of input: "+str.charAt(str.length-1));


//Q no 18......................................................................................
// You have a string “The quick brown fox jumps over the 
// lazy dog”. Write a program to count number of 
// occurrences of word “the” in given string

// var r = "The quick brown fox jumps over the lasy dog";
//  var a = r.toLowerCase();           
// document.write("Text: The quick brown fox jumps over the lasy dog <br>");
// document.write("There are "+(a.match(/the/g)).length +" occurrence(s) of word 'the'"); 



// **********************************class activity********************************************//
// var firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "];

// var lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];

// var fullNames = [];

// for (var i = 0; i < firstNames.length; i++) {

// for (var j = 0; j < lastNames.length; j++) {

// fullNames.push(firstNames[i] + lastNames[j] + " <br>");

// } }
// for( var i=0; i<fullNames.length;i++){
// document.write(i+" "+fullNames[i]+"<br>");
// }