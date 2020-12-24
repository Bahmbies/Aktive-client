const store = require('../store')
const config = require('../config')
const { data } = require('jquery')

const create = (data) => {
  return $.ajax({
    url: config.apiUrl + '/runs',
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data
  })
}

const index = () => {
  return $.ajax({
    url: config.apiUrl + '/runs',
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const deleteRun = (runId) => {
  return $.ajax({
    url: config.apiUrl + '/runs/' + runId,
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }

  })
}

const update = (data) => {
  return $.ajax({
    url: config.apiUrl + '/runs/' + data.run.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data
  })
}

module.exports = {
  create,
  index,
  deleteRun,
  update
}
