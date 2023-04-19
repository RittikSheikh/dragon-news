import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image'
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from "react-icons/fa";

const NewsSummeryCard = ({ newsData }) => {
    const { _id, author, details, image_url,rating, title, total_view } = newsData;
    return (
        <Card className="mb-5">
            <Card.Header className='d-flex justify-content-between align-items-center'>
                <div className='d-flex align-items-center'>
                    <Image src={author?.img} className='me-3'roundedCircle style={{height: '60px'}}></Image>
                    <div>
                        <p className='m-0'>{author?.name}</p>
                        <p>{author?.published_date}</p>
                    </div>
                </div>
                <div>
                <FaRegBookmark className='me-2'></FaRegBookmark>
                <FaShareAlt></FaShareAlt>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
            <Card.Img variant="top" src={image_url} />
                <Card.Text>
                    {
                        details.length > 200 ? <>{details.slice(0, 200) + '...'} <Link to={`/news/${_id}`}>Read More</Link></> : <>{details}</>
                    }
                </Card.Text>
            </Card.Body>
            <Card.Footer className="d-flex justify-content-between">
                <div className=''>
                    <FaStar className='text-warning me-2'/>
                    <span>{rating?.number}</span>
                </div>
                <div>
                    <FaEye className='me-2'/>
                    <span>{total_view}</span>
                </div>
            </Card.Footer>
        </Card>
    );
};

export default NewsSummeryCard;