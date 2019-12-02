const express =require('express') ; 
const router=express.Router(); 

router.get('/',function(){
    res.json({message:'hello world !'});
});



module.exports=router;  