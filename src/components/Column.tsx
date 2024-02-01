import React, { SetStateAction } from "react";
import { CardType } from "./Board";
import { ReactSortable } from "react-sortablejs";

type ColumnProps = {
  id: string;
  name: string;
  cards: CardType[];
  setCards: SetStateAction<CardType[]>;
};

export const Column = ({ id, name, cards, setCards }: ColumnProps) => {

  function setCardsForColumn(sortedCards: CardType[], newColumnId: string) {
    const sortedCardsIds = sortedCards.map(c => c.id);
    setCards(prevCards => {
      const newCards = [...prevCards],
      newCards.forEach(newCard => {
        if (sortedCardsIds.includes(newCard.id)) {
          newCard.columnId = newColumnId;
        }
      })
    });
    return newCards;
  }
  return (
    <div className="w-48 bg-white shadow-sm rounded-md p-2">
      <h3>{name}</h3>
      <ReactSortable
        list={cards}
        setList={(cards) => setCardsForColumn(cards, id)}
        group="cards"
      >
        {cards.map((card) => (
          <div
            className="border my-2 p-4 rounded-md"
            key={card.order.toString()}
          >
            <span>{card.name}</span>
          </div>
        ))}
      </ReactSortable>
    </div>
  );
};
