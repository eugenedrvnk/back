const { getObjectId } = require("mongo-seeding");
const names = ["John", "Joanne", "Bob", "Will", "Chris", "Mike", "Anna", "Jack", "Peter", "Paul"];
const min = 18;
const max = 100;

module.exports = names.map(name => ({
    name: name,
    price: Math.floor(Math.random() * (max - min + 1)) + min,
    _id: getObjectId(name),
}))