"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Prisma = void 0;
const client_1 = require("@prisma/client");
class Prisma {
    constructor() {
        this.instant = new client_1.PrismaClient();
    }
    static getInstant() {
        if (Prisma.obj) {
            return Prisma.obj.instant;
        }
        else {
            Prisma.obj = new Prisma();
            return this.obj.instant;
        }
    }
}
exports.Prisma = Prisma;
