# omnifocus
Node API for interacting with OmniFocus

# Installation
Requires OSX 10.10 Yosemite.

```
npm install omnifocus --save
```

# Usage
```
const omnifocus = require('omnifocus);

omnifocus.getTasks().then((tasks) => {
  tasks.forEach((task) => console.log)
})

omnifocus.getInboxCount().then(console.log)

omnifocus.markTaskComplete('taskId')
```