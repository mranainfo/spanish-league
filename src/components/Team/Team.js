import React from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './Team.css';

const Team = (props) => {
    const { idTeam, strTeam, strTeamBadge, strSport } = props.team;
    return (
        <>
            <div className="team-box">
                <img className="team-img" src={strTeamBadge} alt="" />
                <h3 className="team-title">{strTeam}</h3>
                <p>Sports Type: {strSport}</p>
                <Link to={`/Details/${idTeam}`}><Button variant="success btn-sm">Explore <FontAwesomeIcon icon={faLongArrowAltRight} /></Button></Link>
            </div>
        </>
    );
};

export default Team;