import { Row, Col, Button } from "antd";
import { CustomHeader, CustomSearch } from "./header.style";
import { BellOutlined } from "@ant-design/icons";

interface Props {
  title?: string;
  
}

const Header = (props: Props) => {
  const { title } = props;

  const onSearch = (value: any) => console.log(value);

  return (
    <CustomHeader>
      <Row>
        <Col span={4}>
          {" "}
          <h2>{title}</h2>{" "}
        </Col>
        <Col span={18}>
          <CustomSearch placeholder="" onSearch={onSearch} />
        </Col>
        <Col span={1} className="buttonslayout">
          <Button>
            <BellOutlined />
          </Button>
          <Button className="boldbtn">JJ</Button>
        </Col>
      </Row>
    </CustomHeader>
  );
};

export default Header;
