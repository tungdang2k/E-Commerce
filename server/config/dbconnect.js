const { default: mongoose } = require('mongoose')

const dbconnect = async () => {

    try {

        const conn = await mongoose.connect(process.env.MONGODB_URI)
        if (conn.connection.readyState === 1) console.log('DB connection is sucssessfully')
        else console.log('DB connecting');


    } catch (error) {
        console.log('DB Connection is failed');
        throw new Error(error)
    }
}

module.exports = dbconnect