const express = require('express');
const { CreateBanner, fetchAllBanner, deleteBannerByID } = require('../controller/Banner');


const router = express.Router();

router.get('/',fetchAllBanner).post('/', CreateBanner).delete('/:id', deleteBannerByID)
      



exports.router=router;
