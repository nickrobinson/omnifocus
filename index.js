const osa = require('osa2');

const getInboxCount = osa(() => Application('OmniFocus').defaultDocument.inboxTasks().filter((task) => task.completed() === false).length);

const getTasks = osa((includeCompleted = false) => {
  const OmniFocus = Application('OmniFocus')
  
  const firstWindow = OmniFocus.windows[0]

  for(var i = 0; i < OmniFocus.windows.length; i++) {
    console.log(OmniFocus.windows[i].name())
  }

  const tasks = firstWindow.document().flattenedTasks().filter(task => task.completed() === false || task.completed() == includeCompleted)

  var retVal = [];

  for(var i = 0; i < tasks.length; i++) {
      retVal.push({
        name: tasks[i].name(),
        id: tasks[i].id(),
        note: tasks[i].note(),
        inInbox: tasks[i].inInbox(),
        flagged: tasks[i].flagged(),
        completed: tasks[i].completed(),
        deferDate: tasks[i].deferDate()
      })
  }

  return retVal;
});

const markTaskComplete = osa((taskId) => {
    const task = Application('OmniFocus').defaultDocument.flattenedTasks().filter(task => task.id() === taskId)
    if (task) {
        return Application('OmniFocus').markComplete(task)
    }
    return false
});

const markTaskIncomplete = osa((taskId) => {
    const task = Application('OmniFocus').defaultDocument.flattenedTasks().filter(task => task.id() === taskId)
    if (task) {
        return Application('OmniFocus').markIncomplete(task)
    }
    return false
});

module.exports = {
  getInboxCount,
  getTasks,
  markTaskComplete,
  markTaskIncomplete
}