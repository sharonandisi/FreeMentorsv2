import query from '../db/dbConnect';
import queries from '../helpers/queries';

async function sessionCreate({ mentorid, questions }, menteeEmail) {
    const values = [mentorid, menteeEmail, questions]
    const { rows } = await query(queries.sessions.postSession, values)
    return rows[0];

}

async function findOne(id) {
    const values = [id]
    const { rows } = await query(queries.sessions.findOne, values)
    if (rows) {
        return rows[0];
    }
    return false
}

async function findmenteeSession(id) {
    const values = [id]
    const { rows } = await query(queries.sessions.findmenteeSession, values)
    if (rows) {
        return rows[0];
    }
    return false
}

async function findmentorSession(id) {
    const values = [id]
    const { rows } = await query(queries.sessions.findmentorSession, values)
    if (rows) {
        return rows;
    }
    return false
}

async function decline(id) {
    const values = [id]
    const { rows } = await query(queries.sessions.decline, values)
    return rows[0]
}

async function accept(id) {
    const values = [id]
    const { rows } = await query(queries.sessions.accept, values)
    return rows[0]
}

module.exports = {
    sessionCreate,
    findOne,
    findmenteeSession,
    findmentorSession,
    decline,
    accept
}