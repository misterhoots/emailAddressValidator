/*
*   Title: My Simple email vallidator
*   Author: Mark Saunders
*   email: mark@misterhoots.com
*/

function getEmailAddress () {
    return document.querySelector('input[type=email]').value;
}

function validateEmailAddress (myEmailAddress) {
   var at = myEmailAddress.indexOf('@');
   var dot = myEmailAddress.indexOf('.');
   // We need to get number of '@' symbol to check if equal to 1 in our condition. Also need to set to 0 value in myEmailAddress.
   var atCount = myEmailAddress.match(/@/g) === null || undefined? 0 : myEmailAddress.match(/@/g).length;
    // We need to get number of '.' symbol to check if equal to 1 in our condition.  Also need to set to 0 value in myEmailAddress.
   var dotCount = myEmailAddress.match(/\./g) === null || undefined? 0 : myEmailAddress.match(/\./g).length;

   if ((at > 0) && (dot > (at + 1)) && (dot !== (myEmailAddress.length - 1)) && (atCount === 1) && (dotCount === 1)) {
     return 'VALID email address';
   }
   else {
     return 'NOT VALID - try again';
   }
}

document.querySelector('input[type=submit]').addEventListener('click', function () {
  alert(validateEmailAddress(getEmailAddress()));
});
