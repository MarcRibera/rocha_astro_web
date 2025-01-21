// This data is in ts format, because the images
// This is a static website, so you should "load" the image in the server
// Load images dinamically in the client side is not possible
// The downside is, you load the same image in every data file.
// You could consider to change this. And just create a component with all the code there.

import sergi from '@/assets/team/sergi.jpg';
import toni from '@/assets/team/toni.jpg';
import merche from '@/assets/team/merche.jpg';
import mario from '@/assets/team/mario.jpg';

const teamData = [
  {
    name: 'Sergi Rocha',
    role: 'Responsable de Taller',
    img: sergi,
  },
  {
    name: 'Toni Rocha',
    role: "Director d'Empresa",
    img: toni,
  },
  {
    name: 'Mercè Llimós',
    role: 'Administració i Vendes',
    img: merche,
  },
  {
    name: 'Mario Garcia',
    role: 'Tècninc Especialista',
    img: mario,
  },
];

export { teamData };
