const path = require('path');
const { loggerConsole } = require('../logger')

const mainHtml = (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'))
    loggerConsole.info(`${req.originalUrl} ${req.method}`);
}

module.exports = { mainHtml };