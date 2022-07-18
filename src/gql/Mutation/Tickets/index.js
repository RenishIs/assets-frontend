import { gql } from "@apollo/client";

export const CREATE_TICKET_MUTATION = gql`
    mutation Mutation($input: TicketInput!) {
        createTicket(input: $input) {
        id
        title
        description
        status{
            id 
            name
        }
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
    mutation Mutation($input: UpdateTicketInput!, $updateTicketId: ID) {
        updateTicket(input: $input, id: $updateTicketId) {
            id
            title
            description
            assignedTo {
                id
                firstName
                email
                lastName
            }
            note
            raisedBy {
                id
                firstName
                lastName
                email
            }
            status{
                id 
                name
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