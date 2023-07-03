import classNames from 'classnames/bind'
import styles from './Home.module.sass'
import { Icon$, IconCost, IconHat, IconLandingPageCalendar, IconSubject, IconUserSettings } from '@src/assets/svgs'

const cx = classNames.bind(styles)

function Home() {
  return (
    <div className={cx('home-wrapper')}>
      <div className={cx('title')}>Danh sách lớp đang cần gấp gia sư</div>
      <div className={cx('listclass')}>
        <div className={cx('box')}>
          <div className={cx('content')}>
            <div className={cx('header')}>
              <div className={cx('codeclass')}>Mã lớp: 1123</div>
              <div className={cx('calendar')}>
                <div
                  style={{
                    marginTop: '2px'
                  }}
                >
                  <IconLandingPageCalendar />
                </div>
                24/06/2023
              </div>
            </div>
            <div className={cx('item')}>
              <div className={cx('icon')}>
                <IconSubject />
              </div>
              <div className={cx('tittle-2')}>Môn: Vật lý 12</div>
            </div>
            <div className={cx('item')}>
              <div className={cx('icon')}>
                <IconHat />
              </div>
              <div className={cx('tittle-2')}>Hình thức học: Tại nhà</div>
            </div>
            <div className={cx('item')}>
              <div className={cx('icon')}>
                <IconCost />
              </div>
              <div className={cx('tittle-2')}>Học phí: 250,000 VNĐ/buổi</div>
            </div>
            <div className={cx('item')}>
              <div className={cx('icon')}>
                <Icon$ />
              </div>
              <div className={cx('tittle-2')}>Phí nhận lớp: 50%( Thu sau khi có lương)</div>
            </div>
            <div className={cx('item')}>
              <div className={cx('icon')}>
                <IconUserSettings />
              </div>
              <div className={cx('tittle-2')}>Yêu cầu GV/SV: Không yêu cầu</div>
            </div>
          </div>
        </div>
        <div className={cx('box')}>
          <div className={cx('content')}>
            <div className={cx('header')}>
              <div className={cx('codeclass')}>Mã lớp: 1123</div>
              <div className={cx('calendar')}>
                <div
                  style={{
                    marginTop: '2px'
                  }}
                >
                  <IconLandingPageCalendar />
                </div>
                24/06/2023
              </div>
            </div>
            <div className={cx('item')}>
              <div className={cx('icon')}>
                <IconSubject />
              </div>
              <div className={cx('tittle-2')}>Môn: Vật lý 12</div>
            </div>
            <div className={cx('item')}>
              <div className={cx('icon')}>
                <IconHat />
              </div>
              <div className={cx('tittle-2')}>Hình thức học: Tại nhà</div>
            </div>
            <div className={cx('item')}>
              <div className={cx('icon')}>
                <IconCost />
              </div>
              <div className={cx('tittle-2')}>Học phí: 250,000 VNĐ/buổi</div>
            </div>
            <div className={cx('item')}>
              <div className={cx('icon')}>
                <Icon$ />
              </div>
              <div className={cx('tittle-2')}>Phí nhận lớp: 50%( Thu sau khi có lương)</div>
            </div>
            <div className={cx('item')}>
              <div className={cx('icon')}>
                <IconUserSettings />
              </div>
              <div className={cx('tittle-2')}>Yêu cầu GV/SV: Không yêu cầu</div>
            </div>
          </div>
        </div>
        <div className={cx('box')}>
          <div className={cx('content')}>
            <div className={cx('header')}>
              <div className={cx('codeclass')}>Mã lớp: 1123</div>
              <div className={cx('calendar')}>
                <div
                  style={{
                    marginTop: '2px'
                  }}
                >
                  <IconLandingPageCalendar />
                </div>
                24/06/2023
              </div>
            </div>
            <div className={cx('item')}>
              <div className={cx('icon')}>
                <IconSubject />
              </div>
              <div className={cx('tittle-2')}>Môn: Vật lý 12</div>
            </div>
            <div className={cx('item')}>
              <div className={cx('icon')}>
                <IconHat />
              </div>
              <div className={cx('tittle-2')}>Hình thức học: Tại nhà</div>
            </div>
            <div className={cx('item')}>
              <div className={cx('icon')}>
                <IconCost />
              </div>
              <div className={cx('tittle-2')}>Học phí: 250,000 VNĐ/buổi</div>
            </div>
            <div className={cx('item')}>
              <div className={cx('icon')}>
                <Icon$ />
              </div>
              <div className={cx('tittle-2')}>Phí nhận lớp: 50%( Thu sau khi có lương)</div>
            </div>
            <div className={cx('item')}>
              <div className={cx('icon')}>
                <IconUserSettings />
              </div>
              <div className={cx('tittle-2')}>Yêu cầu GV/SV: Không yêu cầu</div>
            </div>
          </div>
        </div>
        <div className={cx('box')}>
          <div className={cx('content')}>
            <div className={cx('header')}>
              <div className={cx('codeclass')}>Mã lớp: 1123</div>
              <div className={cx('calendar')}>
                <div
                  style={{
                    marginTop: '2px'
                  }}
                >
                  <IconLandingPageCalendar />
                </div>
                24/06/2023
              </div>
            </div>
            <div className={cx('item')}>
              <div className={cx('icon')}>
                <IconSubject />
              </div>
              <div className={cx('tittle-2')}>Môn: Vật lý 12</div>
            </div>
            <div className={cx('item')}>
              <div className={cx('icon')}>
                <IconHat />
              </div>
              <div className={cx('tittle-2')}>Hình thức học: Tại nhà</div>
            </div>
            <div className={cx('item')}>
              <div className={cx('icon')}>
                <IconCost />
              </div>
              <div className={cx('tittle-2')}>Học phí: 250,000 VNĐ/buổi</div>
            </div>
            <div className={cx('item')}>
              <div className={cx('icon')}>
                <Icon$ />
              </div>
              <div className={cx('tittle-2')}>Phí nhận lớp: 50%( Thu sau khi có lương)</div>
            </div>
            <div className={cx('item')}>
              <div className={cx('icon')}>
                <IconUserSettings />
              </div>
              <div className={cx('tittle-2')}>Yêu cầu GV/SV: Không yêu cầu</div>
            </div>
          </div>
        </div>
      </div>
      <div className={cx('listclass')}>
        <div className={cx('box')}>
          <div className={cx('content')}>
            <div className={cx('header')}>
              <div className={cx('codeclass')}>Mã lớp: 1123</div>
              <div className={cx('calendar')}>
                <div
                  style={{
                    marginTop: '2px'
                  }}
                >
                  <IconLandingPageCalendar />
                </div>
                24/06/2023
              </div>
            </div>
            <div className={cx('item')}>
              <div className={cx('icon')}>
                <IconSubject />
              </div>
              <div className={cx('tittle-2')}>Môn: Vật lý 12</div>
            </div>
            <div className={cx('item')}>
              <div className={cx('icon')}>
                <IconHat />
              </div>
              <div className={cx('tittle-2')}>Hình thức học: Tại nhà</div>
            </div>
            <div className={cx('item')}>
              <div className={cx('icon')}>
                <IconCost />
              </div>
              <div className={cx('tittle-2')}>Học phí: 250,000 VNĐ/buổi</div>
            </div>
            <div className={cx('item')}>
              <div className={cx('icon')}>
                <Icon$ />
              </div>
              <div className={cx('tittle-2')}>Phí nhận lớp: 50%( Thu sau khi có lương)</div>
            </div>
            <div className={cx('item')}>
              <div className={cx('icon')}>
                <IconUserSettings />
              </div>
              <div className={cx('tittle-2')}>Yêu cầu GV/SV: Không yêu cầu</div>
            </div>
          </div>
        </div>
        <div className={cx('box')}>
          <div className={cx('content')}>
            <div className={cx('header')}>
              <div className={cx('codeclass')}>Mã lớp: 1123</div>
              <div className={cx('calendar')}>
                <div
                  style={{
                    marginTop: '2px'
                  }}
                >
                  <IconLandingPageCalendar />
                </div>
                24/06/2023
              </div>
            </div>
            <div className={cx('item')}>
              <div className={cx('icon')}>
                <IconSubject />
              </div>
              <div className={cx('tittle-2')}>Môn: Vật lý 12</div>
            </div>
            <div className={cx('item')}>
              <div className={cx('icon')}>
                <IconHat />
              </div>
              <div className={cx('tittle-2')}>Hình thức học: Tại nhà</div>
            </div>
            <div className={cx('item')}>
              <div className={cx('icon')}>
                <IconCost />
              </div>
              <div className={cx('tittle-2')}>Học phí: 250,000 VNĐ/buổi</div>
            </div>
            <div className={cx('item')}>
              <div className={cx('icon')}>
                <Icon$ />
              </div>
              <div className={cx('tittle-2')}>Phí nhận lớp: 50%( Thu sau khi có lương)</div>
            </div>
            <div className={cx('item')}>
              <div className={cx('icon')}>
                <IconUserSettings />
              </div>
              <div className={cx('tittle-2')}>Yêu cầu GV/SV: Không yêu cầu</div>
            </div>
          </div>
        </div>
        <div className={cx('box')}>
          <div className={cx('content')}>
            <div className={cx('header')}>
              <div className={cx('codeclass')}>Mã lớp: 1123</div>
              <div className={cx('calendar')}>
                <div
                  style={{
                    marginTop: '2px'
                  }}
                >
                  <IconLandingPageCalendar />
                </div>
                24/06/2023
              </div>
            </div>
            <div className={cx('item')}>
              <div className={cx('icon')}>
                <IconSubject />
              </div>
              <div className={cx('tittle-2')}>Môn: Vật lý 12</div>
            </div>
            <div className={cx('item')}>
              <div className={cx('icon')}>
                <IconHat />
              </div>
              <div className={cx('tittle-2')}>Hình thức học: Tại nhà</div>
            </div>
            <div className={cx('item')}>
              <div className={cx('icon')}>
                <IconCost />
              </div>
              <div className={cx('tittle-2')}>Học phí: 250,000 VNĐ/buổi</div>
            </div>
            <div className={cx('item')}>
              <div className={cx('icon')}>
                <Icon$ />
              </div>
              <div className={cx('tittle-2')}>Phí nhận lớp: 50%( Thu sau khi có lương)</div>
            </div>
            <div className={cx('item')}>
              <div className={cx('icon')}>
                <IconUserSettings />
              </div>
              <div className={cx('tittle-2')}>Yêu cầu GV/SV: Không yêu cầu</div>
            </div>
          </div>
        </div>
        <div className={cx('box')}>
          <div className={cx('content')}>
            <div className={cx('header')}>
              <div className={cx('codeclass')}>Mã lớp: 1123</div>
              <div className={cx('calendar')}>
                <div
                  style={{
                    marginTop: '2px'
                  }}
                >
                  <IconLandingPageCalendar />
                </div>
                24/06/2023
              </div>
            </div>
            <div className={cx('item')}>
              <div className={cx('icon')}>
                <IconSubject />
              </div>
              <div className={cx('tittle-2')}>Môn: Vật lý 12</div>
            </div>
            <div className={cx('item')}>
              <div className={cx('icon')}>
                <IconHat />
              </div>
              <div className={cx('tittle-2')}>Hình thức học: Tại nhà</div>
            </div>
            <div className={cx('item')}>
              <div className={cx('icon')}>
                <IconCost />
              </div>
              <div className={cx('tittle-2')}>Học phí: 250,000 VNĐ/buổi</div>
            </div>
            <div className={cx('item')}>
              <div className={cx('icon')}>
                <Icon$ />
              </div>
              <div className={cx('tittle-2')}>Phí nhận lớp: 50%( Thu sau khi có lương)</div>
            </div>
            <div className={cx('item')}>
              <div className={cx('icon')}>
                <IconUserSettings />
              </div>
              <div className={cx('tittle-2')}>Yêu cầu GV/SV: Không yêu cầu</div>
            </div>
          </div>
        </div>
      </div>
      <div className={cx('listclass')}>
        <div className={cx('box')}>
          <div className={cx('content')}>
            <div className={cx('header')}>
              <div className={cx('codeclass')}>Mã lớp: 1123</div>
              <div className={cx('calendar')}>
                <div
                  style={{
                    marginTop: '2px'
                  }}
                >
                  <IconLandingPageCalendar />
                </div>
                24/06/2023
              </div>
            </div>
            <div className={cx('item')}>
              <div className={cx('icon')}>
                <IconSubject />
              </div>
              <div className={cx('tittle-2')}>Môn: Vật lý 12</div>
            </div>
            <div className={cx('item')}>
              <div className={cx('icon')}>
                <IconHat />
              </div>
              <div className={cx('tittle-2')}>Hình thức học: Tại nhà</div>
            </div>
            <div className={cx('item')}>
              <div className={cx('icon')}>
                <IconCost />
              </div>
              <div className={cx('tittle-2')}>Học phí: 250,000 VNĐ/buổi</div>
            </div>
            <div className={cx('item')}>
              <div className={cx('icon')}>
                <Icon$ />
              </div>
              <div className={cx('tittle-2')}>Phí nhận lớp: 50%( Thu sau khi có lương)</div>
            </div>
            <div className={cx('item')}>
              <div className={cx('icon')}>
                <IconUserSettings />
              </div>
              <div className={cx('tittle-2')}>Yêu cầu GV/SV: Không yêu cầu</div>
            </div>
          </div>
        </div>
        <div className={cx('box')}>
          <div className={cx('content')}>
            <div className={cx('header')}>
              <div className={cx('codeclass')}>Mã lớp: 1123</div>
              <div className={cx('calendar')}>
                <div
                  style={{
                    marginTop: '2px'
                  }}
                >
                  <IconLandingPageCalendar />
                </div>
                24/06/2023
              </div>
            </div>
            <div className={cx('item')}>
              <div className={cx('icon')}>
                <IconSubject />
              </div>
              <div className={cx('tittle-2')}>Môn: Vật lý 12</div>
            </div>
            <div className={cx('item')}>
              <div className={cx('icon')}>
                <IconHat />
              </div>
              <div className={cx('tittle-2')}>Hình thức học: Tại nhà</div>
            </div>
            <div className={cx('item')}>
              <div className={cx('icon')}>
                <IconCost />
              </div>
              <div className={cx('tittle-2')}>Học phí: 250,000 VNĐ/buổi</div>
            </div>
            <div className={cx('item')}>
              <div className={cx('icon')}>
                <Icon$ />
              </div>
              <div className={cx('tittle-2')}>Phí nhận lớp: 50%( Thu sau khi có lương)</div>
            </div>
            <div className={cx('item')}>
              <div className={cx('icon')}>
                <IconUserSettings />
              </div>
              <div className={cx('tittle-2')}>Yêu cầu GV/SV: Không yêu cầu</div>
            </div>
          </div>
        </div>
        <div className={cx('box')}>
          <div className={cx('content')}>
            <div className={cx('header')}>
              <div className={cx('codeclass')}>Mã lớp: 1123</div>
              <div className={cx('calendar')}>
                <div
                  style={{
                    marginTop: '2px'
                  }}
                >
                  <IconLandingPageCalendar />
                </div>
                24/06/2023
              </div>
            </div>
            <div className={cx('item')}>
              <div className={cx('icon')}>
                <IconSubject />
              </div>
              <div className={cx('tittle-2')}>Môn: Vật lý 12</div>
            </div>
            <div className={cx('item')}>
              <div className={cx('icon')}>
                <IconHat />
              </div>
              <div className={cx('tittle-2')}>Hình thức học: Tại nhà</div>
            </div>
            <div className={cx('item')}>
              <div className={cx('icon')}>
                <IconCost />
              </div>
              <div className={cx('tittle-2')}>Học phí: 250,000 VNĐ/buổi</div>
            </div>
            <div className={cx('item')}>
              <div className={cx('icon')}>
                <Icon$ />
              </div>
              <div className={cx('tittle-2')}>Phí nhận lớp: 50%( Thu sau khi có lương)</div>
            </div>
            <div className={cx('item')}>
              <div className={cx('icon')}>
                <IconUserSettings />
              </div>
              <div className={cx('tittle-2')}>Yêu cầu GV/SV: Không yêu cầu</div>
            </div>
          </div>
        </div>
        <div className={cx('box')}>
          <div className={cx('content')}>
            <div className={cx('header')}>
              <div className={cx('codeclass')}>Mã lớp: 1123</div>
              <div className={cx('calendar')}>
                <div
                  style={{
                    marginTop: '2px'
                  }}
                >
                  <IconLandingPageCalendar />
                </div>
                24/06/2023
              </div>
            </div>
            <div className={cx('item')}>
              <div className={cx('icon')}>
                <IconSubject />
              </div>
              <div className={cx('tittle-2')}>Môn: Vật lý 12</div>
            </div>
            <div className={cx('item')}>
              <div className={cx('icon')}>
                <IconHat />
              </div>
              <div className={cx('tittle-2')}>Hình thức học: Tại nhà</div>
            </div>
            <div className={cx('item')}>
              <div className={cx('icon')}>
                <IconCost />
              </div>
              <div className={cx('tittle-2')}>Học phí: 250,000 VNĐ/buổi</div>
            </div>
            <div className={cx('item')}>
              <div className={cx('icon')}>
                <Icon$ />
              </div>
              <div className={cx('tittle-2')}>Phí nhận lớp: 50%( Thu sau khi có lương)</div>
            </div>
            <div className={cx('item')}>
              <div className={cx('icon')}>
                <IconUserSettings />
              </div>
              <div className={cx('tittle-2')}>Yêu cầu GV/SV: Không yêu cầu</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
