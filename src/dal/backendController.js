const TaskDAO = require('../dal/TaskDAO');

async function main() {
    const today = new Date();
    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    console.log("Running backend controller main script: " + time);
    TaskDAO.doConnect();

    const tasks = await TaskDAO.getTasks();
    console.log(tasks);

    
}
