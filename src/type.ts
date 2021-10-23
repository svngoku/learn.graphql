interface User {
    id: Number;
    email: String;
    password: String;
    firstName: String;
    lastName: String;
}

interface Post {
    id: Number;
    author: User;
    comments: Comment[];
    content: String;
    createdAt: Date;
    updatedAt: Date;
}

interface Comment {
    id: Number;
    author: User;
    commentary: String;
    likes: Array<Number>;
    createdAt: Date;
    updatedAt: Date;

}

export {
    User, Post, Comment
}