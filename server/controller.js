const bcrypt = require('bcryptjs');

async function login(req, res){
    const {username, password} = req.body;
      const db = req.app.get('db');

      const foundUser = await db.auth.checkForUserName(username);

      if (!foundUser[0]) {
         res.status(403).json("Username or Password incorrect")
      } 
      else {

         const isAuthenticated = bcrypt.compareSync(password, foundUser[0].password)

         if (!isAuthenticated) {
            res.status(403).json("Username or Password incorrect")
         } else {

            
            
            req.session.user = {
               user_id: foundUser[0].user_id,
               username: foundUser[0].username,
               
            };

            


            res.status(200).json([req.session.user, req.session.settings]);
         }
      }
}


module.exports = {
    login
}