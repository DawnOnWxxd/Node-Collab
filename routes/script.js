const express = require('express')
const router = express.Router()
const {
    getReqAll,
    getReqSingle,
    postReq,
    deleteReq,
    patchReq,
    getTest,
} = require('../controllers/script.js')

router.route('/').get(getReqAll).post(postReq);
router.route('/:id').get(getReqSingle).patch(patchReq).delete(deleteReq)
router.route('/test').get(getTest)

module.exports = router;
