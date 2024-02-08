import { Resend } from 'resend'
import { getFormValues } from '/utils'
import { Email, EmailForm } from '/types'
import { NextRequest } from 'next/server'
import { emailConfig } from '/config/emails'
import { EmailTemplate } from '/components'
import { CreateEmailResponse } from 'resend/build/src/emails/interfaces'

const resend = new Resend(process.env.RESEND_API_KEY)

export const POST = async (req: NextRequest) => {
  try {
    const formData = await req.formData()
    const [mappedEntries, fileList] = getFormValues<EmailForm>(formData)
    const emailTypes = Object.keys(emailConfig) as [keyof typeof emailConfig]
    const requestedEmailType = req.nextUrl.searchParams.get('type')
    const type = emailTypes.find((t) => t === requestedEmailType) || 'order'

    const [...files] = await Promise.all(
      fileList.map(async (file) => {
        return {
          content: Buffer.from(await file.arrayBuffer()),
          filename: file.name,
        }
      })
    )

    const emailTemplate = emailConfig?.[type].template

    const res: CreateEmailResponse = await resend.emails.send({
      from: 'Wallypay <noreply@wallypay.eu>',
      to: [mappedEntries.email],
      subject: emailConfig?.[type]?.subject ?? 'New email',
      react: EmailTemplate({
        ...mappedEntries,
      }) as React.ReactElement,
      attachments: files,
    })

    return new Response(res.id, { status: 201 })
  } catch (error) {
    return new Response(`not sent, ${JSON.stringify(error)}`, { status: 500 })
  }
}
