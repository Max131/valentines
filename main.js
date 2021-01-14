'use strict';
document.addEventListener('DOMContentLoaded', ev => {
	const cards = document.querySelectorAll('.card');
	const siteColors = ['#ffa68d', '#fd3a84'];
	cards.forEach(card => {
		card.addEventListener('click', e => {
			card.classList.toggle('card--active');
		})
	});
	
});