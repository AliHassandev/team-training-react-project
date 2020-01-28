import React, { Component } from 'react';

const listGroup = (props) => {

    const { items, textProperty, valueProperty } = props;

    return ( <ul className="list-group">
        {items.map( item => <li key={item[valueProperty]} className="list-group-item">{item[textProperty]}</li> )}
        </ul> );
}
 
export default listGroup;