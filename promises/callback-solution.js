// simulacija na baza
const cars = [
    {
        brand: 'BMW',
        model: 'X6'
    },
    {
        brand: 'Mercedes',
        model: 'C123'
    },
    {
        brand: 'E.go',
        model: 'MKD22'
    }
];
  
const createCar = (car, cb) => {
    console.log('==== createCar() function called ====');

    setTimeout(() => {
        cars.push(car);
        console.log(`Car created: ${car.brand} ${car.model}`);
        cb();
    }, 2000);
};

const getCars = () => {
    console.log('==== getCars() function called ====');

    setTimeout(() => {
        cars.forEach(car => {
            console.log(`Car: ${car.brand} ${car.model}`);
        });
    }, 1000);   
};

createCar({ brand: 'Opel', model: 'Insomnia' }, getCars);
