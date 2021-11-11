import { connectToDatabase } from "../../lib/mongodb";

export default async (req, res) => {
  const { db } = await connectToDatabase();

  const recipes = await db
    .collection("cocktaile_recipes")
    .find({})
    .sort({})
    .limit(20)
    .toArray();

  res.json(recipes);
};