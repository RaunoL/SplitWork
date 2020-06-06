# Work splitting app
## Introduction

This project is part of Web development for industry course. The goal was to create a responsive SPA that would support students during their studies. Main focus of this project was on development and functionality rather than design. 
## Background
### Design tools
Prototyping is an important part of understanding design and evaluating products[1](https://dl.acm.org/doi/pdf/10.1145/347642.347802). For this project 2 seperate prototypes were created using Figma. Figma is an industry-leading platform for UI and UX designers with excellent design tools[2](https://webdesign.tutsplus.com/articles/what-is-figma--cms-32272). Figma is Vector based, which means that users modify vectors instead of images[3](https://vimm.com/what-is-a-vector-image/) 
### Firebase
Firebase is a platform for mobile and we apps.[4](https://firebase.google.com/) Their many products work well together. For this project firebase Authentication, cloud Firestore and Hosting were used. 

Firebase Authentication is responsible for authenticating users. This is an important part of a web app to know who is using your app as it allows the app to securely store user data and ensure the experience is the same across multiple devices. Firebase Authentication goes well with other firebase services. [5](https://firebase.google.com/docs/auth)

Cloud firestore is a noSQL database hosted in the cloud. It is fast, flexible, scalable and it can be used on all platforms. It keeps the data between user device and database in sync. In Firestore documents are stored in collection and each document can contain more collections. [6](https://firebase.google.com/docs/firestore)

Firebase hosting provides a secure hosting solution for web apps and other services. Deploying with firebase hosting is a simple as typing in a command. It is made with javascript frameworks in mind and provides an excellent platform for hosting [7](https://firebase.google.com/docs/hosting)
### React
React is one of the three most popular javascript frameworks. 
[8](https://edoc.sub.uni-hamburg.de/haw/volltexte/2018/4350/pdf/BA_Wohlgethan_2176410.pdf)

## Methodology
The methodology used for this project was design thinking. Design thinking is an iteration process which seeks to understand the user and redefine the problems that users are having that might not be apparent initially [9](https://www.interaction-design.org/literature/article/what-is-design-thinking-and-why-is-it-so-popular).


### Design thinking

Design thinking is a 5 stage process. The first step is to empathise with the users to truly understand which problems they are facing. The second step is Defining the problem. This means truly understanding the underlying cause of the problem. The third step is Ideate. During this state ideas should be generated. Techniques such as brainstorming or Worst Possible Idea could be used to come up with solutions to the problem. The fouth stage is prototyping. The aim of this stage is to investigate the  solutions that have been generated during the last stage. During this stage those solutions are implemented on a scaled down prototype. The fifth stage is testing. The best possible solutions are generated during the testing phase. During this phase a deeper understanding of the problem ought to be developed. [10](https://www.interaction-design.org/literature/article/5-stages-in-the-design-thinking-process)

### Subject selection
A total of 5 students were chosen for this project. These students would take part in all steps that involve users. All participants were studying in the UK but had different origins. 2 male and 3 female participants were chosen. All participants were in their third year of university. The age range was 21-23 years. Each user was asked for their email which was the primary form of contact.
### Quantitative survey
The data collection method was quantitative survey. This method is used to gain insight from responders about research topic [11](https://www.questionpro.com/blog/quantitative-survey-questions/) . This method was used through surveymonkey platform. Surveymonkey is a free online survey tool [12](www.surveymonkey.com). During each step a unique survey was created and sent to all participants' emails. Each participant was asked to answer the questions on their own and not share their answers with others

#### Iteration 1
##### Phase 1
Each participant was asked to list 5 problems they have faced during their studies in order from most impactful problem to least impactful one. These problems were then combined. For example if one problem was worded in different ways. Since each participant ranked them from most to least impactful each of these problems had a combined score. For example if participant 1 had the biggest problem to be "money management" and participant 2 listed their second biggest problem as "running out of money quickly". Those two would be combined with a score of 9.
#### Phase 2 and Phase 3
Each participant was sent a survey. This survey informed them which problem had the highest combined score. This survey asked them 2 questions about this problem. What causes this problem for them, Please list 3 possible solutions to this problem
#### Phase 4
Participants had come up with different solutions. The most commonly named solution was created as a prototype in Figma.
#### Phase 5
Each participant was sent a link to the prototype and asked to fill out a survey about it. A total of 2 questions was asked: Do you think an app like this could solve the problem and What suggestions would you make for this app.
#### Iteration 2
The second iteration was started on phase 4 since the idea and understanding had already been developed and based on user feedback the solution was good. Otherwise the process would have to start again at stage 3. 

Taking into account the participants' input the prototype was changed. Each of the users was then sent a new survey with a link to the updated prototype. The survey conatined 2 questions: Do you prefer the old prototype or the new one and what suggestions would you make to the app.
#### Iteration 3
The third iteration started once again at phase 4. Only this time a functional web app was created instead of a prototype. This web app will be discussed in depth in [implementation](#Implementation). Each of the users was then sent a link to the live demo of the web app and sent a survey with 3 questions: What do you like about the web app, what do you dislike about this web app and what features would you like to see in this web app.


## <a name="Implementation">Implementation</a> 

### CRA and React
React was used as the framework of this SPA. The app was created with create-react-app(CRA). The first step was creating elements individually. Taking apart each page and dividing it into components was first part of creating the app. Once that was done, each component was created. Then components that combine elements could then be created. React hooks were used across the app to store data from user inputs among other things. 
### Authentication
The app uses Firebase Authentication for user authentication. Authentication is stored in a context called AuthContext and each element can access that. That context is monitored by onAuthStateChange function and a useState hook is used to keep the value updated constantly. Users can log in only with email and password. All logins and signups are handled by firebase Authentication. 
### Sass
Sass is a css preprocessor that adds additional functionality to stylesheets [13](https://www.creativebloq.com/web-design/what-is-sass-111517618). In this project it was used for nested rules and variables. Each colour was held in a variable so that if that colour had to be changed it would be changed only inside the variable. Nested rules result in cleaner code. All styling was kept in a single scss folder where a main.scss file was located. The main.scss file had imports of all other files in the scss folder. So to import the styles to the app only a single import was needed. In the scss folder was also a components folder. Each component that had unique styling had a seperate file so that it would be easy to find if the style of that component had to be changed.
### Database
Firebase Firestore was used as a database for this project. The database was first drafted on paper to know which fields will be needed and what database functions need to be created.
The whole database is a single collection called "projects". Whenever a user creates a new project a new document gets added. That document has a default id. Inside the document is the due date of that project, the name of that project, the user value which is equal to the uid of the user who created it. Inside the document is a collection called splits. The splits are what hold the data of each smaller part of a project. Each split has a unique document id and contains the name of that split and due date of that split.

A database folder was created for all database functions. Those functions were newProject(creates a new project), updateSplitInfo(updates the split that is passed as an argument), getUserProjects(gets all the projects of the logged in user), getProjectDetails(gets the info about a project that is passed as an argument), changeActiveProjects(changes the currently active project to a project that is passed as an argument).  
### Routing
React-dom-router was used for routing. Each screen in the prototype was inside its own route. Protected routes were set up so that only logged in users could log in. Everyone else got redirected to login. Routing caused a small issue: state does not get preserved on loading a different page. But it was necessary to know which project is currently active. If a user clicks on a project on the main page they would get routed to a focus page that shows the currently active project but the state would disappear. There were a few ways to overcome this problem: 
* redux - Using redux would let me have global state variables
* context - using context, the currently active project could be made available to all users
* passing the data with the url
* saving the data in the database
The solution I used was saving the data in the database. This however made the app a little slower though since database functions are asynchronous.
### Hosting 
The app was hosted with Firebase Hosting. I simply had to run the build command in my project folder, install firebase with "npm install -g firebase-tools". Then Authenticate myself with "firebase login". The next step was setting up the project. Running "firebase init" initializes the project. Then I had to run "firebase deploy" command to deploy the web and set the public folder to build so that my built app would be hosted. 


## Results and discussion
### iteration 1
| Please list 5 problems you have faced during your studies in an order of importance |                                   |                           |                    |                        |
|-------------------------------------------------------------------------------------|-----------------------------------|---------------------------|--------------------|------------------------|
| Not enough time                                                                     | No money                          | difficult finding friends | lack of motivation | subject is difficult   |
| getting to and from university                                                      | some courses are hard for me      | financial problems        | new city           | bad internet           |
| shared kitchen and bathroom                                                         | health problems                   | time management           | living alone       | money                  |
| too many assessments                                                                | no time for anything but uni work | adjusting to living alone | room is too small  | problems with internet |
| depression and anxiety                                                              | pressure from parents to do well  | homesickness              | financial problems | relationships          |
Results of phase 1 survey

| Problem               | total score |
|-----------------------|-------------|
| Lack of time          |          12 |
| Transportation        |           5 |
| house sharing         |           5 |
| assessments/uni work  |          10 |
| health                |           9 |
| money                 |          10 |
| pressure from parents |           4 |
| social problems       |           6 |
| homesickness          |           3 |
| Living alone          |           5 |
| motivation            |           2 |
| Housing               |           2 |
| bad internet          |           2 |         |                        |
combined results of phase 1 survey
This table clearly shows what the biggest problems students were facing are. The three biggest problems are lack of time, assessments and money. I chose to focus on the lack of time as it had the highest score. Due to time constraints there was not enough time to investigate the other problems so this was picked as the problem that I would aim to solve during this project. 

| What causes "Lack of time" for you?                                                                                                                                                                                | Please list 3 possible solutions to this problem                          |                                                                   |                                                                                                         |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------|-------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------|
| I always leave things to the last minute                                                                                                                                                                           | Some sort of incentive to start things earlier                            | Some sort of time off internet or something                       | something to help me track time and plan ahead                                                          |
| Too much time is spent in uni. All the free time is spent on doing other things that seem important right now                                                                                                      | timetable app so I could plan my free time better                         | something to keep track of my work and maybe do this work in bits | some app that suggests me what I could be doing when i have time off                                    |
| I dont really have that problem. I try to be on time with things.                                                                                                                                                  | timetabling that can let you customize the uni timetable                  | idont know                                                        | dunno                                                                                                   |
| I think it's because I prefer having fun now rather than doing something straight away. Also, I tend to work much more efficiently when the deadline is due very soon but I hate it every time when I need to rush | I would rather do work in small parts and having a deadline for each part | I just need to have more willpower                                | I think if I cut off youtube and social media I would be so bored that I would maybe get something done |
| I think my problem of not having time comes from poor time management. I spend way too much time on Netflix and the like                                                                                           | more motivation to work                                                   | planning my time better                                           | rewarding my work with some chill time                                                                  |


Phase 2 and 3 results

Based on the information recieved it seems like procrastination is the underlying problem for lack of time. Answers "I always leave things to the last minute", "All the free time is spent on doing other things that seem important right now", "I think it's because I prefer having fun now rather than doing something straight away" and "I spend way too much time on Netflix and the like" indicate procrastination rather than time management. But both of them are very closely related.

All users indicated that they believe some sort of time management app would be their solution. The answers that indicate that are "something to help me track time and plan ahead", "something to keep track of my work and maybe do this work in bits", "timetabling that can let you customize the uni timetable", "I would rather do work in small parts and having a deadline for each part" and "planning my time better". Two of the users mentioned doing the work in small parts. Other than that no more patterns appeared. This lead me to an idea of an app where work can split into smaller bits and users can add a due date for each bit.

![prototype 1](/images/iPhone11ProMax-1.png)

screen 1 of first iteration prototype

![prototype 1](/images/iPhone11ProMax-2.png)

screen 2 of first iteration prototype

![prototype 1](/images/iPhone11ProMax-3.png)

screen 3 of first iteration prototype

![prototype 1](/images/iPhone11ProMax-4.png)

screen 4 of first iteration prototype

![prototype 1](/images/iPhone11ProMax-5.png)

screen 5 of first iteration prototype

| Do you think an app like this help with time management?                              | What suggestions would you make for this app?                                                                 |
|------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------|
| Im not sure if it would solve it but I can surely seeing it mkaing my life easier  | I should be able to adjust the time for each task right?                                                     |
| I would use it if I had an assessment to do. It would keep it somewhat controlled. | The problem I could see is that sometimes I don’t do things in order. Can I tick off these things at random? |
| I can see myself using it once it is refined a bit and working properly.           | Wonder what it would be like on desktop. I dont like using my phone too often                                                                                                          |
| Seems pretty cool                                                                  | I dont understand how it works exactly. Maybe improve clarity a bit                                          |
| I probably wouldn’t need it but I can see why someone would use it.                | It looks a bit basic. Could add some colour to it                                                            |
Results from phase 5 survey

3/5 participants agree that the app would help them. One user is neutral and one believes they would not be needing it. This meant that the idea was good and the app would have potential users. 

The suggestions users made were
* Being able to adjust the time for each task
* being able to tick things off the list
* creating the app for both desktop and phone
* improve clarity
* adding colour to the prototype


### Iteration 2
The new prototype was created with user feedback in mind. Also a desktop version of the application was created. 

![prototype 1](/images/Desktop-1.png)

screen 1 of second iteration prototype for desktop

![prototype 1](/images/Desktop-2.png)

screen 2 of second iteration prototype for desktop

![prototype 1](/images/Desktop-3.png)

screen 3 of second iteration prototype for desktop

![prototype 1](/images/Desktop-4.png)

screen 4 of second iteration prototype for desktop

![prototype 1](/images/Desktop-5.png)

screen 5 of second iteration prototype for desktop

| Do you prefer the old prototype or the new prototype | what suggestions would you make to the app.                                           |
|------------------------------------------------------|---------------------------------------------------------------------------------------|
| The new one is better                                | Cant really tell without trying it                                                    |
| new for sure                                         | it seems good. I think it has all the functionality it should have                    |
| new                                                  | I like the new layout and colors                                                      |
| new                                                  | its good as is                                                                        |
| I like the new one                                   | the use of space on desktop seems a little bad. only using like quarter of the screen |
results of survey done in phase 5 iteration 2

### Iteration 3
In this stage the web app was implemented. More about implementation  [here.](#Implementation)
| what do you dislike about this web app?     | What do you like about the web app                                                                                                                                                                                                                                                                                                                                       | what features would you like to see in this web app    |
|---------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------|
| It seems to be rather slow for me           | The design is clearly orientated towards the data, rather than looks, which is great because it shows a clear understanding of the technologies and ways you wish to implement it in order to have a working product. It also shows an understanding of responsive design which is great, especially when you have the bottom right corner buttons for the mobile users. | maybe notifications about upcoming deadlines           |
| changing the parts seems difficult          | it has a nice ui/ux, providing the right type of icons for the right type of actions                                                                                                                                                                                                                                                                                     | Wish you could just click on a task to cross it off    |
| nothing                                     | the colors are pleasing to the eye and buttons are big and easy to click on                                                                                                                                                                                                                                                                                              | maybe having more details on those parts               |
| the name. Project planner sounds so generic | I can use it to plan my future projects                                                                                                                                                                                                                                                                                                                                  | maybe collaboration. Like sharing projects with others |
| there is no back button                     | It is very clear. No unnecessary stuff                                                                                                                                                                                                                                                                                                                                   | the back button                                        |
Survey results of phase 5 iteration 3
Based on the feedback recived the UI is good. The recommendations that will be taken from this survey is that it is missing some features that users need to make the app using experience better. There also seems to be a performance issue that causes the app to freeze when clicking a link.
These recommendations are 
* improve performance
* back button to each screen
* improving how tasks are completed and edited
* think of a better name
* implement collaboration on projects
* add notifications about upcoming deadlines

## Conclusion and recommendations
This project's aim was to create a web app that would support students. This was done by using design thinking methodology. The problem that seemed to be most prevalent was "lack of time". However, after analysis of survey results the underlying problem was determined to be procrastination. The solution, that was developed after multiple iterations of design thinking methodology, was a basic functional web app. The app is a project planner that lets users split their projects into smaller parts and set their own deadlines for those parts. I believe this app fulfills the aim of the project since it supports students by making it easier to track their projects' progress.

In hindsight some things should have been done differently. Using surveymonkey for surveys proved to be difficult as every answer was separately copied  to excel manually because that is a paid feature. More time could have been allocated to allow deeper understanding of the user problems and maybe coming up with solutions to other problems students are facing.

In the future this app could be developed further. Some things that users requested on testing the app were improved performance and notifications. However, due to time constraints these features will not be added.

## References 
1. Buchenau, M. and Suri, J.F., 2000, August. Experience prototyping. In Proceedings of the 3rd conference on Designing interactive systems: processes, practices, methods, and techniques (pp. 424-433).
2. https://webdesign.tutsplus.com/articles/what-is-figma--cms-32272
3. https://vimm.com/what-is-a-vector-image/
4. https://firebase.google.com/
5. https://firebase.google.com/docs/auth
6. https://firebase.google.com/docs/firestore
7. https://firebase.google.com/docs/hosting
8. Wohlgethan, E., 2018. SupportingWeb Development Decisions by Comparing Three Major JavaScript Frameworks: Angular, React and Vue. js (Doctoral dissertation, Hochschule für Angewandte Wissenschaften Hamburg).
9. https://www.interaction-design.org/literature/article/what-is-design-thinking-and-why-is-it-so-popular
10. https://www.interaction-design.org/literature/article/5-stages-in-the-design-thinking-process
11. https://www.questionpro.com/blog/quantitative-survey-questions/
12. www.surveymonkey.com
13. https://www.creativebloq.com/web-design/what-is-sass-111517618
#### [My github](https://github.com/RaunoL/SplitWork)
#### [Live demo](https://web-dev-practical-176d0.firebaseapp.com/)
