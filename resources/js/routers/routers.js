import customerRouter from './customerRouter';
import AppRoot from '../components/App';

const routes = [
    {path: '/', component: AppRoot},
    ...customerRouter,
];

export default routes;