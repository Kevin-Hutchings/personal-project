const nodemailer = require("nodemailer");

const main = async (email) => {
  const { EMAIL, PASSWORD, OAUTH_CLIENTID, OAUTH_CLIENT_SECRET, OAUTH_REFRESH_TOKEN} = process.env;
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: EMAIL,
      pass: PASSWORD,
      clientId: OAUTH_CLIENTID,
      clientSecret: OAUTH_CLIENT_SECRET,
      refreshToken: OAUTH_REFRESH_TOKEN,
    },
  });

  transporter.verify((err, success) => {
    err
      ? console.log(err)
      : console.log(`=== Server is ready to take messages: ${success} ===`);
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: 'Project-Ghibli <ktmhutchings@gmail.com>',
    to: email,
    subject: "Test Email",
    text: "Thanks for visiting Project-Ghibli.  This email is for demonstration purposes only.", // plain text body
    html: "<p>Thanks for visiting <b>Project-Ghibli</b>.  This email is for demonstration purposes only.</p>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}

main().catch(err => console.log(err));

module.exports = {
  main,
};
