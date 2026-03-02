import Portfolio from "../models/schema.mjs";
export const createPortfolio = async (req, res) => {
  try {
    const portfolio = await Portfolio.create(req.body); // create wil be used when you already have all data and one-line insert, in portfolio we have all data just we gonna insert it directly
    res.status(201).json(portfolio);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
 
};
 export const getportfolio = async (req, res) => {
    try {
      const getdetails = await Portfolio.find();
      if(!getdetails || getdetails.length === 0){
        res.status(404).send("Details Not Found");
      }
      res.json(getdetails)
    } catch (err) {
      res.status(500).json({error:err.message})
    }
  };
