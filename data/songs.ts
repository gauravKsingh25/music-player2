export interface Song {
  id: number;
  title: string;
  artist: string;
  album: string;
  duration: string;
  plays: string;
  cover: string;
  audio: string;
}

export const songs: Song[] = [
  {
    id: 1,
    title: "Billie Jean",
    artist: "Michael Jackson",
    album: "Thriller",
    duration: "4:53",
    plays: "1,040,811,084",
    cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&q=80",
    audio: "https://example.com/billiejean.mp3"
  },
  {
    id: 2,
    title: "Beat It",
    artist: "Michael Jackson",
    album: "Thriller",
    duration: "4:18",
    plays: "643,786,045",
    audio: "https://example.com/beatit.mp3",
    cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&q=80"
  },
  {
    id: 3,
    title: "Smooth Criminal",
    artist: "Michael Jackson",
    album: "Bad",
    duration: "4:17",
    plays: "407,234,004",
    cover: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=300&q=80",
    audio: "https://example.com/smoothcriminal.mp3"
  },
  {
    id: 4,
    title: "Don't Stop 'Til You Get Enough",
    artist: "Michael Jackson",
    album: "Off the Wall",
    duration: "6:05",
    plays: "316,391,952",
    cover: "https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?w=300&q=80",
    audio: "https://example.com/dontstop.mp3"
  },
  {
    id: 5,
    title: "Rock With You",
    artist: "Michael Jackson",
    album: "Off the Wall",
    duration: "3:40",
    plays: "268,187,218",
    cover: "https://images.unsplash.com/photo-1482442120256-9c03866de390?w=300&q=80",
    audio: "https://example.com/rockwithyou.mp3"
  },
  {
    id: 6,
    title: "Thriller",
    artist: "Michael Jackson",
    album: "Thriller",
    duration: "5:57",
    plays: "589,234,123",
    cover: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=300&q=80",
    audio: "https://example.com/thriller.mp3"
  },
  {
    id: 7,
    title: "Man in the Mirror",
    artist: "Michael Jackson",
    album: "Bad",
    duration: "5:19",
    plays: "421,567,890",
    cover: "https://images.unsplash.com/photo-1526478806334-5fd488fcaabc?w=300&q=80",
    audio: "https://example.com/maninthemirror.mp3"
  },
  {
    id: 8,
    title: "The Way You Make Me Feel",
    artist: "Michael Jackson",
    album: "Bad",
    duration: "4:59",
    plays: "378,901,234",
    cover: "https://images.unsplash.com/photo-1530651788726-1dbf58eeef1f?w=300&q=80",
    audio: "https://example.com/thewayyoumakemefeel.mp3"
  },
  {
    id: 9,
    title: "Black or White",
    artist: "Michael Jackson",
    album: "Dangerous",
    duration: "4:16",
    plays: "456,789,012",
    cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&q=80",
    audio: "https://example.com/blackorwhite.mp3"
  },
  {
    id: 10,
    title: "Earth Song",
    artist: "Michael Jackson",
    album: "HIStory: Past, Present and Future, Book I",
    duration: "6:46",
    plays: "345,678,901",
    cover: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=300&q=80",
    audio: "https://example.com/earthsong.mp3"
  }
];

