import classNames from 'classnames/bind';
import styles from './NavigationBar.module.scss';
import 'animate.css';

const cx = classNames.bind(styles);
function NavigationBar() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('main-nav-container')}>
                <nav className={cx('navbar', 'grid')}>
                    <ul className={cx('navbar-nav')}>
                        <li className={cx('nav-item')}>
                            <a href="/" className={cx('nav-link')}>
                                HOME
                            </a>
                        </li>

                        <li className={cx('nav-item')}>
                            <a href="/" className={cx('nav-link')}>
                                ABOUT
                            </a>
                        </li>

                        <li className={cx('nav-item')}>
                            <a href="/" className={cx('nav-link')}>
                                CONTACT US
                            </a>
                        </li>

                        <li className={cx('nav-item')}>
                            <a href="/" className={cx('nav-link')}>
                                FEEDBACK
                            </a>
                        </li>
                    </ul>
                    <a className={cx('logo')} href="/">
                        LOGO
                    </a>
                    <ul className={cx('navbar-nav')}>
                        <li className={cx('nav-item', 'dropdown')}>
                            <a href="/" className={cx('nav-link')}>
                                SOCIAL
                            </a>
                            <ul className={cx('dropdown-menu')}>
                                <li>
                                    <a className={cx('dropdown-item')} href="/">
                                        WEDDINGS
                                    </a>
                                </li>
                                <li>
                                    <a className={cx('dropdown-item')} href="/">
                                        Matchs Result
                                    </a>
                                </li>
                            </ul>
                        </li>

                        <li className={cx('nav-item')}>
                            <a href="/" className={cx('nav-link')}>
                                WEDDINGS
                            </a>
                        </li>

                        <li className={cx('nav-item')}>
                            <a href="/" className={cx('nav-link')}>
                                NON-PROFIT
                            </a>
                        </li>

                        <li className={cx('nav-item')}>
                            <a href="/" className={cx('nav-link')}>
                                PORTFOLIO
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default NavigationBar;
