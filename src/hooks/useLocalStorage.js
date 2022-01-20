import { useState, useEffect } from 'react';

export default function useLocalStorage() {
    const [state, setState] = useState(() => {
        return JSON.parse(localStorage.getItem('contacts')??[]);
    });

    useEffect(() => {
        window.localStorage.setItem('contacts', JSON.stringify(state));
      }, [state]);

    return [state, setState];

}