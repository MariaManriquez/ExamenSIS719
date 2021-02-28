import UserModel from "../models/userModel.js";
import RolesModel from "../models/rolesModel.js";
import Sha1 from "sha1";
import empty from "is-empty";
import ToDoModel from "../models/ToDoModel.js";
//var roles = new RolesModel();
var todo= new ToDoModel();
class ToDoController {
    constructor(){}
    //services
    //METODO CREATEid
    async createToDo(request, response) {
        var data = request.body;
        var result = await todo.createToDo( /*esto hace referencia a la class de RestModel*/
            data.name,
            data.description,
            new Date(),
            data.hour,
            data.done,
        );
        response.status(200).json(result);
    }

    //METODO READ
    async getToDo(request, response){
        var result = await todo.getToDo();
            response.status(200).json(result);
    }
    //METODO UPDATE
    async updateToDo(request, response){
        var id = request.params.id;
        var updatedata = request.body;
        var result = await todo.updateToDo(id, updatedata);
            response.status(200).json(result);
    }
    async deleteToDo(request, response){
        var id = request.params.id;
        var result = await todo.deleteToDo(id);
            response.status(200).json(result);
    }
    async updateDone(request,response){
        var id = request.params.id;
        var updatedone = request.body;
         
        if(updatedone.name){  
            response.status(300).json({"mns":"nose puede cambiar el atributo NAME"});
            return;
        } 
        if(updatedone.date){  
            response.status(300).json({"mns":"nose puede cambiar el atributo DATE"});
            return;
        } 
        if(updatedone.description){  
            response.status(300).json({"mns":"nose puede cambiar el atributo DESCRIPCION"});
            return;
        } 
        if(updatedone.hour){  
            response.status(300).json({"mns":"nose puede cambiar el atributo HOUR"});
            return;
        }
        if(updatedone.done){
            
            var result = await todo.updateDone(id, updatedone);
            response.status(200).json(result);
            return;
        } 
        response.status(200).json([{"msn":"debe mandar atributo DONE"}]); 
    }
}
export default ToDoController;
