import classNames from 'classnames/bind'

import styles from './ModalConfirm.module.sass'
import AppModal from '../AppModal/AppModal'
import AppButton from '../AppButton'
import { CloseIcon } from '@src/assets/svgs'
const cx = classNames.bind(styles)

function ModalConfirm({ children, confirmText = 'Xác nhận', cancelText = 'Hủy bỏ', onConfirm = () => {}, triggerBtn }) {
  return (
    <AppModal
      className={cx('ant-modal')}
      width={462}
      triggerBtn={triggerBtn}
      btnJustifyContent='center'
      contentStyle={{
        padding: '20px 20px 0px 20px'
      }}
      btnBoxStyle={{
        marginTop: '10px'
      }}
      close={<CloseIcon />}
      submitBtn={
        <AppButton color='#2080F6' bgColor='#FF4D4F'>
          {confirmText}
        </AppButton>
      }
      onConfirm={onConfirm}
      cancelBtn={
        <AppButton bgColor='#F0F2FA' textColor='#616879'>
          {cancelText}
        </AppButton>
      }
    >
      {children}
    </AppModal>
  )
}

export default ModalConfirm
