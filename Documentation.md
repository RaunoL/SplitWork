# Work splitting app
## introduction

This project is part of Web development for industry course. The goal was to create a responsive SPA that would support students during their studies. Main focus of this project was on development and functionality rather than design. 
## Background
### Design tools
Prototyping is an important part of understanding design and evaluating products[1](https://dl.acm.org/doi/pdf/10.1145/347642.347802). For this project 2 seperate prototypes were created using Figma. Figma is an industry-leading platform for UI and UX designers with excellent design tools[2](https://webdesign.tutsplus.com/articles/what-is-figma--cms-32272). Figma is Vector based, which means that users modify vectors instead of images[3](https://vimm.com/what-is-a-vector-image/) 
### Firebase
Firebase is a platform for mobile and we apps.[4](https://firebase.google.com/) Their many products work well together. For this project firebase Authentication, cloud Firestore and Hosting were used. 

Firebase Authentication is responsible for authenticationg users. This is an important part of a web app to know who is using your app as it allows the app to securely store user data and ensure the experience is the same across multiple devices. Firebase Authentication goes well with other firebase services. [5](https://firebase.google.com/docs/auth)

Cloud firestore is a noSQL database hosted in the cloud. It is fast, flexible, scalable and it can be used on all platforms. It keeps the data between user device and database in sync. In Firestore documents are stored in collection and each document can contain more collections. [6](https://firebase.google.com/docs/firestore)

Firebase hosting provides a secure hosting solution for web apps and other services. Deploying with firebase hosting is a simple as typing in a command. It is made with javascript frameworks in mind and provides an excellent platform for hosting [7](https://firebase.google.com/docs/hosting)
### React
React is one of the three most popular javascript frameworks. 
[8](https://edoc.sub.uni-hamburg.de/haw/volltexte/2018/4350/pdf/BA_Wohlgethan_2176410.pdf)

## Methodology
The methodology used for this project was design thinking. Design thinking is an iteration proccess which seeks to understand the user and redefine the problems that users are having that might not be apparent initailly [9](https://www.interaction-design.org/literature/article/what-is-design-thinking-and-why-is-it-so-popular).


### Design thinking

Design thinking is a 5 stage process. The first step is to empathise with the users to truely understand which problems they are facing. The second step is Defining the problem. This means truely understanding the underlying cause of the problem. The thirds step is Ideate. During this state ideas should be generated. Techniques such as branstorming or Worst Possible Idea could be used to come up with solutions to the problem. The fouths stage is prototyping. The aim of this stage is to investigate the  solutions that have been generated during the last stage. During this stage those solutions are implemented on a scaled down prototype. The fifth stage is testing. The best possible solutions are generated during the testing phase. During this phase a deeper understanding of the problem ought to be developed. [10](https://www.interaction-design.org/literature/article/5-stages-in-the-design-thinking-process)

### Subject selection
A total of 5 students were chosen for this project. These students would take part in all steps that involve users. All participants were studying in the UK but had different origin. 2 male and 3 female participant were chosen. All participants were in their third year of university. The age range was 21-23 years. Each user was asked for their email which was the primary form of contact.
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
The second iteration was started on phase 4 since the idea and understanding had already been developed and based on user feedback the solution was good. Otherwise the proccess would have to start again at stage 3. 

Taking into account the participants' input the prototype was changed. Each of the users was then sent a new survey with a link to the updated prototype. The survey conatined 2 questions: Do you prefer the old prototype or the new one and what suggestions would you make to the app.
#### Iteration 3
The third iteration started once again at phase 4. Only this time a functional web app was created instead of a prototype. This web app will be discussed in depth in [implementation](#Implementation). Each of the users was then sent a link to the live demo of the web app and sent a survey with 3 questions: What suggestions would you like to have for this web app, what do you dislike about this web app and what features would you like to see in this web app.


## <a name="Implementation">Implementation</a> 
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

Based on the infor recieved it seems like procrastination is the underlying problem for lack of time. Answers "I always leave things to the last minute", "All the free time is spent on doing other things that seem important right now", "I think it's because I prefer having fun now rather than doing something straight away" and "I spend way too much time on Netflix and the like" indicate procrastination rather than time management. But both of them are very closely related.

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
The new prototype was created with user feedback in mind. Also a desktop version of the application was created\
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
## Conclusion and recommendations
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
#### Link to code here
#### Link to hosting here
