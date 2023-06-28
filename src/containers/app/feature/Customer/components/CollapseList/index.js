/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { ChevronIcon } from '@src/assets/svgs'
import classNames from 'classnames/bind'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import styles from './CollapseList.module.sass'
import useMediaQuery from '@src/hooks/useMediaQuery'

const cx = classNames.bind(styles)

function CollapseList({ data, underLineColor, detailBorder, detailBackground, iconBorder, Icon }) {
  const [currItem, setCurrItem] = useState(null)
  const maxSm = useMediaQuery('(max-width: 992px)')

  console.log('maxSm:: ', maxSm)

  return (
    <div className={cx(maxSm ? 'collapse-wrapper-mobile' : 'collapse-wrapper')}>
      <div className={cx('header')}>
        {data.header}
        <div style={{ background: underLineColor }} className={cx('after')}></div>
      </div>
      <div className={cx('list')}>
        {data?.list?.map((item, index) => {
          return (
            <div className={cx('item')} key={uuidv4(index)}>
              <div className={cx('__header')}>
                <div style={{ border: `1px solid ${iconBorder}` }} className={cx('icon')}>
                  {Icon}
                </div>
                <p
                  onClick={(e) => {
                    console.log(index)
                    e.stopPropagation()
                    if (currItem === index) setCurrItem(null)
                    else setCurrItem(index)
                  }}
                >
                  {item.title}
                </p>
                <div
                  onClick={(e) => {
                    e.stopPropagation()
                    if (currItem === index) setCurrItem(null)
                    else setCurrItem(index)
                  }}
                  className={cx('chevron')}
                >
                  <div style={currItem !== index ? { transform: 'rotate(180deg)' } : {}}>
                    <ChevronIcon />
                  </div>
                </div>
              </div>

              <div
                style={
                  currItem !== index
                    ? {
                        height: '0px',
                        opacity: 0,
                        margin: '12px 0',
                        padding: 0,
                        border: `2px solid ${detailBorder}`,
                        background: detailBackground
                      }
                    : {
                        border: `2px solid ${detailBorder}`,
                        background: detailBackground,
                        maxHeight: 'auto'
                      }
                }
                className={cx('__detail')}
              >
                <p>{item?.detail}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default CollapseList
