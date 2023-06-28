const Divider = ({ title, className }) => {
  return (
    <div className={`my-2 flex items-center ${className}`}>
      {title ? (
        <>
          <div className='h-px w-5/12 bg-gray-300'></div>
          <div className='0 flex h-8 w-2/12 items-center justify-center'>{title}</div>
          <div className='h-px w-5/12 bg-gray-300'></div>
        </>
      ) : (
        <div className='w-full h-px bg-gray-300'></div>
      )}
    </div>
  )
}

export default Divider
