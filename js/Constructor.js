'use srict';

function NewStore(minCustomers, maxCustomers, averageSales, locationName) {
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.averageSales = averageSales;
  this.locationName = locationName;
  // Add this new store to the catalog
  NewStore.all.push(this);
  console.log('All Stores', NewStore.all);
}

// Add store to list of all stores.
NewStore.all = [];
NewStore.renderAll = function() {
  // First, empty out the existing customer list
  var storesUL = document.getElementById('allStores');
  storesUL.innerHTML = '';
  console.log('Store list cleared!');
  // Then, render each Store
  for (var i = 0; i < NewStore.all.length; i++) {
    NewStore.all[i].render();
  }
};

NewStore.prototype.toString = function () {
  return this.locationName + ' (' + this.averageSales + ' Average Sales)';
};

NewStore.prototype.render = function() {
  var allStoresUL = document.getElementById('allStores');

  /*
  var li = document.createElement('li');
  li.textContent = this.toString();
  customersUL.appendChild(li);
  */
  appendNewElement('li', this.toString(), allStoresUL);
};

function appendNewElement(tagName, textContent, parent) {
  var el = document.createElement(tagName);
  el.textContent = textContent;
  parent.appendChild(el);
}




function handleSubmit(event) {
  event.preventDefault();

  console.log(event);

  var minCustomers = event.target.minCustomers.value;
  var maxCustomers = event.target.maxCustomers.value;
  var averageSales = event.target.averageSales.value;
  var locationName = event.target.locationName.value;



  var newStore = new NewStore(minCustomers, maxCustomers, averageSales, locationName);
  console.log(newStore);

  NewStore.renderAll();
}

var form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);


























function ShamanCookieStores( minCustomers, maxCustomers, averageSales, locationName){
  if (typeof this === 'undefined') { console.error('Cookie is a constructor! Use new!'); return; }
  if (arguments.length < 4) { console.error('minCustomers, maxCustomers, averageSales, name are required!'); }

  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.averageSales = averageSales;
  this.locationName = locationName;
  this.cookiesSold = [];
}

ShamanCookieStores.prototype.numOfCustPerHour = function() {
  return Math.ceil(Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers);
};
ShamanCookieStores.prototype.numOfCookiesPerHour = function() {
  for(var i=0; i< hours.length; i++){
    this.cookiesSold[i]= Math.floor(this.numOfCustPerHour() * this.averageSales);
  }
};
ShamanCookieStores.prototype.toString = function() {
  return this.name + '( ' + this.minCustomers + ' ' + this.maxCustomers + ' )';
};

var iowaCity = new ShamanCookieStores(23,65,6.3,'Iowa City');
var cedarRapids = new ShamanCookieStores(3,24,1.2,'Cedar Rapids');
var boulderColo = new ShamanCookieStores(11,38,3.7,'Boulder Colo.');
var eugeneOregon = new ShamanCookieStores(20,38,2.3,'Eugene Oregon');
var oxnardCali = new ShamanCookieStores(2, 16, 4.6,'Point Break');
var hours=['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];
var cookiesTotalHour = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

function displayForecastedLocationData(location){
  // Run our cookies-per-hour simulation!
  location.numOfCookiesPerHour();
  // Let's also count total cookies
  var cookieTotal = 0;
  // Find parent <tbody> for this location by id
  var tbody = document.getElementById('storeData');
  var tr = document.createElement('tr');
  tbody.appendChild(tr);
  /////////////////////////////////////////////////
  var tdLocationName = document.createElement('td');
  tdLocationName.textContent = location.locationName;
  tr.appendChild(tdLocationName);
  //////////////////////////////////////////

  // For each hour that the store is open...
  for(var i = 0; i < hours.length; i++){
    var cookiesForThisHour = location.cookiesSold[i];
    cookiesTotalHour[i] += cookiesForThisHour;
    cookieTotal += cookiesForThisHour;

    var cookieHourlyData = document.createElement('td');
    cookieHourlyData.textContent = cookiesForThisHour;
    tr.appendChild(cookieHourlyData);
  }
  var cookieTotals = document.createElement('td');
  cookieTotals.textContent = cookieTotal;
  tr.appendChild(cookieTotals);
}
//create list items, create the objects identify html ul elements by id.
displayForecastedLocationData(iowaCity);
displayForecastedLocationData(cedarRapids);
displayForecastedLocationData(boulderColo);
displayForecastedLocationData(eugeneOregon);
displayForecastedLocationData(oxnardCali);

function footerHourlyStoreTotals(){
  var cookieTotal = 0;
  var tFoot = document.getElementById('tableFooter');
  var tr = document.createElement('tr');
  tFoot.appendChild(tr);

  var tdTitle = document.createElement('td');
  tdTitle.textContent = 'Totals';
  tr.appendChild(tdTitle);



  for(var i = 0; i < cookiesTotalHour.length; i++){
    var cookiesForThisHour = cookiesTotalHour[i];
    cookieTotal += cookiesForThisHour;
    var cookieHourlyTotals = document.createElement('td');
    cookieHourlyTotals.textContent = cookiesForThisHour;
    tr.appendChild(cookieHourlyTotals);
  }
  var cookieTotals = document.createElement('td');
  cookieTotals.textContent = cookieTotal;
  tr.appendChild(cookieTotals);
}
footerHourlyStoreTotals();