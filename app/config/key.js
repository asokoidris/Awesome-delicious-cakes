require ('dotenv').config();

module.exports = {
Port: process.env.PORT,
DATA_DB: process.env.DATABASE_URI,
TEST_DB: process.env.TEST_DB,
PRODUCTION_DB: process.env.PRODUCTION_DB,
JWTSECRET: process.env.JWTSECRET,
}