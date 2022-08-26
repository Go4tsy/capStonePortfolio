import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import portfolioCard from '../Photos/portfolioCard.png'
import ecommerCard from '../Photos/ecommerCard.png'
import { useNavigate } from "react-router-dom";
import {Link} from 'react-router-dom';
import snapBookCard from '../Photos/snapBookCard.png'


    
const Project = () => {
    
    // let navigate = useNavigate(); 
    // const routeChange = () =>{ 
    //   let path = `newPath`; 
    //   navigate(path);
    // }



    return (

        <>
        <Card style={{ width: '22rem' }} className="projectCard">
        <Card.Img variant="top" src={portfolioCard} />
        <Card.Body>
          <Card.Title> Vanilla portfolio </Card.Title>
          <Card.Text className='textCard'>
            This was my very first project. Html and css with javascript for the functionality.
          </Card.Text>
          <Button variant="primary"  href='https://go4tsy.github.io/portfolioWebsite/index.html' target="_blank" rel="noopener noreferrer" >View project</Button>
          {/* <Link to="https://roseeesthetique.netlify.app" target="_blank" rel="noopener noreferrer" className="btn btn-primary">View live project</Link> */}
        </Card.Body>
      </Card>

      <Card style={{ width: '22rem' }} className="projectCard">
        <Card.Img variant="top" src={ecommerCard} />
        <Card.Body>
          <Card.Title> Ecommer </Card.Title>
          <Card.Text className='textCard'>
            This e-commerce website is a replica which was made using shopify. 
            I went ahead and used reactJS with a third party Api.
          </Card.Text>
          <Button variant="primary"  href='https://roseeesthetique.netlify.app' target="_blank" rel="noopener noreferrer" >View project</Button>
          {/* <Link to="https://go4tsy.github.io/portfolioWebsite/index.html" target="_blank" rel="noopener noreferrer" className="btn btn-primary">View live project</Link> */}

        </Card.Body>
      </Card>

      <Card style={{ width: '22rem' }} className="projectCard">
        <Card.Img variant="top" src={snapBookCard} />
        <Card.Body>
          <Card.Title> SnapBook</Card.Title>
          <Card.Text className='textCard'>
            This project, was my first team project. 
            We made our own version of a GooglePhotos where the user can upload pictures in an album.
          </Card.Text>
          <Button variant="primary"  href='https://snapbook.netlify.app' target="_blank" rel="noopener noreferrer" >View live project</Button>
          {/* <Link to="https://snapbook.netlify.app" target="_blank" rel="noopener noreferrer" className="btn btn-primary">View live project</Link> */}
        </Card.Body>
      </Card>

      {/* <Card style={{ width: '18rem' }} className="projectCard">
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Project X</Card.Title>
          <Card.Text>
            About this project
          </Card.Text>
          <Button variant="primary">View project</Button>
        </Card.Body>
      </Card> */}
            
        </>
    );
};

export default Project;