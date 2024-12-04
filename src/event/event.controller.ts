import { Controller, Get, Param, Post } from "@nestjs/common";
import { EventService } from "./event.service";
import { request } from "http";


@Controller('events')
export class EventController {
    constructor(private eventService: EventService) {}

    @Post()
    async create(
        @Body() eventData: {title: string; description: string; full_text: string; },
    ): Promise<EventModel>

    @Get(':id')
    findOne(@Param() params: any): string {
        console.log(params.id);
        return `This action returns a #${params.id} event`;
    }

    @Get()
        getEvent() {
            return this.eventService.getEvent()
        }
    // findAll(): string {
    //     return 'This action returns all events';
    // }
}