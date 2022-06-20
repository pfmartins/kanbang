import React from 'react';
import './styles.scss';

function Modal({ title, details, closeModal }) {
    return (
        <div className='modal-background'>
            <div className='modal-container'>
                <div className='title-container'>
                    <div className='titulo'>
                        <h1>Detalhes da task</h1>
                    </div>
                    <button onClick={() => closeModal(false)}>X</button>
                </div>
                <div className='corpo-task'>
                    <h2>{title}</h2>
                    <p>{details}</p>
                </div>
            </div>
        </div>
    )
}

export default Modal