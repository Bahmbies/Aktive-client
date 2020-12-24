const store = require('../store')

const signUpSuccess = function (response) {
  $('#alert-msg').text('Thanks for signing up ' + response.user.email)
  $('form').trigger('reset')
}

const signUpFailed = function () {
  $('#alert-msg').text('Sign up failed, try again')
}

const signInSuccess = function (response) {
  $('#alert-msg').text('Sign In Successful! ' + response.user.email)
  store.user = response.user
  $('#sign-up-form').hide()
  $('#sign-in').hide()
  $('#sign-out').show()
  $('#aktive-landing').show()
  $('#password-change').show()
  $('form').trigger('reset')
}

const signInFailed = function () {
  $('#alert-msg').text('Sign in failed, try again')
}

const passwordChangeSuccess = function (response) {
  $('#alert-msg').text('Your password has been changed')
  $('form').trigger('reset')
}

const passwordChangeFailed = function () {
  $('#alert-msg').text('Password change failed, try again')
}

const signOutSuccess = function (response) {
  $('#alert-msg').text('Sign Out Successful!')
  $('#sign-up-form').show()
  $('#sign-in').show()
  $('#sign-out').hide()
  $('#aktive-landing').hide()
  $('form').trigger('reset')
}

const signOutFailed = function () {
  $('#alert-msg').text('Sign Out Failed!')
}

module.exports = {
  signUpSuccess,
  signUpFailed,
  signInSuccess,
  signInFailed,
  passwordChangeSuccess,
  passwordChangeFailed,
  signOutSuccess,
  signOutFailed
}
