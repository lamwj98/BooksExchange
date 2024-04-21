
# BooksExchange

BooksExchange is a web application to facilitate exchange of books between people. It allows users to list the books that they do not want to read anymore and other users can reach out to receive the book so that the book can be in better hands.

The project is implemented using **MERN** (MongoDB, ExpressJS, ReactJS, NodeJs) stack and uses Google Authentication to sign up/in users.

## Get Started (Locally)
To get started, download the project and add the .env files for both backend and frontend into their folders. Assess the project's root directory.

Start by running the backend system with the following code:
```
cd backend
npm install
npm start
```

Then run the following code for the frontend (on another shell window, assuming you are at project's root directory):
```
cd frontend
npm install
npm start
```

You can now assess the web application on http://localhost:3000.

## Features
- [x] User authentication through Google
- [x] User Profile Page
- [x] Post CRUD
- [ ] Post search
- [ ] Chat through Post
- [ ] Post filter(s)

## Possible Extensions
### User
- Implement more comprehensive user profile (Can consider user rating, phone number)

### Post
- Implement post category (i.e. book category)
- Implement feature to upload image for post (can consider using cloud services such as AWS S3 Bucket to upload images and then store image uri in Post model)
- Implement chat feature (Post model have a chat field which stores the chats for that product)

### Post Search
Quick-win:
- Filter search terms Post's book title and description field
Other (maybe better) Implementations:
- Use 3rd party search tools on Post models (e.g. Elastic Search) to provide better search experience (e.g. real-time update)

### Chat
Quick-win:
- Implement user chat history page (for easy access of all chats)
Other (maybe better) Implementations:
- Consider real-time chat updates too (may need the use of socket/real-time communication(RTC) libraries)

### Authentication
- Better authentication checks when making a request (e.g. check for token when making a HTTP request and that the request by the user is only models that are related to him)


### Other Features
- Consider a discover feature where random unclaimed books will be recommended to user
