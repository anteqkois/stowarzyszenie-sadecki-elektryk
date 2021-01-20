exports.index = (req, res) => {
    res.render('index');
};

exports.projects = (req, res) => {
    res.render('all-projects');
};

exports.admin = (req, res) => {
    res.send('Hmmm może kiedyś <br><a href="/" class="menu__link">Strona głowna</a>');
};