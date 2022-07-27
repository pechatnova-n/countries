import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router";
import {IoArrowBack} from 'react-icons/io5';
import {searchByCountry} from "../config";
import axios from "axios";
import {Button} from "../components/Button";

export const Detail = () => {
    const {name} = useParams();
    const navigate =  useNavigate();
    const [country, setCountry] = useState(null);

    useEffect(() => {
        axios.get(searchByCountry(name)).then(
            ({data}) => setCountry(data[0])
        );
    }, [name])

    return (
        <div>
            <Button onClick={() => navigate(-1)}>
                <IoArrowBack /> Back
            </Button>
            Detail {name}
        </div>
    );
};
