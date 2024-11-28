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

function getAllPostComments(postId, callback){
    con.query(`SELECT * FROM comment WHERE post_id = ${postId}`,
    (err, result) => {
        console.log("here" + result);
        if(err) callback({success: false});
        else callback({success: true, data: JSON.stringify(result)});
    });
}




module.exports.getAllPostComments = getAllPostComments;