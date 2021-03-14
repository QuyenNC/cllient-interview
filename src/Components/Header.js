import {
    
    Link
  } from "react-router-dom";
import 'antd/dist/antd.css';
import { Layout, Input } from 'antd';

function Header({searchPost}) {
    const { Header} = Layout;
    
  return (
    <Header>
        <Link to="/">
            <div className="h-logo">
                Logo    
            </div>
        </Link>
        <Link to="/">
            <div className="h-title">
                Blogs
            </div>
        </Link>
        <div className="h-search">
            <Input placeholder="input search text"  onChange={(e) => searchPost(e.target.value)} style={{ width: 200 }} />
        </div>
    </Header>
       
  );
}

export default Header;
