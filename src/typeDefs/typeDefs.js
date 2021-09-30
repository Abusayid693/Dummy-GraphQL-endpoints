import {gql} from "apollo-server-express";

export const typeDefs=gql`

type professor_Office_hours{
  Day:String
  Time:String
  Empty:Int
}


type professor_view_data{
  name:String
  email:String
  confirmEmail:String
  Enrolled_classes:[String]
  Office_hours:[professor_Office_hours]
}

input professor_Office_hours_data{
  Day:String
  Time:String
  Empty:Int
}

input professorRegistrationData{
  name:String
  email:String
  confirmEmail:String
  Enrolled_classes:[String]
  Office_hours:[professor_Office_hours_data]
}

type Mutation{
    professorRegistration(user_data:professorRegistrationData):professor_view_data
}
`









