
import './Home.css';
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import Header from '../../Containers/HeaderSearch';


function Home({ children }) {
  return (
    <div className="App">
    <Layout className="layout">
        <Header />
        { children }
    </Layout>
    </div>
  );
}

export default Home;
