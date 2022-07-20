import customerRoutes from './CustomerRoutes';
import welcomeRoutes from './WelcomeRoutes';

const routes = (app) => {
    customerRoutes(app);
    welcomeRoutes(app);
}
 
export default routes