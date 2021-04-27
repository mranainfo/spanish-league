import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Team from '../Team/Team';
import './Home.css';

const Home = () => {
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        const url = 'https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League';
        fetch(url)
            .then(res => res.json())
            .then(data => setTeams(data.teams));
    }, []);
    return (
        <>
            <Container className="text-center">
                <Row>
                    {
                        teams.map(team => <Team team={team}></Team>)
                    }
                </Row>
            </Container>
        </>
    );
};

export default Home;