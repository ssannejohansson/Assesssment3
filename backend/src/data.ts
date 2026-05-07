/* ----------------------
TYPES 
---------------------- */

export interface Review {
    id: string;
    author: string;
    rating: number;
    comment: string;
}

export interface Show {
    id: string;
    title: string;
    genre: string;
    reviews: Review[];
}

/* ----------------------
DATA 
---------------------- */

export const shows: Show[] = [
    {
        id: "1",
        title: "Breaking Bad",
        genre: "Crime, Drama, Thriller",
        reviews: [],
    },
    {
        id: "2",
        title: "Stranger Things",
        genre: "Drama, Fantasy, Horror",
        reviews: [],
    },
    {
        id: "3",
        title: "The Crown",
        genre: "Biography, Drama, History",
        reviews: [],
    },
    {
        id: "4",
        title: "Succession",
        genre: "Drama",
        reviews: [],
    },
    {
        id: "5",
        title: "Chernobyl",
        genre: "Drama, History, Thriller",
        reviews: [],
    },
    {
        id: "6",
        title: "Ozark",
        genre: "Crime, Drama, Thriller",
        reviews: [],
    },
    {
        id: "7",
        title: "The Wire",
        genre: "Crime, Drama, Thriller",
        reviews: [],
    },
    {
        id: "8",
        title: "Peaky Blinders",
        genre: "Crime, Drama",
        reviews: [],
    },
    {
        id: "9",
        title: "The Bear",
        genre: "Comedy, Drama",
        reviews: [],
    },
    {
        id: "10",
        title: "The Mandalorian",
        genre: "Action, Adventure, Fantasy",
        reviews: [],
    }, 
    {
        id: "11",
        title: "The Queen's Gambit",
        genre: "Drama",
        reviews: [],
    },
    {
        id: "12",
        title: "The Boys",
        genre: "Action, Comedy, Crime",
        reviews: [],
    },
    {
        id: "13",
        title: "The Handmaid's Tale",
        genre: "Drama, Sci-Fi, Thriller",
        reviews: [],
    },
    {
        id: "14",
        title: "Wednesday",
        genre: "Comedy, Fantasy, Horror",
        reviews: [],
    },
    {
        id: "15",
        title: "The Witcher",
        genre: "Action, Adventure, Drama",
        reviews: [],
    }

];