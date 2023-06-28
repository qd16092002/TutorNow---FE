import { IconArrowUp } from '@src/assets/svgs'

function LogOut({ className }) {
  return (
    <div className={`flex items-center ${className}`}>
      <div className='rotate-90'>
        <IconArrowUp />
      </div>
      <div className='ml-2'>Log out</div>
    </div>
  )
}

export default LogOut
