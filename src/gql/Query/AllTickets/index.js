import { gql } from "@apollo/client";

export const GET_ALL_TICKETS_QUERY = gql`
    query Query($input: QueryParam) {
        tickets(input: $input) {
        id
        title
        description
        status {
            id
            name
        }
        assignedTo {
            id
            firstName
            lastName
            email
        }
        raisedBy {
            firstName
            lastName
            email
            id
        }
        }
    }
`

