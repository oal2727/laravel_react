import Api from './api'

export default {
    getTask(){
        return Api().get('/task')
    },
    addTask(param){
        return Api().post('/task',param)
    },
    DeleteTask(id){
        return Api().delete(`/task/${id}`)
    },
    UpdateTask(item){
        return Api().put(`/task/${item.id}`,item)
    }
}