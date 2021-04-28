"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    JwtSecret: process.env.JWT_SECRET || 'somesecretjwt',
    DB: {
        URI: process.env.MONGODB_URI || 'mongodb://localhost/test',
        USER: process.env.MONGODB_USER || 'root',
        PASSWORD: process.env.MONGODB_PASSWORD || ''
    }
};
