// Improved error handling for Firebase Authentication
firebase.auth().signInWithEmailAndPassword(email, password)
  .catch(error => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // Handle specific error codes:
    if (errorCode === 'auth/invalid-email') {
      // Show an error message indicating an invalid email format.
      console.error('Invalid email format: ', errorMessage);
    } else if (errorCode === 'auth/user-not-found') {
      // Show an error message that the user was not found.
      console.error('User not found: ', errorMessage);
    } else if (errorCode === 'auth/wrong-password') {
      // Show an error message for wrong password.
      console.error('Wrong password: ', errorMessage);
    } else if (errorCode === 'auth/network-request-failed') {
      // Show an error message for network issues.
      console.error('Network request failed. Please check your connection: ', errorMessage);
    } else {
      // Handle any other errors
      console.error('An unexpected error occurred: ', errorMessage);
    }
  });