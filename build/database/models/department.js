"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
class Department extends sequelize_1.Model {
    static initModel(sequelize) {
        Department.init({
            id: {
                type: sequelize_1.DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: sequelize_1.DataTypes.STRING,
            },
            managerId: {
                type: sequelize_1.DataTypes.INTEGER,
            },
            locationId: {
                type: sequelize_1.DataTypes.INTEGER,
            },
        }, {
            sequelize,
            underscored: true,
            tableName: 'departments',
        });
    }
}
exports.default = Department;
