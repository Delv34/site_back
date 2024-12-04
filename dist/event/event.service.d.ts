import { Event, Prisma } from "@prisma/client";
import { PrismaService } from "src/prisma.service";
export declare class EventService {
    private prisma;
    constructor(prisma: PrismaService);
    getEvent(): Promise<{
        id: number;
        title: string;
        createdAt: Date;
        description: string;
        full_text: string;
    }>;
    getEvents(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.EventWhereUniqueInput;
        where?: Prisma.EventWhereInput;
        orderBy?: Prisma.EventOrderByWithRelationInput;
    }): Promise<Event[]>;
    createEvent(data: Prisma.EventCreateInput): Promise<Event>;
}
