import express from 'express';
import { pool } from '../server'; 

const articlesRoutes = express.Router();

// Route pour récupérer tous les articles
app.get('/articles', (req, res) => {
    pool.query('SELECT * FROM articles', (error, results) => {
      if (error) {
        console.error('Erreur lors de la récupération des articles', error);
        res.status(500).json({ error: 'Erreur serveur' });
      } else {
        res.json(results.rows);
      }
    });
  });
  
  // Route pour récupérer un article par son ID
  app.get('/articles/:id', (req, res) => {
    const articleId = req.params.id;
    pool.query('SELECT * FROM articles WHERE id = $1', [articleId], (error, results) => {
      if (error) {
        console.error('Erreur lors de la récupération de l\'article', error);
        res.status(500).json({ error: 'Erreur serveur' });
      } else {
        if (results.rows.length === 0) {
          res.status(404).json({ error: 'Article non trouvé' });
        } else {
          res.json(results.rows[0]);
        }
      }
    });
  });
  
  
  // Route pour récupérer les articles par tag
  app.get('/articles/tag/:tag', (req, res) => {
    const tagName = req.params.tag;
    pool.query(
      `SELECT * FROM articles AS a
      INNER JOIN article_tags AS at ON a.id = at.article_id
      INNER JOIN tags AS t ON at.tag_id = t.id
      WHERE t.name = $1`,
      [tagName],
      (error, results) => {
        if (error) {
          console.error('Erreur lors de la récupération des articles par tag', error);
          res.status(500).json({ error: 'Erreur serveur' });
        } else {
          res.json(results.rows);
        }
      }
    );
  });

  export default articlesRoutes;
