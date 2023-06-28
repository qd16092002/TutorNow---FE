/* eslint-disable jsx-a11y/no-static-element-interactions */
import classNames from 'classnames/bind'
import styles from './AppSelect.module.sass'
import { useRef, useState } from 'react'
import { ChevronDown } from '@src/assets/svgs'

const cx = classNames.bind(styles)

function AppSelect({ onChange, data = [], typeable = false }) {
  const [showSuggest, setShowSuggest] = useState(false)
  const [symbol, setSymbol] = useState(data[0])

  const inputRef = useRef()

  const handleSymbolClick = (symbol) => {
    console.log(inputRef.current.value)
    inputRef.current.value = symbol
    setSymbol(symbol)
    onChange(symbol)
    console.log('symbol:: ', symbol)
  }

  return (
    <div className={cx('form-field')}>
      <input
        ref={inputRef}
        id='username-login'
        type='text'
        onFocus={() => {
          setShowSuggest(true)
        }}
        defaultValue={symbol}
        onBlur={() => {
          setTimeout(() => {
            setShowSuggest(false)
          }, [200])
        }}
        onChange={(e) => setSymbol(e.target.value)}
        placeholder='Enter your symbol'
        readOnly={!typeable}
      />
      <div
        onClick={() => inputRef.current.focus()}
        className={cx('arrow')}
        style={showSuggest ? { rotate: '180deg' } : {}}
      >
        <ChevronDown />
      </div>
      <div style={!showSuggest ? { display: 'none' } : {}} className={cx('selections')}>
        {data !== [] ? (
          data?.map((item) => {
            return (
              <div key={item} className={cx('option')} onClick={() => handleSymbolClick(item)}>
                {item}
              </div>
            )
          })
        ) : (
          <div className={cx('option')} key='not-found'>
            No data
          </div>
        )}
      </div>
    </div>
  )
}

export default AppSelect
