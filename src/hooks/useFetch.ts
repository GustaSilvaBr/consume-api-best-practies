import { useState, useEffect } from 'react';
import axios from 'axios';

export function useFetch<T = unknown>(url: string) {
    const [data, setData] = useState<T | null>(null);
    const [isFetching, setIsFetching] = useState<boolean>(true);//could be null, true in useEffect and false in finally

        useEffect(() => {
            axios.get(url)
                .then(response => {
                    console.log('response: ', response);
                    setData(response.data);
                }).finally(()=>{
                    setIsFetching(false);
                });
        }, []);

    return { data, isFetching };
}