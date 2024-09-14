import { InputAdornment, TextField } from "@mui/material";
import { Button } from "antd";
import React from "react";

const CreateProduct = () => {
  return (
    <>
      <h1 className="text-2xl my-5">Create Product</h1>
      <p></p>
      <form className="max-w-96 flex flex-col gap-2">
        <TextField id="filled-basic" label="Title" variant="filled" />
        <TextField multiline id="filled-basic" label="Desc" variant="filled" />
        <TextField
          type="number"
          id="filled-basic"
          label="Price"
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
        />
        <TextField multiline id="filled-basic" label="Imgs" variant="filled" />
        <TextField id="filled-basic" label="Category" variant="filled" />
        <TextField
          multiline
          id="filled-basic"
          label="Colors"
          variant="filled"
        />
        <Button>Create</Button>
      </form>
    </>
  );
};

export default CreateProduct;
