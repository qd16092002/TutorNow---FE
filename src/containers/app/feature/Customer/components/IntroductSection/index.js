import intro from '@src/assets/images/intro.png'
import classNames from 'classnames/bind'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import styles from './IntroduceSection.module.sass'
import { ChevronDown } from '@src/assets/svgs'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Row, Col } from 'antd'
import useMediaQuery from '@src/hooks/useMediaQuery'

const cx = classNames.bind(styles)

function IntroduceSection() {
  const [btnHover, setBtnHover] = useState(false)
  const { ref: content, inView: contentView } = useInView()
  const { ref: illustration, inView: illustrationInView } = useInView()
  const { t } = useTranslation()

  const maxSm = useMediaQuery('(max-width: 992px)')
  return (
    <div className={cx(maxSm ? 'intro-wrapper-mobile' : 'intro-wrapper')}>
      <Row>
        <Col lg={14} md={24} sm={24} style={{ width: '100%' }}>
          <motion.div
            ref={content}
            variants={{
              hidden: {
                opacity: 0,
                x: -200
              },
              visible: {
                opacity: 1,
                x: 0
              }
            }}
            initial='hidden'
            animate={contentView ? 'visible' : 'hidden'}
            transition={{ duration: 0.5, delay: 0.25 }}
            className={cx('intro')}
          >
            <div className={cx('text-top')}>
              <div className={cx('color-text')}>{t('content1.header1')}</div> &nbsp;
              <div>{t('content1.header2')}</div>
            </div>
            <h3 className={cx('text-bottom')}>{t('content1.header3')}</h3>
            <p className={cx('header-desc')}>The ultimate data championship</p>
            <p className={cx('text-detail')}>
              {t('introduce.description.top')} <br />
              {t('introduce.description.bottom')}
            </p>
            <div className={cx('start-btn')}>
              <a
                onMouseEnter={() => setBtnHover(true)}
                onMouseLeave={() => setBtnHover(false)}
                href='#started'
                style={{
                  paddingLeft: '23.5px',
                  paddingRight: '23.5px',
                  background: 'linear-gradient(96.06deg, #526AEA 4.1%, #B0AEFF 146.32%)'
                }}
              >
                {t('button.gettingstarted')}
              </a>
              <div className={cx('icon')}>
                <ChevronDown />
              </div>
              <div style={btnHover ? { transform: 'translateY(15px)' } : {}} className={cx('icon')}>
                <ChevronDown />
              </div>
            </div>
          </motion.div>
        </Col>
        <Col lg={10} md={24} sm={24}>
          <motion.div
            ref={illustration}
            variants={{
              hidden: {
                opacity: 0,
                x: 200
              },
              visible: {
                opacity: 1,
                x: 0
              }
            }}
            initial='hidden'
            animate={illustrationInView ? 'visible' : 'hidden'}
            transition={{ duration: 0.5, delay: 0.25 }}
            className={cx('illustration')}
          >
            <img src={intro} alt='' />
          </motion.div>
          {maxSm ? (
            <div className={cx('start-btn')}>
              <a
                onMouseEnter={() => setBtnHover(true)}
                onMouseLeave={() => setBtnHover(false)}
                href='#started'
                style={{
                  paddingLeft: '23.5px',
                  paddingRight: '23.5px',
                  background: 'linear-gradient(96.06deg, #526AEA 4.1%, #B0AEFF 146.32%)'
                }}
              >
                {t('button.gettingstarted')}
              </a>
              <div className={cx('icon')}>
                <ChevronDown />
              </div>
              <div style={btnHover ? { transform: 'translateY(15px)' } : {}} className={cx('icon')}>
                <ChevronDown />
              </div>
            </div>
          ) : null}
        </Col>
      </Row>
    </div>
  )
}

export default IntroduceSection
