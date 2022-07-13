import { gql } from "@apollo/client";

export const GET_TICKETS_QUERY = gql`
    query Query {
        employeeTickets {
        id
        title
        description
        status
        assignedTo {
            firstName
            lastName
        }
        raisedBy {
            firstName
            lastName
        }
        }
    }
`

export const GET_TICKET_BY_ID_QUERY = gql`
    query Tickets($ticketById: ID!) {
        ticketById(id: $ticketById) {
        id
        title
        description
        status
        assignedTo {
            firstName
            lastName
        }
        }
    }
`

