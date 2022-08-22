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
  
const createCar = car => {
    console.log('==== createCar() function called ====');

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                cars.push(car);
                throw new Error('Ova e nekoja moja custom greska');
                console.log(`Car created: ${car.brand} ${car.model}`);
                resolve();
            } catch (error) {
                reject(error);
            }
        }, 2000);
    });
};

const getCars = () => {
    console.log('==== getCars() function called ====');

    setTimeout(() => {
        cars.forEach(car => {
            console.log(`Car: ${car.brand} ${car.model}`);
        });
    }, 1000);   
};

// Resenie so then-catch
// createCar({ brand: 'Opel', model: 'Insomnia' })
//     .then(() => {
//         getCars();
//     })
//     .catch(error => {
//         console.log('Se sluci greska: ', error.message);
//     });

// Resenie so async-await
async function startApp() {
    try {
        await createCar({ brand: 'Opel', model: 'Insomnia' });
        getCars();
    } catch (error) {
        console.log('Se sluci greska: ', error.message);
    }
}

startApp();

/**
 * So promises se spravuvame na 2 nacini:
 * 1. then-catch sintaksa ILI
 * 2. async-await sintaksa
 * 
 * Promises imaat 3 sostojbi: pending, resolved, rejected
 */