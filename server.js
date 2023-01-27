const express = require('express');
const workersRoutes = require('./src/workers/routes');
const app = express();
const port = 3000;

app.use(express.json());


app.get("/", (req, res) =>{
    res.send("hello");
});


app.use('/api/v1/workers', workersRoutes);

app.listen(port, () => console.log(`app listening on port ${port}`)); 