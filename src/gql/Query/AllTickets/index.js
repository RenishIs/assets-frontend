import { gql } from "@apollo/client";

export const GET_ALL_TICKETS_QUERY = gql`
    query Query($input: QueryParam) {
        tickets(input: $input) {
            id
            title
            description
            ticketId
            status {
                id
                name
            }
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


