import cardType from "./cardType";

export interface comicType extends cardType {
  characters: cardType[];
}
