# Employee Data Pagination App

A simple and responsive **React Employee Data Pagination App** that fetches employee information from a local REST API and displays it in a Bootstrap table with pagination.

## 📌 Project Overview

This project demonstrates how to:

* Fetch employee data using the `fetch()` API
* Display employee data in a responsive table
* Implement pagination using React state
* Change the number of records displayed per page
* Navigate between previous and next pages
* Calculate total pages dynamically

## 🛠️ Technologies Used

* React.js
* JavaScript
* HTML5
* CSS3
* Bootstrap
* Fetch API
* JSON Server / Local REST API
* Vite

## ✨ Features

### 1. Employee Data Display

Employee information is displayed in a Bootstrap responsive table.

The table contains:

* Employee ID
* Name
* Email
* Phone
* Department
* Position
* Salary
* City
* Age

### 2. Pagination

The application divides employee records into multiple pages.

By default:

text
15 employees per page


Users can change the number of records per page to:

text
15
30
45
60
75
100




## 🎥 Video 
[▶️ Watch Portfolio Video](https://drive.google.com/file/d/1EzoG-5d9LsdtXJoJAAw4ZtoxpY_nAC5Y/view?usp=sharing)

## Screen sort
[Screen sort](https://drive.google.com/file/d/1I6-WXpUf75VHjJfVnb6g86i60jjYLk-L/view?usp=sharing)



### 3. Previous and Next Buttons

The application provides:

* Previous button
* Next button

The **Previous** button is disabled on the first page.

The **Next** button is disabled on the last page.

### 4. Dynamic Total Pages

Total pages are calculated automatically based on the number of employees and selected records per page.

```javascript
let totelpage = Math.ceil(A_Data.length / pageperdata);
```

### 5. Responsive Table

Bootstrap's `table-responsive` class makes the employee table usable on smaller screens.

## 📂 Project Structure

```text
employee-pagination/
│
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   └── App.css
│
├── db.json
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

## 🚀 Installation

### Step 1: Create React Project

If you are creating the project from scratch:

```bash
npm create vite@latest employee-pagination
```

Select:

```text
React
JavaScript
```

Then move into the project:

```bash
cd employee-pagination
```

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Install Bootstrap

```bash
npm install bootstrap
```

Import Bootstrap in `main.jsx` or `App.jsx`:

```javascript
import "bootstrap/dist/css/bootstrap.min.css";
```

## 🗄️ JSON Server Setup

This project uses a local API:

```text
http://localhost:3000/employees
```

Create a `db.json` file in the project root.

Example:

```json
{
  "employees": [
    {
      "id": 1,
      "name": "Rahul Patel",
      "email": "rahul@example.com",
      "phone": "9876543210",
      "department": "IT",
      "position": "Developer",
      "salary": 35000,
      "city": "Rajkot",
      "age": 24
    },
    {
      "id": 2,
      "name": "Amit Shah",
      "email": "amit@example.com",
      "phone": "9876543211",
      "department": "HR",
      "position": "HR Executive",
      "salary": 30000,
      "city": "Ahmedabad",
      "age": 26
    }
  ]
}
```

## ▶️ Run JSON Server

Install JSON Server if it is not already installed:

```bash
npm install -g json-server
```

Run:

```bash
json-server --watch db.json
```

The API will be available at:

```text
http://localhost:3000/employees
```

## ▶️ Run React Application

Open another terminal and run:

```bash
npm run dev
```

Vite will provide a local URL, usually:

```text
http://localhost:5173
```

Open that URL in your browser.

## 🔄 How Pagination Works

The project uses three main calculations.

### Last Index

```javascript
let lastIndex = currentpage * pageperdata;
```

### First Index

```javascript
let FirstIndex = lastIndex - pageperdata;
```

### Current Page Data

```javascript
let currentpageData = A_Data.slice(FirstIndex, lastIndex);
```

For example, if:

```text
Current Page = 2
Records Per Page = 15
```

Then:

```text
First Index = 15
Last Index = 30
```

So records from index `15` to `29` are displayed.

## 🧠 React Concepts Used

### useState

The project uses `useState()` to manage:

```javascript
const [A_Data, setA_Data] = useState([]);
const [currentpage, setCurrentpage] = useState(1);
const [pageperdata, setPageperdata] = useState(15);
```

### useEffect

`useEffect()` is used to fetch employee data when the component loads.

```javascript
useEffect(() => {
  fetch(API)
    .then((response) => response.json())
    .then((data) => {
      setA_Data(data);
    });
}, []);
```

### Array slice()

`slice()` is used to display only the records belonging to the current page.

```javascript
A_Data.slice(FirstIndex, lastIndex);
```

### map()

`map()` is used to display employee records inside the table.

```javascript
currentpageData.map((element, index) => {
  return (
    <tr key={index}>
      <td>{element.id}</td>
      <td>{element.name}</td>
    </tr>
  );
});
```

## 📊 Pagination Example

Suppose the API contains:

```text
100 Employees
```

And the user selects:

```text
15 records per page
```

Then:

```text
Total Pages = Math.ceil(100 / 15)
            = 7 Pages
```

The application displays:

```text
Page 1 of 7
Page 2 of 7
Page 3 of 7
...
Page 7 of 7
```

## 🎨 UI

The project uses Bootstrap classes such as:

```text
table
table-bordered
table-striped
table-hover
table-dark
table-responsive
btn
btn-outline-primary
btn-outline-secondary
form-select
```





```javascript
fetch(API, {
  method: "GET",
  headers: {
    "Content-Type": "application/json"
  }
})
```

For a `GET` request, the headers are generally not required, so this is also enough:

```javascript
fetch(API)
```



