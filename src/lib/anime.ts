export type AnimeProps = {
  title: string;
  poster: string;
  episodes: number;
  animeId: string;
  href: string;
}

interface AnimeResponse {
  ongoing: AnimeProps[]
  completed: AnimeProps[]
}

export async function GetAllAnime(): Promise<AnimeResponse>{
  const ApiUrl = await fetch("https://www.sankavollerei.com/anime/home")
  const Result = await ApiUrl.json()
  
  return await Result.data
}

export function GetAnimeDetail() {
  
}

export function GetAnimeEps() {
  
}

export function GetSearchAnime() {
  
}