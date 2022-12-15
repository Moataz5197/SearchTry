import React from 'react';
import Avatar from '../Avatar/Avatar';
import Card from '../Card/Card';
import './CountryCard.css';

const CountryCard = props => {
  return (
    <li className="user-item">
      <Card className="user-item__content">
          <div className="user-item__image" style={{width:'25%'}}>
            <Avatar image={props.image} alt={props.name} />
          </div>
          <div className="user-item__info" style={{width:'75%'}}>
            <h2>{props.name}</h2>
            <h3>
              {props.placeCount} {/*{props.placeCount === 1 ? 'Place' : 'Places'}*/}
            </h3>
          </div>
      </Card>
    </li>
  );
};

export default CountryCard;
