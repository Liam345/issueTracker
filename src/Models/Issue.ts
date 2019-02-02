import { Model } from "objection";
import Project from "./Project";

export default class Issue extends Model {
  readonly id!: number;
  title!: string;
  text!: string;
  createdBy!: string;
  assignedTo?: string;
  statusText?: string;
  createdOn!: Date;
  updateOn!: Date;
  open!: boolean;

  static tableName = "issues";

  static get relationMappings() {
    return {
      issue: {
        relation: Model.BelongsToOneRelation,
        modelClass: Project,
        join: {
          from: "issues.projectId",
          to: "projects.id"
        }
      }
    };
  }
}
