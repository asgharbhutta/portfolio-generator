const fs = require('fs');
const generatePage = require('./src/page-template.js');
const profileDataArgs = process.argv.slice(2);
const [name, github] = profileDataArgs; //matches 1 to 1 using index name = [0] which comes from command line input

// var commandLineArgs = process.argv;
// console.log(process.argv)


// process.argv[1];
// console.log(process.argv[1]);


  fs.writeFile('index.html', generatePage(name, github), err => {
    if (err) throw err;
  
    console.log('Portfolio complete! Check out index.html to see the output!');
  });




// console.log(profileDataArgs);

// const printProfileData = profileDataArr => { //why no brackets around profileDataArr - only 1 argument is being passed
//         // This...
//         // for (let i = 0; i < profileDataArr.length; i += 1) {
//         //   console.log(profileDataArr[i]);
//         // }
      
//         console.log('================');
      
//         // Is the same as this...
//         profileDataArr.forEach((profileItem) => {
//           console.log(profileItem)
//         });
//       };

// printProfileData(profileDataArgs);


// // Using function expression syntax
// const addNums = function(numOne, numTwo) {
//     return numOne + numTwo;
//   };
  
//   // Using new arrow function syntax
// //   const addNums = (numOne, numTwo) => {
// //     return numOne + numTwo;
// //   };