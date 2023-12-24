import { AuthPayload } from "./authPayload";
import { LoadAuthPayload } from "./loadAuthPayload";

export type AuthActionPayload = AuthPayload | LoadAuthPayload;
