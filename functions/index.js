var functions = require('firebase-functions');
const admin = require('firebase-admin');
const cors = require('cors')({preflightContinue: false, origin: "*", methods:['GET','POST']});
//var helper = require('sendgrid').mail;
admin.initializeApp(functions.config().firebase);

exports.updateRsvp = functions.https.onRequest((req, resp) => {
    resp.set('Access-Control-Allow-Origin', "*");
    // cors((req, resp) => {
    let eventPath = req.body["eventPath"];
    let guestKey = req.body["guestKey"];
    let rsvpData = req.body["data"];
console.log("eventPath:  "+eventPath);
    admin.database().ref('userEvents/' + eventPath).once("value",
        eventDataRaw => {
            
            let eventData = eventDataRaw.exportVal();
            let userKey = eventPath.split("/")[0];
            let guestListPath = "guestList/" + userKey + "/" + eventData.guestList + "/" + guestKey;
            console.log("guestListPath: " + guestListPath);
            admin.database().ref(guestListPath).update(rsvpData).then(
                r => {
                    
                    resp.status(200).send("OK");
                });
        });
    // });

});

exports.getEventById = functions.https.onRequest((req, resp) => {
    cors(req, resp, () => {
        var eventId = req.query.eventId;
        admin.database().ref('userEvents/' + eventId).once("value",
            data => {
                let event = data.exportVal();
                if (event && event.privacy.guestListVisibility === 'HOST_ONLY') {
                    event.guestList = null;
                    resp.send(event);
                }
                else {
                    resp.send(event);
                }
            },
            err => console.log("err>>   " + err)
        ).catch(ex =>
            console.log("Ex>>   " + ex)
            );
    });
});

// function sendEmail(to, from, content1) {

//     var fromEmail = new helper.Email(from);
//     var toEmail = new helper.Email(to);
//     var subject = 'Sent via Coloring Life';
//     var content = new helper.Content('text/plain', content1);
//     var mail = new helper.Mail(fromEmail, subject, toEmail, content);

//     var sg = require('sendgrid')("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");
//     var request = sg.emptyRequest({
//         host: "api.sendgrid.com",
//         method: 'POST',
//         path: '/v3/mail/send',
//         body: mail.toJSON()
//     });
//     console.log("Request>> " + JSON.stringify(request));
//     sg.API(request, function (error, response) {
//         if (error) {
//             console.log('Error response received');
//         }
//         console.log(response.statusCode);
//         console.log(response.body);
//         console.log(response.headers);
//     });
// }

// exports.makeUppercase = functions.database.ref('userEvents/{key}')
//     .onWrite(event => {
//         // Grab the current value of what was written to the Realtime Database.

//         console.log('DB Event>> ', JSON.stringify(event));
//         console.log('Data Exists?:    ' + event.data.previous.exists());
//         console.log('Previous Value:  ' + JSON.stringify(event.data.previous));
//         console.log('Current Value:   ' + JSON.stringify(event.data.val()));
//         const eventData = event.data.val();
//         if (eventData.guestList[0]) {
//             var toEmail = eventData.guestList[0].email;
//             var fromEmail = "coloringlife2017@gmail.com"
//             var content = eventData.invitationDescription;
//             sendEmail(toEmail, fromEmail, content);
//         }
//         //const uppercase = original.toUpperCase();
//         // You must return a Promise when performing asynchronous tasks inside a Functions such as
//         // writing to the Firebase Realtime Database.
//         // Setting an "uppercase" sibling in the Realtime Database returns a Promise.
//         return null;//event.data.ref.parent.child('uppercase').set(uppercase);
//     });

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

// const admin = require('firebase-admin');
// admin.initializeApp(functions.config().firebase);

// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });




// Take the text parameter passed to this HTTP endpoint and insert it into the
// Realtime Database under the path /messages/:pushId/original
// exports.addMessage = functions.https.onRequest((req, res) => {
//   // Grab the text parameter.
//   const original = req.query.text;

//   // Push it into the Realtime Database then send a response
//   admin.database().ref('messages').push().set({msg: original}).then(snapshot => {
//     // Redirect with 303 SEE OTHER to the URL of the pushed object in the Firebase console.
//     console.log('snapShot: '+snapshot);
//     //res.redirect(303, snapshot.ref);
//   });
// }); userEvents


