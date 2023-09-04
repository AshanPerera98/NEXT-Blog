import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;
    console.log(req);
    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "invalid input" });
      return;
    }

    const newMessage = {
      email,
      name,
      message,
    };

    let client;

    try {
      client = await MongoClient.connect(
        "mongodb+srv://ashantiwankaperera:OWJ1Z0wAnmquFLdf@cluster0.deft22t.mongodb.net/?retryWrites=true&w=majority"
      );
    } catch (error) {
      res.status(500).json({ message: error });
      return;
    }

    const db = client.db("my-site");
    let result;

    try {
      result = await db.collection("messages").insertOne(newMessage);
    } catch (error) {
      client.close();
      res.status(500).json({ message: error });
      return;
    }
    client.close();

    res.status(201).json({ message: "success", response: result.body });
  }
}

export default handler;
