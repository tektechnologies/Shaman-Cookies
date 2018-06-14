'use srict';


function ShamanCookieStores( minCustomers, maxCustomers, averageSales, locationName){
  if (typeof this === 'undefined') { console.error('Cookie is a constructor! Use new!'); return; }
  if (arguments.length < 4) { console.error('minCustomers, maxCustomers, averageSales, name are required!'); }

  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.averageSales = averageSales;
  this.locationName = locationName;
  this.cookiesSold = [];

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
}

var iowaCity = new ShamanCookieStores(23,65,6.3,'Iowa City');
var cedarRapids = new ShamanCookieStores(3,24,1.2,'Cedar Rapids');
var boulderColo = new ShamanCookieStores(11,38,3.7,'Boulder Colo.');
var eugeneOregon = new ShamanCookieStores(20,38,2.3,'Eugene Oregon');
var oxnardCali = new ShamanCookieStores(2, 16, 4.6,'Point Break');
var hours=['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];


function displayForecastedLocationData(location){
  // Run our cookies-per-hour simulation!
  location.numOfCookiesPerHour();
  // Let's also count total cookies
  var cookieTotal = 0;
  // Find parent <tbody> for this location by id
  var tbody = document.querySelector('tbody');
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

    cookieTotal = cookieTotal + cookiesForThisHour;
    console.log({ cookiesForThisHour, cookieTotal });

    // Build string to display in the <li>
    // var listString=hours[i] + ': ' + cookiesForThisHour + ' cookies.';

    // Create <li> with that string, and add to <ul>
    var cookieHourlyData = document.createElement('td');
    cookieHourlyData.textContent = cookiesForThisHour;
    tr.appendChild(cookieHourlyData);
  }
  var cookieTotals = document.createElement('td');
  cookieTotals.textContent = cookieTotal;
  tr.appendChild(cookieTotals);
}
//create list items, create the objects identify html ul elements by id.
displayForecastedLocationData(iowaCity,'hawkeyes');
displayForecastedLocationData(cedarRapids,'kernels');
displayForecastedLocationData(boulderColo,'buffalos');
displayForecastedLocationData(eugeneOregon,'glassArtist');
displayForecastedLocationData(oxnardCali,'pointBreak');
