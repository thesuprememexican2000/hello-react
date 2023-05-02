const TaskDAO = require('../dal/TaskDAO');

async function main() {
    const today = new Date();
    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    console.log("Running backend controller main script: " + time);
    TaskDAO.doConnect();


    const tasks = await TaskDAO.getTasks();
    console.log(tasks);

    const found = await TaskDAO.getTaskByTitle("Task 1");
    console.log("Task found by name: " + found);

    await TaskDAO.deleteTask(found);

    
};

main();
