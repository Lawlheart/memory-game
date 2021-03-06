import { GameCard } from "../models/game"

// https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
export const fyshuffle = (array: any[]) => {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

export const shuffle = (cardset: GameCard[]): GameCard[] => {
  return fyshuffle([...cardset, ...cardset]);
}