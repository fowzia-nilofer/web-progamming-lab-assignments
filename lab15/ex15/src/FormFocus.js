import React, { useRef } from 'react';

function FormFocus(){
    const inputRef = useRef();

    const handleClick = () => {
        inputRef.current.focus();
    };

    return (
        <>
        <input ref={inputRef} type="text" />
        <button onClick={handleClick}>Focus Input</button>
        </>
    );
}

export default FormFocus;