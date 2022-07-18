// const users = [{id: 1, name: 'Boban', lastname: 'S', ssn: '123'}];
const User = require('../models/user');

// CRUD: Create Read Update Delete
module.exports = {
    index: async (req, res) => {
        const users = await User.find();

        res.render('index', { title: 'Balkan Express', subtitle: 'Hehehe', users: users });
    },
    hehe: (req, res) => {
        res.render('hehe', { title: 'Hehe Express', subtitle: 'Hehe OG' });
    },
    viewUser: (req, res) => {
        const user = users.find(user => user.id == req.params.id);

        res.render('view-user', { user: user });
    },
    editUser: (req, res) => {
        const user = users.find(user => user.id == req.params.id);

        res.render('edit-user', { user: user });
    },
    create: (req, res) => {
        res.render('create');
    },
    postCreate: async (req, res) => {
        // const user = req.body;
        // user.id = users.length + 1;

        // users.push(user); // simulacija na povik za dodavanje zapis vo baza

        await User.create(req.body);

        res.redirect('/');
    },
    putEditUser: (req, res) => {
        try {
            //Find index of specific object using findIndex method.   
            userIndex = users.findIndex((user => user.id == req.params.id));
            users[userIndex] = req.body;

            // throw new Error('Ova e samo random greska 5555555');

            res.send({
                success: true
            });
        } catch (error) {
            res.send({
                success: false,
                message: error.message
            });
        }
    }
}
