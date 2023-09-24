import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebook,
    faInstagram,
    faSquarePinterest,
    faTwitter,
    faVimeo,
    faYoutube,
} from '@fortawesome/free-brands-svg-icons';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('footer')}>
            <div className={cx('footer_box')}>
                <div className={cx('footer-content')}>
                    <div className={cx('footer-content-left')}>
                        <pre>© 2023 JADON Events Management. All Rights Reserved. Powered by SHKN Design Co.</pre>
                    </div>
                    <div className={cx('footer-content-right')}>
                        <ul>
                            <li>
                                <a href="/">
                                    <i>
                                        {' '}
                                        <FontAwesomeIcon icon={faTwitter} />{' '}
                                    </i>
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <i>
                                        <FontAwesomeIcon icon={faFacebook} />
                                    </i>
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <i>
                                        <FontAwesomeIcon icon={faVimeo} />
                                    </i>
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <i>
                                        <FontAwesomeIcon icon={faSquarePinterest} />
                                    </i>
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <i>
                                        <FontAwesomeIcon icon={faYoutube} />
                                    </i>
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <i>
                                        <FontAwesomeIcon icon={faInstagram} />
                                    </i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
