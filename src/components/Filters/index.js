import { Col, Row, Input, Typography, Radio, Select, Tag } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchTextChange, statusFilterChange, priorityFilterChange } from "../../redux/actions";

const { Search } = Input;

export default function Filters() {
  const [searchText, setSearchText] = useState("");
  const [filterRadioChange, setFilterRadioChange] = useState("All");
  const [filterPriorities, setFilterPriorities] = useState([])
  const dispatch = useDispatch();

  //xử lý filters search
  const handleSearchTextChange = (e) => {
    setSearchText(e.target.value);
    //dispatch một action và gửi về cho kho dữ liệu tổng trường filters
    dispatch(searchTextChange(e.target.value));
  };

  //xử lý filters radio
  const handleFilterChange = (e) => {
    setFilterRadioChange(e.target.value);
    dispatch(statusFilterChange(e.target.value));
  };

  //xử lý mức độ ưu tiên
  const handlePriorityChange = (value) => {
    setFilterPriorities(value)
    dispatch(priorityFilterChange(value))
  }

  return (
    <Row justify="center">
      <Col span={24}>
        <Typography.Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
        >
          Search
        </Typography.Paragraph>
        <Search
          placeholder="input search text"
          value={searchText}
          onChange={handleSearchTextChange}
        />
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
        >
          Filter By Status
        </Typography.Paragraph>
        <Radio.Group value={filterRadioChange} onChange={handleFilterChange}>
          <Radio value="All">All</Radio>
          <Radio value="Completed">Completed</Radio>
          <Radio value="Todo">To do</Radio>
        </Radio.Group>
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
        >
          Filter By Priority
        </Typography.Paragraph>
        <Select
          mode="multiple"
          allowClear
          placeholder="Please select"
          style={{ width: "100%" }}
          value={filterPriorities}
          onChange = {handlePriorityChange}
        >
          <Select.Option value="High" label="High">
            <Tag color="red">High</Tag>
          </Select.Option>
          <Select.Option value="Medium" label="Medium">
            <Tag color="blue">Medium</Tag>
          </Select.Option>
          <Select.Option value="Low" label="Low">
            <Tag color="gray">Low</Tag>
          </Select.Option>
        </Select>
      </Col>
    </Row>
  );
}
