import cardType from "./cardType";

export interface characterType extends cardType {
  comics: cardType[];
  series: cardType[];
}
