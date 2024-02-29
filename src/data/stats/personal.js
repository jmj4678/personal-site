import React, { useState, useEffect } from 'react';

const Age = () => {
  const [age, setAge] = useState();

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    const birthTime = new Date('1995-06-13T13:00:00');
    setAge(((Date.now() - birthTime) / divisor).toFixed(10));
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 25);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>{age}</>;
};

const data = [
  {
    key: 'age',
    label: 'Current age',
    value: <Age />,
  },
  {
    key: 'countries',
    label: 'Cities visited',
    value: 83,
    link:
      'https://www.google.com/maps/d/u/0/embed?mid=1swDeGrYajg6YPPmO12IcNeHq5_adbII&ehbc=2E312F',
  },
  {
    key: 'location',
    label: 'Current city',
    value: 'Nomadland',
  },
  {
    key: 'Favorite book',
    label: 'Favorite Fiction',
    value: 'One hundred years of solitude',
    link:
        'https://www.goodreads.com/review/list/141031261-chema-jatem?ref=nav_mybooks&shelf=read&sort=date_read',
  },
  {
    key: 'Favorite movie',
    label: 'Favorite movie',
    value: 'Whiplash',
    link:
        'https://www.imdb.com/user/ur117307033/ratings?sort=your_rating,desc&ratingFilter=0&mode=detail&ref_=undefined&lastPosition=0',
  },
];

export default data;
