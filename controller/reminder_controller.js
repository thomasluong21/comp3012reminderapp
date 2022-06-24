let database = require("../database");

let remindersController = {
  list: (req, res) => {
    res.render("reminder/index", { reminders: database.cindy.reminders });
  },

  new: (req, res) => {
    res.render("reminder/create");
  },

  listOne: (req, res) => {
    let reminderToFind = req.params.id;
    let searchResult = database.cindy.reminders.find(function (reminder) {
      // console.log(reminder)
      return reminder.id == reminderToFind;
    });
    if (searchResult != undefined) {
      // console.log({ reminderItem: searchResult })
      res.render("reminder/single-reminder", { reminderItem: searchResult });
    } else {
      res.render("reminder/index", { reminders: database.cindy.reminders });
    }
  },

  create: (req, res) => {
    let reminder = {
      id: database.cindy.reminders.length + 1,
      title: req.body.title,
      description: req.body.description,
      completed: false,
    };
    database.cindy.reminders.push(reminder);
    res.redirect("/reminders");
  },

  edit: (req, res) => {
    let reminderToFind = req.params.id;
    let searchResult = database.cindy.reminders.find(function (reminder) {
      return reminder.id == reminderToFind;
    });
    
    res.render("reminder/edit", { reminderItem: searchResult });
  },

  update: (req, res) => {
    let reminderToFind = req.params.id;
    let newTitle = req.body.title
    let newDescription = req.body.description
    database.cindy.reminders.title = newTitle
    database.cindy.reminders.description = newDescription
    // Could not figure out true or flase button
    // let checkedRadio = document.querySelector('input[id="true"]:checked')
    // if(checkedRadio != null){
    //   let reminder1 = {
    //     id: reminderToFind,
    //     title: newTitle,
    //     description: newDescription,
    //     completed: true,
    //   }
    //   res.render("reminder/update", { reminderItem: reminder1})
    // }
    // else{
    //   let reminder1 = {
    //   id: reminderToFind,
    //   title: newTitle,
    //   description: newDescription,
    //   completed: false,
    //   }
    //   res.render("reminder/update", { reminderItem: reminder1})
    // }

    let reminder1 = {
      id: reminderToFind,
      title: newTitle,
      description: newDescription,
      completed: false,
    }
    
    res.render("reminder/update", { reminderItem: reminder1})
  },

  delete: (req, res) => {
    let reminderToFind = req.params.id;
    let newArray = database.cindy.reminders
    res.render("reminder/index", { reminders: newArray.filter(data => data.id != reminderToFind)})
  },
};

module.exports = remindersController;
