const express =require('express');

const mentorAction = require("../controllers/mentor");

const router =express.Router();

router.post('/', mentorAction.createMentor);

router.get('/', mentorAction.getMentors);

router.get("/:_id", mentorAction.getSpecificMentor);
router.put("/:roll", mentorAction.updateMentor);

router.delete("/:roll", mentorAction.deleteMentor);

module.exports =router;