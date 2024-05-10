import { MouseEvent } from 'react';
import Navigation from '../components/Navigation';
import { motion } from 'framer-motion';
import Top from '../components/Top';
import Middle from '../components/Middle';
import Bottom from '../components/Bottom';
import Footer from '../components/Footer';

function Home({ user }) {
 

  return (
    <div className='min-h-screen'>
       <Navigation user={user}/>
       <Top />
       <Middle />
      <Bottom />
    
      <Footer />
    </div>
  )
}

export default Home;
