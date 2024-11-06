
export function firebaseErrorFormater(error: string) {
  // ========= Internal Error
  if (error === 'auth/internal-error') {
    console.log(error)
    return 'Authentication Server encountered an Internal Error'
  }

  // ========= Email Already in Use
  if (error === 'auth/email-already-in-use') {
    console.log(error)
    return 'Email is already in use'
  }

  // ========= Invalid Email
  if (error === 'auth/invalid-email') {
    console.log(error)
    return 'Email entered is invalid'
  }

  // ========= Invalid Password
  if (error === 'auth/invalid-password') {
    console.log(error)
    return 'Password entered is invalid'
  }

  // ========= Invalid Credentials (email/password)
  if (error === 'auth/invalid-credential') {
    console.log(error)
    return 'Invalid credentials - verify email/password and try again'
  }

  // ========= Weak Password
  if (error === 'auth/weak-password') {
    console.log(error)
    return 'Password is too weak must be at least 6 characters'
  }
}