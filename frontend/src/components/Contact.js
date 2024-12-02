import React from 'react';

const Contact = () => {
    return (
        <div style={{ padding: '20px', color: '#fff', backgroundColor: '#121212' }}>
            <h1>Contactez-nous</h1>
            <p>Pour toute question ou demande d'informations, veuillez remplir le formulaire ci-dessous :</p>
            <form style={{ marginTop: '20px' }}>
                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="name" style={{ display: 'block', marginBottom: '5px' }}>Nom :</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Votre nom"
                        style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #444' }}
                    />
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>Email :</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Votre email"
                        style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #444' }}
                    />
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="message" style={{ display: 'block', marginBottom: '5px' }}>Message :</label>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Votre message"
                        style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #444', height: '100px' }}
                    ></textarea>
                </div>
                <button
                    type="submit"
                    style={{
                        background: 'linear-gradient(90deg, #12ffb0, #b800ff)',
                        color: '#fff',
                        padding: '10px 20px',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer'
                    }}
                >
                    Envoyer
                </button>
            </form>
        </div>
    );
};
<form>
  <div className="form-group">
    <label htmlFor="name">Nom :</label>
    <input
      type="text"
      id="name"
      className="form-control"
      placeholder="Votre nom"
    />
  </div>
  <div className="form-group">
    <label htmlFor="email">Email :</label>
    <input
      type="email"
      id="email"
      className="form-control"
      placeholder="Votre email"
    />
  </div>
  <button type="submit" className="btn btn-success mt-3">Envoyer</button>
</form>

export default Contact;
