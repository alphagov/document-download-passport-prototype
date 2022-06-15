const express = require('express')
const router = express.Router()

var NotifyClient = require('notifications-node-client').NotifyClient,
    notify = new NotifyClient(process.env.NOTIFYAPIKEY);

// Add your routes here - above the module.exports line

// The URL here needs to match the URL of the page that the user is on
// when they type in their email address
router.post('/email-address', function (req, res) {

  notify.sendEmail(
    // this long string is the template ID, copy it from the template
    // page in GOV.UK Notify. It’s not a secret so it’s fine to put it
    // in your code.
    '058ad366-fc4a-47cf-b4aa-f7c8cde40e63',
    // `emailAddress` here needs to match the name of the form field in
    // your HTML page
    req.body.emailAddress
  ).catch(err => console.error(err));

  // This is the URL the users will be redirected to once the email
  // has been sent
  res.redirect('/confirmation');

});

module.exports = router
