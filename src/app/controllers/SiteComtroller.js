class SideController {

    // [GET] /
    index(req, res) {
        res.render('home');
    }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }
    
    // [GET] /news/:slug
    show(req, res) {
        res.send('NEW DETAIL!');
    }
}

module.exports = new SideController;