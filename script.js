// <--------------navbar start---------------->
function toggleMenu() {
    const menu = document.getElementById('sideMenu');
    if (menu.style.right === '0px') {
      menu.style.right = '-220px';
    } else {
      menu.style.right = '0px';
    }
  }

  // <-----------------navbar end----------------->




    // <---------------institute details start( Who We Are)---------------->

    const scrollContainer = document.getElementById('scrollContainer');
  function scrollLeft() {
    scrollContainer.scrollBy(`{ left: -600, behavior: 'smooth' }`);
  }
  function scrollRight() {
    scrollContainer.scrollBy(`{ left: 600, behavior: 'smooth' }`);
  }

  // <--------------------institute details end( Who We Are)----------------->

  // <---------------------See More Button--------------------->

          function openModal() {
  document.getElementById('customModal').style.display = 'flex';
}

function closeModal() {
  document.getElementById('customModal').style.display = 'none';
}
            

  // <---------------------See More Button End--------------------->


// <-------------------------Email Js------------------------


// EmailJS Contact Form Submission
document.addEventListener('DOMContentLoaded', function() {
  if (typeof emailjs !== 'undefined' && emailjs.init) {
    emailjs.init("yilg1U30SjE-KJOfm");
  } else {
    console.error('EmailJS library not loaded.');
  }

  var contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      if (typeof emailjs === 'undefined' || !emailjs.send) {
        alert('EmailJS is not loaded. Please try again later.');
        return;
      }
      console.log("Name value:", document.getElementById("name").value);
      emailjs.send("service_ljruqbv", "template_08tawo4", {
        from_name: document.getElementById("name").value,
        from_email: document.getElementById("email").value,
        gender: document.getElementById("gender").value,
        course: document.getElementById("course").value,
        message: document.getElementById("message").value
      })
      .then(function(response) {
        alert("Message sent successfully!");
        
        contactForm.reset();
      }, function(error) {
        alert("Failed to send message. Please try again.");
      });
    });
  }
});
// ...existing code...

//   const form = document.getElementById('contactForm');

//   form.addEventListener('submit', function (e) {
//     e.preventDefault();

//     emailjs.sendForm('service_azjh6vr', 'template_rssbjmg', form)
//       .then(() => {
//         alert("Message sent successfully!");
//         form.reset();
//       }, () => {
//         alert("Failed to send message.");
//       });
//   });

//   function cancelForm() {
//     alert("Failed to send message.");
//     document.getElementById("contactForm").reset();
//   }

  // <--------------------------EMail Js End------------------------>
// function Email(){
//   emailjs.init({
//   publicKey: '_jcd_jsxDUCbdjww7',
// });

// const name = document.getElementById('name').value.trim();
// const email = document.getElementById('email').value.trim();
// const gender = document.getElementById('gender').value.trim();
// const course = document.getElementById('course').value.trim();
// const message = document.getElementById('message').value.trim();

// const params = {
//   form_name: name,
//   form_email: email,
//   form_gender: gender,
//   form_course: course,
//   from_message: message,
// };

// emailjs.send("service_azjh6vr", "template_rssbjmg", params).then(function() {
//   alert("Message sent successfully!");
// }).catch(function() {
//   alert("Failed to send message!");
// });
// }




