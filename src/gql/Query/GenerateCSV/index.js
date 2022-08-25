import { gql } from "@apollo/client";

export const GENERATE_CSV_QUERY = gql`
query Query($table: String) {
	generateCSV(table: $table) {
	  outputString
	}
  }
`