import React from 'react';
import axios from 'axios';
import {useState, useEffect} from 'react';
import {ALL_COUNTRIES} from "../config";
import {List} from "../components/List";
import {Controls} from "../components/Controls";
import {Card} from "../components/Card";
import {useNavigate} from "react-router";



export const HomePage = ({setCountries, countries}) => {

    const [filteredCountries, setFilteredCountries] = useState(countries);

    const navigate =  useNavigate();

    const handleSearch = (search, region) => {
        let data = [...countries];

        if(region) {
            data = data.filter((c) => c.region.includes(region));
        }

        if(search) {
            data = data.filter((c) => c.name.common.toLowerCase().includes(search.toLowerCase()));
        }

        setFilteredCountries(data);

    };

    useEffect(() => {
        if(!countries.length)
        axios.get(ALL_COUNTRIES).then(({data}) => setCountries(data));
    },[]);

    useEffect(() => {
        handleSearch();
    }, [countries]);

    return (
        <>
            <Controls onSearch={handleSearch} />
            <List>
                {filteredCountries.map((c) => {
                    const countryInfo = {
                        img: c.flags.png,
                        name: c.name.common,
                        info: [
                            {
                                title: 'Population',
                                description: c.population.toLocaleString(),
                            },
                            {
                                title: 'Region',
                                description: c.region,
                            },
                            {
                                title: 'Capital',
                                description: c.capital,
                            },
                        ],
                    };
                    return <Card key={c.name.common} onClick={() => navigate(`/country/${c.name.common}`, {replace: false})} {...countryInfo}  />;
                })}
            </List>
        </>
    );
};

