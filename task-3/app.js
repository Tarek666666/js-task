/*0- I have an img and it's in the attachments, try to destructure the entrie file by exposing all the attributes one by one 
-- try to express the output by saying some clear sentences which make sense like "Hello guys, I'm [username]" etc....
^^ you can see the file in the attachments of this task ^^*/


const obj  = {
                        'id' : 1,
                        'name' : 'Lenne Graham',
                        'username' : 'bert',
                        'email' : 'Sincere@april.biz',
                        'address' :  {
                                            street : { street_one : 'Kulas Light',
                                                        street_tow : 'Kampala'
                                                      },
                                            
                                            suite : 'apt. 556',
                                            city  : 'Gwenborogh',
                                            zipcode : '92988-3587',

                                            geo    : {  lat : '-37.3195',
                                                        lng : '414251'
                                                     }                                           

                                      },

                        'phone' : '1-770-369-58-523-',

                        'website' : 'hilder.org',

                        'company' : {
                                        'name' : 'Romaguera-crona',
                                        'bs'   : 'harnes real-time'
                                    }                
                };

             
            function desObj(obj){

                const { id , name , username , email , address , phone , website , company } = obj;
                const { street , suite , city , zipcode , geo } = address;
                const { street_one , street_tow } = street;
                const { name : companyName , bs  } = company;
                      
             console.log( ' Hello guyz i"m ID : ' + id +  "\n" + "\n" +
                          ' Hello guyz i"m Name : ' + name  +  "\n" +    "\n" +
                          ' Hello guyz i"m Username : ' + username  +  "\n" +  "\n" +
                          ' Hello guyz i"m Email : ' + email  +  "\n" +  "\n" +
                          ' Hello guyz i"m Address (street 1 ) : ' + street_one  +  "\n" +  "\n" +
                          ' Hello guyz i"m Address (street 2 ) : ' + street_tow  +  "\n" + "\n" +
                          ' Hello guyz i"m Address (suite) : ' + suite  +  "\n" +  "\n" +
                          ' Hello guyz i"m Address (city) : ' + city  +  "\n" +  "\n" +
                          ' Hello guyz i"m Address (zipcode) : ' + zipcode  +  "\n" +  "\n" +
                          ' Hello guyz i"m Address (geo) : ' + geo  +  "\n" +  "\n" +
                          ' Hello guyz i"m Phone : ' + phone  +  "\n" +  "\n" +
                          ' Hello guyz i"m Website : ' + website  +  "\n" +  "\n" +
                          ' Hello guyz i"m company ( companyName) : ' + companyName  +  "\n" +  "\n" +
                          ' Hello guyz i"m company ( Bs) : ' + bs  +  "\n"   
                                                   
                          )           
            };

            desObj(obj);


/* 1- I want to to expose my books inside my webpage
-- const favBooks = [
  {
    title: 'Head First Java, 2nd Edition',
    author: 'Kathy Sierra',
    hasRead: true,
	price: 44
  },
  {
    title: 'Head First Design Patterns: A Brain-Friendly Guide',
    author: 'Bert Bates',
    hasRead: false,
	price: 22.40
  },
  {
    title: 'Head First Object-Oriented Analysis and Design',
    author: 'Gary Pollice',
    hasRead: false,
	price: 40.70
  },
  {
    title: 'Introduction to Java Programming and Data Structures',
    author: 'Liang Y.',
    hasRead: false,
	price: 60.29
  }
];
-- Iterate through the array of favBooks.
-- For each book, create a <p> element with the book title, author and append it to the page, add also a span which contains the price
-- You can use a ul and li to display all the favBooks
-- Add an <img> to each book that links to a URL of the book cover. [you can get the links from google]
-- Change the style of the book based on whether you have read it (green) or not (crimson).
// ********************************************************************************************************************************************/

const favBooks = [
    {
      title: 'Head First Java, 2nd Edition',
      author: 'Kathy Sierra',
      hasRead: true,
      price: 44,
      link : 'https://www.ideyatech.com/wp-content/uploads/2010/05/head-first-java/head-first-java.png',
      website : 'https://www.oreilly.com/library/view/head-first-java/0596009208/'
    },
    {
      title: 'Head First Design Patterns: A Brain-Friendly Guide',
      author: 'Bert Bates',
      hasRead: false,
      price: 22.40,
      link : 'https://images-na.ssl-images-amazon.com/images/I/61ZG-hATOeL._SX430_BO1,204,203,200_.jpg',
      website : 'https://www.amazon.com/Head-First-Design-Patterns-Brain-Friendly/dp/0596007124'
    },
    {
      title: 'Head First Object-Oriented Analysis and Design',
      author: 'Gary Pollice',
      hasRead: false,
      price: 40.70,
      link : 'https://m.media-amazon.com/images/I/51VW872boUL.jpg',
      website : 'https://www.amazon.com/Head-First-Object-Oriented-Analysis-Design/dp/0596008678'
    },
    {
      title: 'Introduction to Java Programming and Data Structures',
      author: 'Liang Y.',
      hasRead: true,
      price: 60.29,
      link : 'https://media.s-bol.com/y1KjJGQXAAP/550x691.jpg',
      website : 'https://www.bol.com/nl/f/introduction-to-java-programming-and-data-structures-comprehensive-version/9200000075317650/'
    }
  ];

  const myDiv = document.querySelector('div'); 
  const myList = document.createElement('ul');
  

  function creatPara(arr){

    for ( let book of arr){
      
        const myListItems = document.createElement('li');

                myDiv.appendChild(myList);
                myList.appendChild(myListItems)               
                myListItems.innerText = 'Title of the book : ' +  book.title ;

        const myPara = document.createElement('p');
        const myPrice = document.createElement('span');

                myPrice.innerText = 'The price of the book is : ' +  book.price + ' $';
                myListItems.appendChild(myPara);
                myPara.innerText = 'written by : ' + book.author ;
                myPara.appendChild(myPrice)
        
        const myLink = document.createElement('a');
                myLink.href = book.website;
                myLink.target = 'blank';       
                myPara.appendChild(myLink);

                const myImg = document.createElement('img');

                myImg.src = book.link;
                myLink.appendChild(myImg);
                myImg.style.width = '400px';
                myImg.style.height = '200px';

                if ( !book.hasRead) {
                    
                    myListItems.style.background = 'red';

                } else { myListItems.style.background = 'green';}

    }

  };

  creatPara(favBooks);