import query from './dbConnect';
import queries from '../helpers/queries';

const tableQueries = [
    queries.createTables.userTable,
    queries.createTables.sessionTable,
];

export default async function createTables() {
    await tableQueries.reduce(async (promise, tableQuery) => {
        await promise;
        await query(tableQuery);
    }, Promise.resolve())
}

module.exports = { createTables };
require('make-runnable');