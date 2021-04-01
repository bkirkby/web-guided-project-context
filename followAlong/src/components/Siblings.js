import React from "react";
import familyContext from '../contexts/familyContext';

const Siblings = () => {
  const { siblings } = useContext(familyContext);

  return (
    <section className="parents">
      {siblings.map((p) => (
        <div className="person" key={p.name}>
          <img width="150" src={p.img} alt={p.name} />
          <strong>{p.name}</strong>
        </div>
      ))}
    </section>
  );
};

export default Siblings;