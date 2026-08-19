# 🚀 LearnSpace Backend API


- Handle HTTP requests
- Return JSON responses
- Accept user input
- Create new course data
- Validate incoming data
- Return appropriate HTTP status codes


---


## ✨ Features


- 🚀 Express.js backend server
- 📚 GET endpoint for retrieving courses
- ➕ POST endpoint for creating a new course
- 📥 JSON request handling
- 📤 JSON response handling
- ✅ Input validation
- ❌ Error handling for invalid input
- 🔢 HTTP status codes
- 🧪 API testing with Postman
- 🌐 Browser-based GET response testing


---


## 🛠️ Technologies Used


| Technology | Purpose |
|------------|---------|
| Node.js | Backend runtime environment |
| Express.js | Web framework |
| JavaScript | Server-side programming |
| JSON | Data exchange format |
| Postman | API testing |
| Git & GitHub | Version control and project hosting |


---


## 📂 Project Structure


```text
decode-labs-project-2/
│
├── server.js
├── package.json
├── package-lock.json
├── Browser GET.png
├── Get Success Postman.png
├── Invalid Title.png
├── POST success.png
└── Validiation Empty Title.png

⚙️ How to Run Locally
1. Clone the repository
git clone https://github.com/Amnakhan-gif/decode-labs-project-2.git
2. Open the project folder
cd decode-labs-project-2
3. Install dependencies
npm install
4. Start the server
node server.js

The server runs on:

http://localhost:3000
🔗 API Endpoints
🟢 GET — Get All Courses

Endpoint:

GET /api/courses

URL:

http://localhost:3000/api/courses
Example Response
{
  "success": true,
  "courses": [
    {
      "id": 1,
      "title": "HTML & CSS",
      "lessons": 12
    },
    {
      "id": 2,
      "title": "JavaScript",
      "lessons": 18
    },
    {
      "id": 3,
      "title": "Node.js",
      "lessons": 15
    }
  ]
}

Status Code: 200 OK

🟢 POST — Create a New Course

Endpoint:

POST /api/courses

URL:

http://localhost:3000/api/courses
Request Body
{
  "title": "React.js",
  "lessons": 20
}
Successful Response
{
  "success": true,
  "message": "Course created successfully!",
  "course": {
    "id": 123456789,
    "title": "React.js",
    "lessons": 20
  }
}

Status Code: 201 Created

✅ Data Validation

The POST endpoint validates the incoming course data.

Course Title

The title:

Must be provided
Must be a string
Must not be empty
Number of Lessons

The lessons value:

Must be provided
Must be a number
Must be greater than 0

Invalid requests return:

400 Bad Request
❌ Validation Testing
Empty Course Title
{
  "title": "",
  "lessons": 15
}

Response:

{
  "success": false,
  "message": "Course title is required and must be a valid text."
}
Invalid Number of Lessons
{
  "title": "Node.js",
  "lessons": -5
}

Response:

{
  "success": false,
  "message": "Lessons must be a number greater than 0."
}
Invalid Lessons Data Type
{
  "title": "Node.js",
  "lessons": "fifteen"
}

The request is rejected because lessons must be a number.

🧪 API Testing

The API was tested using Postman and a web browser.

Tests Performed
✅ GET request — 200 OK
✅ Successful POST request — 201 Created
✅ Empty course title validation — 400 Bad Request
✅ Invalid lessons validation — 400 Bad Request
✅ Browser GET response tested successfully
📸 Testing Evidence

The repository includes screenshots of the completed tests:

Browser GET.png
Get Success Postman.png
POST success.png
Invalid Title.png
Validiation Empty Title.png
🎯 Project Objectives

This project was developed to practice:

Backend development
REST API concepts
HTTP methods
Request and response handling
JSON data handling
Input validation
HTTP status codes
API testing with Postman
Git and GitHub workflow
📚 Learning Outcomes

Through this project, I strengthened my understanding of:

Node.js
Express.js
RESTful APIs
GET and POST requests
JSON
Request body handling
Input validation
Error handling
HTTP status codes
Postman API testing
Git and GitHub workflow
🚀 Future Improvements

Future versions of this API could include:

🗄️ Database integration
🔐 User authentication
👤 User management
📚 Full CRUD operations
🔎 Course search and filtering
📊 Persistent course data
🛡️ Advanced validation
🌐 Cloud deployment
👩🏻‍💻 Author

Amna Khan

Full-Stack Developer | Web Developer | Software Builder

🏢 Internship

This project was completed as Project 2 during my Full-Stack Development Internship at Decode Labs.

The project provided hands-on experience in backend development, REST API implementation, server-side logic, input validation, API testing, and GitHub workflow.

📄 License

This project was created for educational and internship purposes.
