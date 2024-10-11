



// pre loader start
window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");

  loader.classList.add("loader--hidden");

  loader.addEventListener("transitionend", () => {
    document.body.removeChild(loader);
  });
});
//pre loader ends


  // Disable right-click
  document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
  });

  // Disable common key shortcuts for inspecting the page
  document.onkeydown = function(e) {
    if (
      e.keyCode == 123 || // F12
      (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) || // Ctrl+Shift+I
      (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) || // Ctrl+U
      (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) || // Ctrl+Shift+C
      (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) // Ctrl+Shift+J
    ) {
      return false;
    }
  };

  (function() {
    var element = new Image();
    Object.defineProperty(element, 'id', {
      get: function() {
        alert('Developer tools are open. Please close them!');
        window.location = 'about:blank'; // Optionally redirect the user
      }
    });
    console.log(element);
  })();

  var _0x1a2b = ['log', 'Developer tools are open. Please close them!'];
  (function() {
    var _0x3c4d = new Image();
    Object['defineProperty'](_0x3c4d, 'id', {
      get: function() {
        alert(_0x1a2b[1]);
        window['location'] = 'about:blank';
      }
    });
    console[_0x1a2b[0]](_0x3c4d);
  })();

  window.addEventListener('devtoolschange', function(e) {
    if (e.detail.open) {
      alert('Inspecting the page is disabled!');
      window.location = 'about:blank'; // Redirects user to a blank page
    }
  });


const countElement = document.getElementById('count');
const plusButton = document.getElementById('plus');
const minusButton = document.getElementById('minus');

let count = 0;

function increaseCount() {
  count++;
  countElement.textContent = count;
}

function decreaseCount() {
  if (count > 0) {
    count--;
    countElement.textContent = count;
  }
}

plusButton.addEventListener('click', increaseCount);
minusButton.addEventListener('click', decreaseCount);




$(document).ready(function() {
  // Array of countries
  var countries = [
      "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", 
      "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", 
      "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", 
      "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", 
      "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", 
      "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", 
      "Chile", "China", "Colombia", "Comoros", "Congo", "Costa Rica", 
      "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", 
      "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", 
      "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", 
      "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", 
      "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", 
      "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", 
      "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", 
      "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kosovo", 
      "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", 
      "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", 
      "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", 
      "Marshall Islands", "Mauritania", "Mauritius", "Mexico", 
      "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", 
      "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", 
      "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", 
      "North Korea", "North Macedonia", "Norway", "Oman", "Pakistan", 
      "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", 
      "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", 
      "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", 
      "Saint Vincent and the Grenadines", "Samoa", "San Marino", 
      "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", 
      "Seychelles", "Sierra Leone", "Singapore", "Slovakia", 
      "Slovenia", "Solomon Islands", "Somalia", "South Africa", 
      "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", 
      "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan", 
      "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", 
      "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", 
      "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", 
      "United Kingdom", "United States", "Uruguay", "Uzbekistan", 
      "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", 
      "Zambia", "Zimbabwe"
  ];
  
  // Function to show country suggestions
  function showSuggestions() {
      var inputVal = $('#countryInput').val().toLowerCase();
      var suggestions = '';
      countries.forEach(function(country) {
          if (country.toLowerCase().startsWith(inputVal)) {
              suggestions += '<div class="border-top border-left border-right">' + country + '</div>';
          }
      });
      $('#countryList').html(suggestions);
      $('#countryList').toggleClass('d-none', suggestions === ''); // Hide/show list if no suggestions
  }
  
  // Event listener for input field
  $('#countryInput').on('input', function() {
      showSuggestions();
  });
  
  // Event listener for clicking on suggestions
  $(document).on('click', '#countryList div', function() {
      $('#countryInput').val($(this).text());
      $('#countryList').html('');
  });
});
// document.addEventListener('DOMContentLoaded', function () {
//   const loginForm = document.getElementById('loginForm');
//   const signupForm = document.getElementById('signupForm');
//   const switchToSignUpBtn = document.getElementById('switchToSignUp');

