import { PostService } from "../service/PostService";
import { NextApiRequest, NextApiResponse } from "next";
import CustomException from "../utils/CustomException";

export class PostController {
    private postService: PostService;
    constructor() {
        this.postService = new PostService();
    }

    public async getPosts(req: NextApiRequest, res: NextApiResponse) {
        try {
            const posts = await this.postService.getPosts();
            console.log(posts)
            res.status(200).json({
                result: posts,
            });
        } catch (err) {
            if (err instanceof CustomException) {
                res.status(err.status).json({
                    message: err.message,
                });
            }
            res.status(400).json({
                message: "something went wrong!",
            });
        }
    }

    public async registerPost (req: NextApiRequest, res: NextApiResponse) {
        try {
            const post = await this.postService.resgiterPost(req.body);
            res.status(201).json({
                result: post,
            });
        } catch (err) {
            if (err instanceof CustomException) {
                res.status(err.status).json({
                    message: err.message,
                });
            }
            res.status(400).json({
                message: "something went wrong!",
            });
        }
    }
}
