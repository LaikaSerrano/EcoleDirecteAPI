# EcoleDirecteAPI
![npm](https://img.shields.io/npm/dt/@asgarrrr/ecoledirecteapi?color=red&label=NPM%20downloads)

```bash
npm install @asgarrrr/ecoledirecteapi
```
Simplification of the extraction of information from \"Ecole Directe\" ( French Online Student Tracking Space )".

## Features
- Access to Student and Family Accounts
- Access to the student's grades, homework, schedules, school life elements (absences, sanctions, etc.).

## Get started
```js
// —— Include the package in your program
const api = require("@asgarrrr/ecoledirecteapi");
// —— Create a new instance
const session  = new api.Session();
// —— Identification required to access your content
const account  = await session.login("login", "password"),
```

## Methods

### `getNotes()`
Retrieves the student's grades

| Parameter |  Type  | Optional | Description                                |
|:---------:|:------:|:--------:|--------------------------------------------|
| quarter   | Number | Yes      | Data recovery for a specific semester only |

### `getHomeworks()`
Retrieves the student's Homeworks

### `getSchedule()`
Retrieves the student's Schedule
| Parameter | Type | Optional | Description   |
|:---------:|:----:|:--------:|---------------|
| start     | Date | Yes      | Starting date |
| end       | Date | Yes      | Ending date   |

### `getSchoolLife()`
Retrieves the student's SchoolLife

### `getMessages()`
Retrieves the student's messages

### `getCloud()`
Retrieves the student's cloud elements

### `getDocuments()`
Retrieves the student's documents


## Examples
### Get student grades

```js
const api = require("@asgarrrr/ecoledirecteapi");

const session  = new api.Session(),
      account  = await session.login("login", "password");

      // —— First quarter information
      semester = await account.getNotes(1),
      // —— Get all notes
      grades   = await account.getNotes();

console.log(semester.ensembleMatieres.moyenneGenerale); // 17.5
console.log(grades.length); // 13
```

### Get the job for tomorrow
```js
const api = require("@asgarrrr/ecoledirecteapi");

const session  = new api.Session(),
      account  = await session.login("login", "password"),

      // —— Get all homeworks
      work     = await account.getHomeworks(),
      today    = new Date(),
      tomorrow = new Date(today);

tomorrow.setDate(tomorrow.getDate() + 1);

console.log(
    work[tomorrow.toLocaleDateString()]
    || "No homework for tomorrow"
);
```
