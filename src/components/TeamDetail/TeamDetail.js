import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import maleImg from '../../image/male.png';
import femaleImg from '../../image/female.png';
import { Button, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchLocation, faFlag, faFutbol, faMars, faHome } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import './TeamDetail.css';
import './responsive.css';

const TeamDetail = () => {
    const { idTeam } = useParams();

    const [team, setTeam] = useState({});

    const { strTeam, strSport, strGender, intFormedYear, strCountry, strDescriptionEN, strTeamBadge, strTeamBanner } = team;

    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTeam(data.teams[0]))
    }, [])

    return (
        <>
            {/* Dynamic Banner */}
            <div className="">
                <img src={strTeamBanner} style={{ width: '100%', height: '300px' }} alt="" />
            </div>

            <Container className="border rounded p-3 mt-3">
                <div className="detail-box">
                    <div className="float-left text-white">
                        <h1><img src={strTeamBadge} style={{ width: '50px' }} alt="" /> {strTeam}</h1> <hr />
                        <h6><FontAwesomeIcon icon={faSearchLocation} /> Founded: {intFormedYear}</h6>
                        <h6><FontAwesomeIcon icon={faFlag} /> Country: {strCountry}</h6>
                        <h6><FontAwesomeIcon icon={faFutbol} /> Sport Type: {strSport}</h6>
                        <h6><FontAwesomeIcon icon={faMars} /> Gender: {strGender}</h6>
                        <Link to="/"><Button variant="light btn-sm mt-2"><FontAwesomeIcon icon={faHome} /> Home</Button></Link>
                    </div>

                    {/* Conditional formatting male female image */}
                    <div className="float-right">
                        <img className="banner-img" src={(Object.strGender !== 'female') ? maleImg : femaleImg} alt="" />
                    </div>
                </div>

                {/* Description Text */}
                <div>
                    <p className="text-des">{strDescriptionEN}</p>
                </div>

                {/* Social Icon */}
                <div className="text-center p-5">
                    <span><strong>Share:</strong></span>
                    <a href="https://www.facebook.com/Arsenal"><FontAwesomeIcon className="social-icon" icon={faFacebookF} /></a>
                    <a href="https://twitter.com/arsenal"><FontAwesomeIcon className="social-icon" icon={faTwitter} /></a>
                    <a href="https://www.youtube.com/user/ArsenalTour"><FontAwesomeIcon className="social-icon" icon={faYoutube} /></a>
                </div>
            </Container> <br />

        </>
    );
};

export default TeamDetail;