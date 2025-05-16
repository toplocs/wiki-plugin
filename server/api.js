const express = require('express');
const multer = require('multer');
const {
  findWiki,
  createWiki,
  updateWiki,
  getWikiById,
  getWikiPages,
} = require('./actions');

const router = express.Router();
const upload = multer();

router.route('/').get(async (req, res) => {
  const { success, error } = await findWikiPages(req.query);

  if (success) return res.status(200).json(success);
  else return res.status(400).json(error);
})
.post(upload.none(), async (req, res) => {
  const authHeader = req.get('Authorization');
  const { success, error } = await createWiki(req.body);

  if (success) return res.status(200).json(success);
  else return res.status(400).json(error);
})
.put(upload.none(), async (req, res) => {
  const { success, error } = await updateWiki(req.body);

  if (success) return res.status(200).json(success);
  else return res.status(400).json(error);
})

router.route('/pages/:prop').get(async (req, res) => {
  const { success, error } = await getWikiPages(req.params);

  if (success) return res.status(200).json(success);
  else return res.status(400).json(error);
});

router.route('/byId/:id').get(async (req, res) => {
  const { success, error } = await getWikiById(req.params);

  if (success) return res.status(200).json(success);
  else return res.status(400).json(error);
});


module.exports = router;