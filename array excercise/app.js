// array excercise


// q1: Declare an empty array using JS literal notation to store student names in future.
// solution
// let students = []
// console.log(students)


    // question 2
    // Declare and initialize a strings array.
// let fruits = ['apple', 'banana', 'mango', 'kiwi']
// console.log(fruits);
// question 3
//    Declare and initialize a numbers array
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(numbers);
// question 4
// Declare and initialize a boolean array
// let boolarry = [true, false, true, false]
// console.log(boolarry);
// question 5
// Declare and initialize a mixed array.
// let mixedarr = ["hello", 1, 2, true, "bye"]
// console.log(mixedarr);
// questions 6
// Declare and Initialize an array and store available mobile networks in Pakistan.
// let networks = ['zong', 'jazz', 'ufone', 'telenor']
// console.log(networks);
// questions 7
// Declare and Initialize an array and store available education
// qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD). Show the listed qualifications in your browser
// let education = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil", "PhD"]
// for (i = 1; i < education.length; i++){
//     console.log(`${i} : ${education[i]}`);
// }
// question no 08:
// Declare and initialize an empty array to store top movies of
// 2015. Add movies one by one in an array. Display the elements
// & length of array in your browser. (Use array’s length method)
// let movies = ['Age of electron', 'kissingboth', 'insideout', 'anything but you']
// for (i = 0; i < movies.length; i++){
//     console.log(`${i} : ${movies[i]}`);
//     console.log(`the length of movies is ${movies.length}`)
// }

// question no 09:
// Declare and Initialize an array with your favorite cars. Show
// a. First index of the array
// b. Car at first index of the array
// c.Last index of the array
// d. Car at last index of the array
// let favcars = ['AUDI', 'VOLVO', 'FORD', 'LAMBORGHINI']
// console.log(favcars.toLocaleString());
// a
// console.log(`First index of array is 0`)
// console.log(`Car at first index is ${favcars[0]}`)
// console.log(`Last index of array is 3`)
// console.log(`Car at last index is ${favcars[3]}`)

// question no 10
// . Write a program to store 3 student names in an array. Take another array to store score of these three students. Assume
// that total marks are 500 for each student, display the scores & percentages of students

// let student = ["Afshan", "Ali", "Laiba"];
// let scores = [320, 230, 480];
// let totalmarks = 500;

// for (let i = 0; i < student.length; i++) {
//     let percentage = (scores[i] * 100) / totalmarks;
//     console.log(`Score of ${student[i]} is ${scores[i]}. Percentage: ${percentage}%`);
// }

// 12. Initialize an array with color names. Display the array
// elements in your browser.
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end &
// add that color to the end of the array. Display the updated
// array in your browser.
// c. Add two more color to the beginning of the array. Display
// the updated array in your browser.
// d. Delete the first color in the array. Display the updated
// array in your browser.
// e. Delete the last color in the array. Display the updated
// array in your browser.
// f. Ask the user at which index he/she wants to add a color &
// color name. Then add the color to desired position/index.
// . Display the updated array in your browser.
// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.

// a solution:
// Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array. Display the updated array in your browser.
// let usercolour = prompt("enter the colour name")
// let colours = []

// colours.push(usercolour);
// console.log(colours);

// a done
// / b. Ask the user what color he/she wants to add to the end & // add that color to the end of the array. Display the updated // array in your browser.
// let usercolour = prompt("enter the colour name")
// let colours = ['red', 'blue', 'orange','green', 'yellow']
// console.log(colours);
// colours.push(usercolour)
// console.log(colours)
// c. Add two more color to the beginning of the array. Display
// the updated array in your browser.

// colours.unshift(usercolour)
// console.log(colours);
// d. Delete the first color in the array. Display the updated
// array in your browser.
// colours.shift(colours[0]);
// e. Delete the last color in the array. Display the updated// array in your browser.
// colours.pop(colours[0])
// console.log(colours);
// f. Ask the user at which index he/she wants to add a color & // color name. Then add the color to desired position/index. // . Display the updated array in your browser.
// phele index /position dete pher batte knse delete krne and then new
// let usercolour = prompt("enter the colour name")
// let colours = ['red', 'blue', 'orange', 'green', 'yellow']
// console.log(colours);
// let index = +prompt("enter the index no")
// colours.splice(index,0,usercolour)
// console.log(colours);
// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.
// let usercolour = prompt("enter the colour name")
// let colours = ['red', 'blue', 'orange', 'green', 'yellow']
// console.log(colours);
// let index = +prompt("enter the index no")
// let deletenums = +prompt("enter how many to delete")
// colours.splice(index,deletenums,)
// console.log(colours);

// Q: Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities array
// let cities = ['lahore', 'karachi', 'islamabad', 'faislabad', 'multan']
// console.log(cities);
// let selectedcities = cities.slice(2, 4);
// console.log(selectedcities);

// Write a program to create a single string from the below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];(Use array’s join method)
// let myarr = ['This', 'is', 'my', 'cat'];
// console.log(myarr);
// let text =myarr.join()
// console.log(text);
// Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they were
// stored. (FIFO-First In First Out)
// let fifoarray = []
// fifoarray.push('OUT:keyboard')
// fifoarray.push('OUT:monitor')
// fifoarray.push('OUT:mouse')
// fifoarray.push('OUT:cpu')
// for (i = 0; i < fifoarray.length; i++){
//     console.log(fifoarray[i])
// }
// Declare and initialize an empty multidimensional array.
// (Array of arrays)
// let arr = [[],[],[]]
// console.log(arr[0].push('APPLE'));
// console.log(arr[1].push('ORANGE'));
// console.log(arr[2].push('BANANA'));
// console.log(arr);
