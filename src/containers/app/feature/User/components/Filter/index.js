/* eslint-disable jsx-a11y/no-static-element-interactions */
import classNames from 'classnames/bind'
import styles from './Filter.module.sass'
import { IconUserSearch } from '@src/assets/svgs'
import { Col, Row } from 'antd'

const cx = classNames.bind(styles)

function FilterFuntion(props) {
  return (
    <div>
      <Row className={cx('search')}>
        <Col span={24} className={cx('search-wrapper')}>
          <label htmlFor='search' className={cx('icon')}>
            <IconUserSearch />
          </label>
          <input
            id='search'
            type={props.type || 'text'}
            className={cx('input')}
            placeholder={props.placeholder || 'Tìm kiếm thông tin giảng viên, học sinh...  '}
            autoComplete='off'
          />
        </Col>
      </Row>
    </div>
  )
}

export default FilterFuntion
