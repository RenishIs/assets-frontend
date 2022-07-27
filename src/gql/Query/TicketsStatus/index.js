import { gql } from "@apollo/client";

export const GET_TICKETS_STATUS_QUERY = gql`
    query TicketStatus {
        ticketStatus {
            id
            name
            assigned
        }
    }
`

export const GET_TICKETS_STATUS_BY_ID_QUERY = gql`
    query Tickets($ticketStatusByIdId: ID!) {
        ticketStatusById(id: $ticketStatusByIdId) {
        id
        name
        }
    }
`

