export const schema = gql`
  type Contact {
    id: Int!
    contactname: String!
    contactemail: String!
    contactphone: String!
    contactsuburb: String!
    contactmessage: String!
  }

  type Query {
    contacts: [Contact!]!
    contact(id: Int!): Contact
  }

  input CreateContactInput {
    contactname: String!
    contactemail: String!
    contactphone: String!
    contactsuburb: String!
    contactmessage: String!
  }

  input UpdateContactInput {
    contactname: String
    contactemail: String
    contactphone: String
    contactsuburb: String
    contactmessage: String
  }

  type Mutation {
    createContact(input: CreateContactInput!): Contact!
    updateContact(id: Int!, input: UpdateContactInput!): Contact!
    deleteContact(id: Int!): Contact!
  }
`
