import { Injectable } from "@nestjs/common";
import { Event, Prisma } from "@prisma/client";
import { PrismaService } from "src/prisma.service";


@Injectable()
export class EventService {
    constructor(private prisma: PrismaService) {}

    async getEvent() {
        return this.prisma.event.findFirst()
    }

    async getEvents(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.EventWhereUniqueInput;
        where?: Prisma.EventWhereInput;
        orderBy?: Prisma.EventOrderByWithRelationInput;
    }): Promise<Event[]> {
        const { skip, take, cursor, where, orderBy } = params;
        return this.prisma.event.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy,
        });
    }

    // async createEvent(data: Prisma.EventCreateInput): Promise<Event> {
    //     return this.prisma.event.create({
    //     data,
    //     });
    // }

    async createEvent(data: Prisma.EventCreateInput): Promise<Event> {
        return this.prisma.event.create({
            data
        })
    }
}