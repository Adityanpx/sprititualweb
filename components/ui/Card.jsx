import React from 'react';

const Card = ({ imageSrc, title, description }) => (
  
  
   <div className='max-w-sm rounded overflow-hidden shadow-lg p-14 mt-4'>
      

    <div className='font-bold text-xl mb-2'>{title}</div>
    <img src={imageSrc} alt={title} className='w-full h-48 object-cover' />
    <div className='px-6 py-4'>
      
      <p className='text-gray-700 text-base'>{description}</p>
    </div>
  </div>
);

export default function CardList() {
  const cardsData = [
    {
      id: 1,
      title: 'Card 1',
      imageSrc: 'https://fastly.4sqi.net/img/general/600x600/17327918_byYYdqpZQOyUtGXtizQyvIDxxAA-JbLjP5LK7Zbfh6o.jpg',
      
      description: 'Description for Card 1.',
    },
    {
      id: 2,
      imageSrc: 'https://www.baps.org/Data/Sites/1/Media/DailyMurtiDarshan/960/2019/20190909A.jpg',
      title: 'Card 2',
      description: 'Description for Card 2.',
    },
    {
      id: 3,
      imageSrc: 'https://content3.jdmagicbox.com/comp/pune/a1/020pxx20.xx20.111130112137.f4a1/catalogue/baps-swaminarayan-mandir-ambegaon-khurd-pune-temples-3l77sg8.jpg',
      title: 'Card 3',
      description: 'Description for Card 3.',
    },
    {
      id: 4,
      imageSrc: 'https://www.baps.org/Data/Sites/1/Media/ModuleRotatorImages/Mandir%20Ext%202018%20Garden%20Summer%20Pano%20Wide%20-%20Copy.jpg',
      title: 'Card 4',
      description: 'Description for Card 4.',
    },
  ];

  return (
    <div className='flex justify-center items-center flex-wrap'>
      {cardsData.map((card) => (
        <Card
          key={card.id}
          imageSrc={card.imageSrc}
          title={card.title}
          description={card.description}
        />
      ))}
      
    </div>
    
  );
}
