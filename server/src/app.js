const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const connectDB = require('./config/db');
const playerRoutes = require('./routes/playerRoutes');
const contentRoutes = require('./routes/contentRoutes');

const app = express();
connectDB();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use('/api/players', playerRoutes);
app.use('/api/contents', contentRoutes);

app.get('/', (req, res) => res.send('Servidor Cartelería Digital Activo'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Servidor escuchando en http://localhost:${PORT}`));