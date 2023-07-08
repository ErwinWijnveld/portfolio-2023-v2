// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
	host: 'smtp.forwardemail.net',
	port: 465,
	secure: true,
	auth: {
		// TODO: replace `user` and `pass` values from <https://forwardemail.net>
		user: 'REPLACE-WITH-YOUR-ALIAS@YOURDOMAIN.COM',
		pass: 'REPLACE-WITH-YOUR-GENERATED-PASSWORD',
	},
});

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	res.status(200).json({ name: 'John Doe' });
}
