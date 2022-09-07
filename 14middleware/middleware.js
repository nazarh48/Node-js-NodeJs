module.exports = reqFilter = (req, res, next)=>{
    if(!req.query.age){
        res.send('Please enter your age to continue');
    }
    else if(req.query.age<18){
        res.send('You are underage');
    }
    else{
        next();
    } 
}