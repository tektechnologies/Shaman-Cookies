'use strict';
var hours=['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];
var cookiesTotalHour = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];


function footerHourlyStoreTotals(){


  var cookieTotal = 0;
  // console.log('CT',cookieTotal);

  var tFoot = document.getElementById('tableFooter');
  tFoot.innerHTML = '';
  var tr = document.createElement('tr');
  tFoot.appendChild(tr);

  var tdTitle = document.createElement('td');
  tdTitle.textContent = 'Totals';
  tr.appendChild(tdTitle);



  for(var i = 0; i < cookiesTotalHour.length; i++){
    console.log('array totals',cookiesTotalHour);
    var cookiesForThisHour = cookiesTotalHour[i];
    //////
    console.log('a',cookiesForThisHour);
    cookieTotal += cookiesForThisHour;
    console.log('final cookies total adding up:', 'each hour total',cookiesTotalHour[i], 'final num',cookieTotal);
    var cookieHourlyTotals = document.createElement('td');
    cookieHourlyTotals.textContent = cookiesForThisHour;
    tr.appendChild(cookieHourlyTotals);
  }
  var cookieTotals = document.createElement('td');
  cookieTotals.textContent = cookieTotal;
  tr.appendChild(cookieTotals);
}

function ShamanCookieStores( minCustomers, maxCustomers, averageSales, locationName){
  if (typeof this === 'undefined') { console.error('Cookie is a constructor! Use new!'); return; }
  if (arguments.length < 4) { console.error('minCustomers, maxCustomers, averageSales, name are required!'); }

  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.averageSales = averageSales;
  this.locationName = locationName;
  this.cookiesSold = [];

  // Run our cookies-per-hour simulation!
  this.numOfCookiesPerHour();

  // Add this new store to the catalog
  ShamanCookieStores.all.push(this);
}

// Add store to list of all stores.
ShamanCookieStores.all = [];



//this runs the number of cookies per hour
ShamanCookieStores.prototype.numOfCookiesPerHour = function() {
  for(var i=0; i< hours.length; i++){
    this.cookiesSold[i]= Math.floor(this.numOfCustPerHour() * this.averageSales);
  }
};

ShamanCookieStores.prototype.numOfCustPerHour = function() {
  return Math.ceil(Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers);
};



//Prototype  to string that returns location name and average sales
ShamanCookieStores.prototype.render = function () {


  
  // Let's also count total cookies
  var cookieTotal = 0;
  // Find parent <tbody> for this location by id
  var tbody = document.getElementById('storeData');
  var tr = document.createElement('tr');
  tbody.appendChild(tr);
  /////////////////////////////////////////////////
  var tdLocationName = document.createElement('td');
  tdLocationName.textContent = this.locationName;
  tr.appendChild(tdLocationName);
  //////////////////////////////////////////

  // For each hour that the store is open...
  for(var i = 0; i < hours.length; i++){


    ////////////from our constructor function array
    //we access each cookie total at each hour for each store
    var cookiesForThisHour = this.cookiesSold[i];
    //lays out the totals for each hour in the table
    console.log('each cookie hr total:',cookiesForThisHour);
    ///////////////////////////////

    //access our global array and add the cookie total for that hour
    cookiesTotalHour[i] += cookiesForThisHour;
    console.log('each of our hour totals added to the column total',cookiesTotalHour[i], 'first column adding up: ',cookiesTotalHour[0],'second column adding up: ',cookiesTotalHour[1]);


    cookieTotal += cookiesForThisHour;
    console.log('final store total for the day', cookieTotal);










    var cookieHourlyData = document.createElement('td');
    cookieHourlyData.textContent = cookiesForThisHour;
    tr.appendChild(cookieHourlyData);
  }

  var cookieTotals = document.createElement('td');
  cookieTotals.textContent = cookieTotal;
  tr.appendChild(cookieTotals);

};





ShamanCookieStores.renderAll = function() {
  // First, empty out the existing customer list
  var tbody = document.getElementById('storeData');
  tbody.innerHTML = '';
  cookiesTotalHour = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  // Then, render each Store
  for (var i = 0; i < ShamanCookieStores.all.length; i++) {
    ShamanCookieStores.all[i].render();
  }
  footerHourlyStoreTotals();
};








var iowaCity = new ShamanCookieStores(23,65,6.3,'Iowa City');
var cedarRapids = new ShamanCookieStores(3,24,1.2,'Cedar Rapids');
var boulderColo = new ShamanCookieStores(11,38,3.7,'Boulder Colo.');
var eugeneOregon = new ShamanCookieStores(20,38,2.3,'Eugene Oregon');
var oxnardCali = new ShamanCookieStores(2, 16, 4.6,'Point Break');

console.log(iowaCity,cedarRapids,boulderColo,eugeneOregon,oxnardCali);
//create list items, create the objects identify html ul elements by id.
ShamanCookieStores.renderAll();

function handleSubmit(event) {
  event.preventDefault();
  var minCustomers = event.target.minCustomers.value;
  var maxCustomers = event.target.maxCustomers.value;
  var averageSales = event.target.averageSales.value;
  var locationName = event.target.locationName.value;

  var newStore = new ShamanCookieStores(minCustomers, maxCustomers, averageSales, locationName);
  console.log(newStore);

  ShamanCookieStores.renderAll();
}
var form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);
