const fetch = require("node-fetch");

const express = require("express");
const app = express();
app.use(express.json());
const port = 8000;

// Function to get weather data from API using fetch
async function getWeatherData(city) {
  const apiKey = "1839cf853fa25ce8fade75ac17ac4d9c"; // Replace with your actual  API key
  const apiUrl = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${city}`;

  try {
    const response = await fetch(apiUrl);
    const weatherData = await response.json();
    return weatherData;
    console.log(weatherData);
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error;
  }
}

// Route to get weather data
app.get("/", async (req, res) => {
  const city = req.query.city;

  if (!city) {
    return res.status(400).send("City name is required");
  }

  try {
    // Fetch weather data
    const weatherData = await getWeatherData(city);

    if (weatherData.success === false) {
      return res.status(400).send(weatherData.error.info);
    }

    res.send(weatherData);
  } catch (error) {
    res.status(500).send("An error occurred while fetching weather data.");
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
