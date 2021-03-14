
import {
    
  Link
} from "react-router-dom";
import "./Post.css";
import "antd/dist/antd.css";
import { Card } from "antd";
import {
  HeartTwoTone,
  EllipsisOutlined,
  ExpandAltOutlined,
} from "@ant-design/icons";

function Post(props) {
  const { Meta } = Card;
  const {val} = props;
  return (
    <Card
      bordered={true}
      style={{ width: "80%", marginBottom: "15px" }}
      cover={
        <img
          alt="example"
          src={val.coverImage}
        />
      }
      actions={[
        <ExpandAltOutlined />,
        <HeartTwoTone key="edit" />,
        <EllipsisOutlined key="ellipsis" />,
      ]}
    >
      <Meta
        title={
          <Link to={val._id}>
            {val.title}
          </Link>
        }
        description={val.content.split("").slice(0, 100).join("") + "..."}
      />
    </Card>
  );
}

export default Post;
