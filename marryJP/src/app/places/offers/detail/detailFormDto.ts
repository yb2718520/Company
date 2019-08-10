import { Comments } from './commentDto';

export interface DetailForm {
    id: number;
    title: string;
    author: string;
    type: string;
    likes: number;
    content: string;
    comments: Array<Comments>;
}
