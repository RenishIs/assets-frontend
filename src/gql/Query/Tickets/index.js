import { gql } from "@apollo/client";

export const GET_TICKETS_QUERY = gql`
  query Query($page: Int) {
    employeeTickets(page: $page) {
      tickets {
        id
        title
        description
        status {
          id
          name
        }
        raisedBy {
          firstName
        }
        ticketId
        note
        asset {
          name
        }
      }
      total
      totalPages
      currentPage
    }
  }    
`

export const GET_TICKET_BY_ID_QUERY = gql`
  query Tickets($ticketById: ID!) {
      ticketById(id: $ticketByIdId) {
        id
        title
        description
        ticketId
        status {
            name
            id
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

