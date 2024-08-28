# Weather API Project

This Node.js project provides a simple API for fetching weather information based on a city name. It uses the `node-fetch` package to retrieve data from the Weatherstack API and serves it through an Express.js server.

## Project Overview

- **API Endpoint:** `http://localhost:8000/`
- **Query Parameter:** `city` - The name of the city for which to fetch weather data.

## Installation

1. **Clone the Repository:**

    ```bash
    git clone <REPOSITORY_URL>
    cd <REPOSITORY_DIRECTORY>
    ```

2. **Install Dependencies:**

    ```bash
    npm install
    ```

## Usage

1. **Start the Server:**

    ```bash
    npm start
    ```

   The server will start and listen on port `8000`.

2. **Fetch Weather Data:**

   To get the weather information for a specific city, use the following URL format:

http://localhost:8000/?city=<CITY_NAME>

Replace `<CITY_NAME>` with the name of the city you want to query.

Example:

http://localhost:8000/?city=Rome

3. **Response:**

The API will return the current weather data for the requested city in JSON format. Here is a sample response:

```json
{
  "request": {
    "type": "City",
    "query": "Rome, Italy",
    "language": "en",
    "unit": "m"
  },
  "location": {
    "name": "Rome",
    "country": "Italy",
    "region": "Lazio",
    "lat": "41.900",
    "lon": "12.483",
    "timezone_id": "Europe/Rome",
    "localtime": "2024-08-28 19:17",
    "localtime_epoch": 1724872620,
    "utc_offset": "2.0"
  },
  "current": {
    "observation_time": "05:17 PM",
    "temperature": 32,
    "weather_code": 113,
    "weather_icons": [
      "https://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0001_sunny.png"
    ],
    "weather_descriptions": [
      "Sunny"
    ],
    "wind_speed": 11,
    "wind_degree": 250,
    "wind_dir": "WSW",
    "pressure": 1014,
    "precip": 0,
    "humidity": 32,
    "cloudcover": 0,
    "feelslike": 34,
    "uv_index": 6,
    "visibility": 10,
    "is_day": "yes"
  }
}
```

## Error Handling
**City Name is Required:** If no city name is provided, the API will respond with a **400 Bad Request** and the message **"City name is required"**.

**Invalid API Key:** If the API key is invalid or expired, the API will respond with a **400 Bad Request** and an error message indicating that a **valid API key is required**.

## Configuration
**API Key:** Replace the apiKey variable in the city.js file with your own Weatherstack API key.
**const apiKey = "YOUR_API_KEY";**

## Dependencies
**express** - A web application framework for Node.js.
**node-fetch** - A lightweight module that brings window.fetch to Node.js.
