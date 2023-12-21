import dotenv from "dotenv";
import cloudinary from "cloudinary";

dotenv.config();

cloudinary.v2.config({
	cloud_name: "dffigrxdq",
	api_key: "583957933292513",
	api_secret: "-R4ukayZLRLdmZtv2wu9EV0B6YE",
	secure: true,
});

export default cloudinary;
