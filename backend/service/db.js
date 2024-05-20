const oracledb = require('oracledb');

async function createConnection() {
    try {
        const connection = await oracledb.getConnection({
            user: "son",
            password: "123456",
            connectString: "localhost/orcl"
        });

        console.log('Connected to Oracle successfully');
        return connection;
    } catch (err) {
        console.error(err.message);
        return;
    }
}

module.exports = createConnection();