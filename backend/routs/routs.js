const { addUser,logIn ,dlUser, updUser} = require('../controllers/userC');

const router = require('express').Router();


router.post('/add-user', addUser)
      .post('/log-in', logIn)
      .get('/delete-user',dlUser)
      .post('/update-user',updUser)
    

module.exports = router