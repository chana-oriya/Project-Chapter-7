const express = require('express');
const router = express.Router();
const {findUser} = require("../../database/dataRequests/register")
/* GET users listing. */
router.get('/',(req, res, next)=> {
  res.send('respond with a resource');
});

router.post('/login',async (req, res)=>{
  console.log("hello");
  findUser(req.body.username, req.body.password, (result) => {
    if (!result.success) {
      return res.status(401).send("Invalid username or password.");
    }
    res.status(200).send(result.info);
  });
});
  

router.post('/register',async (req, res)=>{
try{
  const user = await findUser(req.body.username, req.body.password);
  if(user)throw new Error("User already exists");
  const newUser = {
    name:"",
    username:req.body.username,
    password:req.body.password,
    email:""
  }
  await addUser(newUser,(result)=>{
    res.status(200).send(result.info);
  });
}catch(err){
  res.status(401).send(`Register failed: ${err}`);
}
})

module.exports = router;
