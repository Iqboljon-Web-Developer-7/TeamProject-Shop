import {
  useCreateProductMutation,
  useGetProductQuery,
} from "@/redux/api/product-api";
import { CircularProgress, InputAdornment, TextField } from "@mui/material";
import { Button } from "antd";
import React from "react";
import { v4 as uuid } from "uuid";
import { message } from "antd";

const CreateProduct = () => {
  const [createProduct, { isLoading }] = useCreateProductMutation();

  function validateNumber(input) {
    if (input.value > 5) {
      input.value = 5;
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    data.id = uuid();
    data.price = +data.price;
    data.rating = +data.rating;
    data.url = data.url.split(/\n/gi);

    let isPut = true;

    let keysList = Object.keys(data);
    keysList.forEach((item) => {
      if (!data[item]) {
        isPut = false;
      }
    });
    data.oldPrice = 0;
    if (isPut) {
      createProduct({ body: data })
        .unwrap()
        .then(() => {
          e.target.reset();
          message.success("Successfully created product!");
        });
    } else {
      message.error(`Fill all inputs!`);
    }
  };
  return (
    <>
      <h1 className="text-2xl my-5">Create Product</h1>
      <form
        className="max-w-96 flex flex-col gap-2"
        onSubmit={(e) => handleSubmit(e)}
      >
        <TextField
          id="filled-basic"
          label="Title"
          variant="filled"
          name="title"
        />
        <TextField
          multiline
          id="filled-basic"
          label="Desc"
          variant="filled"
          name="desc"
        />
        <TextField
          type="number"
          id="filled-basic"
          label="Price"
          name="price"
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
            },
          }}
          variant="filled"
        />
        <TextField
          type="number"
          id="filled-basic"
          label="Rating"
          variant="filled"
          name="rating"
          htmlmax={5}
          onChange={(e) => validateNumber(e.target)}
          placeholder="1-5"
        />
        <TextField
          multiline
          id="filled-basic"
          label="Imgs"
          variant="filled"
          name="url"
        />
        <TextField
          id="filled-basic"
          label="Category"
          variant="filled"
          name="category"
        />
        <TextField
          multiline
          id="filled-basic"
          label="Colors"
          variant="filled"
          name="colors"
        />
        <Button htmlType="reset">Clear Form</Button>
        <Button
          className="border border-sky-300"
          htmlType="submit"
          type={"primary"}
        >
          {isLoading ? (
            <CircularProgress style={{ width: "1.22rem", height: "1.22rem" }} />
          ) : (
            "Create"
          )}
        </Button>
      </form>
    </>
  );
};

export default CreateProduct;
