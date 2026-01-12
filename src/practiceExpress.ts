console.log("🚀 practiceExpress.ts IS RUNNING");
import express from "express";
import { displayResult } from "./practice.js";

const port = 3000;
const app = express();

app.use(express.json());

app.post("/exercise", (req, res) => {
  console.log("BODY:", req.body); // ✅ will NOT be {}

  const { daily_exercises, target } = req.body;

  if (!daily_exercises || target === undefined) {
    return res.status(400).json({ error: "parameters missing" });
  }

  if (
    !Array.isArray(daily_exercises) ||
    daily_exercises.length !== 7 ||
    daily_exercises.some((d) => isNaN(Number(d))) ||
    isNaN(Number(target))
  ) {
    return res.status(400).json({ error: "malformatted parameters" });
  }

  const result = displayResult(daily_exercises, Number(target));
  res.json(result);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

// now run the server by "node .\dist\practiceExpress.js" and in thunder CLient go to Body → JSON → paste "{  "daily_exercises": [3, 0, 2, 4.5, 0, 3,4], "target": 2}" then u will get the result in terminal. But if u change the logic in practice.ts file then run "npm run build" and then run "node .\dist\practiceExpress.js" then u will get the result in terminal.
