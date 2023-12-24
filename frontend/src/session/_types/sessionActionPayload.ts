import { SessionSetIdPayload } from "./payloads/sessionSetIdPayload";
import { SessionSetUserInfoPayload } from "./payloads/sessionSetUserInfoPayload";

export type SessionActionPayload =
  | SessionSetUserInfoPayload
  | SessionSetIdPayload;
