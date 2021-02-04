import React from 'react';

import { familyContext } from '../App';


class Parents extends React.Component {
  render() {
    console.log('bk: Parents.js: familyContext: ', familyContext)
    return (
      <section className="parents">
        <familyContext.Consumer>
          {family => (
            <>
              {family.parents.map(p => (
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

const func1 = () => "hi";

const func2a = () => { "hi" }
const func2b = () => {
  return "hi"
};