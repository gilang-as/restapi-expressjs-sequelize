"use strict";
module.exports = (sequelize, DataTypes) => {
    const todo = sequelize.define(
        "todo",
        {
            title: DataTypes.STRING,
            description: DataTypes.TEXT,
            status: DataTypes.ENUM("ongoing", "process", "done"),
            createdBy: DataTypes.INTEGER
        },
        {}
    );
    todo.associate = function(models) {
        // associations can be defined here
    };
    return todo;
};
