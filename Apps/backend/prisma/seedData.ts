import { SongItem, Songlist } from "@prisma/client";

 
const songPFP = "songPFP.png";

export const songlistSeedData: Omit<Songlist, "id" | "songs">[] = [
  {
    name: "Chill Vibes",
    visibility: "public",
    description: "Relaxing tracks for studying or unwinding.",
    cover: null
  },
  {
    name: "Workout Mix",
    visibility: "private",
    description: "High-energy songs to keep you moving.",
    cover: null
  },
  {
    name: "Throwback Classics",
    visibility: "public",
    description: "Hits from the 80s, 90s, and early 2000s.",
    cover: null
  },
  {
    name: "Late Night Coding",
    visibility: "private",
    description: "Ambient and electronic tracks for deep focus.",
    cover: null
  },
  {
    name: "Road Trip Essentials",
    visibility: "public",
    description: "Feel-good songs perfect for long drives.",
    cover: null
  },
  {
    name: "Morning Boost",
    visibility: "public",
    description: "Upbeat tracks to kickstart your day with energy.",
    cover: null
  },
  {
    name: "Indie Discoveries",
    visibility: "private",
    description: "A curated collection of underrated indie gems.",
    cover: null
  },
  {
    name: "Lo-Fi Study Session",
    visibility: "public",
    description: "Soft lo-fi beats perfect for focus and deep work.",
    cover: null
  },
  {
    name: "Global Hits",
    visibility: "public",
    description: "A mix of chart-topping songs from around the world.",
    cover: null
  },
  {
    name: "Acoustic Evenings",
    visibility: "private",
    description: "Warm acoustic tracks for slow nights and quiet moments.",
    cover: null
  }
];
 
