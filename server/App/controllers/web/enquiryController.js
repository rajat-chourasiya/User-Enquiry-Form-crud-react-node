const enquiryModel = require("../../models/enquiry.model");

let enquiryInsert=(req,res)=>
{
    let{name,email,phone,message}=req.body;
    let enquiry = new enquiryModel({
        name,
        email,
        phone,
        message
    });
    enquiry.save().then(()=>{
        res.send({status:1, message:"Enquiry Saved Sucessfully"});
    }).catch((err)=>{
        res.send({status:0,message:"Error while Saving Enquiry",error:err})
    })
}

let enquiryList=async(req,res)=>{
    let enquiryList= await enquiryModel.find();
    res.status(200).json({status:1, message:"Enquiry List",data:enquiryList})
}

let deleteEnquiry=async(req,res)=>{
    let enquiryId= req.params.id;
    let deleteEnquiry= await enquiryModel.deleteOne({_id:enquiryId});
    res.send({status:1,message:"Enquiry Deleted Successfully",id:enquiryId, delRes:deleteEnquiry})
}

let dataInForm=async(req,res)=>{
    let enquiryId=req.params.id;
    let formData= await enquiryModel.findOne({_id:enquiryId})
    res.send({ststus:1, message:"Enquiry Updated Sucessfully",formData})
}

let updateEnquiry=async(req,res)=>{
    let enquiryId=req.params.id;
    let {name,email,phone,message}=req.body;
    let updateObj= {
        name,
        email,
        phone,
        message
    };
    let updateRes= await enquiryModel.updateOne({_id:enquiryId},updateObj)
    res.send({ststus:1, message:"Enquiry Updated Sucessfully",updateRes})
}

module.exports={enquiryInsert,enquiryList,deleteEnquiry,dataInForm,updateEnquiry};