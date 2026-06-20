import  multer from "multer";

const randomString = (length) => {
  const character = "abcdefghijklmnopqrstuvwxyz";
  let result = "";
  for(let i = 0; i < length; i++){
    result += character.charAt(Math.floor(Math.random() * character.length))
  }
  return result;
}

const storage = multer.diskStorage({
  filename:function(req, file, callback){
    callback(null, randomString(6) + "-" + file.originalname)
  },
    destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
})

const upload = multer({storage})

export default upload;