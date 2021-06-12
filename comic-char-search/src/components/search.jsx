import React, {Fragment, useState} from 'react';
import {AsyncTypeahead} from 'react-bootstrap-typeahead';

const SearchBar = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [options, setOptions] = useState([]);

   const handleSearch = query => {
       setIsLoading(true);
    fetch(`https://www.superheroapi.com/api.php/3586651271348196/search/${query}`)
    .then(res => res.json())
    .then(data => {
        const characters = data.results;
        const options = characters.map(c => ({
            img: c.image.url,
            id: c.id,
            name: c.name
        }))
        setOptions(options);
        setIsLoading(false);
    })
   }
        
   const filterBy = () => true; 

    return(
        <AsyncTypeahead
            filterBy={filterBy}
            id="comic character search"
            isLoading={isLoading}
            labelKey='name'
            minLength={2}
            onSearch={handleSearch}
            options={options}
            placeholder="Search for comic heroes or villains"
            renderMenuItemChildren={(option, props) => (
                <Fragment>
                    <img
                        alt={`${option.name} profile`}
                        src={option.img}
                        style={{
                            height: '36px',
                            marginRight: '12px',
                            width: '36px'
                        }}
                    />
                    <span id={option.id}>{option.name}</span>
                </Fragment>
            )}
        />
    )
}

export default SearchBar;