const { Pool } = require ('pg');
const dotenv = require('dotenv');


dotenv.config();

const env = process.env.NODE_ENV

const databaseUrl = env === 'test' ? process.env.DATABASE_URL_TEST : process.env.DATABASE_URL


const pool = new Pool({
    connectionString: databaseUrl
});

pool.on('connect', () => {
    console.log('connected to the db');
});

/**
 * create the Users Table
 */

 const createUserTable = () => {
     const queryText = 
     `CREATE TABLE IF NOT EXISTS
     users(
         id SERIAL PRIMARY KEY,
         firstname VARCHAR(128) NOT NULL,
         lastname VARCHAR(128) NOT NULL,
         email VARCHAR(128) UNIQUE NOT NULL,
         address VARCHAR(128) NOT NULL,
         occupation VARCHAR(128) NOT NULL,
         bio VARCHAR(356) NOT NULL,
         expertise VARCHAR(128) NOT NULL,
         password VARCHAR(256) NOT NULL,
         mentorstatus BOOL DEFAULT 'false',
         isAdmin BOOL DEFAULT 'false'
     )`;

     pool.query(queryText)
         .then((res) => {
             pool.end();
         })
         .catch((err) => {
             pool.end();
         });
 };

 /**
  * Create the sessions table
  */

  const createSessionTable = () => {
    const queryText = 
    `CREATE TABLE IF NOT EXISTS sessions(
        id SERIAL PRIMARY KEY,
        mentorid INTEGER,
        menteeEmail VARCHAR(128) NOT NULL,
        sessionstatus VARCHAR(64) DEFAULT 'pending',
        questions VARCHAR(356) NOT NULL,
        FOREIGN KEY (menteeEmail) REFERENCES users(email) ON DELETE CASCADE,
        FOREIGN KEY (mentorid) REFERENCES users(id) ON DELETE CASCADE    
    )`;

    pool.query(queryText)
        .then((res) => {
            pool.end();
        })
        .catch((err) => {
            pool.end();
        });
  };

  /**
   * drop user table
   */

  const dropUserTable = () => {
      const queryText = 'DROP TABLE IF EXISTS users CASCADE';
      pool.query(queryText)
        .then((res) => {
            pool.end();
        })
        .catch((err) => {
            pool.end();
        });
  }

  /**
   * drop session table
   */

   const dropSessionTable = () => {
       const queryText = 'DROP TABLE IF EXISTS sessions CASCADE';

       pool.query(queryText)
        .then((res) => {
            pool.end();
        })
        .catch((err) => {
            pool.end();
        });
   }



  /**
   * create all tables
   */

   const createAllTables = () => {
       createUserTable();
       createSessionTable();
   };

   /**
    * Drop all tables
    */

    const dropAllTables = () => {
        dropUserTable();
        dropSessionTable();
    }

    pool.on('remove', () => {
        process.exit(0);
    });

    module.exports = {
        createUserTable,
        createSessionTable,
        createAllTables,
        dropUserTable,
        dropSessionTable,
        dropAllTables
    };

    require('make-runnable');
