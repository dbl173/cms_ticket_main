import classNames from 'classnames/bind';
import React from 'react';
import styles from './doisoatve.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function DoiSoatVe() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <span>Đối Soát Vé</span>
            </div>
            <div className="search">
                <input placeholder="Tìm bằng số vé" spellCheck={false}></input>
                <button className={cx('search-btn')}>
                    <img src={images.search} alt="search" />
                </button>
            </div>
        </div>
    );
}

export default DoiSoatVe;
