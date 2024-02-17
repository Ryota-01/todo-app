import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import SubmitTodo from '@/Components/SubmitTodo';

export default function Index({ auth }) {
  return (
    <AuthenticatedLayout user={auth.user}>
      <Head title='Todo' />
      <div className='max-w-2xl mx-auto p-4 sm:p-6 lg:p-8'>
        <SubmitTodo />
      </div>
    </AuthenticatedLayout>
  )
}
