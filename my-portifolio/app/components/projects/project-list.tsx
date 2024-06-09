"use client"

import { useEffect, useState } from "react"

export default function ProjectList() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [li, setLi] = useState(null);

    useEffect(() => {
        fetch('/json/projects.json')
            .then(response => {
                console.log('Response status:', response.status);
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.json();
            })
            .then(jsonData => {
                console.log('Fetched data:', jsonData);
                setData(jsonData);
            })
            .catch(error => {
                console.error('Error fetching the data:', error);
                setError(error);
                setData(null);
            });
    }, []);

    useEffect(() => {
        if (data) {
            setLi(
                data.repos.map(repo => (
                    <li key={repo.name}>
                        <h3>{repo.name}</h3>
                        <iframe src={repo.url} title={repo.name} width="30%" height='20%' />
                        <p>{repo.description}</p>
                    </li>
                ))
            );
        }
    }, [data]); 

    return (
        <ul>
            {error ? error.message : !data ? 'loading' : li}
        </ul>
    );
}