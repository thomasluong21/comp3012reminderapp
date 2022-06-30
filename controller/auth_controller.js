let database = require("../database");

let authController = {
  login: (req, res) => {
    res.render("auth/login");
  },

  register: (req, res) => {
    res.render("auth/register");
  },

  loginSubmit: (req, res) => {
    const getUserByEmailIdAndPassword = (email, password) => {
      let user = userModel.findOne(email);
      if (user) {
        if (isUserValid(user, password)) {
          return user;
        }
      }
      return null;
    };
    const getUserById = (id) => {
      let user = userModel.findById(id);
      if (user) {
        return user;
      }
      return null;
    };
    
    function isUserValid(user, password) {
      return user.password === password;
    }
  },

  registerSubmit: (req, res) => {
    // implement
  },
};

module.exports = authController;
