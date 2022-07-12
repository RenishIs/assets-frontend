import { gql } from "@apollo/client";

export const GET_ALL_TICKETS_QUERY = gql`
    query Query($userId: UserId) {
        tickets(userId: $userId) {
    
        title
        description
        status
        assignedTo {
            firstName
        }
        raisedBy {
            firstName
        }
        }
    }
`


