/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect, useRef, useState } from 'react'
import { Tooltip } from 'antd'
function AppLongText({
  styles = {},
  placement = 'right',
  isShowTooltips = true,
  isShowReadMore = false,
  showReadMoreMoreStyles = {},
  text = '',
  spliceLength = 150,
  wrapperStyles = {},
  onClick = () => {},
  isShowThreeDot = false,
  threeDotStyles = {}
}) {
  const textRef = useRef()
  const [tooltipHint, setTooltipHint] = useState(null)
  const [hasOverflow, setHasOverflow] = useState(false)
  const [isShowMore, setIsShowMore] = useState(false)

  useEffect(() => {
    const hasOverflowingChildren = text.length > spliceLength - 1
    if (text === '123456') {
      console.log('text: ', text)
      console.log('text.length: ', text.length)
    }

    if (hasOverflowingChildren) {
      if (isShowTooltips) {
        setTooltipHint(textRef?.current?.innerText)
      }

      if (isShowReadMore) {
        setHasOverflow(true)
      }
    }
  }, [isShowReadMore, isShowTooltips, spliceLength, text])

  return (
    <Tooltip title={tooltipHint} placement={placement}>
      <div style={{ ...wrapperStyles }}>
        <span
          onClick={onClick}
          ref={textRef}
          style={{
            wordBreak: 'break-word',
            ...styles
          }}
        >
          {isShowMore ? text : text?.toString()?.slice(0, spliceLength)}
        </span>
        {isShowThreeDot && hasOverflow && !isShowMore && <span style={threeDotStyles}>...</span>}
        {hasOverflow && (
          <span
            onClick={(e) => {
              e.stopPropagation()
              setIsShowMore(!isShowMore)
            }}
            style={{
              color: '#4F59D4',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              ...showReadMoreMoreStyles
            }}
          >
            {isShowMore ? ' Ẩn bớt' : ' Xem thêm'}
          </span>
        )}
      </div>
    </Tooltip>
  )
}

export default AppLongText
