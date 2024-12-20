This is a React application for basic user management functionalities integrated with the Reqres API. The app provides authentication, a paginated list of users, and options to edit, delete, and update user details. The application is designed to demonstrate the use of React, React Router, Axios for API calls, and GitHub for version control.

Features
	1.	Authentication Screen:
	•	Login using predefined credentials.
	•	Stores the token in local storage and redirects to the user list upon successful login.
	2.	User List:
	•	Displays a paginated list of users.
	•	Each user’s first name, last name, and avatar are shown.
	•	Users can navigate between different pages of the user list using pagination.
	3.	Edit, Delete, and Update User:
	•	Users can edit their details (first name, last name, email).
	•	Users can delete themselves from the list.
	•	Both actions trigger respective API calls for update and deletion.

Technologies Used
	•	React: Frontend library for building user interfaces.
	•	React Router: For handling routing between different pages.
	•	Axios: To make HTTP requests to the Reqres API.
	•	CSS: Styling of the components.

API Endpoints Used
	1.	Authentication:
	•	POST /api/login
	•	Email: eve.holt@reqres.in
	•	Password: cityslicka
	•	Stores the token returned upon successful login.
	2.	User List:
	•	GET /api/users?page=1 (Paginated User List)
	3.	Edit User:
	•	PUT /api/users/{id}
	4.	Delete User:
	•	DELETE /api/users/{id}

Installation

To run this project locally, follow these steps:
	1.	Clone the repository:

git clone https://github.com/hsaini-2002/Employwise.git


	2.	Navigate to the project directory:

cd Employwise


	3.	Install dependencies:

npm install


	4.	Run the application:

npm start

This will start the development server, and you can open the application in your browser at http://localhost:3000.

Usage
	1.	Authentication:
	•	On the landing page, enter the provided credentials and click “Login”.
	•	Upon successful login, you will be redirected to the user list.
	2.	User List:
	•	Browse through the list of users.
	•	Use pagination to view more users.
	3.	Edit/Update User:
	•	Click “Edit” next to any user to update their details.
	•	After editing, click “Save” to update their details.
	4.	Delete User:
	•	Click “Delete” to remove a user from the list.


GitHub Repository

You can access the repository on GitHub here.
