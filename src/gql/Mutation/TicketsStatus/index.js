import { gql } from "@apollo/client";

export const CREATE_TICKETS_STATUS_MUTATION = gql`
    mutation Mutation($input: TicketStatusInput!) {
        createTicketStatus(input: $input) {
        id
        name
        }
    }
`

export const UPDATE_TICKETS_STATUS_MUTATION = gql`
    mutation Mutation($input: TicketStatusInput!, $updateTicketStatusId: ID) {
        updateTicketStatus(input: $input, id: $updateTicketStatusId) {
        id
        name
        }
    }
`

export const DELETE_TICKETS_STATUS_MUTATION = gql`
    mutation Mutation($deleteTicketStatusId: ID) {
        deleteTicketStatus(id: $deleteTicketStatusId) {
        id
        }
    }
`