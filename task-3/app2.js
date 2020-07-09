/* 3 -- Add a script tag to the bottom of the HTML body.
-- (In the JavaScript) Change the body tag's style so it has a font-family of "Arial, sans-serif".
-- (In the JavaScript) Replace each of the spans (nickname, fav-player, nationality) with your own story information.
-- ierate through each li and change the class to "list-item".
-- Add a link tag to link your style file [style.css] that sets a rule for .list-item to make the color crimson.
-- Create a new img element and set its src attribute to a picture of you and append it to the body
-- create a bold tag to tell the reader that these data describe your story information by saying [some message.....]*/


const body = document.querySelector('body');

body.style.fontFamily = "Arial, sans-serif";

const nickNameSpan = document.getElementById('nickname');
const favPlayer =    document.getElementById('fav-player');
const nationality =  document.getElementById('nationality');

nickNameSpan.innerText = ' Tarek Aljabr';
favPlayer.innerText =  ' Leonel Messi';
nationality.innerText = 'Syrian'


const allList = document.querySelectorAll('li');

for ( let list of allList){


    list.className = ('list-item')

    // or list.classList.add('list-item')
};


const myImg = document.createElement('img');
      myImg.src = 'https://2cbo9t18u0q53glcj8gi6cx1-wpengine.netdna-ssl.com/wp-content/uploads/sites/15/2020/01/google.jpg';
      myImg.style.width = '200px'
      myImg.style.height = '200px'
      body.appendChild(myImg)

const myBold = document.createElement('b');
      myBold.innerText = 'This is my story bla bla bla ............';
      
      body.appendChild(myBold)


/* 4- Create a basic HTML file with any elements you deterine if you can get any benfits from them and include the script tag to your file[app.js]
-- try to fetch the current time in this format [hh:mm:ss] => [hour: min: sec]. hint: you need to use google to check what the correct function is 
-- use this function [setInterval()] to make sure the time stays current .. hint: you need to use google or you can ask me once you give up..
-- check how to run the function when you load the page..*/


function timer(){

    const theDate = new Date();

    const time = theDate.toLocaleTimeString();
    
    document.getElementById('time-para').innerHTML = time;

}

setInterval(timer , 1000);

/* 5- create any html page[index.html] and add this tag to your file in static way [in your html without js, normal adding] 
 -- this is the tag <img style="position:absolute;" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4621/javascript.png" /> 
 -- create a variable to store the img reference 
 -- Change the style of the img to have a "left" of "0px", so that it starts at the left hand of the screens. [it's already absolute]
 -- Create a function called moveJS() that moves the img 20 pixels to the right of where it started, by changing the "left" style property.*/


const movingImg = document.querySelector('img');


movingImg.style.left = '0px';
movingImg.style.top = '500px';


function moveJs(el){

    const currentPosition = parseInt(el.style.left);

    el.style.left =  currentPosition + 20 + 'px';                     // so everytime we call the function it moves 20px to the right !!!

};

moveJs(movingImg);



/* 6- I have this varaible, str = '1111111111111111';
-- convert the content of str to an array 
-- use reduce to calcualte all the numbers
-- print the result in a clear sentence */


const str = '1111111111111111';

const newStr = str.split('');

console.log(newStr)


let sumRes = newStr.reduce((x,y) => {

    let num = parseInt(x);
    let num2 = parseInt(y);

    return num + num2;
});

console.log( 'the result of sum all the numbers is : ' + sumRes)