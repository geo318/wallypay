import { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { FieldValues, useForm } from 'react-hook-form'
import { objToFormData } from '/utils'
import { Email } from '/types'

export const useEmailForm = (
  orderCardForm: Record<string, { type: string; required: boolean }>,
  emailSchema: Zod.Schema,
  type: Email
) => {
  const [message, setMessage] = useState({ error: '', success: '' })
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm({
    mode: 'onBlur',
    resolver: zodResolver(emailSchema),
  })

  const submitHandler = async (data: FieldValues) => {
    setIsLoading(true)

    const formData = objToFormData(data)
    try {
      await fetch(`${process.env.NEXT_PUBLIC_URL}/api/send?type=${type}`, {
        method: 'POST',
        body: formData,
      })
      form.reset()
      setMessage({ error: '', success: 'Email sent successfully' })
    } catch (err) {
      setMessage({ error: 'Something went wrong', success: '' })
    } finally {
      setIsLoading(false)
    }
  }

  const props = (key: keyof typeof orderCardForm) => ({
    name: key,
    type: orderCardForm[key].type,
    required: orderCardForm[key].required,
  })

  return {
    form,
    props,
    message,
    isLoading,
    submitHandler,
  }
}
