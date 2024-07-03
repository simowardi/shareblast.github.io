document.getElementById('forgot-password-form').addEventListener('submit', function(e) {
	  e.preventDefault();
	  const email = document.getElementById('email').value;
	  
	  if (email) {
		  	document.getElementById('confirmation').style.display = 'block';
		  	document.getElementById('forgot-password-form').style.display = 'none';
		  	
		   to initiate the password reset process for the provided email address.
	 		console.log(`Password reset requested for email: ${email}`);
	 		  } else {
	 		  	alert('Please enter your email address.');
	 		  	  }
});
