'use strict'

const events = require('./auth/events')
const runEvents = require('./runs/events')

$(() => {
  $('#sign-up-form').on('submit', events.onSignUp)
  $('#sign-in').on('submit', events.onSignIn)
  $('#sign-out').on('click', events.onSignOut)
  $('#password-change').on('submit', events.onPasswordChange)
  $('#view-btn').on('click', runEvents.onIndexRun)
  $('#aktive-landing').on('submit', runEvents.onCreateRun)

  $('#aktive-landing').hide()
  $('#password-change').hide()
  $('#sign-out').hide()
  $('#container').hide()
  $('#update-form').hide()
  $('#update-form').on('submit', runEvents.onUpdateRun)

  $('body').on('click', '#run-delete', runEvents.onDeleteRun)
  $('#container').html('')
})
