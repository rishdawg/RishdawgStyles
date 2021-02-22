import React from 'react';

import Carousel from './Carousel';

export default {
  title: 'Carousel',
  component: Carousel,
};

const Template = (args) => <Carousel {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  all_media: [
    {type:'Image', url: 'https://risdahgcooksorder.s3.amazonaws.com/Bhel.jpeg'},
    {type:'Image', url: 'https://risdahgcooksorder.s3.amazonaws.com/ChickenCurry.jpg'},
    {type:'Image', url: 'https://risdahgcooksorder.s3.amazonaws.com/LambBiryani.jpg'},
    {type:'Image', url: 'https://risdahgcooksorder.s3.amazonaws.com/LambKebab.png'},
    {type:'Image', url: 'https://risdahgcooksorder.s3.amazonaws.com/PaneerTikka.jpg'},
    {type:'Image', url: 'https://risdahgcooksorder.s3.amazonaws.com/Poha.jpeg'},
    {type:'Image', url: 'https://risdahgcooksorder.s3.amazonaws.com/VaghareloBhaath.jpeg'},
    {type:'Youtube', url:"https://www.youtube.com/embed/U2oF0TsyP_Y", title: 'JCole Rocks'}
]
}