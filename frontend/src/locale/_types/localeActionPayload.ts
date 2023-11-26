import { LoadLocationPayload } from "./payloads/loadLocationPayload";
import { SetLocationPayload } from "./payloads/setLocationPayload";

export type LocaleActionPayload = SetLocationPayload | LoadLocationPayload;
