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

function getAllPosts(user_id, callback){
    con.query(`SELECT * FROM post WHERE user_id = ${user_id}`,
    (err, result) => {
        console.log("here" + result);
        if(err) callback({success: false});
        else callback({success: true, data: JSON.stringify(result)});
    });
}

// function addTodo(user_id, todoTitle, callback){
//     console.log("here");
//     con.query('INSERT INTO todo (user_id, title, completed) VALUES ' +
//     `(${user_id}, '${todoTitle}', FALSE)`,
//     (err, result) => {
//         console.log("result1: ",result);
//         if(err) callback({success: false});
//         else    callback({success: true, todoID: result.insertId});
//     }
//     )
// }

// function editTodo(todo_id, key, value, callback){
//     console.log("here");
//     if(typeof value == "string")    value = `'${value}'`;
//     con.query(`UPDATE todo SET ${key} = ${value} WHERE id = ${todo_id}`,
//     (err, result) => {
//         console.log('result: ', result);
//         console.log("err: " ,err);
//         if(err) callback({success: false});
//         else    callback({success: true});
//     })
// }

function deletePost(post_id, callback){
    con.query(`DELETE FROM post WHERE id = ${post_id}`,
    (err, result) => {
        console.log(result);
        if(err) callback({success: false});
        else    callback({success: true});
    });
}

 module.exports.deletePost = deletePost;
// module.exports.editTodo = editTodo;
// module.exports.addTodo = addTodo;
module.exports.getAllPosts = getAllPosts;