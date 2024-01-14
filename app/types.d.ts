export interface Card{   
        "id": string, 
        "question": string,
        "sort-answer": string,
        "category": string,
        "tags": string[],
        "extended-content"?: string
}