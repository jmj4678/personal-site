import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpeg`} alt="" />
      </Link>
      <header>
        <h2>Jose (Chema) Jatem</h2>
        <p><a href="mailto:chemajatem@gmail.com">chemajatem@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Jose, but everybody calls me Chema, now in the US some people even do JJ,
        but &quot;Jose&quot;, I don&apos;t know, that&apos;s not me. I am a
        <a href="https://bulletin.utulsa.edu/preview_program.php?catoid=30&poid=4378"> University of Tulsa MSBA</a> graduate, <a href="https://www.buildersandbackers.com/"> B+B Alumni</a>, and a Data Analytics Consultant at <a href="https://www.controlrisks.com/">Control Risks</a>. Previously,
        I was the co-founder and COO of <a href="https://pecus.app/">Pecus</a>, and worked at
        {' '}<a href="https://www.weforum.org/organizations/empresas-polar/">Empresas Polar</a> and <a href="https://www.chevron.com/">Chevron</a>.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Jose Jatem <Link to="/">chemaria.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
