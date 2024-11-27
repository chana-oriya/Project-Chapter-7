const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/',(req, res, next)=> {
  res.send('respond with a resource');
});

router.post('/login',async (req, res)=>{
  // body:{name: password:}
  try{
    const result=true;
    // const result = await findUser(req.body.name, req.body.password)//return false or user details, no password
    if (!result)throw new Error("Invalid username or password.");
    res.status(200).send(result);
  }catch(err){
    res.status(401).send(`Login failed: ${err}`);

  }
})

router.post('/register',async (req, res)=>{
try{
  const user = await findUser(req.body.name, req.body.password);
  if(user)throw new Error("User already exists");
  // create a new user object
  // send object to data base to add to it
  // if all is good, tell client

  res.status(200).send(result);
}catch(err){
  res.status(401).send(`Login failed: ${err}`);
}
})

module.exports = router;
