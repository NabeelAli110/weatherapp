async function getWeather() {
    const city = document.getElementById('cityInput').value;
    // const apiKey = '97307334f62cb2481d1a3b4bb82e9f31'; // Replace with your API key
    // const apiUrl = `https:api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=97307334f62cb2481d1a3b4bb82e9f31  `;
    const apiKey = '97307334f62cb2481d1a3b4bb82e9f31'; 
    const apiUrl = `https:api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.cod === 200) {
            document.getElementById('weatherInfo').innerHTML = `
                <p><strong>City:</strong> ${data.name}</p>
                <p><strong>Temperature:</strong> ${data.main.temp}&#8451;</p>
                <p><strong>Weather:</strong> ${data.weather[0].description}</p>
                <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
            `;
        } else {
            document.getElementById('weatherInfo').innerHTML = `<p>${data.message}</p>`;
        }
    } catch (error) {
        document.getElementById('weatherInfo').innerHTML = `<p>Error fetching data. Please try again.</p>`;
    }
}