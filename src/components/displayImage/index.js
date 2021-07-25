import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addData } from '../../action';
import { apiKey, base_url } from '../../config';
const axios = require('axios').default;


const DisplayImage = () => {
    const dispatch = useDispatch();
    const imageList = useSelector(state => state.imageList);

    useEffect(() => {
        axios.get(`${base_url}?key=${apiKey}&image_type=photo`)
            .then(function (response) {
                const imageList = response?.data?.hits;
                dispatch(addData(imageList));
            })
            .catch(function (error) {
                console.log(error);
            })
    }, []);

    const renderImage = (uri) => {
        return <img src={uri} />
    }
    return (
        <div>
            {
                imageList.map(i => renderImage(i.webformatURL))
            }

        </div>
    );
}

export default DisplayImage;