let express= require('express');
const { enquiryInsert, enquiryList, deleteEnquiry, updateEnquiry, dataInForm } = require('../../controllers/web/enquiryController');
let enquiryRouter= express.Router();

enquiryRouter.post("/insert",enquiryInsert)
enquiryRouter.get("/view",enquiryList)
enquiryRouter.delete("/delete/:id",deleteEnquiry)
enquiryRouter.get("/updatedata/:id",dataInForm)
enquiryRouter.put("/update/:id",updateEnquiry)



module.exports = enquiryRouter;