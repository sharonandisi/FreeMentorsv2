import query from '../db/dbConnect';
import queries from '../helpers/queries';


async function create({ firstname, lastname, email, address, bio, occupation, expertise }, password) {
    const values = [firstname, lastname, email, password, address, bio, occupation, expertise]
    const { rows } = await query(queries.users.userSignup, values);
    return rows[0];
}

async function createAdmin({ firstname, lastname, email, password, address, bio, occupation, expertise, isAdmin }) {
    const values = [firstname, lastname, email, password, address, bio, occupation, expertise, isAdmin]
    const { rows } = await query(queries.users.createAdmin, values);
    return rows[0];
}

async function findByEmail(email) {
    const values = [email]
    const { rows } = await query(queries.users.findByEmail, values)
    if (rows) {
        return rows[0];
    }
    return false
}

async function findOne(id) {
    const values = [id]
    const { rows } = await query(queries.users.findOne, values)
    if (rows) {
        return rows[0];
    }
    return false
}

async function changeMentor(id) {
    const values = [id]
    const { rows } = await query(queries.users.changeMentor, values)
    return rows[0]
}

async function findMentor() {
    console.log('here')
    const { rows } = await query(queries.users.findMentor)
    if (rows) {
        return rows
    }
    return false
}




module.exports = {
    create,
    createAdmin,
    findByEmail,
    findOne,
    changeMentor,
    findMentor
}