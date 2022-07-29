import { gql } from "@apollo/client";

export const GET_ALL_TICKETS_QUERY = gql`
  query Query($page: Int, $input: QueryParam) {
      tickets(page: $page, input: $input) {
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
            lastName
          }
          ticketId
          note
          asset {
            id
            name
            description
            location
          }
        }
        total
        totalPages
        currentPage
      }
    }
`


