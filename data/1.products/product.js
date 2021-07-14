const faker = require('faker')

const {getObjectId} = require("mongo-seeding");
const countries = ['USA', 'Germany', 'Ukraine', 'China']
const min = 18;
const max = 100;

module.exports = [...Array(100)].map(() => {
    const name = faker.unique(faker.commerce.productName);
    return {
        name,
        price: Math.floor(Math.random() * (max - min + 1)) + min,
        country: countries[Math.floor(Math.random() * 4)],
        _id: getObjectId(name)
    }
})