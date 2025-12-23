import React from 'react'
import { useForm } from 'react-hook-form'

function HookForm() {
  const { register, handleSubmit, formState, reset } = useForm()
  const { errors } = formState

  const onSubmit = (data) => {
    console.log(data)
    reset()
  }
  return (
    <div>
      
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            {...register('firstName', { required: 'First name is required' })}
          />
          {errors.firstName && <p>{errors.firstName.message}</p>}
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            {...register('lastName', { required: 'Last name is required' })}
          />
          {errors.lastName && <p>{errors.lastName.message}</p>}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: 'Invalid email address',
              },
            })}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <button type="submit">Submit</button>
      </form>


    </div>
  )
}

export default HookForm
