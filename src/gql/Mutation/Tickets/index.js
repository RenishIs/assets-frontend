import { gql } from "@apollo/client";

export const CREATE_TICKET_MUTATION = gql`
    query Tickets {
        tickets {
        id
        title
        description
        status
        assignedTo {
            firstName
            id
            lastName
            email
        }
        }
    }
`

export const UPDATE_TICKET_MUTATION = gql`
    mutation Mutation($input: UpdateTicketInput!) {
        updateTicket(input: $input) {
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

export const DELETE_TICKET_MUTATION = gql`
    mutation Mutation($deleteTicketId: ID) {
        deleteTicket(id: $deleteTicketId) {
        id
        }
    }
`