import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { nome, email, whatsapp, empresa, pdvs, perfil, origem, modalidade } = data;

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_PORT === '465',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: `"${nome} via LP MLD" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_RECIPIENT,
      subject: `Novo Lead: ${nome} - ${empresa}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 20px auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #6D28D9; border-bottom: 2px solid #6D28D9; padding-bottom: 10px;">Novo Lead Capturado - LP MLD</h2>
          <p><strong>Nome:</strong> ${nome}</p>
          <p><strong>E-mail:</strong> ${email}</p>
          <p><strong>WhatsApp:</strong> ${whatsapp}</p>
          <p><strong>Empresa:</strong> ${empresa}</p>
          <p><strong>Modalidade:</strong> ${modalidade || 'N/A'}</p>
          <p><strong>PDVs:</strong> ${pdvs}</p>
          <p><strong>Cargo/Perfil:</strong> ${perfil}</p>
          <p><strong>Como conheceu:</strong> ${origem || 'N/A'}</p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
          <p style="font-size: 12px; color: #777;">Enviado automaticamente pelo site MLD.</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email enviado com sucesso!' }, { status: 200 });
  } catch (error) {
    console.error('Erro ao enviar e-mail:', error);
    return NextResponse.json({ error: 'Erro ao processar sua solicitação.' }, { status: 500 });
  }
}
