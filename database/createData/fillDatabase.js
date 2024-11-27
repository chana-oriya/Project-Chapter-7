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
    function sqlInsert(sql, values){ 
        con.query(sql, [values], function (err, result) {
        if (err) throw err;
        console.log("inserted!");
        });
    }   
  
    sqlInsert("INSERT INTO user (id, name, username, email) VALUES ?",[
        [1, "Leanne Graham", "Bret", "Sincere@april.biz"],
        [2, "Ervin Howell", "Antonette", "Shanna@melissa.tv"],
        [3, "Clementine Bauch", "Samantha", "Nathan@yesenia.net"],
        [4, "Patricia Lebsack", "Karla", "Julianne.OConner@kory.org"],
        [5, "Chelsey Dietrich", "Kamren", "Lucio_Hettinger@annie.ca"]
      ]);

    sqlInsert("INSERT INTO user_password (user_id, password) VALUES ?", [
        [1, "hildegard.org"],
        [2, "anastasia.net"],
        [3, "ramiro.info"],
        [4, "kale.biz"],
        [5, "demarco.info"]          
    ])

    sqlInsert("INSERT INTO todo (user_id, id, title, completed) VALUES ?", [
        [1, 1, "delectus aut autem", false],
        [1, 2, "quis ut nam facilis et officia qui", false],
        [1, 3, "fugiat veniam minus", false],
        [1, 4, "et porro tempora", true],
        [1, 5, "laboriosam mollitia et enim quasi est qui sint", false],
        [2, 6, "quis ut nam facilis et officia qui", false],
        [2, 7, "fugiat veniam minus", true],
        [2, 8, "et porro tempora", false],
        [2, 9, "laboriosam mollitia et enim quasi est qui sint", true],
        [2, 10, "delectus aut autem", false],
        [3, 11, "fugiat veniam minus", false],
        [3, 12, "et porro tempora", true],
        [3, 13, "laboriosam mollitia et enim quasi est qui sint", false],
        [3, 14, "delectus aut autem", true],
        [3, 15, "quis ut nam facilis et officia qui", false],
        [4, 16, "et porro tempora", true],
        [4, 17, "laboriosam mollitia et enim quasi est qui sint", true],
        [4, 18, "delectus aut autem", false],
        [4, 19, "quis ut nam facilis et officia qui", false],
        [4, 20, "fugiat veniam minus", false],
        [5, 21, "laboriosam mollitia et enim quasi est qui sint", true],
        [5, 22, "delectus aut autem", false],
        [5, 23, "quis ut nam facilis et officia qui", false],
        [5, 24, "fugiat veniam minus", true],
        [5, 25, "et porro tempora", false]
      ]);

      sqlInsert("INSERT INTO post (user_id, id, title, body) VALUES ?", [
        [1, 1, "A Journey to the Mountains", "The air was crisp, and the view was breathtaking."],
        [1, 2, "The Secret Garden", "Hidden away, it flourished with vibrant blooms."],
        [1, 3, "Whispers of the Forest", "The trees seemed alive with ancient stories."],
        [1, 4, "A Day at the Beach", "The waves crashed as children laughed in the distance."],
        [1, 5, "Night Under the Stars", "The sky was a canvas of shimmering lights."],
        [2, 6, "Lost in the City", "The hustle and bustle never seemed to end."],
        [2, 7, "Finding Solitude", "A small park offered a peaceful retreat."],
        [2, 8, "The River's Song", "Its gentle flow calmed my restless mind."],
        [2, 9, "Chasing the Horizon", "The sunset painted the sky in fiery hues."],
        [2, 10, "Memories of Spring", "The scent of fresh blossoms filled the air."],
        [3, 11, "Echoes of the Past", "The ruins told tales of a forgotten civilization."],
        [3, 12, "A Rainy Afternoon", "Raindrops danced on the windowpane."],
        [3, 13, "Adventures in the Desert", "The sand stretched endlessly under a blazing sun."],
        [3, 14, "The Old Library", "Dusty shelves held secrets waiting to be discovered."],
        [3, 15, "Through the Looking Glass", "Reality seemed to bend in the strange mirror."],
        [4, 16, "The Lonely Lighthouse", "Its beam pierced through the foggy night."],
        [4, 17, "Tales of the Sea", "The captain's voice carried stories of great voyages."],
        [4, 18, "Under the Oak Tree", "Its shade provided comfort on a hot summer day."],
        [4, 19, "Winter's Embrace", "Snow blanketed the earth in a serene stillness."],
        [4, 20, "Voices of the Wind", "The howling gale carried whispers of the unknown."],
        [5, 21, "A Hidden Cave", "Inside, crystals sparkled like trapped starlight."],
        [5, 22, "The Open Road", "Each mile brought a new sense of freedom."],
        [5, 23, "A Quiet Morning", "Birdsong greeted the dawn with gentle melodies."],
        [5, 24, "Mysteries of the Night", "Shadows danced in the glow of the moon."],
        [5, 25, "The Forgotten Path", "Overgrown with weeds, it led to an ancient gate."]
    ]);

    sqlInsert("INSERT INTO comment (post_id, id,  name, body, email) VALUES ?", [
        [1, 1, "An insightful perspective", "This post really made me think differently.", "Nathan@yesenia.net"],
        [1, 2, "Well written!", "I couldnt agree more with the points you raised.", "Sincere@april.biz"],
        [1, 3, "Interesting take", "Your story about the forest reminded me of my childhood.", "Lucio_Hettinger@annie.ca"],
        [1, 4, "Great imagery!", "I felt like I was actually there, on that beach.", "Shanna@melissa.tv"],
        [1, 5, "Inspiring words", "This makes me want to go stargazing tonight.", "Julianne.OConner@kory.org"],
        [2, 6, "Relatable experience", "City life can be overwhelming, but also thrilling.", "Julianne.OConner@kory.org"],
        [2, 7, "A calming read", "I need to find a place like that park for myself.", "Lucio_Hettinger@annie.ca"],
        [2, 8, "Lovely description", "I could almost hear the sound of the river.", "Shanna@melissa.tv"],
        [2, 9, "Vivid sunset", "You captured the beauty of the horizon perfectly.", "Nathan@yesenia.net"],
        [2, 10, "Nostalgic", "Spring always brings back the best memories.", "Sincere@april.biz"],
        [3, 11, "Fascinating history", "I love learning about ancient ruins like these.", "Shanna@melissa.tv"],
        [3, 12, "Soothing", "Rainy afternoons are the best for reflection.", "Nathan@yesenia.net"],
        [3, 13, "Desert adventures", "Ive always wanted to explore the dunes.", "Lucio_Hettinger@annie.ca"],
        [3, 14, "Magical place", "Old libraries hold so much wonder.", "Sincere@april.biz"],
        [3, 15, "Intriguing mirror", "That story gave me chills in the best way.", "Julianne.OConner@kory.org"],
        [4, 16, "Atmospheric", "The lighthouse setting is so evocative.", "Lucio_Hettinger@annie.ca"],
        [4, 17, "Tales of bravery", "The captain's adventures sound legendary.", "Nathan@yesenia.net"],
        [4, 18, "A peaceful scene", "I can imagine sitting under that tree for hours.", "Shanna@melissa.tv"],
        [4, 19, "Winter beauty", "Snow has such a calming effect on me.", "Julianne.OConner@kory.org"],
        [4, 20, "Mysterious!", "The wind carries such eerie tales.", "Sincere@april.biz"],
        [5, 21, "Magical!", "That cave sounds like a treasure trove.", "Sincere@april.biz"],
        [5, 22, "Free spirit", "Your description of the open road is inspiring.", "Nathan@yesenia.net"],
        [5, 23, "Serene", "A quiet morning is the best way to start the day.", "Julianne.OConner@kory.org"],
        [5, 24, "Eerie and beautiful", "The night holds so many mysteries.", "Shanna@melissa.tv"],
        [5, 25, "Adventurous spirit", "The path you described sounds enchanting.", "Lucio_Hettinger@annie.ca"]
    ]);
     

});