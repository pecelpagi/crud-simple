import * as customerService from '../services/CustomerService';

export const getCustomers = async (req, res) => {
    try {
        const data = await customerService.getAllData();

        res.status(200).json({
            status: true,
            data,
            message: 'get customers successfully'
        });
    } catch (err) {
        res.status(500).json({ status: false, message: err.message });
    }
}

export const create = async (req, res) => {
    try {
        await customerService.create(req.body);
        res.status(200).json({
            status: true,
            message: req.body
        });
    } catch (err) {
        res.status(500).json({ status: false, message: err.message });
    }
}


export const deleteData = async (req, res) => {
    try {
        await customerService.deleteData(req.body);
        res.status(200).json({
            status: true,
            message: req.body
        });
    } catch (err) {
        res.status(500).json({ status: false, message: err.message });
    }
}

export const updateData = async (req, res) => {
    try {
        await customerService.updateData(req.body);
        res.status(200).json({
            status: true,
            message: req.body
        });
    } catch (err) {
        res.status(500).json({ status: false, message: err.message });
    }
}
