Task3- 🌡️ Temperature Converter

A clean, single-page temperature converter with a signature animated thermometer gauge. Convert between Celsius, Fahrenheit, and Kelvin in real time, with input validation and a color-shifting mercury visual that reflects the temperature.

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

