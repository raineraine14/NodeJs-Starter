import { Model, Sequelize, DataTypes } from 'sequelize';
import { DepartmentAttributes } from '../attributes';

class Department extends Model implements DepartmentAttributes {
    public id!: number;
    public name!: string;
    public managerId!: number;
    public locationId!: number;
    public readonly createdat!: Date;
    public readonly updated!: Date;

    static initModel(sequelize: Sequelize): void {
        Department.init(
            {
                id: {
                    type: DataTypes.INTEGER,
                    primaryKey: true,
                    autoIncrement: true
                },
                name: {
                    type: DataTypes.STRING,
                },
                managerId: {
                    type: DataTypes.INTEGER,
                },
                locationId: {
                    type: DataTypes.INTEGER,
                },
            },
            {
                sequelize,
                underscored: true,
                tableName: 'departments',
            }
        );
    }
}

export default Department;