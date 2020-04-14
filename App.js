const express = require('express');
const bodyParser = require('body-parser');
const httpError = require('./models/http-error')
const placesRoutes = require('./routes/places-routes');
// const userRoutes = require('./routes/places-routes');


const app = express();
app.use(bodyParser.json());

app.use('/app', (placesRoutes));
// app.use('/app',(userRoutes));

app.use((req, res, next) => {
throw error=new httpError("Could not find this route jani",404);
}
);

app.use((error, req, res, next) => {
    if (res.headerSent) {
        return next(error);
    }
    res.status(error.code || 500)
    res.json({ message: error.message || "UnknownError Aagya" });
    ;
})

app.listen(5000);