import React from 'react'

const Avatar = ({ username }) => {
  // Lấy chữ cái đầu của username
  const firstLetter = username?.charAt(0).toUpperCase()
  const avatarStyle = {
    // backgroundColor: '#596FEB',
    color: '#FFFF',
    borderRadius: '8px',
    // width: '80px',
    // height: '80px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '36px',
    fontWeight: 'bold'
  }
  return (
    <div className='avatar' style={avatarStyle}>
      <span>{firstLetter}</span>
    </div>
  )
}

export default Avatar
