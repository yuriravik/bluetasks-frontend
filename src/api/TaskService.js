class TaskService {
    constructor() {
        this.tasks = [
            

        ]
    }

    list() {
        return this.tasks;
    }
    load(id){
        return this.tasks.filter(t => t.id === id)[0];
    }
    delete(id) {
        this.tasks = this.tasks.filter(task => task.id !== id);
    }
    save(task) {
        if (task.id !== 0){
        this.tasks = this.tasks.map(t => task.id !== t.id ? t : task);
        
    }else{
        const taskId = Math.max(...this.tasks.map(t=> t.id))+1;
        task.id = taskId;
        this.tasks.push(task);
    }
    
}

}

export default new TaskService();