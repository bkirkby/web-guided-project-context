import React from "react";

const Siblings = (props) => {
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