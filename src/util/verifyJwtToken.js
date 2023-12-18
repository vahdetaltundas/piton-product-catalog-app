import { jwtVerify } from "jose";



export async function verifyJwtToken(token){
    try {
        const {payload}=await jwtVerify(token);
        return payload;
    } catch (error) {
        return null;
    }
}