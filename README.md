# Netflix GPT

- Create React App
- Configured Tailwind
- Header 
- Routing of App
- Login Form 
- Sign up Form 
- Form Validation 
- useRef Hook 
- we can also separate the sign in and sign up validation 

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
- Create SignUp User Account
- Implement Sign In user Api
- Create a Redux store with userSlice
- Implemented Sign out 
- Update Profile
- Unsubscribed to the onAuthStateChange callback
- Add hardcoded values to the constants file
- Register for the tmdb Database to get the Api and get access token
- Get Data from the tmdb now playing movies list Api
- Custom hook for now playing movies
- create movie slice 
- Update store with movies data 
- Planning for MainContainer and SecondaryContainer
- Fetch Data for trailers
- Update the store with trailers data
- Embedded the youtube video and make it autoplay and mute


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
   


 src="https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6e"  
