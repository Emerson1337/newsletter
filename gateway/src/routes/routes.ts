import { Router } from "express";

export const router = Router();

router.get("/api/test", () => {
  return "ok!";
});
