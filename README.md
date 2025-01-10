# Netflix GPT

- Create React App
- Configured Tailwind
- Header 
- Routing of App
- Login Form 
- Sign up Form 
- Form Validation 
- useRef Hook 
- we can also seprate the sign in and sign up validation 

- Sign in validation looks like this:

Only validates email and password.

const checkValidDataForSignIn = (email, password) => {
  if (!email || !password) {
    return "Email and password are required.";
  }
  if (!/\S+@\S+\.\S+/.test(email)) {
    return "Invalid email address.";
  }
  if (password.length < 6) {
    return "Password must be at least 6 characters long.";
  }
  return ""; // No error
};



- Sign up validation looks like this:

Includes validation for name, email, and password.

const checkValidDataForSignUp = (name, email, password) => {
  if (!name || !email || !password) {
    return "Name, email, and password are required.";
  }
  if (name.length < 2) {
    return "Name must be at least 2 characters long.";
  }
  if (!/\S+@\S+\.\S+/.test(email)) {
    return "Invalid email address.";
  }
  if (password.length < 6) {
    return "Password must be at least 6 characters long.";
  }
  return ""; // No error
};

- Firebase Setup
- Deploy our app to production



# Features
- Login/Sign up 
   - Sign In / Sign up Form
   - redirect to Browse Page
- Browse (after authentication)
   - Header
   - Main Movie
      - Trailer in Background
      - Title and Description
      - MovieSuggestions
         - MovieLists * N
- NetflixGPT
   - Search Bar
   - Movie Suggestions
   