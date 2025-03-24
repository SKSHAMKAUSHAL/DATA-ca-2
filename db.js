const {connect} =require ('mongoose');

const connectedToDb =async(url)=>{
    await connect (url);
}
 module.exports=connectedToDb