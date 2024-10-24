const express = require('express');
const { createApplication, getApplication, updateApplicationStatus, deleteApplication } = require('../controllers/applicationController');
const { validateAdmin, validateCandidate } = require('../middleware/validateTokenHandler');

const router = express.Router();

// Routes for applications
router.post('/create_application', validateCandidate , createApplication); 
router.get('/get_application/:id', validateCandidate , getApplication);
router.put('/update_application/:id', validateCandidate , updateApplicationStatus); 
router.delete('/delete_application/:id', validateCandidate , deleteApplication); 

module.exports = router;
