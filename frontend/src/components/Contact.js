import React from 'react';

const Contact = () => {
    return (
        <div style={{ textAlign: 'center', padding: '2rem' }}>
            <h1>Contactez-nous</h1>
            <p>
                Si vous avez des questions ou des suggestions, n'hésitez pas à nous contacter !
            </p>
            <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                <input
                    type="text"
                    placeholder="Votre nom"
                    style={{
                        padding: '0.5rem',
                        width: '300px',
                        border: '2px solid #ccc',
                        borderRadius: '4px',
                    }}
                />
                <input
                    type="email"
                    placeholder="Votre email"
                    style={{
                        padding: '0.5rem',
                        width: '300px',
                        border: '2px solid #ccc',
                        borderRadius: '4px',
                    }}
                />
                <textarea
                    placeholder="Votre message"
                    rows="4"
                    style={{
                        padding: '0.5rem',
                        width: '300px',
                        border: '2px solid #ccc',
                        borderRadius: '4px',
                    }}
                ></textarea>
                <button
                    type="submit"
                    style={{
                        background: 'linear-gradient(90deg, #12ffb0, #b800ff)',
                        color: 'white',
                        padding: '0.5rem 1rem',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontSize: '1rem',
                    }}
                >
                    Envoyer
                </button>
            </form>
        </div>
    );
};

export default Contact;
