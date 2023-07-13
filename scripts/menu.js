const menu_btn = document.querySelector(".hamburger");
const mobile_menu = document.querySelector('.mobile-nav');

menu_btn.addEventListener("click", function() {
    menu_btn.classList.toggle('is-active');
    mobile_menu.classList.toggle("is-active");
});

$(document).ready(function()
{
    $('.contact').click(function (e) 
    {
        $('.card').toggleClass('active');
        $('.banner').toggleClass('active');
        $('.photo').toggleClass('active');
        $('.social-media-banner').toggleClass('active');
        $('.email-form').toggleClass('active');  
        var buttonText = $('button.contact#main-button').text();
        if (buttonText === 'back')
        {
            buttonText = 'click to get in touch';
            $('button.contact#main-button').text(buttonText);
        }
        else
        {
            buttonText = 'back';
            $('button.contact#main-button').text(buttonText);
        }
    });
});


const form = document.querySelector('.email-form');
const emailInput = document.getElementById('email');

form.addEventListener('submit', function(event) {

  event.preventDefault();

  // Get the entered email value
  const emailValue = emailInput.value.trim();

  // Validate the email using a regular expression
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailValue)) {
    // Display an error message if the email is not valid
    alert('Please enter a valid email address.');
    return;
  }

  form.submit();
});