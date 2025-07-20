// const JWT = require('jsonwebtoken')

// module.exports = async (req,res,next) => {
//   try{
//        const token = req.headers['authorization'].split(" ")[1]
//        JWT.verify(token, process.env.JWT_SECRET, (err,decode) =>{
//           if(err){
//             return res.status(401).send({
//               success:false,
//               message:"Auth Failed"
//             });
//           }
//           else{
//             req.body.userId = decode.userId;
//             next();
//           }

  
    
          

//        })
//   }catch(error){
//     console.log(error)
//      return res.status(401).send({
//       success:false,
//       message:"Auth Failed",
//       error
//      })

//   }
// }


const JWT = require('jsonwebtoken');

module.exports = async (req, res, next) => {
  try {
    const authHeader = req.headers['authorization'];

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).send({
        success: false,
        message: "No token provided or invalid format",
      });
    }

    const token = authHeader.split(" ")[1];

    JWT.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(401).send({
          success: false,
          message: "Auth Failed",
          user
        });
      }

      // Ensure req.body exists before setting a property on it
      if (!req.body) req.body = {};

      req.body.userId = decoded.userId;

      next();
    });
  } catch (error) {
    console.error("Auth Middleware Error:", error);

    return res.status(401).send({
      success: false,
      message: "Auth Failed",
      error: error.message,
    });
  }
};



