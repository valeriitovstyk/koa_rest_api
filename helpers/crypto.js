const bcrypt = require('bcrypt');

module.exports = encrypt = (password) => bcrypt.hash(password, 5);
module.exports = hashIsCorrect = async (requestPass, dbPass) => {return await bcrypt.compare(requestPass, dbPass)};
