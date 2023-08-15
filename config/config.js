
const crypto = require('crypto');
const secretKey = crypto.randomBytes(32).toString('hex');

console.log(secretKey);

module.exports = {
    secretKey: "be93cf2fec0c9a9d6728359d907f711501f03f3bed3bcc5b047ce7e828aa37e8",
};