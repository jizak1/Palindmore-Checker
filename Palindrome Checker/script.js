document.addEventListener('DOMContentLoaded', function() {
	const textInput = document.getElementById('text-input');
	const checkBtn = document.getElementById('check-btn');
	const result = document.getElementById('result');

	function isPalindrome(str) {
		const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
		return cleanStr === cleanStr.split('').reverse().join('');
	}

	function checkPalindrome() {
		const inputValue = textInput.value;
		
		if (!inputValue) {
			alert('Please input a value');
			return;
		}

		const isPal = isPalindrome(inputValue);
		result.textContent = `${inputValue} is ${isPal ? '' : 'not '}a palindrome`;
		
		result.style.opacity = '0';
		result.style.transform = 'translateZ(15px) scale(0.95)';
		setTimeout(() => {
			result.style.transition = 'all 0.3s ease';
			result.style.opacity = '1';
			result.style.transform = 'translateZ(15px) scale(1)';
		}, 50);
	}

	checkBtn.addEventListener('click', checkPalindrome);
	textInput.addEventListener('keypress', function(e) {
		if (e.key === 'Enter') {
			checkPalindrome();
		}
	});

	const container = document.querySelector('.container');
	document.addEventListener('mousemove', function(e) {
		const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
		const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
		container.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
	});
});