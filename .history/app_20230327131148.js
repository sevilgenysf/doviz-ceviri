const api_key = 'd4787388e4ef26f9ab535988';
const url = 'https://v6.exchangerate-api.com/v6/' + api_key;

//elements
const currency_one = document.getElementById('currency_one');
const currency_two = document.getElementById('currency_two');
const list_one = document.getElementById('list_one');
const list_two = document.getElementById('list_two');
const amount = document.getElementById('amount');
const calculate = document.getElementById('calculate');
const result = document.createElement('result');

fetch(url + '/codes')
	.then((res) => res.json())
	.then((data) => {
		const items = data.supported_codes;
		let options;

		for (let item of items) {
			options += ` <option value="${item[0]}">${item[1]}</option>`;
		}

		list_one.innerHTML = options;
		list_two.innerHTML = options;
	});
