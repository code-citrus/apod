(function() {
  var APOD_URL = 'https://api.nasa.gov/planetary/apod';
  var API_KEY = 'H2M20c7MB1DTGzdREfIrCGBQY2hH6NaLjZ2uKatj';

  var callAPOD = new Promise((resolve, reject) => {
    var url = APOD_URL + '?api_key=' + API_KEY;
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.open('GET', url);
    xhr.onload = function() {
      if(xhr.status != 200) {
        throw new Error(`${xhr.status}: ${xhr.statusText}`)
      }
      if(!xhr.response) {
        throw new Error('Empty xhr response');
      }
      resolve(xhr.response);
    }
    xhr.send();
  });


  document.addEventListener('DOMContentLoaded', function() {
    callAPOD.then((json) => {
      var div = document.createElement('div');
      var image = document.createElement('img');
      image.src = json.url;
      var paragraph = document.createElement('p');
      paragraph.textContent = json.explanation + 'stuff';
      var body = document.getElementsByTagName('body')[0];
      div.appendChild(image);
      div.appendChild(paragraph);
      body.appendChild(div);
    });
  });
})();