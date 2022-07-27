import React from 'react';
import styled from 'styled-components';
import {IoSearch} from 'react-icons/io5';

//var(--colors-ui-base)

const InputContainer = styled.label`
    background-color: var(--colors-ui-base);
    padding: 0.5rem 1rem;
    display: flex;
    align-items: center;
    border-radius: var(--radii);
    box-shadow: var(--shadow);
    width: 100%;
    margin-bottom: 1.5rem;
    height: 50px;
    
    @media(min-width: 767px) {
        margin-bottom: 0;
        width: 250px;
      
    }
`;
const Input = styled.input.attrs({
    type: 'search',
    placeholder: 'Search for a country...'
})`
 margin-left: 1rem;
 border: none;
 outline: none;
 width: 100%;
 font-size: var(--fs-sm);
 color: var(--color-text);
 background-color: var(--colors-ui-base);
`;


export const CustomSearch = ({search, setSearch}) => {


    return (
        <InputContainer>
            <IoSearch />
            <Input onChange={(e) => setSearch(e.target.value)} value={search} />
        </InputContainer>
    );
};

