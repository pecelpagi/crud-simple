import * as CustomerModel from '../models/Customer';

export const getAllData = async () => {
    const rows = await CustomerModel.getAllData();

    return rows;
}
