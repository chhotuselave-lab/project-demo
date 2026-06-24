function sendEmail() {
    var params = {
        from_name: document.getElementById('fullName').value,
        email_id: document.getElementById('Email').value,
        message: document.getElementById('message').value
    }
    emailjs.send("service_nu800ja", "template_68mauvr", params).then(function (res) {
        alert("seccuess" + res.status);
    })
}