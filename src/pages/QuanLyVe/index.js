import classNames from 'classnames/bind';
import styles from './quanlyve.scss';
import React from 'react';
import images from '~/assets/images';

const cx = classNames.bind(styles);


function QuanLyVe() {
    return <div className={cx('wrapper')}>
    <div className={cx('header')}>
    <span>Danh sách vé</span>
    </div>
    <div className='search'>
        <input placeholder="Tìm bằng số vé" spellCheck={false}></input>
        <button className={cx('search-btn')}>
            <img src={images.search} alt="search" />
        </button>
                        
        </div> 

    <div className='btn'>
        <button className={cx('filter-btn')}>
            <img src={images.filter} alt="filter"/>
                <p>Lọc vé</p>
        </button>   
        <button className={cx('loupe-btn')}>Xuất file (.csv)</button>
    </div>
        
     
</div>;
}

export default QuanLyVe;
