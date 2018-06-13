"use srict";

var iowaCity={
  minCustomers: 23,
  maxCustomers: 65,
  averageSales: 6.3,
  hourlyArray:[],
  numOfCust: function(){
    return Math.ceil(Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers);
  },
  cookiesPurchased: function(){
    for(var i=0; i<15; i++){
      this.hourlyArray[i]= Math.floor(this.numOfCust() * this.averageSales);
    }
  },
};

var cedarRapids={
  minCustomers: 3,
  maxCustomers: 24,
  averageSales: 1.2,
  hourlyArray:[],
  numOfCust: function(){
    return Math.ceil(Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers);
  },
  cookiesPurchased: function(){
    for(var i=0; i<15; i++){
      this.hourlyArray[i]= Math.floor(this.numOfCust() * this.averageSales);
    }
  },
};

var boulderColo={
  minCustomers: 11,
  maxCustomers: 38,
  averageSales: 3.7,
  hourlyArray:[],
  numOfCust: function(){
    return Math.ceil(Math.random()*(this.maxCustomers - this.minCustomers) + this.minCustomers);
  },
  cookiesPurchased: function(){
    for(var i=0; i<15; i++){
      this.hourlyArray[i]= Math.floor(this.numOfCust() * this.averageSales);
    }
  },
};

var eugeneOregon={
  minCustomers: 20,
  maxCustomers: 38,
  averageSales: 2.3,
  hourlyArray:[],
  numOfCust: function(){
    return Math.ceil(Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers);
  },
  cookiesPurchased: function(){
    for(var i=0; i<15; i++){
      this.hourlyArray[i]= Math.floor(this.numOfCust() * this.averageSales);
    }
  },
};

var oxnardCali={
  minCustomers: 2,
  maxCustomers: 16,
  averageSales: 4.6,
  hourlyArray:[],
  numOfCust: function(){
    return Math.ceil(Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers);
  },
  cookiesPurchased: function(){
    for(var i=0; i<15; i++){
      this.hourlyArray[i]= Math.floor(this.numOfCust() * this.averageSales);
    }
  },
};

var hours=["6am","7am","8am","9am","10am","11am","12pm","1pm","2pm","3pm","4pm","5pm","6pm","7pm","8pm"];

function displayForecastedLocationData(location,id){
  // Run our cookies-per-hour simulation!
  location.cookiesPurchased();

  // Find parent <ul> for this location by id
  var locationlist=document.getElementById(id);

  // Let's also count total cookies
  var cookieTotal = 0;

  // For each hour that the store is open...
  for(var i = 0; i < location.hourlyArray.length; i++){
    var cookiesForThisHour = location.hourlyArray[i];

    cookieTotal = cookieTotal + cookiesForThisHour;
    console.log({ cookiesForThisHour, cookieTotal });

    // Build string to display in the <li>
    var listString=hours[i] + ': ' + cookiesForThisHour + ' cookies.';

    // Create <li> with that string, and add to <ul>
    var li=document.createElement('li');
    li.textContent=listString;
    locationlist.appendChild(li);
  }

  var totalLI = document.createElement('li');
  locationlist.appendChild(totalLI);

  var totalStrong = document.createElement('strong');
  totalStrong.textContent = 'Total: ' + cookieTotal;
  totalLI.appendChild(totalStrong);
}
//create list items, create the objects identify html ul elements by id.
displayForecastedLocationData(iowaCity,"hawkeyes");
displayForecastedLocationData(cedarRapids,"kernels");
displayForecastedLocationData(boulderColo,"buffalos");
displayForecastedLocationData(eugeneOregon,"glassArtist");
displayForecastedLocationData(oxnardCali,"pointBreak");