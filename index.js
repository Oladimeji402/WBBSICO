



// pre loader start
window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");

  loader.classList.add("loader--hidden");

  loader.addEventListener("transitionend", () => {
    document.body.removeChild(loader);
  });
});
//pre loader ends



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

// Function to validate password complexity
function isValidPassword(password) {
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const isLongEnough = password.length >= 6; // Check if length is at least 6
    return hasUpperCase && hasLowerCase && hasNumber && isLongEnough;
}

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

    // Check password complexity
    if (!isValidPassword(signupPassword)) {
        alert('Password must be at least 6 characters long and contain at least one uppercase letter, one lowercase letter, and one number.');
        return; // Early return for invalid password
    }

    // Check if the username or email is already taken
    const userExists = users.some(user => user.username === signupUsername || user.email === email);

    if (userExists) {
        alert('Username or email already exists. Please choose another.');
    } else {
        // Encrypt the password before storing it
        const encryptedPassword = CryptoJS.AES.encrypt(signupPassword, 'yourSecretKey').toString();

        // Store the credentials in the users array
        const user = {
            username: signupUsername,
            email: email,
            password: encryptedPassword // Store encrypted password
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
        const user = users.find(user => user.username === loginUsername);

        if (user) {
            // Decrypt the stored password for comparison
            const decryptedPassword = CryptoJS.AES.decrypt(user.password, 'yourSecretKey').toString(CryptoJS.enc.Utf8);

            if (decryptedPassword === loginPassword) {
                alert('Login successful!');
                document.getElementById('Sulaimon').innerHTML = 'Welcome, ' + loginUsername + '!';

                // Hide the login/signup button
                document.querySelector('.gay-hover').style.display = 'none';

                // Show the contact icon and logout button
                document.getElementById('contactIcon').style.display = 'flex'; // Display the contact icon

                // Add event listener for the logout button
                document.getElementById('logoutButton').onclick = logout;

                // Show logout button when user icon is clicked
                document.getElementById('userIcon').addEventListener('click', function() {
                    const logoutButton = document.getElementById('logoutButton');
                    logoutButton.style.display = logoutButton.style.display === 'none' ? 'block' : 'none';
                });
            } else {
                alert('Invalid username or password.');
            }
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

// Logout function
function logout() {
    document.getElementById('Sulaimon').innerHTML = 'Welcome!';
    document.querySelector('.gay-hover').style.display = 'block'; 

    // Hide the contact icon and logout button
    document.getElementById('contactIcon').style.display = 'none'; 

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
   
  