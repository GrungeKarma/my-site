import React, { useState } from 'react';
import NavBar from './components/UI/NavBar';
import Footer from './components/UI/Footer';
import Hero from './components/UI/Hero';
import Bio from './components/sections/Bio';
import Projects from './components/sections/Projects';
import './App.css';
import SkillsAndTech from './components/sections/SkillsAndTech';

const projectArr = [
  {
    key: Math.random().toString(),
    name: 'makerClerk',
    description: 'This fullstack application largely relies on the node package Puppeteer. Once links are entered they are sent to the backend and processed. The process opens a dummy browser to the link then gathers the applicable information. The information is then returned to generate the preview. Once download list is clicked, The backend generates a .html file and the frontend processes and downloads the blob object. Giving the user a file that has working links to their items.',
    isLive: true,
    liveLocation: 'https://makerclerk.netlify.app/',
    sourceCode: 'https://github.com/GrungeKarma/makerClerk'
  },
  {
    key: Math.random().toString(),
    name: 'danteIpsum',
    description: 'Dante Ipsum is a RESTfull API that provides an alternative dummy text to Lorum Ipsum. This API used an open domain version of the first three sections of Dante Alighieri\'s epic poem Divine Comedy. The selection is separated by line. The dummy text is formed by randomly picking lines from the selection and combining them into a small paragraph.',
    isLive: true,
    liveLocation: 'https://dante-ipsum.herokuapp.com/',
    sourceCode: 'https://github.com/GrungeKarma/danteIpsum'
  },

];

const skillsArr = [
  { key: Math.random().toString(), item: 'Node.js' },
  { key: Math.random().toString(), item: 'Express' },
  { key: Math.random().toString(), item: 'Navigo' },
  { key: Math.random().toString(), item: 'Axios' },
  { key: Math.random().toString(), item: 'RESTful APIs' },
  { key: Math.random().toString(), item: 'GitHub / Git' },
  { key: Math.random().toString(), item: 'Jira / Trello' },
  { key: Math.random().toString(), item: 'Netlify' },
  { key: Math.random().toString(), item: 'Vercel' },
  { key: Math.random().toString(), item: 'Heroku' },
  { key: Math.random().toString(), item: 'Puppeteer' },
  { key: Math.random().toString(), item: 'Jest' },
  { key: Math.random().toString(), item: 'VS Code' },
  { key: Math.random().toString(), item: 'Tailwind CSS' },
  { key: Math.random().toString(), item: 'Yarn' },

]




function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <div className="App">
      <NavBar />
      <Hero modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} />
      <SkillsAndTech skillsArr={skillsArr} />
      <Bio />

      <Projects projects={projectArr} />
      <Footer />
    </div>
  );
}

export default App;
