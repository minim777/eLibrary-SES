const User = require('../../models/usersmodel'); // import models

const elms_home = function(req, res){
    res.render('loginandregistration/login', {
        title: "eLMS Login Page"
    });
}



module.exports = {
    elms_home
}
