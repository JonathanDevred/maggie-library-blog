import express from 'express';
import pg from 'pg';
import articlesRoutes from './routes/articles';
import usersRoutes from './routes/users';
import tagsRoutes from './routes/tags';

const app = express();
const port = 3000;

const { Pool } = pg;

// Configuration de la connexion à la base de données
const pool = new Pool({
  user: 'jonathan',
  host: 'localhost',
  database: 'maggie_library',
  port: 5432 // Port de la base de données PostgreSQL
});

app.use('/articles', articlesRoutes);
app.use('/users', usersRoutes);
app.use('/tags', tagsRoutes);

// Démarrage du serveur
app.listen(port, () => {
  console.log(`Serveur démarré sur  http://localhost:${port}`);
});
