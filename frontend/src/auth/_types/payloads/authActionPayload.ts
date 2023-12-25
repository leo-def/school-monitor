import { AuthPayload } from "./authPayload";
import { LogoutPayload } from "./logoutPayload";

export type AuthActionPayload = AuthPayload | LogoutPayload;
