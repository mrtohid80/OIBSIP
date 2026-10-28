function convertTemperature() {
  const tempInput = document.getElementById('tempInput').value.trim();
  const unit = document.getElementById('unitSelect').value;
  const errorBox = document.getElementById('errorBox');
  const resultsSection = document.getElementById('resultsSection');

  errorBox.classList.add('hidden');
  resultsSection.classList.add('hidden');

  if (tempInput === '' || isNaN(tempInput)) {
    showError('Please enter a valid numeric temperature value.');
    return;
  }

  const val = parseFloat(tempInput);
  let c, f, k;

  if (unit === 'celsius') {
    if (val < -273.15) {
      showError('Temperature cannot fall below Absolute Zero (-273.15 °C).');
      return;
    }
    c = val;
    f = (val * 9/5) + 32;
    k = val + 273.15;
  } else if (unit === 'fahrenheit') {
    if (val < -459.67) {
      showError('Temperature cannot fall below Absolute Zero (-459.67 °F).');
      return;
    }
    c = (val - 32) * 5/9;
    f = val;
    k = c + 273.15;
  } else if (unit === 'kelvin') {
    if (val < 0) {
      showError('Kelvin temperature cannot fall below Absolute Zero (0 K).');
      return;
    }
    c = val - 273.15;
    f = (c * 9/5) + 32;
    k = val;
  }

  document.getElementById('resCelsius').textContent = `${c.toFixed(2)} °C`;
  document.getElementById('resFahrenheit').textContent = `${f.toFixed(2)} °F`;
  document.getElementById('resKelvin').textContent = `${k.toFixed(2)} K`;

  resultsSection.classList.remove('hidden');
}

function showError(message) {
  const errorBox = document.getElementById('errorBox');
  errorBox.textContent = message;
  errorBox.classList.remove('hidden');
}

function resetForm() {
  document.getElementById('tempForm').reset();
  document.getElementById('errorBox').classList.add('hidden');
  document.getElementById('resultsSection').classList.add('hidden');
}