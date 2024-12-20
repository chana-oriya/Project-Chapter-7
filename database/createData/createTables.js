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
    function sqlRequest(sql){ 
        con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table created");
        });
    }

    sqlRequest("DROP TABLE comment");
    sqlRequest("DROP TABLE user");
    sqlRequest("DROP TABLE todo");
    sqlRequest("DROP TABLE post");
    sqlRequest("DROP TABLE user_password");

    sqlRequest("CREATE TABLE user (id int NOT NULL PRIMARY KEY AUTO_INCREMENT UNIQUE," + 
        "username VARCHAR(255) UNIQUE,name VARCHAR(255), email VARCHAR(255))");
    
    sqlRequest("CREATE TABLE user_password (user_id int , password VARCHAR(255))")
    
    sqlRequest("CREATE TABLE todo (id int NOT NULL PRIMARY KEY AUTO_INCREMENT UNIQUE," + 
        "user_id int, title text, completed boolean)");
    
    sqlRequest("CREATE TABLE post (id int NOT NULL PRIMARY KEY AUTO_INCREMENT UNIQUE," + 
        "user_id int, title text, body text)")
    
    sqlRequest("CREATE TABLE comment (id int NOT NULL PRIMARY KEY AUTO_INCREMENT UNIQUE," + 
        "post_id int, name text, body text , email VARCHAR(255))")  
});
