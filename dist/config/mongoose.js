import "dotenv/config";
import { connect } from "mongoose";
export const dbConnet = async () => {
    const DB_URI = process.env.DB_URI || "";
    await connect(DB_URI);
};
