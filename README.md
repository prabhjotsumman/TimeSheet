# Timesheet SPA (Single Page Application)
This application is developed using the Microsoft-Graph-API and JavaScript SDK library during the Howathon organised by Publicis Sapient. This event was 24 hour coding challenge in which the one problem has to be solved.

The Technology implemented in this SPA:
1. JavaScript SDK
2. Webpage Excel Export
3. HTML5,CSS3
4. Microsoft-Graph-API
5. Outlook Calender Events

#### About Timesheet SPA:

Publicis Sapient use timetracking application to record the time an employee has spend working in the week. This problem was to fetch all the meetings/events time that the user has attended from Office 365 Outlook Calendar than export it to an Excel file that can be further used to populate the Time tracking Timesheet.

### Problem statement Use case
![Problem statement Use case](https://raw.githubusercontent.com/Prabhnith/TimeSheet/master/screenshots/outlook_timesheet_integration.JPG)

### To solve this problem, an Office 365 account is used which gives access to all the Office 365 applications.
![Office 365 account](https://raw.githubusercontent.com/Prabhnith/TimeSheet/master/screenshots/office365_mainpage.JPG)

### Using the calendar app, some dummy events has been added using GUI 
![Office 365 account](https://raw.githubusercontent.com/Prabhnith/TimeSheet/master/screenshots/outlook_calendar.JPG)

### Microsoft-Graph API
For interacting with the Office 365 applications, Microsoft provides Microsoft-Graph-API, which is gateway to most of the Microsoft applications

![microsoft_graph_API_gateway](https://raw.githubusercontent.com/Prabhnith/TimeSheet/master/screenshots/microsoft_graph_API_gateway.JPG)

### To fetch the calendar events, Microsoft-Graph API is used
![microsoft_graph_explorer.JPG](https://raw.githubusercontent.com/Prabhnith/TimeSheet/master/screenshots/microsoft_graph_explorer.JPG

### Final SPA
In the SPA, date range option is selected to select the range of events that we want to query for and it will show the meetings/events for that time span when "CALENDAR EVENTS" button is clicked.  
![Homescreen](https://raw.githubusercontent.com/Prabhnith/TimeSheet/master/screenshots/homescreen.JPG)

This table can be saved as excel also.

### TODO List
[ ] code refactor