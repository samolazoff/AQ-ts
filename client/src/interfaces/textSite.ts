import newsStructures from '../interfaces/news';

export default interface textSite {
    header: string[],
    adress: string[],
    footer: string,
    about: [string, string[]],
    news: [string, newsStructures[]],
    partners: [string, string[]],
    contactsMain: [string,[string,string][], [string, string[],string[]]],
    services: [[string, string, string[]],[string, string, string[]]],
    permissions: string[][],
}