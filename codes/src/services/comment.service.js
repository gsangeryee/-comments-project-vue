import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/comments/";

class CommentService{
    getComments() {
        return axios.get(API_URL + "tree");
    }
    addComment(comment) {
        return axios.post(API_URL + 'new', comment, { headers: authHeader() });
    }
    /*
    getUserComments() {
        return axios.get(API_URL + 'user', { headers: authHeader() });
    }
    
    updateComment(comment) {
        return axios.put(API_URL + 'update', comment, { headers: authHeader() });
    }
    deleteComment(id) {
        return axios.delete(API_URL + 'delete/' + id, { headers: authHeader() });
    }*/
}

export default new CommentService();