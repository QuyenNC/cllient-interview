import {useEffect} from 'react';
import Moment from 'react-moment';
import './Detail.css'
import "antd/dist/antd.css";
import { Layout, Row, Col, Spin, Tag, Collapse, Comment, List } from "antd";

function Detail({ match, FetchSinglePost,singlePost }) {
  const { Content } = Layout;
  const { Panel } = Collapse;
  useEffect(() => (
    FetchSinglePost(match.params.id)
  ),[FetchSinglePost, match.params.id])
    if(singlePost.tags === undefined){
      return (
        <Spin tip="Loading..." />
      );
    }
  return (
    <Content style={{ padding: "0 50px" }}>
      <div className="site-layout-content" style={{ margin: " 16px" }}>
        <Row>
          <Col span={24}>
            <h1 style={{ textAlign: "center", fontSize: "45px" }}>
              {singlePost.title}
            </h1>
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <h2>Atuthor : {singlePost.author}</h2>
            <h4>Created at : <Moment format="DD/MM/YYYY">
              {singlePost.creatAt}
            </Moment></h4>
          </Col>
          <Col span={12}>
          {singlePost.tags.map((item, index)=> (
            <Tag color="green" key={index}>{item}</Tag>
          ))}
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <p>
            {singlePost.content}
            </p>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Collapse  ghost >
              <Panel header={`${singlePost.comment.length} replies`} key="1" showArrow={false} >
                <List
                  className="comment-list"
                  itemLayout="horizontal"
                  dataSource={singlePost.comment.map(item => (
                    {
                      actions: [<span key="comment-list-reply-to-0">Reply to</span>],
                      author: item.username,
                      avatar:
                        "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
                      content: (
                        <p>
                         {item.text}
                        </p>
                      ),
                      datetime: (
                        <Moment format="DD/MM/YYYY">
                          {item.date}
                        </Moment>
                      ),
                    }
                  ))}
                  renderItem={(item) => (
                    <li>
                      <Comment
                        actions={item.actions}
                        author={item.author}
                        avatar={item.avatar}
                        content={item.content}
                        datetime={item.datetime}
                      />
                    </li>
                  )}
                />
              </Panel>
            </Collapse>
          </Col>
        </Row>
      </div>
    </Content>
  );
}

export default Detail;
