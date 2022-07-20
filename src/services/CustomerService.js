import * as CustomerModel from '../models/Customer';

export const getAllData = async () => {
    const rows = await CustomerModel.getAllData();

    return rows;
}

export const create = async (data) => { 
    if (!data.name) throw new Error("Nama wajib diisi");

    await CustomerModel.create(data);
}