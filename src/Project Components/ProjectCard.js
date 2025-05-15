import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { motion } from 'framer-motion';

function ProjectCard({ title, description, image, link }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.04, boxShadow: '0 4px 24px #4069fd33' }}
      transition={{ type: 'spring', stiffness: 120, damping: 14 }}
      style={{ margin: '1rem' }}
    >
      <Card style={{ width: '22rem' }} className="projectCard">
        <Card.Img variant="top" src={image} alt={title} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text className='textCard'>
            {description}
          </Card.Text>
          <Button variant="primary" href={link} target="_blank" rel="noopener noreferrer">
            View project
          </Button>
        </Card.Body>
      </Card>
    </motion.div>
  );
}

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default ProjectCard; 