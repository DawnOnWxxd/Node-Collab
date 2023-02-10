const express = require('express')
const router = express.Router()
const {
    getReqAll,
    getReqSingle,
    postReq,
    deleteReq,
    patchReq,
} = require('../controllers/script.js')

router.route('/').get(getReqAll).post(postReq);
router.route('/:id').get(getReqSingle).patch(patchReq).delete(deleteReq)

module.exports = router;
