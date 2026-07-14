Task3- 🌡️ Temperature Converter

A clean, single-page temperature converter with a signature animated thermometer gauge. Convert between Celsius, Fahrenheit, and Kelvin in real time, with input validation and a color-shifting mercury visual that reflects the temperature.

🎯Objective
Build a small, focused utility that:
- Converts a temperature entered in Celsius, Fahrenheit, or Kelvin into all three scales at once
- Visualizes the value on an animated mercury-style gauge
- Validates input and gives clear, human-readable error messages (including a check for values below absolute zero)

⚙️Steps Performed
1. **Page structure (`index.html`)** — Built a form with a text input for the value, a radio-pill group to pick the input unit (°C / °F / K), a Convert button, and three result cards (Celsius, Fahrenheit, Kelvin) that display after conversion. Added a decorative thermometer gauge alongside the form.
2. **Visual design (`style.css`)** — Designed a dark "instrument panel" theme using CSS custom properties (deep navy background with radial glows, cold/mid/hot color tokens) and a three-font system (Space Grotesk for display, Inter for body, JetBrains Mono for numeric/mono elements). 
3. **Conversion logic (`script.js`)** — Implemented `toCelsius()` as a common pivot unit, then derived Fahrenheit and Kelvin from it, rounding results to two decimal places.
4. **Input validation** — Used a regex to accept only valid signed decimal numbers, showing inline error messages for empty input, non-numeric input, and values below absolute zero (−273.15 °C / −459.67 °F / 0 K), with live error-clearing as the user retypes.
5. **Gauge behavior** — Wrote `setGauge()` to map the entered Celsius value onto a −50 °C to 50 °C visual range, and `mercuryColor()` to interpolate a cold → mid → hot color gradient based on the value, applied to both the mercury column and the bulb.
6. **Result display** — On successful conversion, updated the three result values, highlighted the card matching the input unit, and reset everything cleanly (`resetResults()`) on error.

🛠️Tools & Technologies Used
- **HTML5** — semantic form markup with a `fieldset`/`legend` for the unit selector
- **CSS3** — custom properties, Grid/Flexbox, gradients
- **Vanilla JavaScript** — no frameworks; regex validation, DOM manipulation, linear color interpolation for the gauge

<img width="1822" height="872" alt="image" src="https://github.com/user-attachments/assets/37cab7b5-751c-4403-bb22-d907177d2185" />

✨Features
- **Three-way conversion** — enter a value in °C, °F, or K and instantly see all three scales.
- **Animated thermometer gauge** — a mercury column that fills and changes color (cold blue → mid yellow → hot red) based on the converted temperature.
- **Input validation** — rejects empty input, non-numeric input, and values below absolute zero (−273.15 °C / −459.67 °F / 0 K), with clear inline error messages.

🚀How It Works
1. The user enters a value and selects the input unit.
2. `script.js` normalizes the input to Celsius (`toCelsius`), then derives Fahrenheit and Kelvin from that.
3. Results are rounded to two decimal places and displayed in the results grid, with the matching unit card highlighted.
4. The thermometer gauge (`setGauge`) maps the Celsius value onto a −50 °C to 50 °C visual range, adjusting both the mercury fill height and its color via linear interpolation between cold/mid/hot color stops.  

📋Outcome

A fully static, dependency-free converter (`index.html`, `style.css`, `script.js`) that runs by opening `index.html` directly in a browser. It correctly converts between °C, °F, and K, rejects invalid or physically impossible input, and reflects the entered temperature on an animated, color-shifting thermometer gauge.

