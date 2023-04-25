const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('Hello world!'));
const port = process.env.PORT || 8082;
app.listen(port, () => console.log(`Server running on port
${port}`));

//const users = require ('./routes/api/users');
//app.use('/api/users', users);

const mongoose = require('mongoose');
const cors = require('cors');

//connect database 
app.use(cors({ origin: true, credentials: true }));
app.use(express.json({ extended: false }));
app.get('/', (req, res) => res.send('Hello World!'));

const conn_str = 'mongodb+srv://avasiegel:AvaPass32@cluster0.qf6kadw.mongodb.net/test'

mongoose.set('strictQuery', false);
mongoose.connect(conn_str, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
.then(() => {
    app.listen(port)
    console.log('MongoDB Connection Succeeded...')
})
.catch(err => {
    console.log('Error in DB Connection ${err}');
});
