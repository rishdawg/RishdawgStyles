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
    {type:'Image', url:"https://static.cargurus.com/images/site/2018/10/29/18/11/2019_ford_f-150-pic-1873037723783455209-1600x1200.jpeg"},
    {type:'Image', url:"https://static.cargurus.com/images/site/2018/10/29/18/11/2019_ford_f-150-pic-5441054096835446436-1600x1200.jpeg"},
    {type:'Image', url:"https://static.cargurus.com/images/site/2018/10/29/18/06/2019_ford_f-150-pic-3562014182561965755-1600x1200.jpeg"},
    {type:'Image', url:"https://static.cargurus.com/images/site/2018/10/29/18/10/2019_ford_f-150-pic-3609023784191239757-1600x1200.jpeg"},
    {type:'Image', url:"https://static.cargurus.com/images/site/2018/10/29/18/11/2019_ford_f-150-pic-7884435277356994337-1600x1200.jpeg"},
    {type:'Image', url:"https://static.cargurus.com/images/site/2018/10/29/18/10/2019_ford_f-150-pic-7787830850320843224-1600x1200.jpeg"},
    {type:'Image', url:"https://static.cargurus.com/images/site/2018/10/29/18/10/2019_ford_f-150-pic-5316738575864103043-1600x1200.jpeg"},
    {type:'Youtube', url:"https://www.youtube.com/embed/tZTWeHKUCk0"}
]
}