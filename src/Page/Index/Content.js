import {  useEffect} from "react";

import "./Home.css";
import "antd/dist/antd.css";
import { Layout, Spin, Col, Row, Pagination } from "antd";
import Post from "./Post";

function Content({posts,minValue,maxValue,numEachPage,fetchPosts,handleChangPagination,postsFilter}) {

  const { Content } = Layout;
  useEffect(() => (
    fetchPosts()
  ),[fetchPosts])

  if(posts.length === 0){
    return (
      <Spin tip="Loading..." />
    );
  }
  return (
    <Content style={{ padding: "0 50px" }}>
      <div className="site-layout-content" style={{ margin: " 16px" }}>
        <Row gutter={16}>
          {postsFilter &&
            postsFilter.length > 0 &&
            postsFilter.slice(minValue, maxValue).map((val, index) => (
              <Col span={6} key={index}>
                <Post val={val} />
              </Col>
            ))}

          <Pagination
            defaultCurrent={1}
            defaultPageSize={numEachPage} //default size of page
            onChange={handleChangPagination}
            total={postsFilter.length} //total number of card data available
            showSizeChanger={false}
            style={{
              position: "absolute",
              bottom: "1%",
              left : "50%"
            }}
          />
        </Row>
      </div>
    </Content>
  );
}

export default Content;
