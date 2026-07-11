(function () {
  'use strict';

  // ---------------------------------------------
  // Constants
  // ---------------------------------------------
  const ABSOLUTE_ZERO_C = -273.15;

  // Gauge maps this Celsius range onto a 0%-100% mercury column.
  // Values outside the range are simply clamped visually.
  const GAUGE_MIN_C = -50;
  const GAUGE_MAX_C = 50;

  // ---------------------------------------------
  // Elements
  // ---------------------------------------------
  const form        = document.getElementById('converterForm');
  const input       = document.getElementById('tempValue');
  const errorMsg    = document.getElementById('inputError');
  const outC        = document.getElementById('outC');
  const outF        = document.getElementById('outF');
  const outK        = document.getElementById('outK');
  const mercuryFill = document.getElementById('mercuryFill');
  const bulbFill    = document.getElementById('bulbFill');
  const resultCards = document.querySelectorAll('.result-card');

  // ---------------------------------------------
  // Conversion helpers
  // ---------------------------------------------
  function toCelsius(value, unit) {
    switch (unit) {
      case 'C': return value;
      case 'F': return (value - 32) * 5 / 9;
      case 'K': return value - 273.15;
      default:  return value;
    }
  }

  function celsiusToFahrenheit(c) { return c * 9 / 5 + 32; }
  function celsiusToKelvin(c)     { return c + 273.15; }

  function round(n) {
    return Math.round(n * 100) / 100;
  }

  // ---------------------------------------------
  // Validation
  // ---------------------------------------------
  // Accepts optional leading minus, digits, optional decimal part.
  const NUMERIC_PATTERN = /^-?\d+(\.\d+)?$/;

  function isValidNumber(raw) {
    return NUMERIC_PATTERN.test(raw.trim());
  }

  function showError(message) {
    errorMsg.textContent = message;
    input.classList.add('has-error');
    input.setAttribute('aria-invalid', 'true');
  }

  function clearError() {
    errorMsg.textContent = '';
    input.classList.remove('has-error');
    input.removeAttribute('aria-invalid');
  }

  function resetResults() {
    outC.textContent = '—';
    outF.textContent = '—';
    outK.textContent = '—';
    resultCards.forEach((card) => card.classList.remove('active'));
    setGauge(null);
  }

  // ---------------------------------------------
  // Gauge (signature thermometer visual)
  // ---------------------------------------------
  function mercuryColor(celsius) {
    // Three-stop interpolation: cold -> mid -> hot
    const stops = [
      { t: -50, c: [94, 179, 228] },  // --cold
      { t: 20,  c: [242, 193, 78] },  // --mid
      { t: 50,  c: [240, 101, 74] },  // --hot
    ];

    const clamped = Math.max(stops[0].t, Math.min(stops[2].t, celsius));

    let lower = stops[0];
    let upper = stops[stops.length - 1];
    for (let i = 0; i < stops.length - 1; i++) {
      if (clamped >= stops[i].t && clamped <= stops[i + 1].t) {
        lower = stops[i];
        upper = stops[i + 1];
        break;
      }
    }

    const span = upper.t - lower.t || 1;
    const ratio = (clamped - lower.t) / span;
    const rgb = lower.c.map((channel, i) =>
      Math.round(channel + (upper.c[i] - channel) * ratio)
    );

    return `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
  }

  function setGauge(celsius) {
    if (celsius === null || Number.isNaN(celsius)) {
      mercuryFill.style.height = '0%';
      mercuryFill.style.background = 'var(--cold)';
      bulbFill.style.background = 'var(--cold)';
      return;
    }

    const clamped = Math.max(GAUGE_MIN_C, Math.min(GAUGE_MAX_C, celsius));
    const percent = ((clamped - GAUGE_MIN_C) / (GAUGE_MAX_C - GAUGE_MIN_C)) * 100;
    const color = mercuryColor(celsius);

    mercuryFill.style.height = percent + '%';
    mercuryFill.style.background = color;
    bulbFill.style.background = color;
  }

  // ---------------------------------------------
  // Main convert routine
  // ---------------------------------------------
  function handleConvert(event) {
    event.preventDefault();

    const raw = input.value;

    if (raw.trim() === '') {
      showError('Enter a temperature value to convert.');
      resetResults();
      return;
    }

    if (!isValidNumber(raw)) {
      showError('That doesn\u2019t look like a number. Use digits only, e.g. -12 or 98.6.');
      resetResults();
      return;
    }

    const value = parseFloat(raw);
    const unit = form.elements['unit'].value;
    const celsius = toCelsius(value, unit);

    if (celsius < ABSOLUTE_ZERO_C - 1e-9) {
      showError(
        'That\u2019s below absolute zero \u2014 the coldest anything can possibly get ' +
        '(\u2212273.15\u00b0C / \u2212459.67\u00b0F / 0 K). Try a higher value.'
      );
      resetResults();
      return;
    }

    clearError();

    const fahrenheit = celsiusToFahrenheit(celsius);
    const kelvin = celsiusToKelvin(celsius);

    outC.textContent = round(celsius);
    outF.textContent = round(fahrenheit);
    outK.textContent = round(kelvin);

    resultCards.forEach((card) => {
      card.classList.toggle('active', card.dataset.unit === unit);
    });

    setGauge(celsius);
  }

  // ---------------------------------------------
  // Live typing: clear error state as the user edits,
  // and reject obviously invalid characters as they type.
  // ---------------------------------------------
  function handleLiveInput() {
    if (input.value.trim() === '' || isValidNumber(input.value)) {
      clearError();
    }
  }

  // ---------------------------------------------
  // Wire up
  // ---------------------------------------------
  form.addEventListener('submit', handleConvert);
  input.addEventListener('input', handleLiveInput);

  resetResults();
})();
