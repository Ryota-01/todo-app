import React from 'react'
import { useForm } from '@inertiajs/react'
import InputError from '@/Components/InputError'
import PrimaryButton from '@/Components/PrimaryButton'

export default function SubmitTodo() {
  // data: 状態を保管。初期値はuseFotm({title: ''})のように与えることができる
  // setDate: dataを変更するための関数。非同期なので注意が必要。
  // post: postする関数。他にget, put, patch, deleteがある
  // processing: フォームの処理が始まるとtrueに変わる。フォームの処理中に送信ボタンを無効にして複数回の送信を防ぐ
  // reset: dataを初期値に戻す。
  // errors: Controller側でバリデーションが出た場合、フォールドとエラーメッセージがerrorsに返ってくる。ここではInputErrorコンポーネントに渡してエラーの場合のみメッセージを赤字で表示。
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
