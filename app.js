var commandLineArgs = process.argv;
console.log(process.argv)


process.argv[1];
console.log(process.argv[1]);

const profileDataArgs = process.argv.slice(2, process.argv.length);
console.log(profileDataArgs);

const printProfileData = profileDataArr => { //why no brackets around profileDataArr - only 1 argument is being passed
        // This...
        // for (let i = 0; i < profileDataArr.length; i += 1) {
        //   console.log(profileDataArr[i]);
        // }
      
        console.log('================');
      
        // Is the same as this...
        profileDataArr.forEach((profileItem) => {
          console.log(profileItem)
        });
      };

printProfileData(profileDataArgs);


// // Using function expression syntax
// const addNums = function(numOne, numTwo) {
//     return numOne + numTwo;
//   };
  
//   // Using new arrow function syntax
// //   const addNums = (numOne, numTwo) => {
// //     return numOne + numTwo;
// //   };