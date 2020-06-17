/*  1- Write a function named [sayHi] and make it contains 1 argument: [your name] 
    2- Create 2 arrays inside the function and make the first array contains 10 elements, these elements are 10 different names 
                              and the second array contains the week days[Monday, ... Sunday]
    3- Write code that randomly selects a name and a day
    4- make the function return an output like [Hello name today is daya], hint: [name, day] are dynamic data
    5- call the function 5 times*/

    function sayHi(){
        
        let allNames = [ "Tarek" , "Samir" , "Ahmad" , "Ayman" , "Khaled" , "Loe" , "Sami" , "Murad" , "firas" , "saeed" ];
        let allDays  = [ "sunday" , "monday" ,"tuesday" ,"wedensday" ,"thursday" ,"friday" ,"saterday"];
        let randomName = allNames[Math.floor(Math.random() * allNames.length)];
        let randomDay = allDays[Math.floor(Math.random() * allDays.length)];   
        let finalRes =   " Hello " + randomName + " Today is : " + randomDay; 

                  console.log(finalRes);
                
                     };
  
    function call5Times(x) {

        for (i = 0; i < 5 ; i++){ 

                     x();      

        } 
    };
    call5Times(sayHi);
 
    /* 6- careate a function named [checkEvenOrAdd] and make it takes an array as argument
       7- loop through the array and print out the result after checking the odd and even numbers
       8- print this message ['This number [number] is odd/even'];
    */
    
    const allNumbers = [ 10 , 20 , 22 , 23 ,2512 , 29 , 50];

    function checkEvenOrOdd (arr) {

        arr.map((x) => { x % 2 == 0 ? console.log( "This number is even :" + x ) : console.log( "This number is Odd :" + x ) });

    };

    checkEvenOrOdd(allNumbers);
  
    /* 9- Create 4 arrays, numChildren, partnerNames, locations and jobs. Give each array 5 random string values that have to do with the name of the variable
       10- Write a function named getData().
       11- It takes 4 arguments: number of children (number), partner's name (string), geographic location (string), job title (string).
       12- Randomly select values from the arrays.
       13- Return a string: "You will be a [JOB_TITLE] in [LOCATION], married to [PARTNER_NAME] with [NUMBER_KIDS] kids."
       14- Call the function 4 times, by passing the arrays as the argument.
    */
    
    
    let numChildren = [ 1 , 4 , 2 , 7 , 5 ],
        partnerName = [ "Sami" , "Nuha" , "Khaled" , "Mohmamad" , "Nidal " ],
        locations   = [ "Syria" , "Germany" , "Netherlands" , "Sweden" , "italy" ],
        jobs        = [ "Laywer" , "programmer" , "teacher" , "baker" , "football player" ];
    
       function getData(arr1 , arr2 , arr3 , arr4){
    
                console.log("You will be a " + arr4[Math.floor(Math.random() * arr4.length)] + " in " + arr3[Math.floor(Math.random() * arr3.length)] + " married to "
                 + arr2[Math.floor(Math.random() * arr2.length)] + " with " + arr1[Math.floor(Math.random() * arr1.length)] + " Kids" );    
        };

       getData(numChildren , partnerName , locations , jobs);
       getData(numChildren , partnerName , locations , jobs);
       getData(numChildren , partnerName , locations , jobs);
       getData(numChildren , partnerName , locations , jobs);
        
    
        /* 15- Let's do some shopping and don't forget that we are going to do some cooking so our function name named makeFoods() and put in your mind that 
                        you don't have much money to buy 
                       so you want to be assure that you can buy more than 3 items and once you buy the fourth one then the first item will be dropped from the list
           16- Create an array called shoppingCart that holds these strings: "bananas" and "milk"
           17- make the function take one argument, it's string
           18- Add grocery item to shoppingCart. If the amount of items is more than 3 remove the first one in the array
           19- print out the items by listing out the items
           20- Return a string: "You bought [LIST_OF_GROCERY_ITEMS]!"
           21- Call the function 5 times, each time with a different string as the argument.
            // the Expected output
            makeFoods('chocolate'); // Returns "You bought bananas, milk, chocolate!" 

        */
    
   
    let shoppingCart = [ " Bananas ", " Milk "];
    
    function makeFoods(str){
    
        let basket = [].concat(shoppingCart).sort((a,b) => {return a - b});
        

        console.log(" You have already bought : ==> " + basket )


        if (shoppingCart.length <= 2){
    
            shoppingCart.push(str)
    
        } else {
            shoppingCart.push(str);
            shoppingCart.shift(str);

        };
    
        return "You have added this item : " + str ;
    
    }
    
    const order1 = makeFoods("Chocolate");
    console.log(order1);
    
    const order2 = makeFoods("Mango");
    console.log(order2);
    
    const order3 = makeFoods("Cola");
    console.log(order3);
    
    const order4 = makeFoods("Kiwi");
    console.log(order4);
    
    const order5 = makeFoods("cumcumer");
    console.log(order5);
    
   
    /* 2- write a function, called validateCreditNumber, that validates whether or not a credit card number is valid.
    23- Input must be 16 characters and All characters must be numbers
    24- At least two different numbers should be represented and the last number must be even
    25- The sum of all the numbers must be greater than 16
    --The following credit card numbers are valid: [9999777788880000] and [6666666666661666]
    --The following credit card numbers are invalid: [a92332119c011112 => invalid characters], [4444444444444444 => only one type of number], [1111111111111110 => sum less than 16]
    [6666666666666661 => odd final number]
    // Expected output
    validateCreditNumber('a92332119c011112'); // Returns "Invalid! The input a92332119c011112 should contain only numbers!
    validatecreditNumber('6666666666661666'); // Returns "Success! The input 6666666666661666 is a valid credit card number!*/

    let check = function validateCreditNumber(num){
    
        let lastChar = num.length -1;
        let fixedNum =  num.split("");
        let separetedChar = fixedNum.map(function(x) { return parseInt(x);});
        let hasMoreThan   = separetedChar.reduce( (x,y) => { return x == y}); ///// works only when creditnumber is 111111111111111 ====> 22222222222222 doesnt work ????
        let sumRes        = separetedChar.reduce((x,y) => { return x + y});

    if ( num.length <= 16 ) {
    
    
        console.log(" Invalid! : CreditNumber is too short!!!!!")
    } else if ( num[lastChar] % 2 !== 0 || num[lastChar] == 0){
    
    
        console.log(" Invalid! : The last number must be Even !!!");
    
    
    } else if ( isNaN(separetedChar.reduce((x,y) => x + y))   ){           // to prevent user using letters or symbols !!
    
    
        console.log(" Invalid! : You can Only Use Numbers !!!!! ")
    
    } else if ( sumRes < 16 ){
    
    
        console.log(" Invalid! : the Sum of all numbers must be greater than 16!!!")
    }
     else if ( hasMoreThan == true ){
    
    
        console.log(" it cant be the same number, should have at least 2 numbers!!!")
    }
      else ( console.log("Succes !!!!! =======> ( valid number ) "))
    
    };
    
    check("222222222222222222222222222222221");
    
    
    /* 26- create an array named [employees] with 5 objects, each object shoul contain [name, age, salary];
       27- do solme filtering by exposing the employees who their salaries are greater than 2000, it should return 3 objects from the the 5 which you created before
       28- print out the result like ["[name] is a rich man because his salary is [salary]"];
     */
    
    let employees = [  { name : "Tarek" , age : 30 , salary : 1800 } ,
                       { name : "Samer" , age : 20 , salary : 2800 } ,  
                       { name : "Ahmad" , age : 33 , salary : 1500 } ,
                       { name : "Ayman" , age : 19 , salary : 2300 } ,
                       { name : "malek" , age : 19 , salary : 2600 }                                  
    
    
    ];
    
    let highPayed = employees.filter(employee => employee.salary >= 2000);
    
    for ( let x of highPayed ){
    
    
        console.log( [x.name + " is a rich man , his salary is : " + x.salary])
        
        }
    
    
    
    /* 29- please note down what the difference is between map and foreach, please provie me an example if you can */
    
    
    let mapTest = employees.map(x => x );
    
    console.log(mapTest)
    
    /// result (5) [{…}, {…}, {…}, {…}, {…}] ///
    
    let forEachTest = employees.forEach(x => x );
    
    console.log(forEachTest)
    
    /// result undefind ///
    
    /*30- I have this array
    const votes = ['no', 'yes', 'yes', 'no', 'yes', 'yes', 'no', 'yes', 'yes','no', 'no', 'yes', 'no'];
    I want you to count how many [yes] and [no] values do we in the array by useing [reduce] function
    -- the output should be {yes: 7, no: 6};
    **hint: the initial value should be an empty object like this {};*/
    
   /*const votes = ['no','yes', 'yes', 'no', 'yes', 'yes', 'no', 'yes', 'yes','no', 'no', 'yes', 'no'];

   






/* 31- you have this array
const mondayTasks = [
  {
    name: 'Daily standup',
    duration: 30, // specified in minutes
  },
  {
    name: 'Feature discussion',
    duration: 120,
  },
  {
    name: 'Development time',
    duration: 240,
  },
  {
    name: 'Talk to different members from the product team',
    duration: 60,
  },
];
Let's assume your hourly rate is €20. How much would you earn on that day?
32- Write a program that finds out what your hourly rate on a Monday would be
33- Use the map array function to take out the duration time for each task.
34- Multiply each duration by a per-hour rate for billing and sum it all up.
-- Output a formatted Euro amount, rounded to Euro cents, e.g: €11.34
-- Make sure the program can be used on any array of objects that contain a duration property with a number value
****************************************************************************************
*/   
    
