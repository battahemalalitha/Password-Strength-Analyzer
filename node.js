const bcrypt = require('bcrypt');

const password = "Hema@2026";

bcrypt.hash(password, 10, function(err, hash) {
    console.log(hash);
});