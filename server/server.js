'use strict';

let FirebaseTokenGenerator = require("firebase-token-generator"),
    tokenGenerator = new FirebaseTokenGenerator("9h2iBar6zptxFtpw6Rp92PW6HyMmroYkLEqyPmyr"),
    token = tokenGenerator.createToken({ uid: "uniqueId1", some: "arbitrary", data: "here" });

console.log('token');
console.log(token);