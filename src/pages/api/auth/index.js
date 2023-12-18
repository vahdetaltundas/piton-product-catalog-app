import axios from "axios";
import { getJwtSecretKey } from "../../../util/verifyJwtToken";
import cookie from "cookie";
import { SignJWT } from "jose";

const handler = async (req, res) => {
  
  const { method } = req;

  if (method === "POST") {
    const { email, password } = req.body;
    const response = await axios.post(
        "https://assign-api.piton.com.tr/api/rest/login",
        { email: email, password: password }
      );
      const token=response.data.action_login.token;
    if (response.data.action_login.token) {
        
      res.setHeader(
        "Set-Cookie",
        cookie.serialize("token", token, {
          maxAge: 60 * 60,
          sameSite: "strict",
          path: "/",
        })
      );
      res.status(200).json({ message: "Success", success: true ,token:token});
    } else {
      res.status(200).json({ message: "Wrong Credentials", success: false });
    }
  }
  
};

export default handler;