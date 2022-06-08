module.exports = (countriesData) => {
    countriesData.forEach(country => {
        console.log('======================');
        console.log('COUNTRY NAME: ', country.name);
        console.log('POPULATION: ', country.population);
        console.log('CAPITAL: ', country.capital);
        console.log('======================');
    });
}

// classic vs arrow function discussion

// // classic function syntax
// function x(a, b) {
//     ...
// }

// // anonymous classic function syntax
// module.exports = function() {

// }

// // arrow function syntax
// const a = (a, b) => {

// }

// // anonymous arrow function syntax
// module.exports = () => {

// }