# disk-golf-api
The Disc Golf Full Stack App is a web application designed for disc golf enthusiasts. This application allows users to manage their disc golf collections, track their favorite discs, and organize their collections by categories and plastic types. Users can also log in to view and manage their personal disc collection.

Table of Contents
Features
Technologies Used
Installation
Usage
Contributing
License

Features

User Authentication: Users can register, log in, and log out securely.

Disc Management: Users can view all available discs, add discs to their personal collection, and organize them by categories and plastic types.

Category and Plastic Management: Admin users can manage disc categories and plastic types.

API Endpoints: RESTful API to interact with the disc, category, and plastic data.

Technologies Used

Frontend: HTML, CSS, JavaScript
Backend: Node.js, Express.js
Database: PostgreSQL with Sequelize ORM
Authentication: Express-Session, bcrypt for password hashing

Environment Management: dotenv

Installation
Clone the Repository


git clone https://github.com/your-username/disc-golf-app.git
cd disc-golf-app
Install Dependencies


npm install
Set Up Environment Variables

Create a .env file in the root directory and add your database configuration:


DB_NAME=your_db_name
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_HOST=localhost
DB_PORT=5432
SESSION_SECRET=your_session_secret
Run Database Migrations


npx sequelize-cli db:migrate
Seed the Database (optional)


npx sequelize-cli db:seed:all
Start the Application


npm start
Usage

Sign Up: Create a new user account.

Login: Use your credentials to log in.

Manage Discs: Add, view, and manage your disc collection through the user dashboard.

Explore: Browse different disc categories and plastic types to better organize your collection,

Admin Dashboard: Admins can manage categories and plastics.


Future Enhancements

Search Functionality: Allow users to search for discs by name or category.

Advanced User Settings: Enable users to customize their dashboard layout.

Mobile Responsiveness: Improve the UI for mobile devices.


Contributing
Contributions are welcome! Please feel free to submit a Pull Request or open an issue to suggest improvements.

License
This project is licensed under the MIT License. See the LICENSE file for more details.

This README provides a clear overview of the application, installation steps, and how to use it. Adjust any sections as needed to match your project's specifics.
