const DailySteps = require("../models/steps");

const allSteps = async () => {
  const doc = await DailySteps.find().sort({ date: 1 }).exec();
  return doc;
};

const addSteps = async (steps) => {
  let start = new Date();
  start.setHours(0, 0, 0, 0);
  let end = new Date();
  end.setHours(23, 59, 59, 999);

  const doc = await DailySteps.updateOne(
    { date: { $gte: start, $lt: end } },
    { $inc: { steps: steps } },
    { upsert: true, setDefaultsOnInsert: true }
  )
    .lean()
    .exec();
  return doc;
};

module.exports = { allSteps, addSteps };
