$(document).ready(function () { 
    var $champ = $('.champ');
        $champ.keyup(function () {
        // CHECK FILLED FIELDS
            if ($(this).val().length <= 1) {
                $(this).css({ 
                    borderColor: 'red'
                });
            }
            else {
                $(this).css({
                    borderColor: 'initial'
            });
        }
    });
});
// EMAIL VALIDATION
var $mdp = $('#regFormPass');
var regPassTest = $mdp.value;
$mdp.keyup(function(){
    if ($mdp[0].value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[\da-zA-Z]{8,16}$/)) {
        document.getElementById('pop').style.display = 'none';
    }else{
        document.getElementById('pop').style.display = 'block';
    }
});
// SHOW/HIDE PASSWORD 1
function myFunction() {
    var x = document.getElementById("regFormPass"); 
        if (x.type === "password") {
            x.type = "text";
        } else {
            x.type = "password";
        }    
} 
// SHOW/HIDE PASSWORD 2
function myFunction2() {
    var y = document.getElementById("regFormPass2");
        if (y.type === "password") {
            y.type = "text";
        } else {
            y.type = "password";
        }
}
// PASSWORDS MATCH
$('#regFormPass2').on('keyup',function(){
    if ($('#regFormPass').val() == $('#regFormPass2').val()) {
        $('#message').html('Les mots de passe correspondent').css('color', 'green');
      } else 
        $('#message').html('Les mots de passe ne correspondent pas').css('color', 'red');
});



