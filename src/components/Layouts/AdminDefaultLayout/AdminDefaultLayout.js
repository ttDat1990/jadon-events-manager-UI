import AdminSidebar from '~/components/Layouts/components/AdminSidebar';
import classNames from 'classnames/bind';
import styles from './AdminDefaultLayout.module.scss';

const cx = classNames.bind(styles);

function AdminDefaultLayout({ children }) {
    return (
        <div className={cx('container')}>
            <header className={cx('sidebar')}>
                <AdminSidebar />
            </header>

            <div className={cx('content')}>
                <div className={cx('padding-bar')}></div>
                <div className={cx('main-content')}>{children}</div>
            </div>
        </div>
    );
}

export default AdminDefaultLayout;
