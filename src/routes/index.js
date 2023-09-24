import Home from '~/pages/Home';
import Admin from '~/pages/Admin';
import About from '~/pages/About';
import ContactUs from '~/pages/ContactUs';
import Feedback from '~/pages/Feedback';
import Social from '~/pages/Social';
import Weddings from '~/pages/Weddings';
import NonProfit from '~/pages/NonProfit';
import Portfolio from '~/pages/Portfolio';
import AdminLogin from '~/pages/AdminLogin';
import AdminCategoriesListPage from '~/pages/AdminCategoriesListPage';
import AdminEventsAddPage from '~/pages/AdminEventsAddPage';
import AdminEventsListPage from '~/pages/AdminEventsListPage';
import AdminUsersListPage from '~/pages/AdminUsersListPage';
import AdminUsersAddPage from '~/pages/AdminUsersAddPage';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/contact-us', component: ContactUs },
    { path: '/feedback', component: Feedback },
    { path: '/social', component: Social },
    { path: '/weddings', component: Weddings },
    { path: '/non-profit', component: NonProfit },
    { path: '/portfolio', component: Portfolio },
    { path: '/admin/login', component: AdminLogin, layout: null },
];

const adminRoutes = [
    { path: '/home', component: Admin },
    { path: '/listCategory', component: AdminCategoriesListPage },
    { path: '/addEvent', component: AdminEventsAddPage },
    { path: '/listEvents', component: AdminEventsListPage },
    { path: '/listUsers', component: AdminUsersListPage },
    { path: '/addUser', component: AdminUsersAddPage },
];

const userRoutes = [];

export { adminRoutes, userRoutes, publicRoutes };
