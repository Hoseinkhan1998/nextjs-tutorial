// import {
//   connectDatabase,
//   insertDucument,
//   getAllDocuments,
// } from "../../../helpers/db-utill";

// async function handler(req, res) {
//   const eventId = req.query.eventId;

//   let client;

//   try {
//     client = await connectDatabase();
//   } catch (error) {
//     res.status(500).json({ message: "connecting to the Database failed" });
//     return;
//   }

//   if (req.method === "POST") {
//     const { email, name, text } = req.body;

//     if (
//       !email.includes("@") ||
//       !name ||
//       name.trim() === "" ||
//       !text ||
//       text.trim() === ""
//     ) {
//       res.status(422).json({ message: "Invalid input." });
//       client.close();
//       return;
//     }

//     const newComment = {
//       email,
//       name,
//       text,
//       eventId,
//     };

//     let result;
//     try {
//       result = await insertDucument(client, "comments,", newComment);
//       newComment._id = result.insertedId;

//       res.status(201).json({ message: "Added comment. ", Comment: newComment });
//     } catch (error) {
//       res.status(500).json({ message: "Inserting data failed" });
//     }
//   }

//   if (req.method === "GET") {
//     try {
//       const ducuments = await getAllDocuments(client, "comments", { _id: -1 });
//       res.status(200).json({ comments: ducuments });
//     } catch (error) {
//       res.status(500).json({ message: "Getting comments faild." });
//     }
//   }
//   client.close();
// }

// export default handler;

import {
  connectDatabase,
  insertDocument,
  getAllDocuments,
} from "../../../helpers/db-utill";

async function handler(req, res) {
  const eventId = req.query.eventId;

  let client;

  try {
    client = await connectDatabase();
  } catch (error) {
    res.status(500).json({ message: "Connecting to the database failed!" });
    return;
  }

  if (req.method === "POST") {
    const { email, name, text } = req.body;

    if (
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !text ||
      text.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input." });
      client.close();
      return;
    }

    const newComment = {
      email,
      name,
      text,
      eventId,
    };

    let result;

    try {
      result = await insertDocument(client, "comments", newComment);
      newComment._id = result.insertedId;
      res.status(201).json({ message: "Added comment.", comment: newComment });
    } catch (error) {
      res.status(500).json({ message: "Inserting comment failed!" });
    }
  }

  if (req.method === "GET") {
    try {
      const documents = await getAllDocuments(client, "comments", { _id: -1 });
      res.status(200).json({ comments: documents });
    } catch (error) {
      res.status(500).json({ message: "Getting comments failed." });
    }
  }

  client.close();
}

export default handler;
