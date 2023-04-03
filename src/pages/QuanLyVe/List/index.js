// import classNames from 'classnames/bind';
// import styles from './list.scss';
import { Table } from 'react-bootstrap';
import classNames from 'classnames/bind';
import styles from './list.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);


function MyTable() {
    return (

      <div className={cx('head')}>
          <Table striped bordered hover>
            <thead className={cx('thead')}>
              <tr>
                <th>STT</th>
                <th>Booking code</th>
                <th>Số vé</th>
                <th>Tình trạng sử dụng</th>
                <th>Ngày sử dụng</th>
                <th>Ngày xuất vé</th>
                <th>Cổng check - in</th>
                <th></th>
              </tr>
            </thead>
            <tbody className={cx('tbody')}>
              <tr className={cx('trang')}>
                <td>1</td>
                <td>ALTFGHJU</td>
                <td>123456789034</td>
                <td>Đã sử dụng</td>
                <td>14/04/2021</td>
                <td>14/04/2021</td>
                <td>Cổng 1</td>
                <td></td>
                
              </tr>
              <tr>
                <td>2</td>
                <td>ALTOJMNB</td>
                <td>236784631642</td>
                <td>Chưa sử dụng</td>
                <td>14/04/2021</td>
                <td>14/04/2021</td>
                <td>-</td>
                <td>
                <img src={images.bacham} alt="..." />

                </td>

                
              </tr>
              <tr className={cx('trang')}>
                <td>3</td>
                <td>ALTQTYJH</td>
                <td>487621489474</td>
                <td>Hết hạn</td>
                <td>14/04/2021</td>
                <td>14/04/2021</td>
                <td>-</td>
                <td></td>

                
              </tr><tr>
                <td>4</td>
                <td>ALTCFSDF</td>
                <td>156464891479</td>
                <td>Hết hạn</td>
                <td>14/04/2021</td>
                <td>14/04/2021</td>
                <td>-</td>
                <td></td>

                
              </tr><tr className={cx('trang')}>
                <td>5</td>
                <td>ALTIOJNB</td>
                <td>201649631896</td>
                <td>Đã sử dụng</td>
                <td>14/04/2021</td>
                <td>14/04/2021</td>
                <td>Cổng 1</td>
                <td></td>

                
              </tr><tr>
                <td>6</td>
                <td>ALTVDFTR</td>
                <td>148920121478</td>
                <td>Đã sử dụng</td>
                <td>14/04/2021</td>
                <td>14/04/2021</td>
                <td>Cổng 1</td>
                <td></td>

                
              </tr><tr className={cx('trang')}>
                <td>7</td>
                <td>ALTLIOVF</td>
                <td>654115684899</td>
                <td>Đã sử dụng</td>
                <td>14/04/2021</td>
                <td>14/04/2021</td>
                <td>Cổng 1</td>
                <td></td>

                
              </tr><tr>
                <td>8</td>
                <td>ALTSZXNH</td>
                <td>205465031465</td>
                <td>Đã sử dụng</td>
                <td>14/04/2021</td>
                <td>14/04/2021</td>
                <td>Cổng 1</td>
                <td></td>

                
              </tr><tr className={cx('trang')}>
                <td>9</td>
                <td>ALTMLNHG</td>
                <td>894648474910</td>
                <td>Đã sử dụng</td>
                <td>14/04/2021</td>
                <td>14/04/2021</td>
                <td>Cổng 1</td>
                <td></td>

                
              </tr><tr>
                <td>10</td>
                <td>ALTETRUH</td>
                <td>894875101400</td>
                <td>Đã sử dụng</td>
                <td>14/04/2021</td>
                <td>14/04/2021</td>
                <td>Cổng 1</td>
                <td></td>

                
              </tr><tr className={cx('trang')} >
                <td>11</td>
                <td>ALTCSDGF</td>
                <td>205314876321</td>
                <td>Đã sử dụng</td>
                <td>14/04/2021</td>
                <td>14/04/2021</td>
                <td>Cổng 1</td>
                <td></td>

                
              </tr><tr>
                <td>12</td>
                <td>ALTNBVGH </td>
                <td>185653100147</td>
                <td>Đã sử dụng</td>
                <td>14/04/2021</td>
                <td>14/04/2021</td>
                <td>Cổng 1</td>
                <td></td>

                
              </tr>
            </tbody>
          </Table>
      </div>
    );
  }

  export default MyTable