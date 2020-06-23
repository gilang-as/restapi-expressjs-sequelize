"use strict";

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert(
            "todos",
            [
                {
                    title: "Rebahan",
                    description: "Rebahan adalah hobiku",
                    status: "ongoing",
                    createdBy: 1
                },
                {
                    title: "Berenang",
                    description: "Berenang adalah hobiku",
                    status: "process",
                    createdBy: 2
                }
            ],
            {}
        );
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("todos", null, {});
    }
};
