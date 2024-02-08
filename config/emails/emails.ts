import { ComplaintTemplate, EmailTemplate } from '/components/EmailForms'

export const emailConfig = {
  complaint: {
    subject: 'New complaint',
    template: ComplaintTemplate,
  },
  order: {
    subject: 'Order Debit Card',
    template: EmailTemplate,
  },
} as const
