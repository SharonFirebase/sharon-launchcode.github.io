// event listener ... listen to form submit for initial intake 
// to do that, must first grab the form
// get the id
// document.getElementById('contactForm');
// then add event listener (addEventListener), adding an event (submit )and a function (submit form)
document.getElementById('contactForm').addEventListener('submit','submitForm');
//create a function called submit form that will take an event (e) ... function submitForm(e) {}
// and then set up to prevent default behaviour, which will automatically submit to its own page
// take the event parameter, which is e, and preventDefault ..... e.preventDefault()
function submitForm(e) {
  e.preventDefault();
  console.log('test');
}

