import mongoose from "../connection/connect.js";

class ToDoModel {
    constructor() {
        this.Schema = mongoose.Schema;
        this.TodoSchema = new this.Schema({
            name: String,
            description: String,
            date: Date,
            hour: String,
            done: Boolean
        });
        this.mymodel = mongoose.model("todo", this.TodoSchema); 
    }

    createToDo(name, description, date, hour, done){
        var TD ={
            name,
            description,
            date,
            hour,
            done,
        };
        var newTD = new this.mymodel(TD);
        return new Promise((resolve, reject) => {
            newTD.save().then((docs) => {
              console.log("Tarea registrada");
              resolve(docs);
            });
        });
    }

    getToDo(){
        return new Promise((resolve, reject) => {
            this.mymodel.find({}, (err, docs) => {
                if (err) {
                    console.log(err);
                    resolve(err);
                    return;
                }
                resolve(docs);
            });
        });
    }

    updateToDo(id, ToDoUpdate){
        return new Promise((resolve, reject) => {
            this.mymodel.update({ _id: id }, { $set: ToDoUpdate }, (err, docs) => {
              if (err) {
                console.log(err);
                resolve(err);
                return;
              }
              resolve(docs);
            });
        });
    }

    deleteToDo(id){
        return new Promise((resolve, reject) => {
            this.mymodel.remove({_id:id }).then((err, docs) => {
                if (err) {
                    console.log(err);
                    resolve(err);
                    return;
                }
                resolve(docs);
            });
        });
    }

    updateDone(id, DoneUpdate){
        return new Promise((resolve, reject) => {
            this.mymodel.update({ _id: id }, { $set: DoneUpdate }, (err, docs) => {
              if (err) {
                console.log(err);
                resolve(err);
                return;
              }
              resolve(docs);
            });
        });
    }

   
}
export default ToDoModel;