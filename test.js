const form = document.getElementById('form1');
const emailInput = document.getElementById('emailInput');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const email = emailInput.value;
  if (validateEmail(email)) {
    alert('Valid email address!');
  } else {
    alert('You have entered an invalid email address!');
  }
});

function validateEmail(email) {
  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return email.match(mailformat);
}


function openPage(pageName, elmnt, color) {
var i, tabcontent, tablinks;
tabcontent = document.getElementsByClassName("tabcontent");
for (i = 0; i < tabcontent.length; i++) {
tabcontent[i].style.display = "none";
}
tablinks = document.getElementsByClassName("tablink");
for (i = 0; i < tablinks.length; i++) {
tablinks[i].style.backgroundColor = "";
}
document.getElementById(pageName).style.display = "block";
elmnt.style.backgroundColor = color;
}
