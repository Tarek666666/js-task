


/*
Task 1- create a file and name it 'app.js' and type "Hello World" 5 times 
*/

for ( i = 1 ; i <= 5 ; i = i + 1) {

    console.log("welcome world")

}

/*
3- Declare a variable z and assign the number 7.25 to it.
4- Write a console.log statement in which you log the value of z.
*/


let z = 7.25;

console.log( z );

/*
5- Declare another variable a that has the value of z but rounded to the nearest integer.
6- Write a console.log statement in which you log the value of a.
*/

let a = Math.round( z );

console.log( a );


/*
7- So now we have z and a find a way to compare the two values and store the highest of the two in a new variable.
8- Write a console.log statement in which you log the value of the highest value.
*/

let x ;

if ( z <= a ) {


    let x =  a;
    console.log(a)

} else {

    let x = z;
    console.log(z)
}

/* 7 - 8 seconed silotuin 


let x = Math.max( z , a );

console.log(x);

*/




/*
9- Declare variable and assign to it an empty array. don't forget to make your variable name indicates that
   it contains more than 1 element like [items, players] instead of [item, player]
9.1- Add new items/player/names... to the existing array and add to it multiple names from the start and from the end.
10- Write a console.log statement that explains in words what you think the value of the array is.
*/


let topPlayers = [];


topPlayers.unshift("C.ronaldo " , " Messi");
topPlayers.push(" Pei-Pei" , " tahsen");


console.log(topPlayers);
console.log( "The best Players for this year are : " + topPlayers)


/*
12- Create a new variable with an array that has 3 of your favorite fruits, each in a different string.
      Make sure the name of the variables says something about what the variable contains.
*/


let myFavFruits =   [ 

                        "Watermelon",
                        "Banana",
                        "Apple"

                    ];




/*13- Declare 4 variables: 2 must be strings and 2 must be objects 
 15- Find out how to check the type of a variable*/


let myCar =   "Volkswagen",

    myAdress = "Noordwjik",

    myFullName =    {
                        firstName : "Tarek",
                        lastName  : "Aljabr"

                    },

    myCarinfo  =    {

                        model : "jetta",
                        color : "black"

                    };
                    


 console.log( typeof(myFullName) + " myCar" , typeof(myAdress) + " myAdress");
 console.log("====================");
 


 /*14- Create 6 conditional statements, where for each you check if the data type of one variable is the same as the other*/
                    
                    
if ( typeof(myCar) == typeof(myAdress)) {



    console.log(typeof(myCar) + " myCar " , typeof(myAdress) + " myAdress");
    console.log("Yes the types are the same!!!");

} else if ( typeof(myCar) == typeof(myFullName)) {


    console.log(typeof(myCar) + " myCar " , typeof(myFullName) + " myFullName");
    console.log("Yes the types are the same!!!");

}

else if ( typeof(myCar) == typeof(myCarinfo)) {


    console.log(typeof(myCar) + " myCar " , typeof(myCarinfo) + " myAdress");
    console.log("Yes the types are the same!!!");

}


else if ( typeof(myAdress) == typeof(myFullName)) {

    console.log( typeof(myAdress) + " myAdress" , typeof(myFullName) + " myFullName");
    console.log ( "yes the types are the same !! ")
}

else if ( typeof(myAdress) == typeof(myCarinfo)) {

    console.log( typeof(myAdress) + " myAdress" , typeof(myCarinfo) + " myCarinfo");
    console.log ( "yes the types are the same !! ")
}



else if ( typeof(myFullName) == typeof(myCarinfo)) {

    console.log( typeof(myFullName) + " myFullName" , typeof(myCarinfo) + " myCarinfo");
    console.log ( "yes the types are the same !! ")
}




else {

    console.log(" The types are not the same !! ")
};



/* 16- Write 2 console.log statements to log the type of 2 variables, each with a different data type */



console.log( "the type of data is : " + typeof(myCar) , ", the type of data is : " + typeof(myCarinfo) );


/* 17- Now compare the types of your different variables with one another */
/* 18- Log [They are not same...] when the types are different */

switch ( typeof(myCar) === typeof(myCarinfo) ) {


            case true : 
            
            
            
            console.log( "yes the are the same " + typeof(myCarinfo) , typeof(myCar));

            break;

            case false : 

            console.log( "No they are not the same !!!! " + typeof(myCarinfo) , typeof(myCar));

            break;

}

