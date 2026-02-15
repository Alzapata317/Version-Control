# COLORS Application

## A brief description of the COLORS application
COLORS is a simple LAMP-stack web app where users log in, search their saved colors, and add new colors tied to their account. It demonstrates end-to-end integration between a browser frontend, PHP API endpoints, and a MySQL database.

## Technologies used
- A Linux hosting environment via a DigitalOcean LAMP droplet
- Apache
- MySQL
- PHP
- HTML, CSS, and vanilla JavaScript

## Setup instructions
1. Use DigitalOcean to create a LAMP environment (Linux + Apache + MySQL + PHP).
2. Create the database and name it **COP4331** and also create the required tables:
   - `Users` (`ID`, `FirstName`, `LastName`, `Login`, `Password`)
   - `Colors` (`ID`, `Name`, `UserID`)
3. Create a DB user with permissions to the project database.
4. Add a project `.env` file in the repository root with database credentials:

```ini
DB_HOST=localhost
DB_USER=your_db_user
DB_PASS=your_db_password
DB_NAME=your_db_name
```

5. Deploy project files so:
   - frontend files are served from the web root (`public/`)
   - API files are reachable as `/LAMPAPI/*.php` (from `api/`)
6. Update `public/js/code.js` `urlBase` if your API path differs.

## How to run and access the application
1. Start Apache and MySQL services on your server.
2. Confirm your DB and tables are created and contain test data/users.
3. Open the app in the browser via the server ip
4. Sign in from `index.html` using a valid user.
5. After login, you can
   - search for colors linked to your account
   - add new colors for your account

### API endpoints used by the frontend
- `POST /LAMPAPI/Login.php`
- `POST /LAMPAPI/AddColor.php`
- `POST /LAMPAPI/SearchColors.php`
