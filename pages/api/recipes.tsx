import { connectToDatabase } from "../../lib/mongodb";

const dataToJson = async (req, res) => {
  try{

    const { db } = await connectToDatabase();
  
    const recipes = await db
      .collection("cocktaile_recipes")
      .find({})
      .sort({})
      .limit(20)
      .toArray();
  
    res.json(recipes);
  }
  catch (error) {
    return res.json({
      message: new Error(error).message,
      success: false,
      });
  }
};

export default dataToJson;