//   switchToSignUpBtn.addEventListener('click', function () {
//       loginForm.style.display = 'none';
//       signupForm.style.display = 'block';
//       switchToSignUpBtn.style.display = 'none'; // Hide the switch button after switching to sign up
//   });
// });


// Array to store user credentials
let users = JSON.parse(localStorage.getItem('users')) || [];

// Function to handle sign-up
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get the values from the sign-up form
    const signupUsername = document.getElementById('signupUsername').value.trim();
    const email = document.getElementById('email').value.trim();
    const signupPassword = document.getElementById('signupPassword').value.trim();

    // Validate inputs
    if (signupUsername === '' || email === '' || signupPassword === '') {
        alert('Invalid input! Please fill out all fields.');
        return; // Early return for invalid input
    }

    // Check if the username, email, or password is already taken
    const userExists = users.some(user => user.username === signupUsername || user.email === email || user.password === signupPassword);

    if (userExists) {
        alert('Username, email, or password already exists. Please choose another.');
    } else {
        // Store the credentials in the users array
        const user = {
            username: signupUsername,
            email: email,
            password: signupPassword
        };
        users.push(user);

        // Store the credentials in local storage
        localStorage.setItem('users', JSON.stringify(users));

        // Notify the user of successful sign-up
        alert('Sign-up successful! You can now log in.');

        // Clear the sign-up form
        document.getElementById('signupForm').reset();

        // Optionally switch back to the login form
        switchToLogin();
    }
});

// Function to handle login
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get the values from the login form
    const loginUsername = document.getElementById('username').value.trim();
    const loginPassword = document.getElementById('password').value.trim();

    // Validate inputs
    if (loginUsername === '' || loginPassword === '') {
        alert('Invalid input! Please enter username and password.');
    } else {
        // Check if the credentials exist in the users array
        const user = users.find(user => user.username === loginUsername && user.password === loginPassword);

        if (user) {
            alert('Login successful!');
            document.getElementById('Sulaimon').innerHTML = 'Welcome, ' + loginUsername + '!';

            // Hide the login/signup button
            document.querySelector('.gay-hover').style.display = 'none';

            // Display the contact icon with logout button
            const contactIcon = document.createElement('div');
            contactIcon.style.position = 'relative';

            const userIcon = document.createElement('i');
            userIcon.className = 'fa-solid fa-user';
            userIcon.style.color = '#fff';
            userIcon.style.cursor = 'pointer';
            userIcon.style.marginTop = '0.5cm';

            const logoutButton = document.createElement('button');
            logoutButton.innerText = 'Logout';
            logoutButton.className = 'logout-button'; // Apply the custom class
            logoutButton.style.display = 'block'; // Show logout button
            logoutButton.style.marginLeft = '10px';

            // Add styles for logout button
            logoutButton.style.backgroundColor = '#8e2157';  // Custom background color
            logoutButton.style.color = 'white';                // Text color
            logoutButton.style.border = 'none';                // Remove border
            logoutButton.style.padding = '10px 15px';          // Add padding
            logoutButton.style.borderRadius = '5px';          // Rounded corners
            logoutButton.style.cursor = 'pointer';             // Pointer cursor on hover
            logoutButton.style.fontSize = '14px';             // Font size
            logoutButton.style.transition = 'background-color 0.3s ease'; // Smooth transition

            // Hover effect for logout button
            logoutButton.onmouseenter = () => {
                logoutButton.style.backgroundColor = '#6c1c45'; // Darker shade for hover effect
            };
            logoutButton.onmouseleave = () => {
                logoutButton.style.backgroundColor = '#8e2157'; // Original color
            };

            logoutButton.addEventListener('click', logout);

            contactIcon.appendChild(userIcon);
            contactIcon.appendChild(logoutButton);
            document.querySelector('.navbar-nav').appendChild(contactIcon);

            // Show logout button when user icon is clicked
            userIcon.addEventListener('click', function() {
                logoutButton.style.display = logoutButton.style.display === 'none' ? 'block' : 'none';
            });
        } else {
            alert('Invalid username or password.');
        }

        // Clear form fields after login attempt
        document.getElementById('loginForm').reset();
    }
});

