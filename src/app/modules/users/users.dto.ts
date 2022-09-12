export interface saveDTO {
  avatar?: string;
  username: string;
  email: string;
  password: string;
  permissions: any[];
  roles: any[];
}

export type updateDTO = Partial<saveDTO>;
