const express = require('express');
const axios = require('axios');

const app = express();

// Define a route that acts as a proxy for the CORS-restricted resource
app.get('/proxy', async (req, res) => {
  try {
    // Make a request to the desired resource
    const response = await axios.get('https://sdk.openui5.org/resources/sap/ui/demo/walkthrough/i18n/i18n.properties');
    
    // Forward the response to the client
    res.send(response.data);
  } catch (error) {
    // Handle any errors
    res.status(500).send('Error occurred while fetching the resource.');
  }
});

// Start the server
app.listen(8081, () => {
  console.log('Proxy server is running on http://localhost:8081');
});
