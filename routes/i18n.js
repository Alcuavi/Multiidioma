const Express = require('express');
const Router = express.Router();


router.get('/', (req, res, next) => {
    res.render('languaje', {
        title: 'i18n'
    });
});

module.exports = router;