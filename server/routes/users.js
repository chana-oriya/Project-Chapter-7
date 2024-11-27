const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/',(req, res, next)=> {
  res.send('respond with a resource');
});

router.post('/login',async (req, res)=>{
  // body:{username: password:}
  try{
    const result = await findUser(req.body.username, req.body.password)//return false or user details, no password
    if (!result)throw new Error("Invalid username or password.");
    console.log('result: ', result);
    res.status(200).send(result);
  }catch(err){
    res.status(401).send(`Login failed: ${err}`);

  }
})

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
  const result = await addUser(newUser);
  res.status(200).send(result);
}catch(err){
  res.status(401).send(`Register failed: ${err}`);
}
})

module.exports = router;
