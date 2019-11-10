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


            
  function ingreso()
  {
    var email2=document.getElementById('email').value;
    var pass2=document.getElementById('pass').value;
    firebase.auth().signInWithEmailAndPassword(email2, pass2)
    .then(function(result) {
      // result.user.tenantId should be ‘TENANT_PROJECT_ID’.
    }).catch(function(error) {
      // Handle error.
    });
  }
   

}