import * as React from "react";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import { Button, message } from "antd";
import { useUpdateProductMutation } from "@/redux/api/product-api";

export default function UniModal({ title, product }) {
  const [open, setOpen] = React.useState(false);

  const [updateProduct, { isLoading }] = useUpdateProductMutation();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    data.price = +data.price;
    data.rating = +data.rating;
    data.oldPrice = +data.oldPrice;
    data.url = data.url.split(",");
    data.colors = data.colors.split(",");

    let isPut = true;

    let keysList = Object.keys(data);
    keysList.forEach((item) => {
      if (!data[item]) {
        isPut = false;
        message.warning("Please fill all inputs!");
      }
    });

    if (isPut) {
      setOpen(false);
      updateProduct({ id: product.id, body: data });
    }
  };

  return (
    <div>
      <Button onClick={handleOpen}>{title}</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="min-h-screen relative flex items-center justify-center flex-col gap-3">
          <span
            className="absolute top-[2rem] right-[2rem] text-2xl text-slate-200 cursor-pointer"
            onClick={handleClose}
          >
            X
          </span>
          <h2 className="text-2xl text-slate-100">Edit product</h2>
          <form
            className="bg-slate-100 p-5 grid grid-cols-2 gap-4 rounded-md"
            onSubmit={(e) => handleSubmit(e)}
          >
            <TextField
              id="title"
              label="Title"
              name="title"
              variant="outlined"
              size="small"
              defaultValue={product.title}
            />
            <TextField
              id="rating"
              label="Rating"
              name="rating"
              variant="outlined"
              size="small"
              defaultValue={product.rating}
              type="number"
            />
            <TextField
              id="desc"
              label="desc"
              name="desc"
              variant="outlined"
              size="small"
              defaultValue={product.desc}
              className="col-span-2"
            />
            <TextField
              id="oldPrice"
              label="Old price"
              name="oldPrice"
              variant="outlined"
              size="small"
              defaultValue={product.oldPrice}
              type="number"
            />
            <TextField
              id="price"
              label="Price"
              name="price"
              variant="outlined"
              size="small"
              defaultValue={product.price}
              type="number"
            />
            <TextField
              id="url"
              label="Images"
              name="url"
              variant="outlined"
              size="small"
              defaultValue={product.url.join(",")}
              className="col-span-2 min-h-32"
              multiline
            />
            <TextField
              id="category"
              label="Category"
              name="category"
              variant="outlined"
              size="small"
              defaultValue={product.category}
            />
            <TextField
              id="colors"
              label="Colors"
              name="colors"
              variant="outlined"
              size="small"
              defaultValue={product.colors}
            />
            <Button type={"primary"} htmlType="submit" className="col-span-2">
              Edit
            </Button>
          </form>
        </div>
      </Modal>
    </div>
  );
}
