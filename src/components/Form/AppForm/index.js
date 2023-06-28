import { FormProvider, useForm } from 'react-hook-form'

export default function AppForm({ className, children, onSubmit, ...props }) {
  const methods = useForm()
  return (
    <FormProvider {...methods}>
      <form className={className} id={props.id} onSubmit={methods.handleSubmit(onSubmit)}>
        {children}
      </form>
    </FormProvider>
  )
}
