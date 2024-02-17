import React from 'react'
import { useForm } from '@inertiajs/react'
import InputError from '@/Components/InputError'
import PrimaryButton from '@/Components/PrimaryButton'

export default function SubmitTodo() {
  const {data, setData, post, processing, reset, errors} = useForm({
    'title': '',
  })

  const submit = (e) => {
    e.preventDefault();
    post(route('todo.store'), {onSuccess: () => reset()});

  }
  return (
    <div>
      <form onSubmit={submit}>
        <input
          value={data.title}
          placeholder='new todo'
          className='w-7/12 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm'
          onChange={e => setData('title', e.target.value)}
        >
        </input>
        <InputError message={errors.message} className='mt-2'/>
        <PrimaryButton className='ml-3 mt-4' disabled={processing}>
          Submit
        </PrimaryButton>
      </form>
    </div>
  )
}
