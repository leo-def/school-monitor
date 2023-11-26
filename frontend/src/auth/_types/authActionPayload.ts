import { AuthPayload } from "./payloads/authPayload";
import { LoadAuthPayload } from "./payloads/loadAuthPayload";

export type AuthActionPayload = AuthPayload | LoadAuthPayload;
