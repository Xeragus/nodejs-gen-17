const users = [];

module.exports = {
    index: (req, res) => {
        res.render('index', { title: 'Balkan Express', subtitle: 'Hehehe', users: users });
    },
    hehe: (req, res) => {
        res.render('hehe', { title: 'Hehe Express', subtitle: 'Hehe OG' });
    },
    viewUser: (req, res) => {
        const user = users.find(user => user.id == req.params.id);

        res.render('view-user', { user: user });
    },
    create: (req, res) => {
        res.render('create');
    },
    postCreate: (req, res) => {
        const user = req.body;
        user.id = users.length + 1;

        users.push(user); // simulacija na povik za dodavanje zapis vo baza

        res.redirect('/');
    }
}
