import { gql } from "@apollo/client";

export const CREATE_TICKET_MUTATION = gql`
    mutation Mutation($input: TicketInput!) {
        createTicket(input: $input) {
          id
          title
          description
          status {
            id
            name
          }
      
          raisedBy {
            id
            firstName
            lastName
            email
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
        note
        raisedBy {
            id
            firstName
            lastName
            email
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