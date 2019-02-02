import { Model, RelationMappings } from "objection";
import Issue from "./Issue";

export default class Projects extends Model {
  readonly id!: number;
  projectName!: string;

  static tableName = "projects";

  static get relationMappings() {
    return {
      issue: {
        relation: Model.HasManyRelation,
        modelClass: Issue,
        join : {
          from: 'projects.id',
          to: 'issues.projectId'
        }
      }
    }
  }
}
