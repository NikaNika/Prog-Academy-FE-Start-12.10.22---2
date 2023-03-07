const currency_one = document.getElementById('currency-one');
const amount_one = document.getElementById('amount-one');
const currency_two = document.getElementById('currency-two');
const amount_two = document.getElementById('amount-two');
const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');
const date = document.querySelector('.date');

// function
function calculate() {
	// get the select options value
	const curOneVal = currency_one.value;
	const curTwoVal = currency_two.value;

	// fetch the data of selected currency_one
	fetch(`https://api.exchangerate-api.com/v4/latest/${curOneVal}`)
		.then((res) => res.json())
		.then((data) => {
			console.log(data);

			date.innerHTML = 'Today: ' + data.date;

			for (let key in data.rates) {
				let option = document.createElement('option');
				option.innerHTML = key;
				currency_one.appendChild(option);
			}

			for (let key in data.rates) {
				let option = document.createElement('option');
				option.innerHTML = key;
				currency_two.appendChild(option);
			}

			const rate = data.rates[curTwoVal];

			rateEl.innerText = `1 ${curOneVal} = ${rate.toFixed(4)} ${curTwoVal}`;
			amount_two.value = (amount_one.value * rate).toFixed(2);
		});
}

// Event listeners
currency_one.addEventListener('change', calculate);
currency_two.addEventListener('change', calculate);

amount_one.addEventListener('input', calculate);
amount_two.addEventListener('input', calculate);

// Swap the values;
swap.addEventListener('click', () => {
	const temp = currency_one.value;
	currency_one.value = currency_two.value;
	currency_two.value = temp;

	calculate();
});

// calculate on page load
calculate();
