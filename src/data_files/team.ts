// This data is in ts format, because the images
// This is a static website, so you should "load" the image in the server
// Load images dinamically in the client side is not possible
// The downside is, you load the same image in every data file.

import sergi from '@/assets/team/sergi.jpg';
import toni from '@/assets/team/toni.jpg';
import merche from '@/assets/team/merche.jpg';
import mario from '@/assets/team/mario.jpg';

const teamData = [
  {
    name: 'Sergi Rocha',
    role: 'Jefe de Taller',
    img: sergi,
  },
  {
    name: 'Toni Rocha',
    role: 'Director de Empresa',
    img: toni,
  },
  {
    name: 'Mercè Llimós',
    role: 'Administración i Ventas',
    img: merche,
  },
  {
    name: 'Mario Garcia',
    role: 'Técninco Especialista',
    img: mario,
  },
];

export { teamData };
