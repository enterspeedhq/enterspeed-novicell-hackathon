interface Navigation {
    items: NavigationItem[];
}

interface NavigationItem {
    id: string;
    url: string;
    title: string;
}

interface Error {
    message: string;
}

interface EnterspeedResponse {
    navigation: Navigation;
    page: Page;
}

interface Page {
    basePage: BasePage;
}

interface BasePage {
    type: string;
    name: string;
}

interface Home extends Page {
    headline: string;
    content: string;
}

interface ContentPage extends Page {
    headline: string;
    content: string;
}

interface MovieList extends Page {
    headline: string;
    movies: Movie[];
}

interface Movie extends Page {
    title: string;
    teaser: string;
    year: number;
    rating: string;
    cover: Cover
}

interface Cover {
    url: string;
    contentType: string;
}

interface CacheItem {
    validUntil: string;
    value: string;
}

