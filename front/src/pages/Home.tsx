
import Navigation from '../components/Navigation';

import Top from '../components/Top';
import Middle from '../components/Middle';
import Bottom from '../components/Bottom';
import Footer from '../components/Footer';

function Home({ user }) {
 

  return (
    <>
       <Navigation user={user}/>
       <Top />
       <Middle />
      <Bottom />
    
      <Footer />
    </>
  )
}

export default Home;
