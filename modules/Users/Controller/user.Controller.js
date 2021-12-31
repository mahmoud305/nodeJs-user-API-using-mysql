const dataBase = require("../../../SQL.config/config")

function executeQuery(query,res){
    dataBase.execute(query,(err,data)=>{
        if(err)
            throw new Error(err)
        res.json({message:"success",data});
    })
}
function getAllUsers(req ,res){
    const {first_name, last_name, email, password, location, dept,  is_admin}=req.body;
   let query=`select * from users`;
     executeQuery(query,res);
    // console.log(req.body);
};
function getAllUsersReversed(req ,res){
    const {first_name, last_name, email, password, location, dept,  is_admin}=req.body;
   let query=`select * from users order by id DESC`;
     executeQuery(query,res);
    // console.log(req.body);
};
function getUserbyId (req,res){
    const {id}= req.params ;
    console.log(id);
    let query= `Select * from users where id =${id}`;
    executeQuery(query,res);
}

function getUserbyName(req,res){
    const {name}= req.params;
    console.log(name);
    let  query=`select * from users where first_name like '%${name}%' or last_name like '%${name}%' `;
    executeQuery(query,res);
}


function getUserbyAge(req,res){
    let  query=`select * from users where age between 20 and 40 `;
    executeQuery(query,res);
}

function getUser_startby(req,res){// and age > 30
    const {startBy}= req.params;
    console.log(startBy);
    let  query=`select * from users where age < 30 and first_name LIKE '${startBy}%'`;
    executeQuery(query,res);
}

function getUser_EndWith(req,res){
    const {endWith}= req.params;
    let query = `select * from users where age > 50 and first_name LIKE '%${endWith}'`
    executeQuery(query,res);
}

function getUser_contain(req,res){
    const {contain}= req.params;
    let query = `select * from users where  first_name LIKE '%${contain}%' and  age BETWEEN 21 and 24`;
    executeQuery(query,res);
}

function addUser(req,res){
    console.log(req.body);
    const {first_name, last_name, age ,email, password, location, dept,  is_admin}=req.body;
    query=`INSERT INTO users (first_name, last_name,age , email, password, location, dept,  is_admin)
        values ('${first_name}', '${last_name}',${age} ,'${email}', '${password}', '${location}', '${dept}', ${is_admin})`;
    
     executeQuery(query,res);
}
// const getAallUsers =(req,res)=>{
//     const {first_name, last_name, email, password, location, dept,  is_admin}=req.body;
//     query=`INSERT INTO users (first_name, last_name, email, password, location, dept,  is_admin)
//      values ('${first_name}', '${last_name}', '${email}', '${password}', '${location}', '${dept}', ${is_admin})`;
//     //  dataBase.execute(query,(err,data)=>{
//     //      if(err) throw new Error(err)
//     //      res.json({message:"Suceess",data})
//     //  })
//     console.log(req.body);
// }
module.exports={getAllUsers,addUser,getUserbyId,getUserbyName,getAllUsersReversed ,getUserbyAge ,getUser_startby ,getUser_EndWith ,getUser_contain}