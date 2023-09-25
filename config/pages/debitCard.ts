export const orderCardForm = {
  name: {
    required: true,
    type: 'text',
  },
  last_name: {
    required: true,
    type: 'text',
  },
  email: {
    required: true,
    type: 'email',
  },
  phone: {
    required: true,
    type: 'phone',
  },
  personal_id: {
    required: true,
    type: 'text',
  },
  address: {
    required: true,
    type: 'text',
  },
  message: {
    required: false,
    type: 'textarea',
  },
  id_image_facing_front: {
    required: true,
    type: 'file',
  },
  id_image_facing_back: {
    required: true,
    type: 'file',
  },
  your_selfie_while_holding_id: {
    required: true,
    type: 'file',
  },
} as const

export const orderCardFormInitialValues = (
  Object.keys(orderCardForm) as (keyof typeof orderCardForm)[]
).reduce((acc, key) => {
  acc[key] = ''
  return acc
}, {} as Record<keyof typeof orderCardForm, string>)
