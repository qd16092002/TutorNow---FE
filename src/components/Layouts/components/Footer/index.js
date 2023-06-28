/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
// import logo from '@src/assets/images/logo.png'
import styles from './Footer.module.sass'
import { LogoDiscord, LogoFacebook, LogoTwitter, NestQuantFooter } from '@src/assets/svgs'
import AppButton from '@src/components/AppButton'
import { useTranslation } from 'react-i18next'
import { Row, Col } from 'antd'
import useMediaQuery from '@src/hooks/useMediaQuery'
import { Container } from '@mui/material'

const cx = classNames.bind(styles)

function Footer() {
  const { t } = useTranslation()
  const maxSmSize = useMediaQuery('(max-width: 768px)')
  const maxSm = useMediaQuery('(max-width: 992px)')

  return (
    <div className={cx('footer')}>
      <Container>
        <footer className={cx(maxSm ? 'footer-wrapper-mobile' : 'footer-wrapper')}>
          <Row>
            <Col lg={8} md={24} sm={24}>
              <div className={cx('nestquan-content')}>
                <div className={cx('logo')}>
                  <Link to='#'>
                    {/* <img className='logo' src={logo} alt='logo' /> */}
                    <NestQuantFooter />
                  </Link>
                </div>
                <div
                  className={cx('footer-content')}
                  // style={{
                  //   marginTop: '16px'
                  // }}
                >
                  {t('footer.description')}
                </div>
                <div
                  style={{
                    display: 'flex',
                    gap: '16px',
                    marginTop: '24px'
                  }}
                >
                  <Link
                    to='https://www.facebook.com/nestquant/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className={cx('logo-item')}
                  >
                    <LogoFacebook />
                  </Link>
                  <Link
                    to='https://twitter.com/NestQuantANN'
                    target='_blank'
                    rel='noopener noreferrer'
                    className={cx('logo-item')}
                  >
                    <LogoTwitter />
                  </Link>
                  <Link
                    to='https://discord.gg/Nqv3pXBpCu'
                    target='_blank'
                    rel='noopener noreferrer'
                    className={cx('logo-item')}
                  >
                    <LogoDiscord />
                  </Link>
                </div>
              </div>
            </Col>
            <Col lg={6} md={0} sm={0}></Col>
            <Col lg={10} md={24} sm={24}>
              <div className={cx('listlink')}>
                <Row gutter={24}>
                  <Col lg={8} md={8} sm={8}>
                    <div className={cx('group-content')}>
                      <div className={cx('useful-links-main')}>{t('footer.link.head')}</div>
                      <div
                        style={{
                          marginTop: '16px'
                        }}
                      >
                        <Link
                          to='https://docs.nestquant.com/nestquant-tournament/overview'
                          target='_blank'
                          rel='noopener noreferrer'
                          className={cx('useful-links')}
                        >
                          {t('footer.link.overview')}
                        </Link>
                      </div>
                      <div
                        style={{
                          marginTop: '12px'
                        }}
                      >
                        <Link
                          to='https://docs.nestquant.com'
                          target='_blank'
                          rel='noopener noreferrer'
                          className={cx('useful-links')}
                        >
                          {t('footer.link.documents')}
                        </Link>
                      </div>
                      <div
                        style={{
                          marginTop: '12px'
                        }}
                      >
                        <Link
                          to='https://discord.gg/Nqv3pXBpCu'
                          target='_blank'
                          rel='noopener noreferrer'
                          className={cx('useful-links')}
                        >
                          {t('footer.link.contact-us')}
                        </Link>
                      </div>
                    </div>
                  </Col>
                  <Col md={8} sm={8}>
                    <div className={cx('group-content')}>
                      <div className={cx('useful-links-main')}>{t('footer.participate.head')}</div>
                      <div
                        style={{
                          marginTop: '16px'
                        }}
                      >
                        <a href='#round-section' className={cx('useful-links')}>
                          {t('footer.participate.rounds')}
                        </a>
                      </div>
                      <div
                        style={{
                          marginTop: '12px'
                        }}
                      >
                        <a href='#guide-section' className={cx('useful-links')}>
                          {t('footer.participate.roadmap')}
                        </a>
                      </div>
                    </div>
                  </Col>
                  <Col lg={8} md={8} sm={24}>
                    <div className={cx(maxSmSize ? 'group-content-mobile' : 'group-content')}>
                      <div className={cx('useful-links-main')}>{t('footer.subscribe.head')}</div>
                      <div
                        style={{
                          marginTop: '8px'
                        }}
                      >
                        <div className={cx('useful-links')}>{t('footer.subscribe.desc')}</div>
                      </div>
                      <div
                        style={{
                          marginTop: '20px',
                          display: 'flex'
                        }}
                      >
                        {/* <input className={cx('input-email')} placeholder='Enter your email'></input> */}
                        {/* <AppButton className={cx('button')}>Subcribe</AppButton> */}
                        <Link to='https://forms.gle/nQsaGYjTfU8jbEPt7' target='_blank' rel='noopener noreferrer'>
                          <AppButton className={cx('button')}>{t('button.subscribebutton')}</AppButton>
                        </Link>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>

          <div className={cx('footer-bottom')}>
            <div className={cx('line')}></div>
            <div className={cx('footer-bottom-content')}>© 2023 NestQuant, Inc. All rights reserved.</div>
            {/* <div
            style={{
              marginLeft: '24px'
            }}
          >
            <Link to='#' className={cx('linkto')}>
              Privacy Policy
            </Link>
          </div>
          <div
            style={{
              marginLeft: '16px'
            }}
          >
            <Link to='#' className={cx('linkto')}>
              Terms of Service
            </Link>
          </div> */}
          </div>
        </footer>
      </Container>
    </div>
  )
}

export default Footer
