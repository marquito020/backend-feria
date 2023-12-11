import jsonwebtoken from "jsonwebtoken";
const JWT_SECRET = process.env.JWT_SECRET || "token. 0101";
const { sign, verify } = jsonwebtoken;
const generateToken = ({ _id, email }) => {
    const jwt = sign({ _id, email }, JWT_SECRET, {
        expiresIn: "24h",
    });
    return jwt;
};
const verifyToken = (jwt) => {
    const isOk = verify(jwt, JWT_SECRET);
    return isOk;
};
export { generateToken, verifyToken };
