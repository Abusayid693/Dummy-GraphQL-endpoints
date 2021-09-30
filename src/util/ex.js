/*
# mutation {
    #   createCat(user_data: {
    #     firstName:"c"
    #     lastName:"Chy"
    #     email:"rfrfr"
    #     confirmEmail:"dffrff"
    #     Enrolled_classes:["nedjndk"]
    #     occupation:"dfkn"
    #     phone:"ffefgrgrgrgr"
        
    #   }) {
    #     id
    #     firstName
    #     email
    #     confirmEmail
    #     Enrolled_classes
    #     occupation
    #     phone
    #   }
    # }
    
    
    # mutation {
    #   updateUserInfo(user_data:{
    #     # firstName:"Karishma"
    #     # lastName:"Chy"
    #     # email:"adeddfrdcdbu"
    #     # confirmEmail:"dkjb"
    #     # occupation:"dfkn"
    #     phone:"9957911397"
    #   },id:"614f4bda3370bd71bd8ce8db")
    #     {
    #     id
    #     firstName
    #     email
    #     confirmEmail
    #     occupation
    #     phone
    #   }
    # }
    
    
    
    
    # mutation {
    #   deleteUser(id:"614f4c3bc7be38c7ebab790d") 
    # }
    
    
    # query{
    #   UserLogin(user:{
    #     email:"fvfvfvfvf"
    #   }){
    #     firstName
    #     id
    #     email
    #     Enrolled_classes
    #   }
    # }
    
    # query{
    #   AllUsers{
    #     firstName
    #     id
    #     email
    #     Enrolled_classes
    #   }
    # }
    
    # Queary testing for subjects
    
    # query{
    #   AllSubjects{
    #     Students
    #     Prof
    #     ClassID
    #     anncouncements {
    #       anncouncement_Text
    #       anncouncement_Date
    #       anncouncement_Link
    #     }
    #   }
    # }
    
    
    
    # mutation {
    #   createSubjects(sub_data:{
    #     Students:["Rehan","dnkjedn"]
    #     Prof:"dvdvfvfvfv"
    #     ClassID:"our-dfd class"
    #     anncouncements:[{
    #       anncouncement_Text:"Hello there are no classes today",
    #       anncouncement_Date:"Fuck u",
    #       anncouncement_Link:"dnekjn"
    #     }]
    #   })
    
    # }
    
    # mutation{
    #   enrollInNewClass(
    #     id:"6155de0f647e7a8b99081e66",
    #     ClassID: "our-dfd class"
    #   )
    # }
    
# Professor Login - sign-up query

# mutation{
#   professorRegistration(user_data:{
#     name:"grvf"
#     email:"knkerj"
#     confirmEmail:"frgrg"
#     Enrolled_classes:["fvf"]
#     Office_hours:[{
#       Day:"fvfr"
#       Time:"gfg"
#       Empty:1
#     }]
#   })
# {  
#   name
#   email
#   confirmEmail
#   Enrolled_classes
#   Office_hours{
#     Day
#     Time
#     Empty
#   }
# }
# }

*/

    