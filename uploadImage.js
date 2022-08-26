const multer = require('multer')

module.exports = (multer({storage:multer.diskStorage({
    destination: (req,file,cd) =>  {cb(null,'/public/img')},
    filename: (req,file,cb) => {
        cb(null,Date.now().toString + "_" + file.originalname)
    }
}),
Filefilter: (req,file,cb)=> {
    const extensaoImg = ['image/jpg'].find(formatoAceito) => formatoAceito == 
    file.mimetype);
}}))