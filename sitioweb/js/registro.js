function registrar()
{
    var email=document.getElementById('email').value;
    var pass=document.getElementById('pass').value;

    firebase.auth().createUserWithEmailAndPassword(email, pass)
    .catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  if (errorCode == 'auth/weak-password') {
    alert('The password is too weak.');
  } else {
    alert(errorMessage);
  }
  console.log(error);
});
   alert(email);
   alert(pass);
   

}