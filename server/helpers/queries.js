const queries = {
    users: {
        userSignup: `INSERT INTO
        users(firstname, lastname, email, password, address, bio, occupation, expertise)
        VALUES($1, $2, $3, $4, $5, $6, $7, $8)
        returning*`,
        createAdmin: `INSERT INTO 
        users(firstname, lastname, email, password, address, bio, occupation, expertise, isAdmin)
        VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9)
        returning*`,
        findOne: `SELECT * FROM users WHERE id = $1`,
        findByEmail: `SELECT * FROM users WHERE email =$1`,
        changeMentor: `UPDATE users SET mentorstatus = 'true' WHERE id =$1 returning *`,
        findMentor: `SELECT * FROM users WHERE mentorstatus = 'true'`
    },

    sessions: {
        postSession: `INSERT INTO sessions(mentorid, menteeEmail, questions)
        VALUES($1, $2, $3)
        returning*`,
        findOne: `SELECT * FROM sessions WHERE id =$1`,
        findmenteeSession: `SELECT * FROM sessions WHERE menteeEmail = $1`,
        findmentorSession: `SELECT * FROM sessions WHERE mentorid = $1`,
        decline: `UPDATE sessions SET sessionstatus = 'rejected' WHERE id =$1 returning *`,
        accept: `UPDATE sessions SET sessionstatus = 'accepted' WHERE id =$1 returning *`
    },

    createTables: {
        userTable: `CREATE TABLE IF NOT EXISTS users(id SERIAL PRIMARY KEY,firstname VARCHAR(128) NOT NULL,lastname VARCHAR(128) NOT NULL,email VARCHAR(128) UNIQUE NOT NULL,address VARCHAR(128) NOT NULL,occupation VARCHAR(128) NOT NULL,bio VARCHAR(356) NOT NULL,expertise VARCHAR(128) NOT NULL,password VARCHAR(256) NOT NULL,mentorstatus BOOL DEFAULT 'false',isAdmin BOOL DEFAULT 'false')`,
        sessionTable: `CREATE TABLE IF NOT EXISTS sessions(id SERIAL PRIMARY KEY,mentorid INTEGER,menteeEmail VARCHAR(128) NOT NULL,sessionstatus VARCHAR(64) DEFAULT 'pending',
        questions VARCHAR(356) NOT NULL,FOREIGN KEY (menteeEmail) REFERENCES users(email) ON DELETE CASCADE,FOREIGN KEY (mentorid) REFERENCES users(id) ON DELETE CASCADE)`
    },

    dropTables: {
        userTable: `DROP TABLE IF EXISTS users CASCADE`,
        sessionTable: `DROP TABLE IF EXISTS sessions CASCADE`
    }

}

module.exports = queries;