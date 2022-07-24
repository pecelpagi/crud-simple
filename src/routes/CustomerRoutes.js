import * as controller from '../controllers/CustomerController';
import { addPrefix } from './util';

const routes = (app) => {
    app.route(addPrefix('/customer'))
    .get(controller.getCustomers)
    .post(controller.create)
    .delete(controller.deleteData)
    .put(controller.updateData)
}
 
export default routes;