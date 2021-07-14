// const { Seeder } = require('mongo-seeding');
// const config = {
//     database: {
//         host: '127.0.0.1',
//         port: 27017,
//         name: 'Cluster0',
//     },
//     dropDatabase: true,
// };
//
// const seeder = new Seeder(config);


const { Seeder } = require('mongo-seeding')
const path = require('path')
const config = {
    database: 'mongodb+srv://admin:123456p@cluster0.3wspm.mongodb.net/Cluster0?retryWrites=true&w=majority',
    inputPath: path.resolve(__dirname, './data'),
    dropDatabase: true
}
const seeder = new Seeder(config)
const collections = seeder.readCollectionsFromPath(path.resolve('./data'))

const main = async () => {
    try {
        await seeder.import(collections)
        console.log('Seed complete!')
        process.exit(0)
    } catch (err) {
        console.log(err)
        process.exit(0)
    }
}

main()