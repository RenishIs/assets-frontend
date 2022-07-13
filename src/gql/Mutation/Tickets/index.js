import { gql } from "@apollo/client";

export const CREATE_TICKET_MUTATION = gql`
    mutation Mutation($input: TicketInput!) {
        createTicket(input: $input) {
        id
        title
        description
        status
        assignedTo {
            firstName
        }
        raisedBy {
            firstName
            lastName
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