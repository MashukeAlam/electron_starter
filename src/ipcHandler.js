const { ipcRenderer } = require('electron')

function send_data (channel, data) {
  ipcRenderer.send(channel, data)
}
