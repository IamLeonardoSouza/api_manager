const express = require('express');
const router = express.Router();

// Rota de teste inicial
router.get('/', (req, res) => {
    res.send('API Manager Running');
});

module.exports = router;
