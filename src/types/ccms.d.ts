export interface Article{
    id: number;
    title: string;
    content: string;
}

export interface Block{
    id: string;
    type: 'text'|'image'|'warning'
    content: string;

}