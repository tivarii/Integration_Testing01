import { PrismaClient } from "@prisma/client";

export class Prisma {
    private instant:PrismaClient;
    private static obj:Prisma;
    private constructor() {
        this.instant = new PrismaClient();
    }
    static getInstant() {
        if(Prisma.obj){
            return Prisma.obj.instant;
        }else{
            Prisma.obj=new Prisma();
            return this.obj.instant;
        }
    }
}