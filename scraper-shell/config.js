var config = {
    mysql: {
        master: {
            user: process.env.MYSQL_USER,
            password: process.env.MYSQL_PASS,
            database: 'court_appointed_attorneys',
            host: process.env.MYSQL_HOST,
            port: 3306,
        },
        slaves: [{
            user: process.env.MYSQL_USER,
            password: process.env.MYSQL_PASS,
            database: 'court_appointed_attorneys',
            host: process.env.MYSQL_HOST,
            port: 3306,
        }],
        logging: true
    }
};

module.exports = config;
