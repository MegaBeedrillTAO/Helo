const bcrypt = require('bcryptjs');

async function login(req, res){
    const {username, password} = req.body;
      const db = req.app.get('db');

      const foundUser = await db.checkForUserName(username);

      if (!foundUser[0]) {
         res.status(403).json("Username or Password incorrect")
      } 
      else {

         const isAuthenticated = bcrypt.compareSync(password, foundUser[0].password)

         if (!isAuthenticated) {
            res.status(403).json("Username or Password incorrect")
         } else {

            
            
            req.session.user = {
               user_id: foundUser[0].id,
               username: foundUser[0].username,
               profile_pic: foundUser[0].profile_pic
            };

            


            res.status(200).json(req.session.user);
         }
      }
}

async function register(req, res){
   const {username, password, profile} = req.body;
   console.log(profile)
     const db = req.app.get('db');

     const foundUser = await db.checkForUserName(username);

     if (foundUser[0]) {
        res.status(409).json("Username Taken")
     } else {

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt)

        const newUser = await db.registerUser(username, hash, profile);
        
        
        req.session.user = {
           user_id: newUser[0].id,
           username: newUser[0].username,
           profile_pic: newUser[0].profile_pic
        };
        
        

        res.status(200).json(req.session.user);
     }
}

async function logout(req, res){
   req.session.destroy();
   res.sendStatus(200);
}

async function getAllPosts(req,res){
   if(req.query.check === 'true' && req.query.search !== ''){
      let search = req.query.search + '%'
      const allSearch = await req.app.get('db').getAllSearch(search);
      res.status(200).json(allSearch);
   }
   else if(req.query.check === 'false' && req.query.search !== ''){
      let search = req.query.search + '%'
      const allSearch = await req.app.get('db').getSearch(search, req.session.user_id);
      res.status(200).json(allSearch);
   }
  
   else if (req.query.check === 'false' && req.query.search === ''){
      const posts = await req.app.get('db').getPosts(req.session.user_id);
      
      res.status(200).json(posts);
   }
   else  {
      
      const allPosts = await req.app.get('db').getAllPosts();
      
      res.status(200).json(allPosts);
   }
   
}

function getUser(req, res){
   if (req.session.user){
      
      res.status(200).json(req.session.user)
   }
}

module.exports = {
    login,
    logout,
    register,
    getAllPosts,
    getUser
}