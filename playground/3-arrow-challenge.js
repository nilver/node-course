//Goal; create a method to get incompleted tasks

const tasks = {
    tasks: [{
        text: 'Washes clouthes',
        completed: true
    }, {
        text: 'Running',
        completed: false
    } , {
        text: 'Sleep',
        completed: false
    }],
    getTaskTodo() {
        return this.tasks.filter((item => !item.completed))
        
    }
}

console.log(tasks.getTaskTodo())
