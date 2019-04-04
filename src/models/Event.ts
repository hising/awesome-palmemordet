export type EventType = "event" | "sighting";

export interface IMOPEvent {
    type: EventType;
    label: string;
    address: string[];
    latitude: number;
    longitude: number;
    time: string;
    accuracy: number;
    people: string[];
    reliability: number;
    places: string[];
    id: string;
    sources: string[];
}

export class Event {
    private type: EventType;
    private label: string;
    constructor(props: IMOPEvent) {
        this.type = props.type;
        this.label = props.label;
    }
}
