const router = require("express").Router();
const {getAllUsers,addUser,getUserbyId ,getUserbyName,getAllUsersReversed ,getUserbyAge,getUser_startby,getUser_EndWith ,getUser_contain}= require("../Controller/user.Controller")
// git all user Route
router.get('/getAllUsers',getAllUsers);
router.get('/getUser/:id',getUserbyId);

router.get('/getUserbyName/:name' , getUserbyName);
router.get('/getAllUsersReversed',getAllUsersReversed);
router.get('/getUserbyAge' , getUserbyAge);
router.get('/getUserStartBy/:startBy' , getUser_startby);
router.get('/getUserEndWith/:endWith',getUser_EndWith);
router.get('/getUserContain/:contain',getUser_contain);

router.post('/addUser',addUser);

module.exports=router;