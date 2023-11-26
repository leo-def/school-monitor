import { AppActionParam } from "@/shared/_types/appActionParam";
import { MessageActionTypeEnum } from "../_enums/messageActionType.enum";
import { MessageActionPayload } from "./messageActionPayload";
export interface MessageAction
  extends AppActionParam<MessageActionTypeEnum, MessageActionPayload> {}
