'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  // countriesContainer.style.opacity = 1;
};
///////////////////////////////////////

//OLD SCHOOL VERSION : XML - HTTP REQUEST FUNCTION
const renderCountry = function (data, className = '') {
  const html = `<article class=" country ${className}">
          <img class="country__img" src="${data.flags.svg}" />
          <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(1)} million</p> 
            <p class="country__row"><span>🗣️</span>${Object.values(
              data.languages
            ).join(' ')}</p>
            <p class="country__row"><span>💰</span>${Object.values(
              data.currencies
            ).map(function (value, _) {
              return `${value.name} (${value.symbol})`;
            })}</p>
          </div>
        </article>`;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  // countriesContainer.style.opacity = 1;
};

/*
//ajax country (1)
const getCountryAndNeighbour = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);

    //render country
    renderCountry(data);

    //get neighbor country (2)
    console.log(data);
    const [neighbor] = data.borders;

    if (!neighbor) return;

    //ajax country (1)
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbor}`);
    request2.send();

    request2.addEventListener('load', function () {
      const [data2] = JSON.parse(this.responseText);
      console.log(data2);

      renderCountry(data2, 'neighbor');
    });
  });
};
getCountryAndNeighbour('hungary');
*/

// const request = fetch('https://restcountries.com/v3.1/name/hungary');
// console.log(request);

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       renderCountry(data[0]);
//     });
// };
// getCountryData('hungary');

/*
const getCountryData = function (country) {
  //country1
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => {
      console.log(response);

      if (!response.ok) {
        throw new Error(`Country not found(${response.status}) 🌍`);
      }
      return response.json();
    })
    .then(data => {
      renderCountry(data[0]);
      console.log(data);
      // const neighbour = data[0].borders[0];
      const neighbour = 'dfsfsfsf';

      if (!neighbour) {
        return;
      }
      //country2
      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    })
    .then(response => {
      console.log(response);

      if (!response.ok) {
        throw new Error(`Country not found(${response.status}) 🌍`);
      }
      response.json();
    })
    .then(data => renderCountry(data[0], 'neighbour'))
    .catch(err => {
      console.error(`${err} 🌠🌠🌠`);
      renderError(`something went wrong 🌠🌠🌠 ${err.message}. Try again`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', function () {
  getCountryData('hungary');
});

*/

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(`${errorMsg} (${response.status}) 🌍`);
    }
    return response.json();
  });
};
/*
const getCountryData = function (country) {
  //country1
  getJSON(`https://restcountries.com/v3.1/name/${country}`, 'Country not found')
    .then(data => {
      renderCountry(data[0]);
      console.log(data);
      const neighbour = data[0]?.borders?.length ? data[0].borders[0] : null;

      if (!neighbour) throw new Error('No neighbour found! 💩');

      //country2
      return getJSON(
        `https://restcountries.com/v3.1/alpha/${neighbour}`,
        'Country not found'
      );
    })
    .then(data => renderCountry(data[0], 'neighbour'))
    .catch(err => {
      console.error(`${err} 🌠🌠🌠`);
      renderError(`something went wrong 🌠🌠🌠 ${err.message}. Try again`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', function () {
  getCountryData('australia');
});

 */

/*
const whereAmI = function (lat, lng) {
  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json `)
    .then(response => {
      if (!response) {
        throw new Error(`Problem with geo ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      console.log(`you are in ${data.city}, ${data.country} `);

      return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
    })
    .then(response => {
      if (!response) {
        throw new Error(`There is no country`);
      }
      return response.json();
    })
    .then(data => renderCountry(data[0]))
    .catch(err => {
      console.error(`${err} `);
      renderError(`something went wrong ${err.message}. Try again`);
    })
    .finally((countriesContainer.style.opacity = 1));
};

btn.addEventListener('click', function () {
  whereAmI(-33.933, 18.474);
});

//Coordinates 1: 52.508, 13.381 (Latitude, Longitude)
// § Coordinates 2: 19.037, 72.873
// § Coordinates 3: -33.933, 18.474
*/

console.log('Test start');
setTimeout(() => {
  console.log('0timer'), 0;
});
Promise.resolve('Resolve promise 1').then(res => console.log(res));

console.log('test end');
