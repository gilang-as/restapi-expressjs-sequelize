"use strict";

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert(
            "users",
            [
                {
                    name: "Administrator",
                    username: "admin",
                    email: "admin@mail.com",
                    password: "admin",
                    level: "admin",
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: "User 1",
                    username: "user1",
                    email: "user1@mail.com",
                    password: "user1",
                    level: "user",
                    createdAt: new Date(),
                    updatedAt: new Date()
                }
            ],
            {}
        );
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("users", null, {});
    }
};
