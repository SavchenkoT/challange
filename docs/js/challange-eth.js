var requestURL = 'https://apiv2.bitcoinaverage.com/indices/global/ticker/ETHUSD';

var request = new XMLHttpRequest();

// Check for the various File API support.
if (window.File && window.FileReader && window.FileList && window.Blob) {
  // Great success! All the File APIs are supported.
} else {
  alert('The File APIs are not fully supported in this browser.');
}

request.open('GET', requestURL);

request.responseType = 'json';
request.send();

request.onload = function() {
  var ethereum = request.response;
  populateEth(ethereum);
  showEth(ethereum);
}

function populateEth(jsonObj) {
  var finalEth = document.getElementById('final-eth');
  finalEth.textContent = jsonObj['last'];
  getElementById('final-eth').innerText = jsonData.finalEth
}

// var data = require('https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCUSD');
// function load() {
// 	var mydata = JSON.parse(data);
// 	alert(mydata[0].ask);
// 	alert(mydata[0].bid);
// }

// var changeEth = changeEth['changes'][0]['percent'][0]
//
// function showEth(jsonObj) {
//   var changesEth = jsonObj['changes'];
//
//   for (var i = 0; i < changesEth.length; i++) {
//     var houreth = document.getElementById('hour-eth');
//     houreth.textContent = jsonObj['price'];
//     getElementById('hour-eth').innerText = '$' + jsonData.houreth
//     var dayeth = document.getElementById('day-eth');
//     var weeketh = document.getElementById('week-eth');
//     var montheth = document.getElementById('moht-eth');
//   }
// }
