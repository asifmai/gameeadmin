const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexcontroller');
const auth = require('../helpers/auth');

/* GET users listing. */
router.get('/', auth.ensureAuthenticatedAdmin, indexController.admin_get);

/* GET - Public - Show admin log in page */
router.get('/login', indexController.login_get);

/* POST - Public - admin log */
router.post('/login', indexController.login_post);

/* GET - Public - admin log out */
router.get('/logout', auth.ensureAuthenticatedAdmin, indexController.logout_get);

module.exports = router;
