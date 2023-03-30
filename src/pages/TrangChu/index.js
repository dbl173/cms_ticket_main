import classNames from 'classnames/bind';
import styles from './trangchu.scss'
import React from 'react';
import images from '~/assets/images';
// import BarChart from './Chart/index';



const cx = classNames.bind(styles);


function TrangChu() {
    return (
    <div className={cx('wrapper')}>
        <div className={cx('header')}>
        <span>Thống kê</span>
        </div> 
        <div className={cx('nav')}>
            <div className={cx('text')}> Doanh thu</div>
            <div className={cx('calender')}> 
                <p>Tháng 4, 2021</p> 
                <img src={images.calendar} alt="calender" />
            </div>
        </div> 
         
            <div className={cx('chart')}>
                {/* <BarChart></BarChart> */}
            </div>
    </div>
    );
}

export default TrangChu;