export const songs: SongItem[] = [
  {
    title: "Forever &",
    releaseDate: new Date("July 12, 2024"),
    runtime: "2:27",
    cover: "https://images.genius.com/4fc8de00d4ce8382613c2f160fe7c43f.1000x1000x1.png",
    artists: ["Ejean"],
    genres: ["R&B"],
    links: [
      { platform: "Spotify", url: "https://open.spotify.com/album/1GjWfyDsXFAQTRq8FLZJN2?si=8WCiBr8MT1i0r-X6eKvqZw" },
      { platform: "Apple Music", url: "https://music.apple.com/us/song/forever/1767151840" },
      { platform: "Amazon", url: "https://music.amazon.com/tracks/B0DG7633K9?marketplaceId=ART4WZ8MWBX2Y&musicTerritory=CA&ref=dm_sh_NSaNT2zY4k7yoZs2WKwfVlwvp" },
      { platform: "YouTube", url: "https://music.youtube.com/watch?v=IOhUwlI6wtc&si=zGQL_NUUXXvgQOLc" }
    ]
  },
  {
    title: "Karma",
    releaseDate: new Date("October 19, 2018"),
    runtime: "3:08",
    cover: "https://images.genius.com/43eaa4d7d788e3d21a6de0c841d2b0fe.1000x1000x1.png",
    artists: ["Summer Walker"],
    genres: ["Dark R&B"],
    links: [
      { platform: "Spotify", url: "https://open.spotify.com/track/2Fyjjpg03fn7n5cj0Qm380" },
      { platform: "Apple Music", url: "https://music.apple.com/ca/song/karma/1438765304" },
      { platform: "SoundCloud", url: "https://soundcloud.com/summerwalker/karma?in=j1m3n4/sets/tv-ma" },
      { platform: "Amazon", url: "https://music.amazon.ca/tracks/B0B7Z91J56?do=play&agent=googleAssistant&ref=dmm_seo_google_gkp_tracks&explicit=false" },
      { platform: "YouTube", url: "https://music.youtube.com/watch?v=Y-iIdLsiOJQ" }
    ]
  },
  {
    title: "More than a friend?",
    releaseDate: new Date("March 1, 2025"),
    runtime: "3:08",
    cover: "https://i.ytimg.com/vi/FQMgJc5_imk/maxresdefault.jpg",
    artists: ["88rising", "FION"],
    genres: ["Soft"],
    links: [
      { platform: "Spotify", url: "https://open.spotify.com/track/0EJSyxVGp7ZFbrj9WPaubp?si=0cdcdee4aef54004" },
      { platform: "Apple Music", url: "https://music.apple.com/ug/song/more-than-a-friend/1796029043" },
      { platform: "SoundCloud", url: "https://soundcloud.com/88rising/more-than-a-friend" },
      { platform: "Amazon", url: "https://music.amazon.com/albums/B0DWZ5VQ31?tag=linkfiregen&ie=UTF8&linkCode=as2&ascsubtag=25da215ed1e80bd66911114baaee8bd9&ref=dmm_acq_soc_ca_u_lfire_lp_x_25da215ed1e80bd66911114baaee8bd9" },
      { platform: "YouTube", url: "https://music.youtube.com/playlist?list=OLAK5uy_k15CAVH6MUo4v7LerV0qRlg6WG3E_6M9U" }
    ]
  },
  {
    title: "TWENTIES",
    releaseDate: new Date("February 7, 2025"),
    runtime: "2:51",
    cover: "https://images.genius.com/b36e96c797f2aad084eb1edf584f3f47.1000x1000x1.png",
    artists: ["GIVĒON"],
    genres: ["Soft", "R&B"],
    links: [
      { platform: "Spotify", url: "https://open.spotify.com/track/3HYUSkSJ0iQfocqdJmJqKw?si=6198fb3a71fa4cb2" },
      { platform: "Apple Music", url: "https://music.apple.com/ca/album/twenties/1792985190?i=1792985191" },
      { platform: "Amazon", url: "https://music.amazon.ca/tracks/B0F96LZT1J?do=play&agent=googleAssistant&ref=dmm_seo_google_gkp_tracks&explicit=false" },
      { platform: "YouTube", url: "https://music.youtube.com/watch?v=K3MfzJU6bB0" }
    ]
  },
  {
    title: "Let You Break My Heart Again",
    releaseDate: new Date("August 13, 2021"),
    runtime: "4:29",
    cover: "https://images.genius.com/c6efd43b1d226c3ac9a1e9aedd3345fe.1000x1000x1.png",
    artists: ["Laufey"],
    genres: ["Jazz"],
    links: [
      { platform: "Spotify", url: "https://open.spotify.com/album/2YkyuQGoMV2FlG7mFprnRf?si=d-VasB3sSeuUk8eCdbMVvQ" },
      { platform: "YouTube", url: "https://music.youtube.com/watch?v=C0ruAy8TpPo" }
    ]
  },
  {
    title: "Let Down",
    releaseDate: new Date("September 6, 1997"),
    runtime: "4:59",
    cover: "https://i.ytimg.com/vi/duBCwvC1kP4/maxresdefault.jpg",
    artists: ["RadioHead"],
    genres: ["Alternative rock"],
    links: [
      { platform: "Spotify", url: "https://open.spotify.com/track/2fuYa3Lx06QQJAm0MjztKr?si=731e3349214241a9" },
      { platform: "Apple Music", url: "https://music.apple.com/ca/album/let-down/1097861387?i=1097861834" },
      { platform: "Amazon", url: "https://music.amazon.ca/tracks/B0719S5696?do=play&agent=googleAssistant&ref=dmm_seo_google_gkp_tracks&explicit=false" },
      { platform: "YouTube", url: "https://music.youtube.com/watch?v=ZVgHPSyEIqk&feature=gws_kp_track" }
    ]
  },
  {
    title: "Sugarcoat (NATTY Solo)",
    releaseDate: new Date("July 5, 2023"),
    runtime: "2:59",
    cover: "https://cdn-images.dzcdn.net/images/cover/500fdc38192a84ed12058b67dafaf473/1900x1900-000000-80-0-0.jpg",
    artists: ["KISS OF LIFE"],
    genres: ["K-Pop"],
    links: [
      { platform: "Spotify", url: "https://open.spotify.com/track/0NoeYUnwpb9R26mpylHcR9?si=880900e3029945d6" },
      { platform: "Apple Music", url: "https://music.apple.com/ca/album/sugarcoat-natty-solo/1694699906?i=1694699909" },
      { platform: "Amazon", url: "https://music.amazon.ca/tracks/B0CB65N6H5?do=play&agent=googleAssistant&ref=dmm_seo_google_gkp_tracks&explicit=false" },
      { platform: "YouTube", url: "https://music.youtube.com/watch?v=Tc0cvOLYsus" }
    ]
  },
  {
    title: "Bando - sped up + reverb",
    releaseDate: new Date("2019"),
    runtime: "2:45",
    cover: "https://cdn-images.dzcdn.net/images/cover/5c67954bcae30b551ec5a509deede376/0x1900-000000-80-0-0.jpg",
    artists: ["bbygirl"],
    genres: ["R&B"],
    links: [
      { platform: "Spotify", url: "https://open.spotify.com/track/0vj557R3WYe42bgzHdgNoE?si=93d48aa43dad4a71" },
      { platform: "Amazon", url: "https://music.amazon.ca/tracks/B0CN8D9NL7?do=play&agent=googleAssistant&ref=dmm_seo_google_gkp_tracks&explicit=true" },
      { platform: "YouTube", url: "https://music.youtube.com/watch?v=3Hm7C7RCwMw" }
    ]
  },
  {
    title: "How (Feat. Roddy Ricch)",
    releaseDate: new Date("May 6, 2022"),
    runtime: "3:38",
    cover: "https://i.ytimg.com/vi/GIar5-63tL8/maxresdefault.jpg",
    artists: ["Ella Mai", "Roddy Ricch"],
    genres: ["R&B"],
    links: [
      { platform: "Spotify", url: "https://open.spotify.com/track/6w93UfN5MeXXQTrVIf5V6x?si=58fa8ad3ddb24e37" },
      { platform: "Apple Music", url: "https://music.apple.com/ca/song/how-feat-roddy-ricch/1668484001" },
      { platform: "SoundCloud", url: "https://soundcloud.com/itsellamai/how-feat-roddy-ricch?in=user-371765756/sets/how-ella-mai-ft-roddy-ricch" },
      { platform: "YouTube", url: "https://www.youtube.com/watch?v=qn7TpTIQSzY" }
    ]
  },
  {
    title: "ANTISOCIAL",
    releaseDate: new Date("January 30, 2026"),
    runtime: "2:55",
    cover: "https://i.ytimg.com/vi/qLz1ExMxF8Q/maxresdefault.jpg",
    artists: ["void", "BABY BOI"],
    genres: ["Dark R&B"],
    links: [
      { platform: "Spotify", url: "https://open.spotify.com/track/0Gb6YeICNGCtRS1L0j72d6?si=3414017c7e3a47e6" },
      { platform: "Apple Music", url: "https://music.apple.com/ca/song/antisocial/1868839117" },
      { platform: "YouTube", url: "https://music.youtube.com/watch?v=qLz1ExMxF8Q&feature=gws_kp_track" }
    ]
  }
];