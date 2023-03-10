import React from 'react';
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import {useState} from  'react';
import Reviews from "../API/Reviews";
import DateTimeObject from "../utils/DateTimeObject";
import RatingButton from "../UIComponents/RatingButton";
const PostForm = ({postFormVisible, productId}) => {

    const [body , setBody] = useState('')
    const [rating, setRating] = useState(0)
    const [caution, setCaution] = useState(true)

    function post(body, email , username){
        if(caution) {
            const review = {
                body: body,
                rating: rating,
                users:{
                    username:username,
                    email:email
                },
                product:{
                   id: productId
                }
            }
            Reviews.postReview(review)
        }

    }

    return (
        <Form
            style={ postFormVisible === true ? {display:"block"} : {display:"none"}}
            className="my-2"
            onSubmit={(e) => {
            e.preventDefault()
            post(
            e.target[0].value,
            e.target[1].value,
            e.target[2].value
            )
        }}>
            <Form.Group
                controlId="exampleForm.ControlTextarea1"
                style={{ whiteSpace: "pre-wrap" }}
            >
                <Form.Control as="textarea" rows={3} />
                <Form.Label>Пошта</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="name@example.com"
                    autoFocus
                />
                <Form.Label>Ім'я</Form.Label>
                <Form.Control
                    placeholder="ім'я"
                    autoFocus
                />
            </Form.Group>

            <RatingButton setRating={setRating}
                          rating={rating}/>
            <Button className="my-3" type="submit" variant ="outline-secondary" >
                Залишити відгук
            </Button>
            <hr/>
        </Form>

    );
};

export default PostForm;