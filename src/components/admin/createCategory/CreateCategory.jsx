import { useCreateCategoryMutation } from "@/redux/api/product-api";
import { CircularProgress } from "@mui/material";
import { Button, message } from "antd";
import React from "react";
import { v4 as uuid } from "uuid";

const CreateCategory = () => {
  const [addCategory, { isLoading }] = useCreateCategoryMutation();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    let isAdd = true;

    if (!data.title) {
      isAdd = false;
    }

    data.id = uuid();

    if (isAdd) {
      addCategory({ body: data })
        .unwrap()
        .then(() => {
          e.target.reset();
          message.success("Successfully added category!");
        });
    }
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)} className="flex items-center gap-3">
      <label htmlFor="title" className="text-xl">
        Title:
      </label>
      <input
        className="border-2 p-1 ps-3 rounded-lg"
        type="text"
        name="title"
        id="title"
      />
      <Button htmlType="submit">
        {isLoading ? (
          <CircularProgress style={{ width: "1.22rem", height: "1.22rem" }} />
        ) : (
          "Add"
        )}
      </Button>
    </form>
  );
};

export default CreateCategory;
