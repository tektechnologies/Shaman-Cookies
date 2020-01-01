'use strict';
//console.log('Hello from App JS!');

//https://stackoverflow.com/questions/8228281/what-is-the-function-construct-in-javascript
/*The most widely accepted way to tell the parser to expect
 a function expression is just to wrap it in parens, because 
 in JavaScript, parens can’t contain statements. 
 At this point, when the parser encounters the function keyword, 
 it knows to parse it as a function expression and
 not a function declaration.
*/

//The below is an IFFE - 
// It executes immediately after it’s created.

(function createHomePage (){
  var homePage = document.getElementById('homePage');
  var h1 = document.createElement('h1');
  var img = document.createElement('img');
  var mainContent = document.createElement('p');
  var adminInfo = document.createElement('section');
  var storeHours = document.createElement('section');
  var hoursTitle = document.createElement('h3');
  var dailyHours = document.createElement('p');
  var storeLocations = document.createElement('section');
  //Cookie Store Data For Home Page.
  var cookieStores = [
    {
      locationName: '1st and Pike',
      address: '1st Ave & Pike St'
    },
    {
      locationName: 'SeaTac Airport',
      address: '17801 International Blvd'
    },
    {
      locationName: 'Code Fellows',
      address: 'Denny Way Park'
    },
    {
      locationName: 'Belltown',
      address: 'Street Vendor Cart'
    },
    {
      locationName: 'Redmond',
      address: '101 North 5th Ave.'
    },
  ];

  // Store HTML content and styling
  //Index Page Images
  img.src = 'images/salmon.png';
  img.alt = 'Picture of Cookie';

  // Index Page Text Content 
  h1.textContent = 'Shaman Grocer\'s Cookies';
  mainContent.textContent = 'Shaman Grocer\'s Cookies is the thing we call the global market! We combine two of Earth\'s favorite things: Magic and Cookies. Our mission is to deliver fresh and innovative food in a casual and familiar atmosphere. Give us a call at 1-800-SHA-MANN to place your order today!';
  hoursTitle.textContent = 'Location Hours';
  dailyHours.textContent = '6am to 10pm Everyday';

  //Index Page Styling 
  //h1.className = 'company-name';
  //img.className = '';
  //mainContent.className = '';
  //adminInfo.className = '';
  //storeHours.className = '';
  //hoursTitle.className = '';
  //dailyHours.className = '';
  //storeLocations.className = '';

  //Append htmls to the main by way of homePage Id

  homePage.appendChild(img);
  homePage.appendChild(h1);




}());