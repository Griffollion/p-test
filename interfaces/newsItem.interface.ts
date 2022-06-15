export interface NewsItem {
    id: number,
    img: string,
    title: string,
    date: string,
    text: string,
    appearance: "short" | "full"
}