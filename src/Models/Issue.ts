import { Model } from "objection";

export default class Issue extends Model {
  readonly id!: number;
  title!: string;
  text!: string;
  createdBy!: string;
  assignedTo?: string;
  statusText?: string;

  static tableName = "issues";
}
