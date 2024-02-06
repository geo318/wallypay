'use client'
import { Input } from '../Input'
import { useEmailForm } from './useEmailForm'
import { FormProvider } from 'react-hook-form'
import { ComplaintFormText, type ComplaintForm as TComplaintForm } from '/types'
import { complaintForm, complaintFormInitialValues } from '/config'
import { Fragment } from 'react'
import { Spinner } from '../shared'
import { complaintSchema } from '/schema'

export const ComplaintForm = ({ texts }: { texts: ComplaintFormText }) => {
  const { props, message, isLoading, submitHandler, form } = useEmailForm(
    complaintForm,
    complaintSchema
  )

  return (
    <>
      <h3 className='py-5 text-3xl font-semibold mt-5'>{texts.heading}</h3>
      {message.error && (
        <p className='text-red-500 border border-red-300 rounded-md p-3'>
          ⚠️ {message.error}
        </p>
      )}
      {message.success && (
        <p className='text-green-500 font-bold border border-green-300 rounded-md p-3 mt-5'>
          ✅ {message.success}
        </p>
      )}
      <FormProvider {...form}>
        <form
          method='post'
          className='grid grid-cols-2 gap-6 mt-8 relative'
          onSubmit={form.handleSubmit(submitHandler)}
        >
          {isLoading && (
            <div className='absolute inset-0 bg-white bg-opacity-70 flex items-center justify-center'>
              <Spinner />
            </div>
          )}
          {(
            Object.entries(complaintFormInitialValues) as [
              keyof TComplaintForm,
              TComplaintForm[keyof TComplaintForm]
            ][]
          ).map(([key, _]) => (
            <Fragment key={key}>
              <div
                className={`flex flex-col gap-2 ${
                  complaintForm[key].type !== 'textarea'
                    ? 'lg:col-span-1 col-span-2'
                    : 'col-span-2'
                }`}
              >
                <Input
                  {...props(key)}
                  textarea={props(key).type === 'textarea'}
                  placeholder={texts.inputs[key].placeholder}
                  label={texts.inputs[key].label}
                />
              </div>
            </Fragment>
          ))}
          <label className='flex gap-5 col-span-2 '>
            <input type='checkbox' required className='mt-1 self-start' />
            <ul>
              <h4 className='font-medium mb-4'>{texts.verify.heading}</h4>
              {texts.verify.li.map((li) => (
                <li key={li} className='text-sm list-disc ml-5 mb-1'>
                  {li}
                </li>
              ))}
            </ul>
          </label>

          <button
            type='submit'
            className='text-white bg-app-blue hover:bg-[#56aee9] py-3 text-lg font-extrabold tracking-wide rounded-lg col-span-2 disabled:opacity-50 disabled:cursor-default'
            disabled={isLoading}
          >
            Submit
          </button>
        </form>
      </FormProvider>
    </>
  )
}

export default ComplaintForm
