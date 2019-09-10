import db from "../db";


class User {
    /**
     * Create A user
     * @param {object} req
     * @param {object} res
     * @returns {objet} user object
     */

     static async create({firstname, lastname, email, password, address, bio, occupation, expertise }) {
        const createQuery =  `INSERT INTO
        users(firstname, lastname, email, password, address, bio, occupation, expertise)
        VALUES($1, $2, $3, $4, $5, $6, $7, $8)
        returning*` 
         const values = [firstname,lastname,email,password,address,bio,occupation,expertise]
         const { rows } = await db.query(createQuery, values);
         return rows;
    }

    static async createAdmin({ firstname, lastname, email, password, address, bio, occupation, expertise, isAdmin}) {
        const createQuery = `INSERT INTO
        users(firstname, lastname, email, password, address, bio, occupation, expertise, isAdmin)
        VALUES($1, $2, $3, $4, $5, $6, $7, $8)
        returning*`
        const values = [firstname, lastname, email, password, address, bio, occupation, expertise, isAdmin]
        const { rows } = await db.query(createQuery, values);
        return rows;
    }

    static async login(email) {
        const query = `SELECT * FROM users WHERE email = $1`;
        const values = [email]
        const { rows } = await db.query(query, values)
        if (rows) {
        return rows[0];
        }
        return false
    }

    static async findByEmail(email) {
        const query = `SELECT FROM users WHERE email = $1`
        const values = [email]
        const { rows } = await db.query(query, values)
        if (rows) {
            return rows[0];
        }
        return false
    }

    static async findAdmin(id) {
        const query = `SELECT FROM users WHERE isAdmin IS TRUE`
        const values = [isAdmin]
        const { rows } = await db.query(query, values)
        if (rows) {
            return rows[0];
        }
        return false
    }
}
    
export default User;