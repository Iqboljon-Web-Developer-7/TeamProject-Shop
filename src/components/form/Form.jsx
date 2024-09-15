import React from "react";
import { Button, Form, Input } from "antd";
import { useUpdateProductMutation } from "@/redux/api/product-api";

const UniForm = ({ product }) => {
  const [updateProduct, { isLoading }] = useUpdateProductMutation();

  const onFinish = (values) => {
    console.log(values);

    updateProduct({ id: product.id, body: values });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="flex items-center justify-center">
      <Form
        className="bg-white p-4 rounded-md w-full max-w-96"
        name="editUser"
        onFinish={(values) => onFinish(values)}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        layout="vertical"
      >
        <Form.Item
          label="Title"
          name={"title"}
          initialValue={product.title}
          rules={[{ required: true, message: "Please input your Title!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Desc"
          name={"desc"}
          initialValue={product.desc}
          rules={[{ required: true, message: "Please input your Decription!" }]}
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item
          label="Price"
          name={"price"}
          initialValue={product.price}
          rules={[{ required: true, message: "Please input your Price!" }]}
        >
          <Input type={"number"} />
        </Form.Item>
        <Form.Item
          label="oldPrice"
          name={"oladPrice"}
          initialValue={product.oldPrice}
          rules={[{ required: true, message: "Please input your OldPrice!" }]}
        >
          <Input type={"number"} />
        </Form.Item>
        <Form.Item
          label="Rating"
          name={"rating"}
          initialValue={product.rating}
          rules={[{ required: true, message: "Please input your Rating!" }]}
        >
          <Input type={"number"} />
        </Form.Item>
        <Form.Item
          label="Images"
          name={"url"}
          initialValue={product.url}
          rules={[{ required: true, message: "Please input your Rating!" }]}
        >
          <Input.TextArea rows={"4"} />
        </Form.Item>
        <Form.Item
          label="Category"
          name={"category"}
          initialValue={product.category}
          rules={[{ required: true, message: "Please input your Rating!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Colors"
          name={"colors"}
          initialValue={product.colors}
          rules={[{ required: true, message: "Please input your Rating!" }]}
        >
          <Input />
        </Form.Item>
        <Button htmlType="submit">Submit</Button>
      </Form>
    </div>
  );
};
export default UniForm;
