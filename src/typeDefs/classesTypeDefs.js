import {gql} from "apollo-server-express";

export const classesTypeDefs=gql`


type anncouncement_list_view{
  anncouncement_Text:String
  anncouncement_Date:String
  anncouncement_Link:String
},

type my_classes_view{
  Students:[String]
  Prof:String
  ClassID:String
  anncouncements:[anncouncement_list_view]
}

type Query{
    AllSubjects:[my_classes_view]
},

input anncouncement_list{
  anncouncement_Text:String
  anncouncement_Date:String
  anncouncement_Link:String
},

input Classes{
  Students:[String]
  Prof:String
  ClassID:String
  anncouncements:[anncouncement_list]
}

type Mutation{
    createSubjects(sub_data:Classes):String
    enrollInNewClass(id:String!,ClassID:String):String
}
`
