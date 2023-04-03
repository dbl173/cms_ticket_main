import classNames from 'classnames/bind';
import styles from './trangchu.scss'
import React from 'react';
import images from '~/assets/images';
import Chart from './Chart';



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
                <Chart/>
            </div>
            <div className={cx('sub-nav')}>
                <h1>Tổng doanh thu theo tuần</h1>
                <h2>525.145.000<p>đồng</p></h2> 
            </div>
            <div className={cx('calender-2')}> 
                <p>Tháng 4, 2021</p> 
                <img src={images.calendar} alt="calender" />
            </div>
    </div>
    );
}

export default TrangChu;
