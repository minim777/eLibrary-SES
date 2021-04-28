const User = require('../../models/adminmenu/users'); // Bring in the models

const view_users = function(req, res){
    User.find({}, function(err, users){
        if(err){
          console.log(err);
        }
        else {
            res.render('adminmenu/viewusers', {
                title: "View Users List",
                userlist: users
            });
        }
    });
}

const single_user = function(req, res){
    User.findById(req.params.id, function(err, user){
        res.render('adminmenu/singleuser', {
          title: "Single User",
          user: user
        });
      });
}

module.exports = {
    view_users,
    single_user
}
