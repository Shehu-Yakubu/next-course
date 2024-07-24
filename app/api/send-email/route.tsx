import WelcomeTemplate from "@/emails/WelcomeTemplate";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KE)

export async function POST() {
    await resend.emails.send({
        from: 'www.w3schools.com',
        to: 'shehyak@gmail.com',
        subject: 'W3 Schools Courses',
        react: <WelcomeTemplate name="Shehu" />
    })

    return NextResponse.json({})
}