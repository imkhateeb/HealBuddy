const express = require('express');
const bodyParser = require('body-parser');
const apiRoutes = require('./routes/index');


require('dotenv').config();




function setupAndStartServer() {
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.use('/api', apiRoutes);



    const PORT = process.env.PORT;
    app.listen(PORT, async (req, res) => {
        console.log(`Server started on PORT ${PORT}`);
    })


}


setupAndStartServer();