/* 19- Declare 2 variables, that each hold an array. The first array should have 4 items, the second 7 items
   20- Find out how to get the length of each array. Write a console.log statement that shows the length of each array */



    let myTeam =    [ 
                        "Khaled" ,
                        "Hasan" ,
                        "Ahmad" ,
                        "Samer" 
                              
                    ],


        otherTeam = [
                        "Malek",
                        "Murad",
                        "Loe",
                        "Adnan",
                        "Subhi",
                        "Jalal",
                        "Tarek"
                    ];
                    
  console.log( " The lenght of myTeam object is : " + myTeam.length + " The lenght of otherTeam object is : "  , otherTeam.length ) ;
  
  
  /* 21- Remove the comma from this string "Hi,I,am,really,happy,to,learn,new,skills,related,to,javascript"
     22- Add it to your file and log the output to your console
     23- Find a way to remove the commas from the string and replace them with spaces. */

  let str = "Hi,I,am,really,happy,to,learn,new,skills,related,to,javascript",
      newStr = str.split(",").join(" ");              
                    
      console.log(newStr);
    
      /////// out put  /////   Hi I am really happy to learn new skills related to javascript 

      /*  
      24- Create a for loop, that iterates from 0 to 25
      25- Create a conditional statement that checks if the value of the counter variable is odd or even
      26- If it's odd, log to the console The number [PUT_NUMBER_HERE] is odd!.
      27- If it's even, log to the console The number [PUT_NUMBER_HERE] is even!.  
      */


 let n;

for ( n = 0; n <= 25 ; n = n + 1) {

    if ( n  % 2 == 0 && n > 0 ) {

        let res = [ n ]
        console.log(   "[" + n + "]" + " is even!" );
        
    }
        else if ( n  % 2 !== 0 && n > 0 ) {

            console.log(   "[" + n + "]"   + " is odd!" );      
        }



    console.log(   n  );


    
}


/* 28- Declare a variable that contains an empty object with a clear name
   29- Give the object 5 properties [name, age, study, zipcode, address], don't forget to make [address] contains more than one attribute 
   30- log each property out separately, using a loop (for, while or do/while) */

let partner = {};

    partner = {

                    name : "Tarek",
                    age  : "30",
                    study : "law" ,
                    zipcode : "0031",
                    adress : ["Noordwijk" , "zuid-holland"]

              };
              
            
              for ( let prop of Object.keys(partner)) {


                console.log(prop + " : ", partner[prop])

              }
            
              console.log(partner);

  /*31- Declare a variable that holds an array of 3 objects, where each object describes a book and has properties for the title (string), author (string), and alreadyRead (boolean indicating if you read it yet).
   32- Loop through the array of books.
   33- For each book, log the book title and book author like so: "Game Of Thrones by J.R.R. Martin".*/


   let myBooks = [ 

                    { theTitle : "Dark-knight",
                      author   : "Mark",
                      readed   : true  
                    },

                    {
                      theTitle : "lord-of-the-rings",
                      author   : "timon",
                      readed   : false  
                    },

                    {
                      theTitle : "War-craft",
                      author   : "jon",
                      readed   : true  
                    }


                 ];


                 for ( let inf of myBooks) {


                    console.log(inf.theTitle + ", by Mr : " , inf.author);
                    

                 
            
                 }

                   
                  /*34- Create a conditional statement to change the log depending on whether you read it yet or not. If you read it,
                  log a string like You already read "The Hobbit" right after the log of the book details*/
                  /*35- If you haven't read it log a string like You still need to read "The Lord of the Rings"*/

                 for ( let inf2 of myBooks ) {
                            
                    if (inf2.readed == true) {

                        console.log( inf2.theTitle + " by : " , inf2.author + " ." ,    "you have already readed this book!!!!")
                        
                    } else {
                              console.log( inf2.theTitle + " by : " , inf2.author + " ." , " no but you need to read this book")
                        
                    }

                       };

                    
                       
                    /*36- create an array with name [listOfPlayers] and add to it three players from the start of the array and two from the end                                   
                    */

                       let listOfPlayers2 = [];
                           listOfPlayers2.unshift("kaka" , "carlos" , "kafu");
                           listOfPlayers2.push( "messi" , "raul");


                    /*  37- remove 2 players */     

                           listOfPlayers2.shift(); 
                           listOfPlayers2.pop(); 

                    /*   38- add from the start alos two players  */   

                            listOfPlayers2.unshift("santos" , "ronaldo"); 
                            console.log(listOfPlayers2);


                    /*  39- split the array to two arrays and try to add new player to the second array then concatenate them then log the result to the console  */
                    
                    
                          let shortList =   listOfPlayers2.slice(0 , 2);
                              longList  =   listOfPlayers2.slice(2); 
                              longList.push("maradona");
                              addedList = longList.concat(shortList);
                                


                       
                       console.log(shortList);
                       console.log(longList);
                       console.log(addedList);



                       /* 40- iterate the array by using (for of and general for "the old way" ) */

                       for ( let players of addedList) {

                            console.log(players);

                       }

                       /* old way */

                       for (let f = 0 ; f <= addedList.length ; f++) {

                 
                            console.log(addedList[f]);




                       };



                
                

                

                 

                 

            