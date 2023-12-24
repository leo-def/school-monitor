import { createContext } from "react";
import { AppReducerContext } from "@/shared/_types/appReducerContext";
import { MessageState } from "../_types/messageState";
import { MessageAction } from "../_types/messageAction";
import { initialState } from "../_constants/initialState";


export const MessageContext = createContext({
  state: initialState,
} as AppReducerContext<MessageState, MessageAction>);



