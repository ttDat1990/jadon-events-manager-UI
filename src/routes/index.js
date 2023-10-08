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
import EventsGallery from '~/pages/EventsGallery';
import Corporate from '~/pages/Corporate';
import AdminSlidesListPage from '~/pages/AdminSlidesListPage';
import AdminPressReviewsAddPage from '~/pages/AdminPressReviewsAddPage';
import AdminPressReviewsListPage from '~/pages/AdminPressReviewsListPage';
import AdminPressReviewsUpdatePage from '~/pages/AdminPressReviewsUpdatePage';
import AdminEventsDetailPage from '~/pages/AdminEventsDetailPage';
import EventDetailPage from '~/pages/EventDetailPage';
import PressReview from '~/pages/PressReview';
import PressDetailPage from '~/pages/PressDetailPage';
import UserLogin from '~/pages/UserLogin';
import Register from '~/pages/Register/Register';
import UserEvents from '~/pages/UserEvents';
import AdminContactsPage from '~/pages/AdminContactsPage';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/contact-us', component: ContactUs },
    { path: '/corporate', component: Corporate },
    { path: '/feedback', component: Feedback },
    { path: '/social', component: Social },
    { path: '/weddings', component: Weddings },
    { path: '/non-profit', component: NonProfit },
    { path: '/portfolio', component: Portfolio },
    { path: '/events-gallery', component: EventsGallery },
    { path: '/event-details/:id', component: EventDetailPage },
    { path: '/press-review', component: PressReview },
    { path: '/press-details/:id', component: PressDetailPage },
    { path: '/admin/login', component: AdminLogin, layout: null },
    { path: '/user/login', component: UserLogin },
    { path: '/register', component: Register },
];

const adminRoutes = [
    { path: '/home', component: Admin },
    { path: '/listCategory', component: AdminCategoriesListPage },
    { path: '/listSlide', component: AdminSlidesListPage },
    { path: '/addEvent', component: AdminEventsAddPage },
    { path: '/listEvents', component: AdminEventsListPage },
    { path: '/detailEvent/:id', component: AdminEventsDetailPage },
    { path: '/addUser', component: AdminUsersAddPage },
    { path: '/listUsers', component: AdminUsersListPage },
    { path: '/addPressReview', component: AdminPressReviewsAddPage },
    { path: '/listPressReview', component: AdminPressReviewsListPage },
    { path: '/updatePressReview/:id', component: AdminPressReviewsUpdatePage },
    { path: '/adminContacts', component: AdminContactsPage },
];

const userRoutes = [{ path: '/user-events/:userId', component: UserEvents }];

export { adminRoutes, userRoutes, publicRoutes };
