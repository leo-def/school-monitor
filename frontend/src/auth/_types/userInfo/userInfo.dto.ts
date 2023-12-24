import { CollaboratorInfoDto } from "./collaboratorInfo.dto";

export interface UserInfoDto {
  id: string;
  name: string;
  username: string;
  role: string;
  collaboratorsList: CollaboratorInfoDto[];
  iat: number;
  exp: number;
}
