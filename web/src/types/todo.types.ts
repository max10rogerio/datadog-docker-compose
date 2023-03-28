import { DateString } from "./common.types";

export type Todo = {
  id: number;
  description: string;
  completed: boolean;
  createdAt?: DateString;
  updatedAt?: DateString;
  deletedAt?: DateString;
};
