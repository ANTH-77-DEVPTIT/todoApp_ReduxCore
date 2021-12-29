import { Col, Row, Input, Button, Select, Tag } from "antd";
import Todo from "../Todo";
//sử dụng useSelector để lấy ra dữ liệu từ kho chung của react-redux
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../redux/actions";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { todoRemainingSelector } from "../../redux/selectors";

export default function TodoList() {
  //tạo một state để lưu thông tin người dùng nhập từ input
  const [todoName, setTodoName] = useState("");
  const [priority, setPriority] = useState("Medium");
  //useSelector là một function thôi. nó truy cập đến kho chung để lấy ra dữ liệu
  const todoList = useSelector(todoRemainingSelector);
  //tạo ra một hành động dispatch( gửi đi ) một hành động kèm theo data cần gửi
  const dispatch = useDispatch();
  const handleAddButtonClick = () => {
    dispatch(
      addTodo({
        id: uuidv4(),
        name: todoName,
        completed: false,
        priority: priority,
      })
    );

    setTodoName("");
    setPriority("Medium");
  };

  //hàm xử lý thông tin khi nhập vào input
  const handleInputChange = (e) => {
    setTodoName(e.target.value);
  };

  //hàm xử lý láy thông tin của selected
  const handleSelectChange = (value) => {
    setPriority(value);
  };

  return (
    <Row style={{ height: "calc(100% - 40px)" }}>
      <Col span={24} style={{ height: "calc(100% - 40px)", overflowY: "auto" }}>
        {/* <Todo name='Learn React' prioriry='High' />
        <Todo name='Learn Redux' prioriry='Medium' />
        <Todo name='Learn JavaScript' prioriry='Low' /> */}
        {todoList.map((todo) => (
          <Todo
            key={todo.id}
            id = {todo.id}
            name={todo.name}
            prioriry={todo.priority}
            completed={todo.completed}
          />
        ))}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: "flex" }} compact>
          <Input value={todoName} onChange={handleInputChange} />
          <Select
            defaultValue="Medium"
            value={priority}
            onChange={handleSelectChange}
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
          <Button type="primary" onClick={handleAddButtonClick}>
            Add Todo
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
