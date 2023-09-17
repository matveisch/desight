import { NextRequest, NextResponse } from 'next/server';
import { sendEmail } from '@/utils/lib/emailSender';

export async function POST(req: NextRequest) {
  try {
    // новый способ получать доступ к body – теперь через req.json()
    // почему так сделано, понятия не имею. вообще не интуитивно, даже тупо, на мой взгляд
    const { name, email, message } = await req.json();
    await sendEmail({
      from: 'support@desight.co',
      to: 'support@desight.co',
      subject: 'New Client Message',
      text: `
      name: ${name},
      email: ${email},
      message: ${message}
     `,
    });

    // без этого метода все работает, но возникают противные ошибки.
    // лучше всего именно так показывать next 13, что закончен запрос
    return NextResponse.json(
      { message: 'message sent' },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error(error);

    // без этого метода все работает, но возникают противные ошибки.
    // лучше всего именно так показывать next 13, что закончен запрос
    return NextResponse.json(
      { error },
      {
        status: 400,
      }
    );
  }
}
