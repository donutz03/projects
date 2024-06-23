'use strict';

const { encrypt, decrypt } = require('./criptare1.js'); 

process.env.ENCRYPTION_KEY = '12345678901234567890123456789012'; 

let text = "Salut, aceasta este o testare pentru criptare si decriptare!";

console.log("Text original: ", text);

// Criptare
let encryptedText = encrypt(text);
//debugger;
console.log("Text criptat: ", encryptedText);

// Decriptare
let decryptedText = decrypt(encryptedText);
console.log("Text decriptat: ", decryptedText);
