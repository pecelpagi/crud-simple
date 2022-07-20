import { home } from '../controllers/WelcomeController';
import { addPrefix } from './util';

const routes = (app) => {
    app.route(addPrefix()).get(home);
    app.route('/').get(home);
}
 
export default routes;