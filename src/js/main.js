
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
		anchor.addEventListener('click', function (e) {
				  e.preventDefault();
				  document.querySelector(this.getAttribute('href')).scrollIntoView({
					  		behavior: 'smooth'
					  	  });
				});
	  });

   window.addEventListener('scroll', function() {
   	const scrollPosition = window.pageYOffset;
   		document.querySelector('.hero').style.backgroundPositionY = scrollPosition * 0.5 + 'px';
   		  });
