const { request } = require("express");

const router = require("express").Router();
let student = require("../Modules/student");

router.route("/add").post((req,res)=>{

    const name = req.body.name;
    const age = Number(req.body.age);
    const gender = req.body.gender;

    const newstudent = new student({
        name,
        age,
        gender
    })

    newstudent.save().then(()=>{
         res.json("student added")
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/").get((req,res)=>{

    student.find().then((students)=>{
        res.json(students)
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/update/:id").put(async (req,res)=>{
    let userid = req.params.id;
    const {name, age, gender}=req.body;
    const updatestudent = {
        name,
        age,
        gender
    }

    const update = await student.findByIdAndUpdate(userid,updatestudent)
    .then(()=>{
        res.status(200).send({status:"user updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status :"error with updating data"});
    })


})

router.route("/delete/:id").delete(async (req,res)=>{
    let userid = req.params.id;
    

    await student.findByIdAndDelete(userid)
    .then(()=>{
        res.status(200).send({status:"user delete"});
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status :"error with delete user",error:err.message});
    })


})






module.exports = router;