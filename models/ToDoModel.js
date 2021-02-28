import mongoose from "../connection/connect.js";
import modelenum from "../utils/enumModel.js";
import mongoose from "mongoose";
import RolesModel from "./rolesModel.js";
import RolesModel from "./rolesModel.js";
class ToDoModel {
    constructor() {
        var roles = new RolesModel();
        this.Schema = mongoose.Schema;
        this.UserSchema = new this.Schema({
            name: String,
            description: String,
            date: Date,
            hour: String,
            done: Boolean
        });

    if (modelenum["todo"] == null) {
        this.mymodel = mongoose.model("todo", this.todoSchema);
        modelenum["todo"] = this.mymodel;
    }
    else {
        this.mymodel = modelenum["todo"];
        }
    }

    createToDo(name, description, date, hour, done){
        var TD ={
            name,
            description,
            date,
            hour,
            done,
        };
        var newTD = new.this.mymodel(TD);
        var error = newTD.validateSync();
        return new Promise((resolve, reject) => {
            if (error) {
              resolve(error);
              return;
            }
            newuTD.save().then((docs) => {
              console.log("Tarea registrada");
              resolve(docs);
            });
        });
    }

    getToDo(){
        var filter = {};
        if (filterdata != null) {
            filter = filterdata;
        }
        return new Promise((resolve, reject) => {
            this.mymodel.find(filter, (err, docs) => {
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
            this.mymodel.remove({ _id: id }).then((err, docs) => {
                if (err) {
                    console.log(err);
                    resolve(err);
                    return;
                }
                resolve(docs);
            });
        });
    }
    getModel() {
        return this.mymodel;
    }
    getSchema() {
        return this.UserSchema;
    }
}
export default ToDoModel;