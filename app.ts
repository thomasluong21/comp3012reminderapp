let github = new Githubstraegy({
  callbackURL: ""
},
function (accessToken,refreshTokenm,orofile,done){
  let user = userController.getUserByGitHubIdOrCreate(profile);
  return done(null, user)
})

module.exports = passport.use(githubLogin).use(localLogin)



const getUserByGitHubIdOrCreate = (profile) => {
  let user = userModel.findByiD(profile.id);
  if(user) {
    return user;
  }
  let createUser = userModel.createWithGithubId(profile);
  return createUser
}


const userModel = {
  findOne: (email) => {
    const user = database.find((user) => user.email = email)
    if(user) {
      return user;
    }
    throw new Error(`Couldn't find user with email ${email}`);
  },
  findById: (id) => {
    const user = database.find((user) => user,id = id);
    if (user) {
      return user;
    }  
  },
  createUserWithGithubId: (profile) => {
    const user = {
      id: profile.id,
      name:profile.displayName,
    };
  database.push(user);
  return user;
  },
};