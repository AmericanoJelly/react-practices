import React from 'react';
import CardList from './CardList';
import cards from './assets/json/data.json'
//import styles from './assets/css/KanbanBoard.css'

function KanbanBoard() {
return (
    <div className={'KanbanBoard'}>
    <CardList title={'ToDo'} cards={cards.filter(e => e.status === 'ToDo')}/>
    <CardList title={'Doing'} cards={cards.filter(e => e.status === 'Doing')}/>
    <CardList title={'Done'} cards={cards.filter(e => e.status === 'Done')}/>
</div>
    );
}

export default KanbanBoard;