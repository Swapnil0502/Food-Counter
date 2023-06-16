function SendEmail(){
    var params={
        from_name:document.getElementById("name").value,
        email_id:document.getElementById("email").value,
        adress:document.getElementById("adress").value,
        phone:document.getElementById("phone number").value,
        message:document.getElementById("area").value
    }
    emailjs.send('service_ue0u59e', 'template_zrwiudc', params)
    .then(function(res) {
        alert('SUCCESS!'+res.status);
    })
}