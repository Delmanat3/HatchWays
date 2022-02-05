# HatchWays
time as of completion 9:39pm cst

## User story
AS A person who likes being able to play with data, I WANT to be able to perform simple CRUD operations on said data. THEREFORE You can add/delete/update/fetch(idk get??) feedback from a site and add/fetch Tips people have posted.

IDK how i feel about fetch there... if possible and you know anonymous person leave me a note on your opinion. 


##USAGE
clone down the repo, go to the root package.json hit npm i. 
for tests the script is npm test. To start its npm start.. :)

##GET routes(for use in insomnia or POSTMAN) are as follows:
http://localhost:3001/api/tips/ 

http://localhost:3001/api/feedback/

http://localhost:3001/api/feedback/:id -run the get route first and grab an id to use in the url param -- p.s. this is the put route.
^^req body is as follows:
{
  "email": "JohnAppleseed@2u.com",
  "feedbackType": "UI",
  "feedback": "insomnia is an enemy"
}


##POST routes-

http://localhost:3001/api/tips/ 
  {
        "username": "j",
        "topic": "UX",
        "tip": "Don't use comic sans"       
 }    
 
http://localhost:3001/api/feedback/ 
{
  "email": "JohnAppleseed@2u.com",
  "feedbackType": "UI",
  "feedback": "insomnia is an enemy"
}

I only did a DELETE for feedback but similarly to the PUT just grab one of the feedback id's from the GET route and throw it in the URL  

i gues putting that twice isn't neccessary but its too late so.


## Time Excuses 
I was pretty much done around 7:30 but i left  white space in the insomnia body section and it took me an ungodly about of time to realize. 
Welp thats about it. Thanks for the consideration,
Nathan.




