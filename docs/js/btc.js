function requestAndShowBtc() {
    var requestURL = 'https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCUSD';

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
        var btc = request.response;
        populateBtc(btc);
    }
}

function populateBtc(jsonObj) {
  var finalBtc = document.getElementById('final-btc');
  finalBtc.textContent = jsonObj['last'];
}
