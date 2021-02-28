import UserModel from "../models/userModel.js";
import RolesModel from "../models/rolesModel.js";
import Sha1 from "sha1";
import empty from "is-empty";
var roles = new RolesModel();
var todo = new todoModel();
class ToDoController {
    constructor(){}
    //services
    async createToDo(request, response) {
        var data = request.body;
        var result = await TODO.createtodo( /*esto hace referencia a la class de RestModel*/
            data.name,
            data.description,
            data.date,
            data.hour,
            data.done,
        );
        response.status(200).json(result);
    }
    async getToDo(request, response){
        var result = await TODO.getToDo();
            response.status(200).json(result);
    }
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
}
export default ToDoController;
