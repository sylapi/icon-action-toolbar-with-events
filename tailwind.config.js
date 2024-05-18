
const path = require('path')

module.exports = {
    ...require(path.join(__dirname, 'vendor/laravel/nova/tailwind.config')),
    important: '.icon-action-toolbar',
}
