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

const singleuser_get = function(req, res){
    User.findById(req.params.id, function(err, user){
       res.render('adminmenu/singleuser', {
          title: "Single User",
          user: user
        });
      });
}

const singleuser_delete = function(req, res){
    let query = {_id:req.params.id}

    User.deleteOne(query, function(err){
        if(err){
            console.log(err);
        }
        res.send('Success'); 
    });
}



const adduser_get = function(req, res){
    res.render('adminmenu/adduser', {
        title: "Add User"
    });
}


module.exports = {
    view_users,
    singleuser_get,
    singleuser_delete,
    adduser_get
}
