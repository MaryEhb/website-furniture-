//arrow button
const arrow = document.querySelector(".arrow");
const aboutSection = document.getElementById("about");

arrow.removeAttribute('href');
arrow.addEventListener('click',(e)=>{
    aboutSection.scrollIntoView({behavior:"smooth"});
});

//Start Wow 
new WOW().init();const submitBtn = document.getElementById('submit');






// sending the form

function submitForm(e){
    e.preventDefault();

    let name = document.querySelector(".name").value;
    let email = document.querySelector(".email").value;
    let message = document.querySelector(".message").value;

    sendEmail(name,email,message);
    document.querySelector(".contact_form").reset();
}

function sendEmail(name,email,message){
    Email.send({
        Host:"smtp.gmail.com",
        Username:'monicahans99@gmail.com',
        Password: "mhhjqiqbeofwyojo",
        To: "monicahans99@gmail.com",
        From: "monicahans99@gmail.com",
        Subject:`${name} sent you a message`,
        Body:`Name:${name} <br/> Email: ${email}<br/> Message: ${message}`,
    }).then((message) => alert("mail sent successfully"));
}

document.querySelector(".contact_form").addEventListener('submit',submitForm);