const ui = require('./ui')
const api = require('./api')
const store = require('../store')

const getFormFields = require('../../../lib/get-form-fields')

const onCreateRun = (event) => {
  event.preventDefault()
  console.log(event.target)
  const form = event.target
  const data = getFormFields(form)

  api.create(data)
    .then(ui.createSuccess)
    .catch(ui.createFailed)
}

const onIndexRun = (event) => {
  event.preventDefault()

  console.log('im Indexing...')

  api.index()
    .then(ui.indexSuccess)
    .catch(ui.indexFailed)
}

const showRun = (event) => {
  event.preventDefault()

  api.show()
    .then(ui.showSuccess)
    .catch(ui.showFailed)
}

const onDeleteRun = (event) => {
  const RunId = $(event.target).data('run-id')

  $('#container').empty(RunId)

  api.deleteRun(RunId)
    .then(ui.deleteSuccess)
    .catch(ui.deleteFailed)
}

const onUpdateRun = (event) => {
  event.preventDefault()

  const data = getFormFields(event.target)

  // const RunId = $(event.target).data('run-id')

  api.update(data)
    .then(ui.updateSuccess)
    .catch(ui.updateFailed)
}

module.exports = {
  onCreateRun,
  onIndexRun,
  onDeleteRun,
  onUpdateRun,
  showRun
}
