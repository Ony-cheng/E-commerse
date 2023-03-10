import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import InputGroup from 'react-bootstrap/InputGroup';
const Search = ({setSearchQuery, searchQuery}) => {
    return (
        <Form onSubmit={(e) => {
            e.preventDefault()
            console.log('in search')
            setSearchQuery(e.target[0].value)
        }}>
            <InputGroup  className="  w-100" >
                <Form.Control
                    placeholder="Я шукаю..."
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                />
                <Button type="submit" variant ="outline-secondary" id="button-addon2">
                    Пошук
                </Button>
            </InputGroup>
        </Form>
    );
};

export default Search;