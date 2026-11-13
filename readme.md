# StayHub 🏡

**A Full-Stack Accommodation Listing Platform**

StayHub is a full-stack web application inspired by the idea of making accommodation discovery and property management easier. It allows users to explore available stay listings and provides functionality to create, view, update, and delete property listings.

The project is currently under development, with a focus on building practical full-stack development skills and implementing core web application functionality.

## ✨ Features Implemented

- **Property Listings:** Display available accommodation listings.
- **Create Listings:** Add new properties with details such as title, description, price, location, country, and image.
- **View Listing Details:** View individual property information.
- **Edit Listings:** Update existing property details.
- **Delete Listings:** Remove property listings.
- **Review System:** Submit reviews with ratings and comments.
- **Database Integration:** Store and manage listing and review data using MongoDB.
- **Input Validation:** Validate listing data before saving it.
- **Error Handling:** Handle asynchronous errors and invalid routes using custom error-handling utilities.

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Page structure |
| CSS3 | Styling |
| JavaScript | Application logic |
| Node.js | Backend runtime |
| Express.js | Server and routing |
| EJS | Server-side rendering |
| EJS-Mate | EJS layout management |
| MongoDB | Database |
| Mongoose | MongoDB object modeling |
| Joi | Input validation |

## 📂 Project Structure

```text
StayHub/
│
├── init/
│
├── models/
│   ├── listing.js
│   └── review.js
│
├── public/
│   ├── css/
│   └── js/
│
├── utils/
│   ├── ExpressError.js
│   └── wrapAsync.js
│
├── views/
│   ├── layouts/
│   ├── listings/
│   └── includes/
│
├── app.js
├── schema.js
├── package.json
├── package-lock.json
└── README.md
```

## ⚙️ Getting Started

### Prerequisites

- Node.js
- MongoDB
- npm

### Installation

1. Clone the repository:

```bash
git clone https://github.com/samruddhiadalinge-hue/StayHub.git
```

2. Navigate to the project directory:

```bash
cd StayHub
```

3. Install dependencies:

```bash
npm install
```

4. Install Joi if it is not already included:

```bash
npm install joi
```

5. Start MongoDB on your local machine.

6. Run the application:

```bash
node app.js
```

7. Open your browser and visit:

```text
http://localhost:8080
```

## 📚 What I Am Learning

Through StayHub, I am gaining practical experience in:

- Building server-side applications using Node.js and Express.js.
- Designing MongoDB schemas and working with Mongoose.
- Implementing RESTful routing and CRUD operations.
- Rendering dynamic web pages using EJS.
- Validating user input and handling application errors.
- Understanding how frontend, backend, and database components work together.

## 🚧 Project Status

**In Progress**

StayHub is being developed incrementally. More functionality and improvements will be added as development progresses.

## 👩‍💻 Developer

**Samruddhi Adlinge**

Computer Engineering Student | Aspiring Full-Stack Developer

[GitHub](https://github.com/samruddhiadalinge-hue)

---

*Built as a hands-on full-stack web development project.*