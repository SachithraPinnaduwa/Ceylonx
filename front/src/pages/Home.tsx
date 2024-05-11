
import Navigation from '../components/Navigation';

import Top from '../components/Top';
import Middle from '../components/Middle';
import Bottom from '../components/Bottom';
import Footer from '../components/Footer';
interface User {
  id: number;
  name: string;
  password: string;
 
}
function Home({ user }: { user: User }) {
 

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
