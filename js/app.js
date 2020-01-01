'use strict';
//console.log('Hello from App JS!');

//https://stackoverflow.com/questions/8228281/what-is-the-function-construct-in-javascript

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

  // Store HTML content and styling.

h1.className = 'company-name';
h1.textContent = 'Shaman Grocer\'s Cookies';

img.className = '';
img.src = 'images/salmon.png';
img.alt = 'Picture of Cookie';















}());