// Function to show user info when contact icon is clicked
function showUserInfo() {
    let userInfo = '';
    users.forEach((user, index) => {
        userInfo += `User ${index + 1}:\nUsername: ${user.username}\nEmail: ${user.email}\n\n`;
    });

    alert(userInfo || 'No user information available.');
}

// Function to switch to the sign-up form
document.getElementById('switchToSignUp').addEventListener('click', function() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('signupForm').style.display = 'block';
});

// Optional: function to switch back to the login form after signing up
function switchToLogin() {
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('signupForm').style.display = 'none';
}

// Function to handle logout
function logout() {
    // Clear the user info display
    document.getElementById('Sulaimon').innerHTML = 'Welcome!';

    // Show the login/signup button again
    document.querySelector('.gay-hover').style.display = 'block'; // Show login/signup button

    // Remove the user icon and logout button
    const contactIcon = document.querySelector('.navbar-nav div');
    if (contactIcon) {
        contactIcon.remove(); // Remove the contact icon and logout button from the DOM
    }

    // Clear the user data from local storage
    localStorage.setItem('users', JSON.stringify(users.filter(user => user.username !== document.getElementById('username').value.trim())));
    console.log('Logged out');
}







function toggleFlightOptions(selectedOption) {
    // Hide all sections initially
    document.getElementById('return-flight').style.display = 'none';
    document.getElementById('one-way-flight').style.display = 'none';
    document.getElementById('multi-city-flight').style.display = 'none';

    // Show the selected section
    if (selectedOption === 'return') {
        document.getElementById('return-flight').style.display = 'flex';
    } else if (selectedOption === 'one-way') {
        document.getElementById('one-way-flight').style.display = 'flex';
    } else if (selectedOption === 'multi-city') {
        document.getElementById('multi-city-flight').style.display = 'flex';
    }
}



// Function to check if the "About" section is in the viewport
window.addEventListener('scroll', function() {
    const luckSection = document.getElementById('luck');
    const sectionPosition = luckSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight;
  
    // If the top of the section is within the visible screen area
    if (sectionPosition < screenPosition) {
        luckSection.classList.add('visible'); // Add the 'visible' class to trigger the animation
    } else {
        luckSection.classList.remove('visible'); // Remove the 'visible' class if you scroll away
    }
  });



  


// Function to book a flight
function bookFlight() {
    // Get selected flight type
    const flightType = document.querySelector('input[name="option"]:checked').value;

    let formData = {};
    let isValid = true;

    // Depending on the selected flight type, get the respective input fields
    if (flightType === 'return') {
        formData.departureDate = document.querySelector('#return-flight input[type="date"]:nth-child(3)').value;
        formData.returnDate = document.querySelector('#return-flight input[type="date"]:nth-child(4)').value;
        formData.classType = document.querySelector('#return-flight select').value;
        formData.destination = document.querySelector('#return-flight input[type="text"]').value;
    } else if (flightType === 'one-way') {
        formData.departureDate = document.querySelector('#one-way-flight input[type="date"]').value;
        formData.classType = document.querySelector('#one-way-flight select').value;
        formData.destination = document.querySelector('#one-way-flight input[type="text"]').value;
    } else if (flightType === 'multi-city') {
        formData.departureDate = document.querySelector('#multi-city-flight input[type="date"]').value;
        formData.classType = document.querySelector('#multi-city-flight select').value;
        formData.destination = document.querySelector('#multi-city-flight input[type="text"]').value;
    }

    // Validate the form data
    if (!formData.departureDate || !formData.destination) {
        isValid = false;
        alert('Please fill out all required fields.');
        return;
    }

    // If valid, submit the data
    if (isValid) {
        // You can now submit formData to a server or process it further
        console.log('Booking Data:', formData);

        // Example of submission (replace with your actual server endpoint)
        fetch('/book-flight', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            alert('Flight booked successfully!');
            console.log(data);
        })
        .catch(error => {
            console.error('Error booking flight:', error);
        });
    }
}



 function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
  }
   
  