import queries from '../helpers/queries';
import query from './dbConnect';

const tableQueries = [queries.dropTables.userTable, queries.dropTables.sessionTable];

export default async function dropTables() {
    await tableQueries.reduce(async (promise, tableQuery) => {
        await promise;
        await query(tableQuery);
    }, Promise.resolve());
}

module.exports = { dropTables };
require('make-runnable');