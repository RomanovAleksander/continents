import { gql } from "@apollo/client";

export const GET_COUNTRIES = gql`
    query GetCountries($code: String!) {
        continents(filter: { code: { eq: $code } }) {
            countries {
                name
                code
                capital
                languages {
                    name
                    code
                }
            }
        }
    }
`
