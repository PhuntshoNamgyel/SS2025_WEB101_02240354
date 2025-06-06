# Weather API Web Application

A web application demonstrating RESTful API operations using JavaScript. Users can retrieve weather data, save locations, edit them, and delete them using GET, POST, PUT, and DELETE requests.

---

##  Project Setup

### Step 1: Create the Project Files

- Create a new folder for the project
- Inside the folder, add:
  - `index.html` – for the user interface
  - `script.js` – for JavaScript logic

---

##  APIs Used

- **Weather Data (GET)**: [OpenWeatherMap API](https://openweathermap.org/)
- **Saved Locations (POST, PUT, DELETE)**: [JSONPlaceholder API](https://jsonplaceholder.typicode.com/)

---

##  Application Structure

### index.html

Includes:
- Tabbed interface for each operation (GET, POST, PUT, DELETE)
- Weather lookup form (GET)
- Form to save new locations (POST)
- Display area for saved locations (PUT & DELETE)
- Edit modal for updating a location
- Basic response message area
- Light styling

### script.js

Handles:
- Event listeners for all buttons and forms
- API functions for:
  - `getWeather()` (GET)
  - `saveLocation()` (POST)
  - `updateLocation()` (PUT)
  - `deleteLocation()` (DELETE)
- DOM updates and response handling

---

##  How to Use

### Step 1: Set Your API Key

In `script.js`, replace:

```js
const apiKey = "YOUR_OPENWEATHERMAP_API_KEY";
```

with your actual API key from OpenWeatherMap.

### Step 2: Run the App

No server is needed. Simply:
- Open `index.html` in a web browser

### Step 3: Test the Features

- **GET**: Enter a city name and click **Get Weather**
- **POST**: Fill in the location form and click **Save Location**
- **PUT**: Click **Edit**, make changes, and click **Update**
- **DELETE**: Click **Delete** next to a saved location

---

##  Technologies Used

- HTML, CSS, JavaScript
- RESTful API calls (Fetch API)
- JSONPlaceholder (mock API)
- OpenWeatherMap API

---

##  Important Notes

- This is a front-end only demo. Saved locations use mock data via JSONPlaceholder and won't persist across sessions
- Ensure your OpenWeatherMap API key is valid to avoid errors when retrieving weather data