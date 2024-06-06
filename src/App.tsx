import { useEffect, useState } from "react";
import * as S from "./App.styles";

import logoImage from "./assets/logo.png";
import restartIcon from "./svgs/restart.svg";

import { Button } from "./components/Button";
import { InfoItem } from "./components/InfoItem";
import { GridItem } from "./components/GridItem";

import { GriditemType } from "./types/GridItemtype";
import { items } from "./data/items";
import { formatTimeElapsed } from "./helpers/formatTimeElapsed";

import { GlobalStyle } from "./GlobalStyle";



const App = () => {
  const [playing, setPlaying] = useState<boolean>(false);
  const [timeElapsed, setTimeElapsed] = useState<number>(0);
  const [moveCount, setMoveCount] = useState<number>(0);
  const [shownCount, setShowCount] = useState<number>(0);
  const [gridItem, setgridItem] = useState<GriditemType[]>([]);

  useEffect(() => resetAndCreateGrid(), []);

  useEffect(() => {
    const timer = setInterval(() => {
      if (playing) {
        setTimeElapsed(timeElapsed + 1);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [playing, timeElapsed]);

 
  useEffect(() => {
    if (shownCount === 2) {
      let opened = gridItem.filter((item) => item.shown === true);
      if (opened.length === 2) {
        if (opened[0].item === opened[1].item) {
         
          let tmpGrid = [...gridItem];
          for (let i in tmpGrid) {
            if (tmpGrid[i].shown) {
              tmpGrid[i].permanentShown = true;
              tmpGrid[i].shown = false;
            }
            setgridItem(tmpGrid);
            setShowCount(0);
          }
        } else {
          
          setTimeout(() => {
            let tmpGrid = [...gridItem];
            for (let i in tmpGrid) {
              tmpGrid[i].shown = false;
            }
            setgridItem(tmpGrid);
            setShowCount(0);
          }, 3000);
        }

        setMoveCount((moveCount) => moveCount + 1);
      }
    }
  }, [shownCount, gridItem]);

  
  useEffect(() => {
    if (
      moveCount > 0 &&
      gridItem.every((item) => item.permanentShown === true)
    ) {
      setPlaying(false);
    }
  }, [moveCount, gridItem]);

  const resetAndCreateGrid = () => {
   
    setTimeElapsed(0);
    setMoveCount(0);
    setShowCount(0);
   
    let tmpGrid: GriditemType[] = [];
    for (let i = 0; i < items.length * 2; i++) {
      tmpGrid.push({
        item: null,
        shown: false,
        permanentShown: false,
      });
    }
 
    for (let w = 0; w < 2; w++) {
      for (let i = 0; i < items.length; i++) {
        let pos = -1;
        while (pos < 0 || tmpGrid[pos].item !== null) {
          pos = Math.floor(Math.random() * (items.length * 2));
        }
        tmpGrid[pos].item = i;
      }
    }
   
    setgridItem(tmpGrid);
  
    setPlaying(true);
  };

  const handleItemClick = (index: number) => {
    if (playing && index !== null && shownCount < 2) {
      let tmpGrid = [...gridItem];
      if (
        tmpGrid[index].permanentShown === false &&
        tmpGrid[index].shown === false
      ) {
        tmpGrid[index].shown = true;
        setShowCount(shownCount + 1);
      }
      setgridItem(tmpGrid);
    }
  };

  return (
    <>
    <GlobalStyle />
    
    <S.Container>
      <S.Info>
        <S.LogoLink href="/">
          <img src={logoImage} width="250" alt="" />
        </S.LogoLink>

        <S.InfoArea>
          <InfoItem label="" value={formatTimeElapsed(timeElapsed)} />
          <InfoItem label="" value={moveCount.toString()} />
        </S.InfoArea>

        <Button
          label="Reiniciar"
          icon={restartIcon}
          onClick={resetAndCreateGrid}
        />
      </S.Info>

      <S.GridArea>
        <S.Grid>
          {gridItem.map((item, index) => (
            <GridItem
              key={index}
              item={item}
              onClick={() => {
                handleItemClick(index);
              }}
            />
          ))}
        </S.Grid>
      </S.GridArea>
    </S.Container>
   
    </>
  );
};

export default App;
