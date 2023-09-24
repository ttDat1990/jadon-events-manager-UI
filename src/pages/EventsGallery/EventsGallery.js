import classNames from 'classnames/bind';
import styles from './EventsGallery.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

const cx = classNames.bind(styles);

function EventsGallery() {
    return (
        <div className={cx('container')}>
            <div className={cx('img-header')}>
                <div className={cx('big-title')}>
                    <div>Events - Gallery</div>
                </div>
                <div className={cx('img-overlay')}></div>
                <img src="https://takeheartevents.com/wp-content/uploads/2019/01/WWMansion-13-of-123.jpg" alt="" />
            </div>
            <div className={cx('gallery')}>
                <div className={cx('gallery_content')}>
                    <div className={cx('gallery_nav')}>
                        <p>All</p>
                        <ul>
                            <li>Sort events:</li>
                            <li>
                                <a href="/">All</a>
                            </li>
                            <li>
                                <a href="/">Corporate</a>
                            </li>
                            <li>
                                <a href="/">Non-Profit</a>
                            </li>
                            <li>
                                <a href="/">Social</a>
                            </li>
                            <li>
                                <a href="/">Weddings</a>
                            </li>
                        </ul>
                    </div>

                    <div className={cx('gallery_listItems')}>
                        <div className={cx('gallery_listItems_1')}>
                            <div className={cx('work_box')}>
                                <div className={cx('work_item')}>
                                    <img
                                        src="https://takeheartevents.com/wp-content/uploads/2022/07/Overture_202205-0535.jpg"
                                        alt=""
                                    />
                                    <div className={cx('work_info_bg')}></div>
                                    <div className={cx('work_info')}>
                                        <div className={cx('vert_center')}>
                                            <a href="https://takeheartevents.com/wp-content/uploads/2022/07/Overture_202205-0535.jpg">
                                                View Lager
                                            </a>
                                            <a href="../galleryDetails/galleryDetails.html">More Details</a>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('tittle_name')}>
                                    <h4>Overture 2022</h4>
                                    <span>
                                        <i>
                                            <FontAwesomeIcon icon={faHeart} />
                                        </i>
                                    </span>
                                </div>
                            </div>
                            <div className={cx('work_box')}>
                                <div className={cx('work_item')}>
                                    <img
                                        src="https://takeheartevents.com/wp-content/uploads/2022/07/46EEA66E-A254-465C-AD67-AA40909D7098_1_105_c.jpeg"
                                        alt=""
                                    />
                                    <div className={cx('work_info_bg')}></div>
                                    <div className={cx('work_info')}>
                                        <div className={cx('vert_center')}>
                                            <a href="https://takeheartevents.com/wp-content/uploads/2022/07/46EEA66E-A254-465C-AD67-AA40909D7098_1_105_c.jpeg">
                                                View Lager
                                            </a>
                                            <a href="../galleryDetails/galleryDetails.html">More Details</a>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('tittle_name')}>
                                    <h4>New Smyrna NASCAR Roots FloRacing Fan Zone 2022</h4>
                                    <span>
                                        <FontAwesomeIcon icon={faHeart} />
                                    </span>
                                </div>
                            </div>
                            <div className={cx('work_box')}>
                                <div className={cx('work_item')}>
                                    <img
                                        src="https://takeheartevents.com/wp-content/uploads/2022/07/IMG_7428.jpeg"
                                        alt=""
                                    />
                                    <div className={cx('work_info_bg')}></div>
                                    <div className={cx('work_info')}>
                                        <div className={cx('vert_center')}>
                                            <a href="https://takeheartevents.com/wp-content/uploads/2022/07/IMG_7428.jpeg">
                                                View Lager
                                            </a>
                                            <a href="../galleryDetails/galleryDetails.html">More Details</a>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('tittle_name')}>
                                    <h4>Tulsa Chili Bowl FloRacing Fan Zone 2022</h4>
                                    <span>
                                        <FontAwesomeIcon icon={faHeart} />
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className={cx('gallery_listItems_1')}>
                            <div className={cx('work_box')}>
                                <div className={cx('work_item')}>
                                    <img
                                        src="https://takeheartevents.com/wp-content/uploads/2022/02/080B9EE3-23F1-4942-8BC0-FF1F20BBA968_1_201_a.jpg"
                                        alt=""
                                    />
                                    <div className={cx('work_info_bg')}></div>
                                    <div className={cx('work_info')}>
                                        <div className={cx('vert_center')}>
                                            <a href="https://takeheartevents.com/wp-content/uploads/2022/02/080B9EE3-23F1-4942-8BC0-FF1F20BBA968_1_201_a.jpg">
                                                View Lager
                                            </a>
                                            <a href="../galleryDetails/galleryDetails.html">More Details</a>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('tittle_name')}>
                                    <h4>BKL-Fest 2021</h4>
                                    <span>
                                        <FontAwesomeIcon icon={faHeart} />
                                    </span>
                                </div>
                            </div>
                            <div className={cx('work_box')}>
                                <div className={cx('work_item')}>
                                    <img
                                        src="https://takeheartevents.com/wp-content/uploads/2022/02/B0E91789-B15C-465F-8FAA-D2DE88F45A88_1_201_a.jpeg"
                                        alt=""
                                    />
                                    <div className={cx('work_info_bg')}></div>
                                    <div className={cx('work_info')}>
                                        <div className={cx('vert_center')}>
                                            <a href="https://takeheartevents.com/wp-content/uploads/2022/02/B0E91789-B15C-465F-8FAA-D2DE88F45A88_1_201_a.jpeg">
                                                View Lager
                                            </a>
                                            <a href="../galleryDetails/galleryDetails.html">More Details</a>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('tittle_name')}>
                                    <h4>Crocker/Sheffer Wedding 2021</h4>
                                    <span>
                                        <FontAwesomeIcon icon={faHeart} />
                                    </span>
                                </div>
                            </div>
                            <div className={cx('work_box')}>
                                <div className={cx('work_item')}>
                                    <img
                                        src="https://takeheartevents.com/wp-content/uploads/2020/09/E0446F21-C33C-4766-8F7D-7E5B0D25C343_1_201_a-1-600x403.jpeg"
                                        alt=""
                                    />
                                    <div className={cx('work_info_bg')}></div>
                                    <div className={cx('work_info')}>
                                        <div className={cx('vert_center')}>
                                            <a href="https://takeheartevents.com/wp-content/uploads/2020/09/E0446F21-C33C-4766-8F7D-7E5B0D25C343_1_201_a-1-600x403.jpeg">
                                                View Lager
                                            </a>
                                            <a href="../galleryDetails/galleryDetails.html">More Details</a>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('tittle_name')}>
                                    <h4>Hinkle/Cardwell Micro-Wedding 2021</h4>
                                    <span>
                                        <FontAwesomeIcon icon={faHeart} />
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className={cx('gallery_listItems_1')}>
                            <div className={cx('work_box')}>
                                <div className={cx('work_item')}>
                                    <img
                                        src="https://takeheartevents.com/wp-content/uploads/2021/07/6CD9948B-718F-4A98-812E-0DC0F765A37C_4_5005_c-1.jpeg"
                                        alt=""
                                    />
                                    <div className={cx('work_info_bg')}></div>
                                    <div className={cx('work_info')}>
                                        <div className={cx('vert_center')}>
                                            <a href="https://takeheartevents.com/wp-content/uploads/2022/07/IMG_7428.jpeg">
                                                View Lager
                                            </a>
                                            <a href="../galleryDetails/galleryDetails.html">More Details</a>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('tittle_name')}>
                                    <h4>Morales/Cook Wedding 2021</h4>
                                    <span>
                                        <FontAwesomeIcon icon={faHeart} />
                                    </span>
                                </div>
                            </div>
                            <div className={cx('work_box')}>
                                <div className={cx('work_item')}>
                                    <img
                                        src="https://takeheartevents.com/wp-content/uploads/2021/06/917B1356-B174-451F-811A-6FC84B4DDC36_1_105_c-600x403.jpeg"
                                        alt=""
                                    />
                                    <div className={cx('work_info_bg')}></div>
                                    <div className={cx('work_info')}>
                                        <div className={cx('vert_center')}>
                                            <a href="https://takeheartevents.com/wp-content/uploads/2022/07/IMG_7428.jpeg">
                                                View Lager
                                            </a>
                                            <a href="../galleryDetails/galleryDetails.html">More Details</a>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('tittle_name')}>
                                    <h4>Jen’s 40th Birthday Party 2021</h4>
                                    <span>
                                        <FontAwesomeIcon icon={faHeart} />
                                    </span>
                                </div>
                            </div>
                            <div className={cx('work_box')}>
                                <div className={cx('work_item')}>
                                    <img
                                        src="https://takeheartevents.com/wp-content/uploads/2021/07/A6541E67-9AB2-465E-BE0E-EDF56B507BAE_1_201_a-1.jpeg"
                                        alt=""
                                    />
                                    <div className={cx('work_info_bg')}></div>
                                    <div className={cx('work_info')}>
                                        <div className={cx('vert_center')}>
                                            <a href="https://takeheartevents.com/wp-content/uploads/2022/07/IMG_7428.jpeg">
                                                View Lager
                                            </a>
                                            <a href="../galleryDetails/galleryDetails.html">More Details</a>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('tittle_name')}>
                                    <h4>2019 Design Projects</h4>
                                    <span>
                                        <FontAwesomeIcon icon={faHeart} />
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className={cx('gallery_listItems_1')}>
                            <div className={cx('work_box')}>
                                <div className={cx('work_item')}>
                                    <img
                                        src="https://takeheartevents.com/wp-content/uploads/2020/09/967C8DA9-9F9E-4F6C-B5AF-2880BC7F2A3E_1_201_a-600x403.jpeg"
                                        alt=""
                                    />
                                    <div className={cx('work_info_bg')}></div>
                                    <div className={cx('work_info')}>
                                        <div className={cx('vert_center')}>
                                            <a href="https://takeheartevents.com/wp-content/uploads/2020/09/967C8DA9-9F9E-4F6C-B5AF-2880BC7F2A3E_1_201_a-600x403.jpeg">
                                                View Lager
                                            </a>
                                            <a href="../galleryDetails/galleryDetails.html">More Details</a>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('tittle_name')}>
                                    <h4>Chloe’s Quinceañera 2019</h4>
                                    <span>
                                        <FontAwesomeIcon icon={faHeart} />
                                    </span>
                                </div>
                            </div>
                            <div className={cx('work_box')}>
                                <div className={cx('work_item')}>
                                    <img
                                        src="https://takeheartevents.com/wp-content/uploads/2020/09/GenerationsStrong_11.15.19-232-600x403.jpg"
                                        alt=""
                                    />
                                    <div className={cx('work_info_bg')}></div>
                                    <div className={cx('work_info')}>
                                        <div className={cx('vert_center')}>
                                            <a href="https://takeheartevents.com/wp-content/uploads/2020/09/GenerationsStrong_11.15.19-232-600x403.jpg">
                                                View Lager
                                            </a>
                                            <a href="../galleryDetails/galleryDetails.html">More Details</a>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('tittle_name')}>
                                    <h4>Generations Strong Gala 2019</h4>
                                    <span>
                                        <FontAwesomeIcon icon={faHeart} />
                                    </span>
                                </div>
                            </div>
                            <div className={cx('work_box')}>
                                <div className={cx('work_item')}>
                                    <img
                                        src="https://takeheartevents.com/wp-content/uploads/2020/09/JC-413-1-600x403.jpg"
                                        alt=""
                                    />
                                    <div className={cx('work_info_bg')}></div>
                                    <div className={cx('work_info')}>
                                        <div className={cx('vert_center')}>
                                            <a href="https://takeheartevents.com/wp-content/uploads/2020/09/JC-413-1-600x403.jpg">
                                                View Lager
                                            </a>
                                            <a href="../galleryDetails/galleryDetails.html">More Details</a>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('tittle_name')}>
                                    <h4>Bryngelson/Boyd Wedding 2019</h4>
                                    <span>
                                        <FontAwesomeIcon icon={faHeart} />
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className={cx('gallery_listItems_1')}>
                            <div className={cx('work_box')}>
                                <div className={cx('work_item')}>
                                    <img
                                        src="https://takeheartevents.com/wp-content/uploads/2020/09/BF7B5613-8500-469C-AF63-AEF3EA765FD7_1_201_a-600x403.jpeg"
                                        alt=""
                                    />
                                    <div className={cx('work_info_bg')}></div>
                                    <div className={cx('work_info')}>
                                        <div className={cx('vert_center')}>
                                            <a href="https://takeheartevents.com/wp-content/uploads/2020/09/BF7B5613-8500-469C-AF63-AEF3EA765FD7_1_201_a-600x403.jpeg">
                                                View Lager
                                            </a>
                                            <a href="../galleryDetails/galleryDetails.html">More Details</a>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('tittle_name')}>
                                    <h4>Open House at 624 Events 2019</h4>
                                    <span>
                                        <FontAwesomeIcon icon={faHeart} />
                                    </span>
                                </div>
                            </div>
                            <div className={cx('work_box')}>
                                <div className={cx('work_item')}>
                                    <img
                                        src="https://takeheartevents.com/wp-content/uploads/2020/09/EE2A5796-600x403.jpg"
                                        alt=""
                                    />
                                    <div className={cx('work_info_bg')}></div>
                                    <div className={cx('work_info')}>
                                        <div className={cx('vert_center')}>
                                            <a href="https://takeheartevents.com/wp-content/uploads/2020/09/EE2A5796-600x403.jpg">
                                                View Lager
                                            </a>
                                            <a href="../galleryDetails/galleryDetails.html">More Details</a>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('tittle_name')}>
                                    <h4>July Five Chefs for the Farmers Market 2019</h4>
                                    <span>
                                        <FontAwesomeIcon icon={faHeart} />
                                    </span>
                                </div>
                            </div>
                            <div className={cx('work_box')}>
                                <div className={cx('work_item')}>
                                    <img
                                        src="https://takeheartevents.com/wp-content/uploads/2020/09/053A2428-600x403.jpg"
                                        alt=""
                                    />
                                    <div className={cx('work_info_bg')}></div>
                                    <div className={cx('work_info')}>
                                        <div className={cx('vert_center')}>
                                            <a href="https://takeheartevents.com/wp-content/uploads/2020/09/053A2428-600x403.jpg">
                                                View Lager
                                            </a>
                                            <a href="../galleryDetails/galleryDetails.html">More Details</a>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('tittle_name')}>
                                    <h4>June Five Chefs for the Farmers Market 2019</h4>
                                    <span>
                                        <FontAwesomeIcon icon={faHeart} />
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className={cx('gallery_listItems_1')}>
                            <div className={cx('work_box')}>
                                <div className={cx('work_item')}>
                                    <img
                                        src="https://takeheartevents.com/wp-content/uploads/2020/09/053A2371-1-600x403.jpg"
                                        alt=""
                                    />
                                    <div className={cx('work_info_bg')}></div>
                                    <div className={cx('work_info')}>
                                        <div className={cx('vert_center')}>
                                            <a href="https://takeheartevents.com/wp-content/uploads/2020/09/053A2371-1-600x403.jpg">
                                                View Lager
                                            </a>
                                            <a href="../galleryDetails/galleryDetails.html">More Details</a>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('tittle_name')}>
                                    <h4>Are You Smarter Than a KIPPster? 2019</h4>
                                    <span>
                                        <FontAwesomeIcon icon={faHeart} />
                                    </span>
                                </div>
                            </div>
                            <div className={cx('work_box')}>
                                <div className={cx('work_item')}>
                                    <img
                                        src="https://takeheartevents.com/wp-content/uploads/2020/09/019028B7-4044-474C-BBC1-A4C0AB149ECD_1_201_a-600x403.jpeg"
                                        alt=""
                                    />
                                    <div className={cx('work_info_bg')}></div>
                                    <div className={cx('work_info')}>
                                        <div className={cx('vert_center')}>
                                            <a href="https://takeheartevents.com/wp-content/uploads/2020/09/019028B7-4044-474C-BBC1-A4C0AB149ECD_1_201_a-600x403.jpeg">
                                                View Lager
                                            </a>
                                            <a href="../galleryDetails/galleryDetails.html">More Details</a>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('tittle_name')}>
                                    <h4>Superhero Soiree 2019</h4>
                                    <span>
                                        <FontAwesomeIcon icon={faHeart} />
                                    </span>
                                </div>
                            </div>
                            <div className={cx('work_box')}>
                                <div className={cx('work_item')}>
                                    <img
                                        src="https://takeheartevents.com/wp-content/uploads/2019/05/CANGala_April2019_SarahEliza-6-600x403.jpg"
                                        alt=""
                                    />
                                    <div className={cx('work_info_bg')}></div>
                                    <div className={cx('work_info')}>
                                        <div className={cx('vert_center')}>
                                            <a href="https://takeheartevents.com/wp-content/uploads/2019/05/CANGala_April2019_SarahEliza-6-600x403.jpg">
                                                View Lager
                                            </a>
                                            <a href="../galleryDetails/galleryDetails.html">More Details</a>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('tittle_name')}>
                                    <h4>Redbud Celebration 2019: Lip Sync Battle</h4>
                                    <span>
                                        <FontAwesomeIcon icon={faHeart} />
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className={cx('gallery_listItems_1')}>
                            <div className={cx('work_box')}>
                                <div className={cx('work_item')}>
                                    <img
                                        src="https://takeheartevents.com/wp-content/uploads/2019/05/Redbud-1098-600x403.jpg"
                                        alt=""
                                    />
                                    <div className={cx('work_info_bg')}></div>
                                    <div className={cx('work_info')}>
                                        <div className={cx('vert_center')}>
                                            <a href="https://takeheartevents.com/wp-content/uploads/2019/05/Redbud-1098-600x403.jpg">
                                                View Lager
                                            </a>
                                            <a href="../galleryDetails/galleryDetails.html">More Details</a>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('tittle_name')}>
                                    <h4>Conley’s Bat Mitzvah 2019</h4>
                                    <span>
                                        <FontAwesomeIcon icon={faHeart} />
                                    </span>
                                </div>
                            </div>
                            <div className={cx('work_box')}>
                                <div className={cx('work_item')}>
                                    <img
                                        src="https://takeheartevents.com/wp-content/uploads/2019/05/56951143_10219570563561100_6723324337526407168_o-600x403.jpg"
                                        alt=""
                                    />
                                    <div className={cx('work_info_bg')}></div>
                                    <div className={cx('work_info')}>
                                        <div className={cx('vert_center')}>
                                            <a href="https://takeheartevents.com/wp-content/uploads/2019/05/56951143_10219570563561100_6723324337526407168_o-600x403.jpg">
                                                View Lager
                                            </a>
                                            <a href="../galleryDetails/galleryDetails.html">More Details</a>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('tittle_name')}>
                                    <h4>McWaters/Borders Wedding 2018</h4>
                                    <span>
                                        <FontAwesomeIcon icon={faHeart} />
                                    </span>
                                </div>
                            </div>
                            <div className={cx('work_box')}>
                                <div className={cx('work_item')}>
                                    <img
                                        src="https://takeheartevents.com/wp-content/uploads/2019/01/DSC03716-600x403.jpg"
                                        alt=""
                                    />
                                    <div className={cx('work_info_bg')}></div>
                                    <div className={cx('work_info')}>
                                        <div className={cx('vert_center')}>
                                            <a href="https://takeheartevents.com/wp-content/uploads/2019/01/DSC03716-600x403.jpg">
                                                View Lager
                                            </a>
                                            <a href="../galleryDetails/galleryDetails.html">More Details</a>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('tittle_name')}>
                                    <h4>Hogan Holiday Party 2018</h4>
                                    <span>
                                        <FontAwesomeIcon icon={faHeart} />
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className={cx('gallery_listItems_1')}>
                            <div className={cx('work_box')}>
                                <div className={cx('work_item')}>
                                    <img
                                        src="https://takeheartevents.com/wp-content/uploads/2019/01/053A7206-600x403.jpg"
                                        alt=""
                                    />
                                    <div className={cx('work_info_bg')}></div>
                                    <div className={cx('work_info')}>
                                        <div className={cx('vert_center')}>
                                            <a href="https://takeheartevents.com/wp-content/uploads/2019/01/053A7206-600x403.jpg">
                                                View Lager
                                            </a>
                                            <a href="/">More Details</a>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('tittle_name')}>
                                    <h4>Kane/Wilson Wedding 2018</h4>
                                    <span>
                                        <FontAwesomeIcon icon={faHeart} />
                                    </span>
                                </div>
                            </div>
                            <div className={cx('work_box')}>
                                <div className={cx('work_item')}>
                                    <img
                                        src="https://takeheartevents.com/wp-content/uploads/2019/01/Wil-633-1-600x403.jpg"
                                        alt=""
                                    />
                                    <div className={cx('work_info_bg')}></div>
                                    <div className={cx('work_info')}>
                                        <div className={cx('vert_center')}>
                                            <a href="https://takeheartevents.com/wp-content/uploads/2019/01/Wil-633-1-600x403.jpg">
                                                View Lager
                                            </a>
                                            <a href="/">More Details</a>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('tittle_name')}>
                                    <h4>Shearer/Powell Wedding 2018</h4>
                                    <span>
                                        <FontAwesomeIcon icon={faHeart} />
                                    </span>
                                </div>
                            </div>
                            <div className={cx('work_box')}>
                                <div className={cx('work_item')}>
                                    <img
                                        src="https://takeheartevents.com/wp-content/uploads/2019/01/IMG_0240-600x403.jpg"
                                        alt=""
                                    />
                                    <div className={cx('work_info_bg')}></div>
                                    <div className={cx('work_info')}>
                                        <div className={cx('vert_center')}>
                                            <a href="https://takeheartevents.com/wp-content/uploads/2019/01/IMG_0240-600x403.jpg">
                                                View Lager
                                            </a>
                                            <a href="/">More Details</a>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('tittle_name')}>
                                    <h4>Summer Open House at The Mansion 2018</h4>
                                    <span>
                                        <FontAwesomeIcon icon={faHeart} />
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className={cx('gallery_listItems_1')}>
                            <div className={cx('work_box')}>
                                <div className={cx('work_item')}>
                                    <img
                                        src="https://takeheartevents.com/wp-content/uploads/2019/01/WWMansion-13-of-123-600x403.jpg"
                                        alt=""
                                    />
                                    <div className={cx('work_info_bg')}></div>
                                    <div className={cx('work_info')}>
                                        <div className={cx('vert_center')}>
                                            <a href="https://takeheartevents.com/wp-content/uploads/2019/01/WWMansion-13-of-123-600x403.jpg">
                                                View Lager
                                            </a>
                                            <a href="/">More Details</a>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('tittle_name')}>
                                    <h4>Redbud Celebration 2018: Lip Sync Battle</h4>
                                    <span>
                                        <FontAwesomeIcon icon={faHeart} />
                                    </span>
                                </div>
                            </div>
                            <div className={cx('work_box')}>
                                <div className={cx('work_item')}>
                                    <img
                                        src="https://takeheartevents.com/wp-content/uploads/2019/01/Screen-Shot-2019-01-06-at-2.20.05-AM-600x403.png"
                                        alt=""
                                    />
                                    <div className={cx('work_info_bg')}></div>
                                    <div className={cx('work_info')}>
                                        <div className={cx('vert_center')}>
                                            <a href="https://takeheartevents.com/wp-content/uploads/2019/01/Screen-Shot-2019-01-06-at-2.20.05-AM-600x403.png">
                                                View Lager
                                            </a>
                                            <a href="/">More Details</a>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('tittle_name')}>
                                    <h4>Are You Smarter Than a KIPPster? 2018</h4>
                                    <span>
                                        <FontAwesomeIcon icon={faHeart} />
                                    </span>
                                </div>
                            </div>
                            <div className={cx('work_box')}>
                                <div className={cx('work_item')}>
                                    <img
                                        src="https://takeheartevents.com/wp-content/uploads/2019/01/Screen-Shot-2019-01-06-at-3.23.00-AM-600x403.png"
                                        alt=""
                                    />
                                    <div className={cx('work_info_bg')}></div>
                                    <div className={cx('work_info')}>
                                        <div className={cx('vert_center')}>
                                            <a href="https://takeheartevents.com/wp-content/uploads/2019/01/Screen-Shot-2019-01-06-at-3.23.00-AM-600x403.png">
                                                View Lager
                                            </a>
                                            <a href="/">More Details</a>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('tittle_name')}>
                                    <h4>Dutcher/Bartley Wedding 2018</h4>
                                    <span>
                                        <FontAwesomeIcon icon={faHeart} />
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className={cx('gallery_listItems_1')}>
                            <div className={cx('work_box')}>
                                <div className={cx('work_item')}>
                                    <img
                                        src="https://takeheartevents.com/wp-content/uploads/2018/03/053A3174-600x403.jpg"
                                        alt=""
                                    />
                                    <div className={cx('work_info_bg')}></div>
                                    <div className={cx('work_info')}>
                                        <div className={cx('vert_center')}>
                                            <a href="https://takeheartevents.com/wp-content/uploads/2018/03/053A3174-600x403.jpg">
                                                View Lager
                                            </a>
                                            <a href="/">More Details</a>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('tittle_name')}>
                                    <h4>Potter-Fest: a Festival of Secrets 2017</h4>
                                    <span>
                                        <FontAwesomeIcon icon={faHeart} />>
                                    </span>
                                </div>
                            </div>
                            <div className={cx('work_box')}>
                                <div className={cx('work_item')}>
                                    <img
                                        src="https://takeheartevents.com/wp-content/uploads/2017/11/22861634_296810427490233_8762548802253726136_o-600x403.jpg"
                                        alt=""
                                    />
                                    <div className={cx('work_info_bg')}></div>
                                    <div className={cx('work_info')}>
                                        <div className={cx('vert_center')}>
                                            <a href="https://takeheartevents.com/wp-content/uploads/2017/11/22861634_296810427490233_8762548802253726136_o-600x403.jpg">
                                                View Lager
                                            </a>
                                            <a href="/">More Details</a>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('tittle_name')}>
                                    <h4>Bond/Hansen Wedding 2017</h4>
                                    <span>
                                        <FontAwesomeIcon icon={faHeart} />
                                    </span>
                                </div>
                            </div>
                            <div className={cx('work_box')}>
                                <div className={cx('work_item')}>
                                    <img
                                        src="https://takeheartevents.com/wp-content/uploads/2017/11/IMG_3595-600x403.jpg"
                                        alt=""
                                    />
                                    <div className={cx('work_info_bg')}></div>
                                    <div className={cx('work_info')}>
                                        <div className={cx('vert_center')}>
                                            <a href="https://takeheartevents.com/wp-content/uploads/2017/11/IMG_3595-600x403.jpg">
                                                View Lager
                                            </a>
                                            <a href="/">More Details</a>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('tittle_name')}>
                                    <h4>Taste of THA 2017</h4>
                                    <span>
                                        <FontAwesomeIcon icon={faHeart} />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EventsGallery;
