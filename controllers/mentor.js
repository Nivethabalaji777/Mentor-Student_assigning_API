const express =require("express");
const mongoose =require("mongoose");

const mentor = require("../models/mentordata");

const router =express.Router();

const createMentor =async(req, res) => {
    console.log("Request from Postman: "+req.body);
    
    const newMentor =new mentor ({
        name: req.body.name,
        roll: req.body.roll,
        class: req.body.class,
      subjects: req.body.subjects,
        gender: req.body.gender,
        
    });
  try{
  await newMentor.save();
    
res.status(201).json(req.body)
      
  }
  catch(error){
    
    res.status(400).json({message: error.message});
   }
};

const getMentors = async(req, res) =>{
    try{
        const mentors = await mentor.find();
        res.status(200).json(mentors);

    }
    catch(error){
        res.status(400).json({message: error.message});

    }
}

const getSpecificMentor = async (req, res) => {
    const _id = req.params._id;
    try {
      const ment= await mentor.findOne({_id: _id});
  
      res.status(200).json(ment);
    }
    catch(error) {
      res.status(400).json({ message: error.message });
    }
  }

const updateMentor = async (req, res) => {
    const roll = req.params.roll;
  
    try {
      await mentor.findOneAndUpdate({
        roll: roll,
      },
      {
       // name: req.body.name
       // $pop:{ subjects: 1}
       $addToSet:{subjects:req.body.subjects}
      }
      )
   
      res.status(201).json({roll: roll});
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  const deleteMentor = async (req, res) => {
    const roll = req.params.roll;
  
    try {
      await mentor.findOneAndRemove({
        roll: roll,
      });
  
      res.status(201).json({roll: roll});
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };


   
module.exports.createMentor = createMentor;
module.exports.getMentors = getMentors;
module.exports.getSpecificMentor = getSpecificMentor;
module.exports.updateMentor = updateMentor;
module.exports.deleteMentor = deleteMentor;