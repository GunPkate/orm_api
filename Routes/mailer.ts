import { Exercise } from "./../Entities/exercise";
import nodemailer from "nodemailer";
import express, { Router, Request, Response } from "express";
import path from "path";
import test from "../Controller/formEmailKPI";
import { sendEmail } from "../function/sendmail";
const file: string = "exercise.csv";
// const attachment = path.resolve(__dirname,"attach",file);
const attachment = "attach/exercise.csv";

const router: Router = express.Router();
router.post("/mail", async (req: Request, res: Response) => {
  const info = await sendEmail(req.body);
  res.json(info);
});

export default router;
