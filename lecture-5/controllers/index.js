module.exports = {
    index: (req, res) => {
        const users = [
            {
                name: 'Boban',
                lastname: 'Sugareski',
                ssn: 1234
            },
            {
                name: 'Jovan',
                lastname: 'Popov',
                ssn: 445656
            },
            {
                name: 'Goran',
                lastname: 'Zoran',
                ssn: 2345
            }
        ];

        res.render('index', { title: 'Balkan Express', subtitle: 'Hehehe', users: users });
    },
    hehe: (req, res) => {
        res.render('hehe', { title: 'Hehe Express', subtitle: 'Hehe OG' });
    }
}
