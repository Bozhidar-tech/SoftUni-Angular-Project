export interface Article {
    _id: string;
    title: string;
    content: string;
    author: string;
    createdAt: Date;
    tags: string[];
    comments: string[];
}
  