import React, { useState } from 'react';
import style from "./Paiement.module.scss";
import styleApp from "../../App.module.scss";
import Button from "../../components/Button/Button";
import {useNavigate} from 'react-router-dom';

const PaymentForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name) {
      setError('Nom requis');
    } else if (!number || number.length < 16) {
      setError('Numéro de carte valide requis');
    } else if (!expiry) {
      setError('Date d\'expiration requise');
    } else if (!cvc || cvc.length < 3) {
      setError('CVC requis');
    } else {
      navigate('/Recapitulatif');
    } 
   
    
  
  };
  
  return (
    <main>
    <section id={style.sectionContact} className={styleApp.sectionColored}>
    <h2>C'est parti pour chauffer la carte!</h2>
    <form onSubmit={handleSubmit}>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <input
        type="text"
        placeholder="Nom sur la carte"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <input
        type="text"
        placeholder="Numéro de la carte"
        value={number}
        onChange={(event) => setNumber(event.target.value)}
      />
      <input
        type="text"
        placeholder="MM/YY"
        value={expiry}
        onChange={(event) => setExpiry(event.target.value)}
      />
      <input
        type="text"
        placeholder="CVC"
        value={cvc}
        onChange={(event) => setCvc(event.target.value)}
      />
     
      <div className={style.Payer}> <Button onClick={handleSubmit} title="Payer"  /></div>

     
      
     
       
    </form>
    </section>
    </main>
  );
};

export default PaymentForm;
