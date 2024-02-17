import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Index({ auth }) {
  return (
    <AuthenticatedLayout user={auth.user}>
      <Head title='Todo' />
      <div className='max-w-2xl mx-auto p-4 sm:p-6 lg:p-8'>
        Hello, This is Todos/Index componento
      </div>
    </AuthenticatedLayout>
  )
}
