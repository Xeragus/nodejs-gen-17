module.exports = {
    index: (req, res) => {
        res.render('index', { title: 'Balkan Express', subtitle: 'Hehehe' });
    },
    hehe: (req, res) => {
        res.render('hehe', { title: 'Hehe Express', subtitle: 'Hehe OG' });
    }
}
