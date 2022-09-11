export interface saveDTO {
  avatar?: string;
  username: string;
  email: string;
  password: string;
}

export type updateDTO = Partial<saveDTO>;
