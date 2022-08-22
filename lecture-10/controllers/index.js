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
    viewUser: async (req, res) => {
        const user = await User.findById(req.params.id);

        res.render('view-user', { user: user });
    },
    editUser: async (req, res) => {
        const user = await User.findById(req.params.id);

        res.render('edit-user', { user: user });
    },
    create: (req, res) => {
        res.render('create');
    },
    postCreate: async (req, res) => {
        await User.create(req.body);

        res.redirect('/');
    },
    putEditUser: async (req, res) => {
        try {
            console.log(req.body);
            await User.findByIdAndUpdate(req.params.id, req.body);

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
