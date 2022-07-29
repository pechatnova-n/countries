import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import axios from "axios";
import {filterByCode} from "../config";
import {useNavigate} from "react-router";


const Wrapper = styled.section`
    margin-top: 3rem;
    width: 100%;
    display: grid;
    grid-templates-columns: 100%;
    gap: 2rem;
    
    @media(min-width: 767px) {
        grid-template-column: minmax(100px, 400px) 1fr;
        align-items: center;
        gap: 5rem;
    }
     @media(min-width: 1024px) {
        grid-template-column: minmax(400pc, 600px) 1fr;
    }
`;
const InfoImage = styled.img`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
`;
const InfoTitle = styled.div`
    margin: 0;
    font-weight: var(--fw-normal);
`;
const ListGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    
    @media(min-width: 1024px) {
        flex-direction: row;
         gap: 4rem;
    }
`;
const List = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    
`;
const ListItem = styled.li`
    line-height: 1.8;
    
    & > b {
        font-weight: var(--fw-bold);
    }
`;
const Meta = styled.div`
    margin-top: 3rem;
    display: flex;
    gap: 1.5rem;
    flex-direction: column;
    align-items: flex-start;
    
     & > b {
        font-weight: var(--fw-bold);
    }
    
    @media(min-width: 767px) {
        flex-direction: row;
        align-items: center;
    }
    
`;
const TagGroup = styled.div`
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
`;
const Tag = styled.span`
    padding: 0 1 rem;
    background-color: var(--colors-ui-base);
    bax-shadow: var(--shadow);
    line-height: 1.5;
    cursor: pointer;
    display: block;
    padding: 3px 7px;
`;


export const Info = (props) => {
    const {
        name,
        flags,
        capital = [],
        population,
        region,
        subregion,
        currencies,
        languages = [],
        borders,
    } = props;


    const navigate =  useNavigate();
    const [neighbors, setNeighbors] = useState([]);


    useEffect(() => {
        if(borders.length)
        axios
            .get(filterByCode(borders))
            .then(({ data }) => setNeighbors(data.map((c) => c.name.common)));
    }, [borders]);




    return (
        <Wrapper>
            <InfoImage src={flags.png} alt={name} />
            <div>
                <InfoTitle>{name.common}</InfoTitle>
                <ListGroup>
                    <List>
                        <ListItem>
                            <b>NativeName:</b> {name.official}
                        </ListItem>
                        <ListItem>
                            <b>Population:</b> {population}
                        </ListItem>
                        <ListItem>
                            <b>Region:</b> {region}
                        </ListItem>
                        <ListItem>
                            <b>Subregion:</b> {subregion}
                        </ListItem>
                        <ListItem>
                            <b>Capital:</b> {capital[0]}
                        </ListItem>
                    </List>
                    <List>
                       <ListItem>
                          1
                        </ListItem>
               {/*         <ListItem>
                            <b>Currency:</b>{currencies.map(c => <span key={population}>{c.EUR.name} </span>)}
                        </ListItem>
                        <ListItem>
                            <b>Languages:</b> {languages.map(l => (<span key={population}>{l.eng} </span>))}
                        </ListItem>*/}
                    </List>
                </ListGroup>
                <Meta>
                    <b>Border Countries</b>
                    {!borders.length ? (
                        <span>There is no border countries</span>
                    ) : (
                        <TagGroup>
                            {neighbors.map((b) => (<Tag onClick={() => navigate(`/country/${b}`)} key={b}>{b} </Tag>))}
                        </TagGroup>
                    )}
                </Meta>
            </div>
        </Wrapper>
    );
};

