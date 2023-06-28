import { useFormContext } from 'react-hook-form'

function AppInput({
  id,
  name,
  wrapperStyle = {},
  className,
  required = false,
  disabled = false,
  validate,
  showIcon,
  Icon,
  ...props
}) {
  const {
    register,
    formState: { errors }
  } = useFormContext()

  return (
    <div className='relative my-2 w-full flex-col' style={wrapperStyle}>
      <label className={`mb-1.5 block w-full ${!errors[name]?.type ? 'text-white' : 'text-red-400'}`} htmlFor={id}>
        {props.label}
      </label>
      <input
        id={id}
        type={props.type || 'text'}
        className={`${className} ${
          errors[name]?.type ? 'border-red-400 focus:border-red-400' : 'border-white'
        } box-border w-full rounded-md border-2  py-1.5 px-4 text-neutral-700 outline-none transition duration-500 focus:border-cyan-500 ${className}`}
        placeholder={props.placeholder || ''}
        autoComplete='off'
        {...register(name, {
          ...(required ? { required: 'Trường này không được để trống' } : {}),
          ...validate
          // onChange: (e) => handleInputChange(e.target.value)
        })}
        {...props}
        disabled={disabled}
      />
      {showIcon && <div className='absolute right-3 top-9 cursor-pointer'>{Icon}</div>}
      {errors && errors[name]?.type === 'required' && <div className='text-red-400 '>{errors[name].message}</div>}
      {errors && errors[name]?.type === 'pattern' && <div className='text-red-400'>{errors[name].message}</div>}
    </div>
  )
}

export default AppInput
