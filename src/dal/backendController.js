const TaskDAO = require('../dal/TaskDAO');

async function main() {
    const today = new Date();
    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    console.log("Running backend controller main script: " + time);
    TaskDAO.doConnect();

    await TaskDAO.addTask({title: 'Task 1', description: 'Description 1', status: 'In Progress'});

    const tasks = await TaskDAO.getTasks();
    console.log(tasks);

    const found = await TaskDAO.getTaskByName('Task 1');
    console.log("Task found by name: " + found);

    
};

main();
