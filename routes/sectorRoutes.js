const express = require('express');
const router = express.Router();
const { createSector, getAllSectors, getSectorById, updateSector, deleteSector } = require('../controllers/sectorController');
const { validateAdmin } = require('../middleware/validateTokenHandler');

// Define routes
router.route('/create_sector').post(validateAdmin, createSector); 
router.route('/all_sectors').get(validateAdmin, getAllSectors); 
router.route('/single_sector/:id').get(validateAdmin, getSectorById); // Get single sector
router.route('/update_sector/:id').put(validateAdmin, updateSector); // Update sector
router.route('/delete_sector/:id').delete(validateAdmin, deleteSector); // Delete sector

module.exports = router;
