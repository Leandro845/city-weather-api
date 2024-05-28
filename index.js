// Import the Express framework
const express = require('express');
// Create an Express server instance
const server = express();
// Import the 'weather-js' library for weather data
const weather = require('weather-js');

// Start the server and listen on port 9999
server.listen(9999, () => {
    console.log('Running on port 9999...'); // Log a message when the server starts
});

// Define a route to handle GET requests with city and state parameters in the URL
server.get('/:city/:state', (req, res) => {
    // Use the 'weather-js' library to find weather data for the specified city and state
    weather.find(
        {
            search: `${req.params.city}, ${req.params.state}`, // Specify the city and state for the weather search
            degreeType: 'C' // Specify the temperature unit as Celsius
        },
        (err, result) => { // Callback function to handle the search result
            try {
                res.json(result); // Send the weather data as a JSON response
            } catch (error) {
                res.json({ message: err }); // Send an error message as JSON if there's an error
            }
        }
    );
});


