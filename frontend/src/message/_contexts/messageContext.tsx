import { createContext } from "react";
import { AppReducerContext } from "@/shared/_types/appReducerContext";
import { MessageState } from "../_types/messageState";
import { MessageAction } from "../_types/messageAction";

export const initialState = {
  messages: []
} as MessageState;

export const MessageContext = createContext({
  state: initialState,
} as AppReducerContext<MessageState, MessageAction>);



