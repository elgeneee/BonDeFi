import React, { useState} from 'react'

const Modal = ()=> {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };

    
}