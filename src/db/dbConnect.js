import mongoose from "mongoose";

const MONGODB_URL = process.env.MONGODB_URL;

if (!MONGODB_URL) {
    throw new Error("lütfen mongodb bağlantı stringgini giriniz");

}
const connect = async () => {

    try {
        await mongoose.connect(MONGODB_URL);

    } catch (err) {
        throw new Error("Connection Failed!!!");
    }
};


export default connect;