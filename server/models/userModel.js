import db from "../db";


class User {
    /**
     * Create A user
     * @param {object} req
     * @param {object} res
     * @returns {objet} user object
     */

     static async create({ firstname, lastname, email, password, address, bio, occupation, expertise }) {
        const createQuery =  `INSERT INTO
        users(firstname, lastname, email, password, address, bio, occupation, expertise)
        VALUES($1, $2, $3, $4, $5, $6, $7, $8)
        returning*` 
         const values = [firstname,lastname,email,password,address,bio,occupation,expertise]
         const { rows } = await db.query(createQuery, values);
         return rows;
    }
}
    
export default User;