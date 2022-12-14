const createContactSchema = require('./createContactSchema');
const objectIdSchema = require('./objectIdSchema');
const updateStatusContactSchema = require('./updateStatusContactSchema');
const registerSchema = require('./registerSchema');
const loginSchema = require('./loginSchema');
const emailResetSchema = require('./emailResetSchema');

module.exports = {
    createContactSchema,
    objectIdSchema,
    updateStatusContactSchema,
    registerSchema,
    loginSchema,
    emailResetSchema,
};
