const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/auth');

router.get('/', (req, res) => {
  res.render('welcome.ejs');
});
router.get('/dashboard', ensureAuthenticated, (req, res) => {
  res.render('dashboard.ejs', {
    user: req.user
  });
});

module.exports = router;
