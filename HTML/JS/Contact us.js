// script.js

function submitForm() {
  
    // Show a confirmation message
    alert('Form submitted successfully! Redirecting to Home Page...');
  
    // Redirect to index.html after a successful submission
    redirectToIndex();
  }
  
  function redirectToIndex() {
    // You can customize the URL to which you want to redirect
    window.location.href = 'index.html';
  }
  