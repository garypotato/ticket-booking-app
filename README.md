# train-ticket booking application
What I want to do in this app is simple but informative. This website is based on mobile-first design so the font-size:pencil2: will change according to different screen width. Users can still use PC brower but some functions will not working well. However, I am happy with that because I focus on user experiense.
Url: https://main.d22uf4v566qg8b.amplifyapp.com/
##  About this app
This app is based on React, Redux, React-redux, redux-thunk, and of course, some third libraries like classnames.
Please have a look the home page  
![image](https://user-images.githubusercontent.com/72715709/129852961-29221c59-7125-40e8-9cfa-efbb71e3cee1.png)
## Fetch Mock Data
This app is using mock data(sadly stored under Public file), so the app is showing the same data in some places. However, the app have to use Fetch api to get different data and present to the users.
## What I am happy with 
### 1. web optimisation
use useCallback, useMemo and memo to prevent unnecessary renders, and proptypes to define the type of props.
### 2. the citySelector component  
Navigate to cities by clicking the alphabet list at the right hand side, largely enhances user experience. 
This can be easily done by using data attributes in each city section.  
![cityselector](https://user-images.githubusercontent.com/72715709/129853368-d3a96e07-a7ca-4052-9a57-2b1509ff2984.gif)
### 3. the dateSelector component  
It always show the current month and next following two months and highlight the weekends. You can find that the previous date are in grey color that means user couldn't select it.  
There is no third party libraries in this section, feel free to have the origin code.  
![dateselector](https://user-images.githubusercontent.com/72715709/129857247-0dc4756a-5cea-4cab-bc97-3c3723fae0b5.gif)
### 4. the Filters component
Users can sort the ticket by departure, travelling time and ticket type. The filters can help user to book the ticket they need easily.  
I also created a time slider that users can choose the departure and arrive time they want. All the filters all be stored in Redux.
There is no third party libraries in this section, feel free to have the origin code.  
![fiilters](https://user-images.githubusercontent.com/72715709/129859056-faf24444-272c-4838-a8b3-8a4b04dc58f4.gif)
### 5. timetable for each train
The timetable shows all the stops while highlight the departure stop and destination. 
There is no third party libraries in this section, feel free to have the origin code.  
![timetable](https://user-images.githubusercontent.com/72715709/129859969-595d6742-bb1e-4bdb-bec9-4758ac5e769d.gif)
### 6. Ticket booking
Child cannot book a ticket without adult's company.
Users can also choose the seat when booking.  
![ticketboking](https://user-images.githubusercontent.com/72715709/129861015-b699b7c1-89b7-4642-96ca-c5f4a872dce2.gif)
### 7. React Custom hooks
When user selecting the ticket, they can always change the date.  
![useNav](https://user-images.githubusercontent.com/72715709/129861527-29f13b2a-8dd7-4b70-8535-51ff70b693aa.gif)
## What needs to improve
### RESTFUL APIs
Because of the mock data, the RESTFUL APIs will be always the same that it's impossible in real-world websites.
### Debounce 
There is no debounce applied in search input 











