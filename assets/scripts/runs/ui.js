const store = require('../store')

const createSuccess = (response) => {
  $('#alert-msg').text('Added!')
  store.run = response.run
  console.log(response.run)
}

const createFailed = function () {
  $('#alert-msg').text('Whoops! Try Again')
}

const indexSuccess = (response) => {
  // show all runs in list format with a delete and update option
  $('#alert-msg').text('Cool! Get To It!!')
  $('#container').show()
  $('#container').html('')
  $('#container').data()
  const runs = response.runs

  runs.forEach(function (currentRun) {
    const runHTML = (`
          <h1>${currentRun.title}</h1>
          <p> ID: ${currentRun._id}</p>
          <br>
            <button id="run-delete" type="button" data-run-id=${currentRun._id}>Delete!</button>
          `)

    $('#container').append(runHTML)
    $('form').trigger('reset')
  })

  $('form').trigger('reset')
}

const indexFailed = () => {
  $('#alert-msg').text('Hmm.. Try Again')
}

const deleteSuccess = () => {
  $('#alert-msg').text('Run Deleted')
}

const deleteFailed = () => {
  $('#alert-msg').text('Hmm.. Try Again')
}

const updateSuccess = (response) => {
  $('#alert-msg').text('Updated!')

  $('form').trigger('reset')
}

const updateFailed = () => {
  $('#alert-msg').text('Failed to Update')
}

module.exports = {
  createSuccess,
  createFailed,
  indexSuccess,
  indexFailed,
  deleteSuccess,
  deleteFailed,
  updateSuccess,
  updateFailed
}
