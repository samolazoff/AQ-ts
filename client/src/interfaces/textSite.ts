import newsStructures from '../interfaces/news';

export default interface textSite {
    header: string[],
    adress: string[],
    footer: string,
    about: [string, string[]],
    news: [string, newsStructures[]],
    partners: [string, string[]],
}