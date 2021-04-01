import React from 'react';
// refactor as class
// const Parents = (props) => {
class Parents extends React.Component {
  render() {
    return (
      <section className="parents">
        {this.props.family.parents.map(p => (
          <div className="person" key={p.name}>
            <img width="150" src={p.img} alt={p.name} />
            <strong>{p.name}</strong>
          </div>
        ))}
      </section>
    );
  }
};

export default Parents;
