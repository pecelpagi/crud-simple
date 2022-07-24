import bodyParser from "body-parser";
import * as Db from "../../db";

export const getAllData = async () => {
    let queryString = 'SELECT * FROM Customers';

    const connection = await Db.getConnection();
    const [results] = await connection.execute(queryString);

    return results;
}

export const create = async (data) => {
    const queryString = `
        INSERT INTO Customers (name, addr, phone) 
        VALUES (?, ?, ?)
    `;

    const values = [
        data.name,
        data.addr,
        data.phone,
    ];

    const connection = await Db.getConnection();
    await connection.execute(queryString, values);
}

export const deleteData = async (customerId) => {
    const queryString =
        `DELETE FROM Customers WHERE id = ?`
        ;

    const values = [
        customerId,
    ];

    const connection = await Db.getConnection();
    await connection.execute(queryString, values);
}

export const updateData = async (data) => {

    const queryString = `UPDATE Customers SET name=?, addr=?, phone=? WHERE id=?`;

    const values = [
        data.name,
        data.addr,
        data.phone,
        data.id,
    ];

    const connection = await Db.getConnection();
    await connection.execute(queryString, values);
}
