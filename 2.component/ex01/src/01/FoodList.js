
import React, { Component } from 'react';
import FoodListItem from './FoodListItem';


class FoodList extends Component {
   
    render() {
        return (
            <div>
                <ul>
                <FoodListItem name={'김채원'} quantity='10'/>
                <FoodListItem name={'곽도훈'} quantity='20'/>
                <FoodListItem name={'이윤호'} quantity='30'/>
                <FoodListItem name={'김반석'} quantity='40'/>
                </ul>
            </div>
        );
    }
}
export default FoodList;

