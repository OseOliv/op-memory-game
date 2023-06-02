import { GriditemType } from "../../types/GridItemtype";
import * as S from "./styles";
import cardBack from '../../assets/Img/cardback.png'
import { items } from "../../data/items";

type Props = {
  item: GriditemType;
  onClick: () => void;
};
export const GridItem = ({ item, onClick }: Props) => {
  return (
    <S.Container 
    shownBackground={item.permanentShown || item.shown}
    onClick={onClick}>
      {item.permanentShown === false && item.shown === false && (
        <S.Icon src={cardBack} alt="" opacity={.2}/>
      )}

      {(item.permanentShown || item.shown) && item.item !== null && (
        <S.Icon src={items[item.item].icon} alt="" />
      )}
    </S.Container>
  );
};
