import { sendAccountStorageData } from "@/middlewares/account/storage";

export default async function handler(req, res) {
  try {
    switch (req.method) {
      case "GET":
        // Call the function and await its result
        const result = await sendAccountStorageData(req, res);

        // Assuming sendAccountStorageData returns a response
        return res.status(200).json(result);
        
      default:
        return res.status(405).json({ message: "Method Not Allowed" });
    }
  } catch (error) {
    console.error("Error in API handler:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
