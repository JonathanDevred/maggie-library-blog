import express from 'express';
import pg from 'pg';

import articlesRoutes from './routes/articles.js';
import tagsRoutes from './routes/tags.js';
import usersRoutes from './routes/users.js';   
import commentsRoutes from './routes/comments.js';
import dotenv from 'dotenv';
dotenv.config();



const app = express();
const port = 3000;

const { Pool } = pg;

// Configuration de la connexion à la base de données
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT,

});

// Utiliser les méthodes d'Express pour le parsing du corps des requêtes
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/articles', articlesRoutes);
app.use('/tags', tagsRoutes);   
app.use('/users', usersRoutes);
app.use('/comments', commentsRoutes);

// Démarrage du serveur
app.listen(port, () => {
  console.log(`Serveur démarré sur  http://localhost:${port}`);
});
    
export { pool };    