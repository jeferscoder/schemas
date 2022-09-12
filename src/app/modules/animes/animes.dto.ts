export interface saveDTO {
  cover: string;
  title: string;
  episodes: number;
  status: string;
  aired: Date;
  genres?: any[];
}

export type updateDTO = Partial<saveDTO>;
