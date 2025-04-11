# Invoice_Payment_Reminder

## Objective
This project implements a basic Invoice Payment Reminder system using JavaScript, HTML, and CSS. It features dark mode toggle, form validation for adding invoices, a modal for adding invoices, notifications, and API integration to fetch and display user data as invoice information. Primitive type handling, control flow, error handling, array and object manipulation, and function usage are demonstrated.  It utilizes Bootstrap for styling and modals.

## Output
<iframe src="https://niat-web.github.io/Invoice_Payment_Reminder/" height="1000" width="300" title="Invoice_Payment_Reminder"></iframe>

## Project Requirements
**Technologies:** JavaScript, HTML, CSS, Bootstrap

## Features to Implement
- Dark mode toggle for improved user experience.
- Form validation to ensure data integrity when adding invoices.
- Modal to add and save new invoice details.

## UI Enhancements
- Implement improved table design for invoice display.
- Enhance notification design to provide better user feedback.

## Project Tasks & Expected Outcomes
| Task | Expected Outcome |
|------|------------------|
| Implement Dark Mode | The application should toggle between dark and light themes based on user preference. |
| Implement Form Validation | The application validates new invoice entry fields and displays proper error messages. |
| Implement Invoice Modal | The application provides a modal window for adding new invoices and saves the data to the table. |
| Implement API Integration  | Fetches user data from the free test API and displays it as invoice information. |
| Implement Notification | Displays notifications for successful invoice addition and error messages during API fetch failures. |

## JavaScript Concepts
| Concept | Implementation |
|---------|----------------|
| DOM Manipulation | Used to toggle dark mode, validate forms, and display notifications.  Also used to dynamically generate and update the invoice table. |
| Event Listeners | Used to handle form submissions, button clicks (dark mode toggle, save invoice, close notification), and page load. |
| Asynchronous JavaScript (async/await) | Used to fetch data from the API in the `fetchData` and `loadAndDisplayData` functions. |
| Form Validation | The `checkValidity()` method is used to validate the add invoice form and the modal form.  The `was-validated` class is added to trigger Bootstrap's validation styles. |
| Template Literals | Used for creating dynamic HTML content for the invoice table rows. |
| Array Methods (map, filter, reduce, splice, push) | `map` is used to extract amounts from invoice objects. `filter` is used to filter invoices based on amount.  `reduce` is used to calculate the total invoice value. `push` is used to add a new invoice. `splice` is used to delete an invoice.|
| Spread Operator (...) | Used to create a new invoice object by cloning an existing one and adding a new property. |
| Rest Parameter (...) | Used in the `sumAmounts` function to accept an arbitrary number of arguments. |
| Closures | While not explicitly using closures, the structure is there. The anonymous function within the event listener on `darkModeToggle` forms a closure around the `body` variable.|
| Try...Catch...Finally | Used in fetchData to handle any errors during the API call. The error is then caught and displayed via the notification. |

## API Details
| API | Endpoint | Description |
|-----|----------|-------------|
| Free Test API | https://www.freetestapi.com/api/v1/users | Provides user data for testing purposes. The project fetches data from this API and displays it as invoice information. A proxy is used to handle CORS issues. |