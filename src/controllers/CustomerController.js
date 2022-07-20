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
