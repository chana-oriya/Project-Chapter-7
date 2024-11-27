var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "z10mz10m",
  database: "instagram"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});


function findUser(username, password, callback){
    con.query(`SELECT user.id, user.name, user.username, user.email FROM user ` +
    `INNER JOIN user_password ` + 
    `WHERE user.username = "${username}" AND user_password.user_id = user.id AND user_password.password = "${password}"`,
    function (err, result) {
        if (err) throw err;
        if(!result.length)  callback({success: false})
        else callback({success: true, info: JSON.stringify(result[0])});
    })
}

function addUser(user, callback){
    con.query(`INSERT INTO user (user.name, user.username, user.email) VALUES ` +
    `('${user.name}', '${user.username}', '${user.email}')`,
     (err, result) => {
        if (err) callback({success: false});
        else{
            user.id = result.insertedID;
            con.query(`INSERT INTO user_password (password, user_id) VALUES ('${user.password}', ${result[0].id})`,
            (err, result) => {
                if (err) callback({success: false});
                else callback({success: true, info: JSON.stringify(user)});
            });  
        }
    });
}

module.exports.findUser = findUser;
module.exports.addUser = addUser;