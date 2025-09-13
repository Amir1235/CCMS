export interface Article{
    id: string;
    title: string;
    blockIds: string[]
    createdAt: Date;
}

export interface Block{
    id: string;
    type: 'text'|'image'|'warning'
    content: string;

}