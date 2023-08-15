const express = require('express');
const router = express.Router();
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads');
    },
    filename: (req, file, cb) => {
        cb(null,Date.now() + '-' + file.originalname);
    }
});

const upload  = multer({ storage });

const authMiddleware = require('../middleware/authMiddleware');
const bannerController = require('../controllers/bannerController');

router.post('/upload', upload.single('image'),  bannerController.saveBannnerImage);
router.get('/get-bannner', bannerController.getBanner);


module.exports = router;