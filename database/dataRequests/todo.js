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

function getAllTodos(user_id, callback){
    con.query(`SELECT * FROM todo WHERE user_id = ${user_id}`,
    (err, result) => {
        if(err) callback({success: false});
        else callback({success: true, data: JSON.stringify(result)});
    });
}

function addTodo(user_id, todoTitle, callback){
    con.query('INSERT INTO todo (user_id, title, completed) VALUES ' +
    `(${user_id}, '${todoTitle}', FALSE)`,
    (err, result) => {
        console.log(result);
        if(err) callback({success: false});
        else    callback({success: true, todoID: result.insertId});
    }
    )
}

module.exports.addTodo = addTodo;
module.exports.getAllTodos = getAllTodos;