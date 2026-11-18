import express from "express";

const app = express();

app.use(express.json());

// Root Health/Welcome Route
app.get("/", (req, res) => {
    res.status(200).json({
        status: "Online",
        project: "Intro to Backend Assignment",
        author: "Gatik Yadav",
        endpoints: {
            register: "POST /api/v1/gatik-yadav/users/register",
            login: "POST /api/v1/gatik-yadav/users/login",
            createPost: "POST /api/v1/gatik-yadav/posts/create",
            getPosts: "GET /api/v1/gatik-yadav/posts/getPosts"
        }
    });
});

// Routes import & declaration
import userRouter from "./routes/user.route.js";
import postRouter from "./routes/post.route.js";

app.use("/api/v1/gatik-yadav/users", userRouter);
app.use("/api/v1/gatik-yadav/posts", postRouter);

export default app;