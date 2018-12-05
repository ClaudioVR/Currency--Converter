const button = document.getElementById('btn');
const resultHead = document.getElementById('exch-result-head');
const resultPara = document.getElementById('exch-result-p');

button.addEventListener('click', () => {
	const input = document.getElementById('amount').value;
	const currencyInput = document.getElementById('currencyFrom').value;
	const currencyOutput = document.getElementById('currencyTo').value;
	const euroNokRate = 9.53;
	const dollarNokRate = 0.119;
	const poundNokRate = 0.092;
	
	
	if(currencyInput === 'nok' && currencyOutput === 'euro') {
		resultHead.innerHTML = 'Euros: ' + (input / euroNokRate).toFixed(2); 
		resultPara.innerHTML = 'Exchange rate: ' + euroNokRate;
	} else if(currencyInput === 'nok' && currencyOutput === 'usd')  {
			resultHead.innerHTML = 'USD: ' + (input * dollarNokRate).toFixed(2); 
			resultPara.innerHTML = 'Exchange rate: ' + dollarNokRate;
	} else if(currencyInput === 'nok' && currencyOutput === 'gbp')  {
			resultHead.innerHTML = 'GBP: ' + (input * poundNokRate).toFixed(2); 
			resultPara.innerHTML = 'Exchange rate: ' + poundNokRate;
		}
});


