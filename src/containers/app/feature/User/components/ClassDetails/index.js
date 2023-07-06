/* eslint-disable jsx-a11y/no-static-element-interactions */
import classNames from 'classnames/bind'
import styles from './ClassDetails.module.sass'

const cx = classNames.bind(styles)

function ClassDetails() {
  return (
    <div className={cx('form-wallpaper')}>
      <div className={cx('title')}>Chi tiết </div>
      <div className={cx('content')}>
        <div className={cx('items')}>
          <p>Tên học sinh</p>
          <div>Trần Quang Đạo</div>
        </div>
        <div className={cx('items')}>
          <p>Mã lớp</p>
          <div>CNPM/01</div>
        </div>
        <div className={cx('items')}>
          <p>Môn</p>
          <div>Phân tích thiết kế hệ thống</div>
        </div>
        <div className={cx('items')}>
          <p>Thời gian học</p>
          <div>Thứ tư hàng tuần</div>
        </div>
        <div className={cx('items')}>
          <p>Số buổi đã học</p>
          <div>2</div>
        </div>
        <div className={cx('items')}>
          <p>Địa chỉ</p>
          <div>Nhà abc phố bcd</div>
        </div>
        <div
          className={cx('items')}
          style={{
            borderBottom: 'none'
          }}
        >
          <p>Học phí</p>
          <div>10.000.000 VND</div>
        </div>
      </div>
    </div>
  )
}

export default ClassDetails
