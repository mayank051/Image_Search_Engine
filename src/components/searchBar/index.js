import React, { useState } from 'react';
import SearchField from "react-search-field";
import { useDispatch } from 'react-redux';
import { addData } from '../../action';
import { apiKey, base_url } from '../../config';

const axios = require('axios').default;



const CustomSearchBar = () => {
    const [query, setQuery] = useState('');
    const dispatch = useDispatch();
    const fetchImages = () => {
        axios.get(`${base_url}?key=${apiKey}&q=${query}&image_type=photo`)
            .then(function (response) {
                const imageList = response?.data?.hits;
                dispatch(addData(imageList));
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    return (
        <div>
            <SearchField
                placeholder="Search..."
                onChange={(text) => setQuery(text)}
                classNames="test-class"
                onSearchClick={() => fetchImages()}
            />
        </div>
    );
}

export default CustomSearchBar;