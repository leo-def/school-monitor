import { GroupInfo } from "./groupInfo";

export interface UserInfo {
  id: string;
  name: string;
  username: string;
  role: string;
  isGroup: string;
  groups: Array<GroupInfo>;
}
