const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const fileUpload = require('express-fileupload');
const multer = require('multer')


const app = express();


// default option
app.use(fileUpload());

// Static Files
app.use(express.static('public'));
app.use(express.static('upload'));

const upload = multer({ storage: multer.memoryStorage() });

// Routes

router.get('/', userController.grid);
router.post('/', userController.grid);
router.get('/home', userController.view);
router.post('/home', userController.find);
router.get('/grid', userController.grid);
router.post('/grid', userController.grid);
router.post('/home', userController.find);
router.get('/home', userController.view);
router.get('/adduser', userController.form);
router.post('/adduser', upload.single('picture'), userController.create);
router.get('/edituser/:id', userController.edit);
router.post('/edituser/:id', userController.update);
router.get('/viewuser/:id', userController.viewall);
router.get('/viewprod/:id', userController.viewprod);
router.get('/:id', userController.delete);
router.get('/userreg', userController.userreg);
router.post('/userreg', userController.userreg);
router.get('/addreg', userController.addreg);
router.post('/addreg', userController.addreg);

router.get('/log', userController.log);
router.post('/log', userController.log);

router.get('/login', userController.login);
router.post('/login', userController.login);

router.get('/loggrid', userController.loggrid);
router.post('/loggrid', userController.loggrid);

router.get('/admin', userController.admin);
router.post('/admin', userController.admin);

router.get('/usersview', userController.usersview);
router.post('/usersview', userController.usersview);

router.get('/usersfind', userController.usersfind);
router.post('/usersfind', userController.usersfind);

router.get('/usersview/:id', userController.deleteu);

router.get('/edituseru/:id', userController.editu);
router.post('/edituseru/:id', userController.updateu);

router.get('/adduseru', userController.formu);
//router.post('/adduseru', userController.createu);

router.get('/createform', userController.createform);
router.post('/createform', userController.createform);

router.get('/createformuser', userController.createformuser);
router.post('/createformuser', userController.createformuser);

module.exports = router;