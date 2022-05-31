const { readdirSync } = require('fs')

const getDirectories = source =>
  readdirSync(source, { withFileTypes: true })
    .filter(file => file.isDirectory() && !file.name.startsWith("."))
    .map(dirent => dirent.name)

    console.log(getDirectories('.'))