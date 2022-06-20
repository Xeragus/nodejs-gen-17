const data = require('./countries-data');
const countriesDataFormatter = require('./countries-data-formatter');

simpleDataCountries.forEach(country => {
    console.log('Country name: ', country);
});

countriesDataFormatter(data.complexDataCountries);
