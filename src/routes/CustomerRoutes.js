import * as controller from '../controllers/CustomerController';
import { addPrefix } from './util';

const routes = (app) => {
    app.route(addPrefix('/customers')).get(controller.getCustomers)
}
 
export default routes;