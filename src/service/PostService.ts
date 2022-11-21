import Post from "../models/Post";
import CustomException from "../utils/CustomException";
import { IPost } from "../dto/Tour";

export class PostService {
    public getPosts = async () => {
        try {
            const posts = await Post.find();
            return posts;
        } catch (err) {
            console.log(err);
            throw new CustomException(500, "query error!");
        }
    };

    public resgiterPost = async (formData: IPost) => {
        try {
            const post = await new Post(formData).save();
            return post;
        } catch (err) {
            console.log(err);
            if(err instanceof CustomException){
                throw new CustomException(err.status, err.message);
            }
        }
    };
}