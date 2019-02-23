# osa-omnifocus
Node API for interacting with OmniFocus

# Installation
Requires OSX 10.10 Yosemite.

```
npm install osa-omnifocus --save
```

# Usage
```
const omnifocus = require('osa-omnifocus);

omnifocus.getTasks().then((tasks) => {
  tasks.forEach((task) => console.log)
})

omnifocus.getInboxCount().then(console.log)

omnifocus.markTaskComplete('taskId')
```