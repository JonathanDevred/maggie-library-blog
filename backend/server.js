import express from 'express';
import pg from 'pg';

import articlesRoutes from './routes/articles';
import tagsRoutes from './routes/tags';
import usersRoutes from './routes/users';   
import commentsRoutes from './routes/comments';


const app = express();
const port = 3000;

const { Pool } = pg;

// Configuration de la connexion à la base de données
const pool = new Pool({
  user: 'jonathan',
  host: 'localhost',
  database: 'maggie_library',
  port: 5432 
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
