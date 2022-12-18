import cardType from "./cardType";

export interface serialType extends cardType {
  characters: cardType[];
  comics: cardType[];
}
