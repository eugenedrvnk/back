const faker = require('faker')
const bcrypt = require("bcrypt");

const {getObjectId} = require("mongo-seeding");

module.exports = [
    {
        email: 'test@test.test',
        password: '$2b$10$1m7wF2ldN6o.DfQkOhvUIOv/VNxMXhbNElnNvd5dqZ26A1VxMH.cO',
        _id: getObjectId('test@test.test')
    }
]