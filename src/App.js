import React, { Fragment, useState } from 'react';
import Items from './item';
const  App = () => {
  const [listeditems, setListeditems] = useState([]);
  const [highlight, setHighlight] = useState(false);
 
const highlightStyle = {
  backgroundColor: 'lightblue',
  color: 'darkblue',
  padding: '6%',
};
  const highlightItem = (index) => {
    const newItems = [...Items];
     if(!listeditems.includes(newItems[index].name)){
      newItems[index].name = newItems[index].name.toUpperCase()
      setListeditems(current => [...current, newItems[index].name])
      setHighlight(true);
      console.log(listeditems)
    }else {
      setListeditems(listeditems.filter((item) => item !== newItems[index].name))
      newItems[index].name = newItems[index].name.toLowerCase()
      setHighlight(false);
    }
  };
      
  console.log(listeditems)

  return (
    <Fragment>
      
        {highlight ? <ul className="textList">
        {listeditems.map((item) => (
          <li key={item} >{item}</li>
      ))}</ul> : null}
    <ul className="List">
      {Items.map((item,index) => (
        
        <li key={item.name} className={`List__item List__item--${item.color}`}
          onClick={() => highlightItem(index)}
          style={item.name === item.name.toUpperCase() ? highlightStyle : null }>
          {item.name}
        </li>
      ))}
    </ul>
  </Fragment>
  );
}

export default App;
