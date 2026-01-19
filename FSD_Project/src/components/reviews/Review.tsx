type ReviewItem = {
    id: number;
    user: string;
    song: string;
    date: string;
    rating: number;
    comment: string;
    likes: number;
};

export default function Review() {
    const reviews: ReviewItem[] = [
        {
            id: 1,
            user: "MusicLover67",
            song: "Life of Ophelia",
            date: "January 18, 2025",
            rating: 5,
            comment: "Taytay is the goat omg! I wish i was Ophelia!",
            likes: 67,
        },
        {
            id: 2,
            user: "BrunoMarsVancouverAndRaye",
            song: "I Just Might",
            date: "October 14, 2026",
            rating: 5,
            comment: "Goated song, got it onna loop rn! Can't wait to hear them live in Vancouver this year!",
            likes: 76,
        },
        {
            id: 3,
            user: "BINI",
            song: "Pantropiko",
            date: "March 22, 2024",
            rating: 4,
            comment: "Such a slay tune! BINI NEVER disappoints. ;P",
            likes: 96,
        },
    ];

    

}