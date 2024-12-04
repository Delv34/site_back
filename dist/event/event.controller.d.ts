import { EventService } from "./event.service";
export declare class EventController {
    private eventService;
    constructor(eventService: EventService);
    create(eventData: {
        title: string;
        description: string;
        full_text: string;
    }): Promise<EventModel>;
    findOne(params: any): string;
    getEvent(): Promise<{
        id: number;
        title: string;
        createdAt: Date;
        description: string;
        full_text: string;
    }>;
}
