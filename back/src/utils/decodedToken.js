const jwt = require("jsonwebtoken");
const { OAuth2Client } = require('google-auth-library');//para validacion de googleToken
const { User} = require("../db");

const decodeJwtToken = (token) => {
    const SECRET_KEY='secretKey'//debe ir en el env
    try {
      const decoded = jwt.verify(token, SECRET_KEY);
      return decoded.userId;
    } catch (err) {
      console.error("Error al decodificar el token JWT:", err);
      return null;
    }
  };

  const decodeGoogleToken = async (token) => {
  const GOOGLE_ID="643395136180-j6pn9slv1rsdsrkq88d1aa1s60i39eob.apps.googleusercontent.com" //debe ir en el env
  const client = new OAuth2Client(GOOGLE_ID);
    try {
      const ticket = await client.verifyIdToken({
        idToken: token,
        audience: GOOGLE_ID,
      });

      const googleUser= await User.findOne({
        where:{
          mail:ticket.payload.email
        }
       })
       return googleUser.id

    } catch (err) {
      console.error("Error al decodificar el token de Google:", err);
      return null;
    }
  };
  const decodeJwtTokenEmail = (token) => {
    const SECRET_KEY='secretKey'//debe ir en el env
    try {
      const decoded = jwt.verify(token, SECRET_KEY);
      return decoded.mail;
    } catch (err) {
      console.error("Error al decodificar el token JWT:", err);
      throw new Error(`Error al decodificar el token JWT:${err.message}`)
    }
  };
 
  const decodeJwtTokenRole = (token) => {
    const SECRET_KEY='secretKey'//debe ir en el env
    try {
      const decoded = jwt.verify(token, SECRET_KEY);
      return decoded.roles;
    } catch (err) {
      console.error("Error al decodificar el token JWT:", err);
      return null;
    }
  };

  const  decodeGoogleTokenRole = async (token) => {
    const GOOGLE_ID="643395136180-j6pn9slv1rsdsrkq88d1aa1s60i39eob.apps.googleusercontent.com" //debe ir en el env
    const client = new OAuth2Client(GOOGLE_ID);
      try {
        const ticket = await client.verifyIdToken({
          idToken: token,
          audience: GOOGLE_ID,
        });
  
        const googleUser= await User.findOne({
          where:{
            mail:ticket.payload.email
          }
         })
         return googleUser.roles
  
      } catch (err) {
        console.error("Error al decodificar el token de Google:", err);
        return null;
      }
    };




  module.exports= {decodeJwtToken, decodeGoogleToken, decodeJwtTokenEmail,decodeJwtTokenRole, decodeGoogleTokenRole}