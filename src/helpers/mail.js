// Nodemailer
import nodemailer from "nodemailer"

export default async function mail({ name, email, phone, message }) {
    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: "dev.mr@productions-dev.com",
                pass: process.env.GMAIL_APP_MAIL_PASSWORD,
            },
        })
        const mailOptions = {
            from: "dev.mr@productions-dev.com",
            to: "dev.mr@productions-dev.com",
            subject: `New Lead Generated - Book Publishing Company`,
            html: `<!DOCTYPE html><html lang="en"><head> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <style> body { font-family: Arial, sans-serif; margin: 0; padding: 0; color: #333; background-color: #f4f4f4; } .container { max-width: 600px; margin: 0 auto; background-color: #ebebeb; padding: 20px; border-radius: 8px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); } h1 { font-size: 24px; color: #333; } p { font-size: 16px; line-height: 1.5; } .details { border-top: 1px solid #ddd; margin-top: 20px; padding-top: 10px; } </style></head><body> <div class="container"> <p style="text-align:center">You have received a new message from your contact form. Here are the details:</p> <div class="details"> <p><strong>Name:</strong> ${name}</p> <p><strong>Email:</strong> ${email}</p> <p><strong>Phone Number:</strong> ${phone}</p> <p><strong>Message:</strong></p> <p>${message}</p> </div> </div></body></html>`
        }
        const mailresponse = await transporter.sendMail(mailOptions)
        return mailresponse
    } catch (error) {
        throw new Error(error.message)
    }
}