import React from 'react';

import { familyContext } from '../App';

const Parents = props => {
  return (
    <section className="parents">
      <familyContext.Consumer>
        {props.family.parents.map(p => (
          <div className="person" key={p.name}>
            <img width="150" src={p.img} alt={p.name} />
            <strong>{p.name}</strong>
          </div>
        ))}
      </familyContext.Consumer>
    </section>
  );
};

export default Parents;
