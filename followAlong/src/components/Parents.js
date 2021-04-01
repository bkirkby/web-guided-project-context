import React from 'react';

import familyContext from '../contexts/familyContext';

// refactor as class
// const Parents = (props) => {
class Parents extends React.Component {
  render() {
    return (
      <section className="parents">
        <familyContext.Consumer>
          {({ parents }) => (
            <>
              {parents.map(p => (
                <div className="person" key={p.name}>
                  <img width="150" src={p.img} alt={p.name} />
                  <strong>{p.name}</strong>
                </div>
              ))}
            </>
          )}
        </familyContext.Consumer>
      </section>
    );
  }
};

export default Parents;
