import * as Db from "../../db";

export const getAllData = async () => {
    let queryString = 'SELECT * FROM Customers';

    const connection = await Db.getConnection();
    const [results] = await connection.execute(queryString);

    return results;
}