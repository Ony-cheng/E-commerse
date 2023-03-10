import React from 'react';
import { Dropdown, DropdownButton, DropdownItem, Row , Col} from 'react-bootstrap';

const MultiColumnDropdown = () => {

    const options = [
        { name: 'Option 1', description: 'Description for option 1' },
        { name: 'Option 2', description: 'Description for option 2' },
        { name: 'Option 3', description: 'Description for option 3' },
    ];
    return (
        <DropdownButton title="Select an option">
            <Row>
                <Dropdown.ItemText>
                    <strong>Name</strong>
                </Dropdown.ItemText>
                <Dropdown.ItemText>
                    <strong>Description</strong>
                </Dropdown.ItemText>
            </Row>

            <Row>
            {options.map((option) => (
                <Col key={option.name}>
                    <Dropdown.ItemText>{option.name}</Dropdown.ItemText>
                    <Dropdown.ItemText>{option.description}</Dropdown.ItemText>
                </Col>
            ))}
            </Row>
        </DropdownButton>
    );
};

export default MultiColumnDropdown;