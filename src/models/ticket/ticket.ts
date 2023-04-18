export enum ETicketStatus {
    used = 'Used',
    available = 'Đã sử dụng',
    expired = 'Chưa sử dụng',
}

export interface ITicket {
    ticketPackCode: string;
    bookingCode: string;
    ticketNo: string;
    status: ETicketStatus;
    usageDate: Date;
    ticketOutDate: Date;
    checkInGate: number;
}

export interface ITicketPack {
    ticketPackCode: string;
    ticketPackName: string;
    eventName: string;
    startDate: Date;
    endDate: Date;
    ticketPrice: number;
    ticketPackPrice: number;
    isAvailable: boolean;
}
