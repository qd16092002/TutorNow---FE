/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/display-name */
import * as Dialog from '@radix-ui/react-dialog'
import classNames from 'classnames/bind'
import { forwardRef, useRef } from 'react'
import styles from './AppModal.module.sass'

const cx = classNames.bind(styles)
// calculate sum of two number
const AppModal = forwardRef(
  (
    { contentStyle, onOpenChange, btnBoxStyle, hasCloseAfterConfirm = true, onConfirm = () => {}, isOpen, ...props },
    ref
  ) => {
    console.log('ref:: ', ref)
    const close = ref ?? useRef()
    const handleConfirm = (e) => {
      onConfirm(e)
      hasCloseAfterConfirm &&
        setTimeout(() => {
          close.current.click()
        }, 100)
    }

    return (
      <Dialog.Root open={isOpen} onOpenChange={onOpenChange}>
        <Dialog.Trigger asChild>
          <div style={{ width: props.is100 ? '100%' : '' }} className={cx('trigger-btn')}>
            {props.triggerBtn}
          </div>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className={cx('DialogOverlay')} />
          <Dialog.Content
            style={{ width: props.width, height: props.height, ...contentStyle }}
            className={cx('DialogContent')}
          >
            {props.children}
            <div
              style={
                props.cancelBtn || props.submitBtn
                  ? {
                      display: 'flex',
                      justifyContent: props.btnJustifyContent ? props.btnJustifyContent : 'flex-end',
                      gap: '16px',
                      ...btnBoxStyle
                    }
                  : {}
              }
            >
              {props.cancelBtn && <Dialog.Close asChild>{props.cancelBtn}</Dialog.Close>}
              {props.submitBtn && <div onClick={handleConfirm}>{props.submitBtn}</div>}
            </div>
            <Dialog.Close style={{ display: 'none' }} ref={ref} asChild>
              <div style={{ display: 'none' }}>close</div>
            </Dialog.Close>
            <Dialog.Close asChild>
              {props.close && (
                <div className={cx('IconButton')} aria-label='Close'>
                  {props.close}
                </div>
              )}
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    )
  }
)

export default AppModal
