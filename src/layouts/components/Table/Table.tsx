import { ETicketStatus, ITicket } from 'models/ticket';
import React from 'react';
import './Table.scss';

const dataMock: ITicket[] = [
    {
        ticketPackCode: 'PACK',
        ticketNo: '123456789034',
        bookingCode: 'ALTFGHJU',
        status: ETicketStatus.available,
        usageDate: new Date(),
        ticketOutDate: new Date(),
        checkInGate: 1,
    },
    {
        ticketPackCode: 'PACK',
        ticketNo: '236784631642',
        bookingCode: 'ALTOJMNB',
        status: ETicketStatus.available,
        usageDate: new Date(),
        ticketOutDate: new Date(),
        checkInGate: 1,
    },
    {
        ticketPackCode: 'PACK',
        ticketNo: '487621489474',
        bookingCode: 'ALTQTYJH',
        status: ETicketStatus.available,
        usageDate: new Date(),
        ticketOutDate: new Date(),
        checkInGate: 1,
    },
    {
        ticketPackCode: 'PACK',
        ticketNo: '156464891479',
        bookingCode: 'ALTCFSDF',
        status: ETicketStatus.available,
        usageDate: new Date(),
        ticketOutDate: new Date(),
        checkInGate: 1,
    },
    {
        ticketPackCode: 'PACK',
        ticketNo: '201649631896',
        bookingCode: 'ALTIOJNB',
        status: ETicketStatus.expired,
        usageDate: new Date(),
        ticketOutDate: new Date(),
        checkInGate: 1,
    },
    {
        ticketPackCode: 'PACK',
        ticketNo: '148920121478',
        bookingCode: 'ALTVDFTR',
        status: ETicketStatus.available,
        usageDate: new Date(),
        ticketOutDate: new Date(),
        checkInGate: 1,
    },
    {
        ticketPackCode: 'PACK',
        ticketNo: '654115684899',
        bookingCode: 'ALTLIOVF',
        status: ETicketStatus.used,
        usageDate: new Date(),
        ticketOutDate: new Date(),
        checkInGate: 1,
    },
    {
        ticketPackCode: 'PACK',
        ticketNo: '654115684899',
        bookingCode: 'ALTLIOVF',
        status: ETicketStatus.used,
        usageDate: new Date(),
        ticketOutDate: new Date(),
        checkInGate: 1,
    },
    {
        ticketPackCode: 'PACK',
        ticketNo: '654115684899',
        bookingCode: 'ALTLIOVF',
        status: ETicketStatus.used,
        usageDate: new Date(),
        ticketOutDate: new Date(),
        checkInGate: 1,
    },
    {
        ticketPackCode: 'PACK',
        ticketNo: '654115684899',
        bookingCode: 'ALTLIOVF',
        status: ETicketStatus.used,
        usageDate: new Date(),
        ticketOutDate: new Date(),
        checkInGate: 1,
    },
    {
        ticketPackCode: 'PACK',
        ticketNo: '654115684899',
        bookingCode: 'ALTLIOVF',
        status: ETicketStatus.used,
        usageDate: new Date(),
        ticketOutDate: new Date(),
        checkInGate: 1,
    },
    {
        ticketPackCode: 'PACK',
        ticketNo: '654115684899',
        bookingCode: 'ALTLIOVF',
        status: ETicketStatus.used,
        usageDate: new Date(),
        ticketOutDate: new Date(),
        checkInGate: 1,
    },
];

export interface IColumn {
    heading: string;
    value: string;
}

const Table: React.FC<{ data?: Array<any>; displayColumns: Array<IColumn> }> = ({
    data = dataMock,
    displayColumns,
}) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>STT</th>
                    {displayColumns.map((column, index) => (
                        <th key={index}>{column.heading}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => {
                    return (
                        <tr key={index}>
                            <td>{++index}</td>
                            {displayColumns.map((column, index) => (
                                <td key={index}>
                                    {Object.prototype.toString.call(item[column.value]) === '[object Date]'
                                        ? item[column.value].toLocaleDateString()
                                        : item[column.value]}
                                </td>
                            ))}
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

export default Table;
