var requestURL = 'https://apiv2.bitcoinaverage.com/indices/global/ticker/LTCUSD';

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
  var ltc = request.response;
  populateLtc(ltc);
  showLtc(ltc);
}

function populateLtc(jsonObj) {
  var finalLtc = document.getElementById('final-ltc');
  finalLtc.textContent = jsonObj['last'];
  getElementById('final-ltc').innerText = jsonData.finalLtc

}
