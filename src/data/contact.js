import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons/faXTwitter';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
// See https://fontawesome.com/icons?d=gallery&s=brands,regular&m=free
// to add other icons.

const data = [
  {
    link: 'https://github.com/jmj4678',
    label: 'Github',
    icon: faGithub,
  },
  {
    link: 'https://www.instagram.com/chemajatem/',
    label: 'Instagram',
    icon: faInstagram,
  },
  {
    link: 'https://www.linkedin.com/in/jose-jatem/',
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
  {
    link: 'https://twitter.com/chemajatem',
    label: 'Twitter',
    icon: faXTwitter,
  },
  {
    link: 'mailto:hemajatem@gmail.com',
    label: 'Email',
    icon: faEnvelope,
  },
];

export default data;