const mondayTasks = [
    {
      name: 'Daily standup',
      duration: 30, // specified in minutes
    },
    {
      name: 'Feature discussion',
      duration: 120,
    },
    {
      name: 'Development time',
      duration: 240,
    },
    {
      name: 'Talk to different members from the product team',
      duration: 60,
    },
  ];

  const dailySalary = function ( arr ){

        let workedTime = arr.map(function(x){return x.duration});
        let workedMinutes = workedTime.reduce((x,y) => x + y);
        let mondaySalary  =  workedMinutes / 60 * 20;
        let mondaySalaryRounden = mondaySalary.toFixed(2);

        console.log("On Monday you have worked : " + workedMinutes / 60 + " Hours , You earn " + mondaySalaryRounden + " €");

  };

  dailySalary(mondayTasks);

  /* 35- suppose you bought all these stuff 
     const electronicsBasket = ['Keyboard', 'Mouse', 'HardDrive', 'Mouse', 'CD', 'Charger', 'Mouse'];
-- Write a function with any specific name
-- Use the filter array function to take out the mouse
-- Output a string that says: "I bought these stuff and my basket, containing [array of mouses] !"*/

const electronicsBasket = ['Keyboard', 'Mouse', 'HardDrive', 'Mouse', 'CD', 'Charger', 'Mouse'];

function addedMouses(arr){

    let boughtMouses = arr.filter((x) => x.includes("Mouse"));
    console.log(" I bought these stuff and my basket, containing : " + boughtMouses)



};
addedMouses( electronicsBasket);


/*===========================================>>>*/




