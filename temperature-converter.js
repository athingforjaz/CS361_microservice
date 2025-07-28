const express = require('express');
const app = express();
const port = 5000; 

app.get('/convertFtoC/:temp', (req, res) => {

    try {        
        let fTemp = req.params.temp

        if (isNaN(fTemp)) {
            return res.status(400).json({
                error: "Invalid temperature value",
                providedValue: fTemp
            })
        }

        // Converts temperature to Celsius & rounds it.
        let cTemp = Math.round((fTemp - 32) * 5/9)

        res.status(200).json({
            celsius: cTemp
        })

    } catch (err) {
        res.status(500).json({
            error: "Internal server error",
            message: err.message
        });
    }
    
});

// Let developer know that server is online & which port to use.
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});