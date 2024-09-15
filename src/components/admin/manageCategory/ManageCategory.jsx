import {
  useDeleteCategoryMutation,
  useGetCategoriesQuery,
  useUpdateCategoryMutation,
} from "@/redux/api/product-api";
import { CircularProgress } from "@mui/material";
import { Button } from "antd";
import React, { useRef, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ManageCategory = () => {
  const [currentValue, setCurrentValue] = useState("false");
  const [currentId, setCurrentId] = useState(0);
  const { data, isLoading } = useGetCategoriesQuery();
  const [deleteCategory, { isLoading: deleteLoading }] =
    useDeleteCategoryMutation();
  const [updateCategory] = useUpdateCategoryMutation();

  const ref = useRef();

  const handleEdit = () => {
    console.log(currentValue);
    console.log(currentId);

    console.log(ref.current.value);

    updateCategory({ id: currentId, body: ref.current.value });
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="grid gap-2">
      {data?.map((item, idx) => (
        <div
          key={item.id}
          className="flex items-center gap-4 p-3 border-2 border-sky-100"
        >
          <span className="text-base">{item.title}</span>

          <div>
            <Button
              onClick={() => {
                handleOpen();
                setCurrentId(item.id);
                setCurrentValue(item.title);
              }}
            >
              Edit
            </Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style} className="flex gap-3 flex-col rounded-md">
                <input
                  ref={ref}
                  defaultValue={currentValue}
                  className="border-2 p-1 text-sm"
                />
                <Button onClick={() => handleEdit(item.id)}>Done</Button>
              </Box>
            </Modal>
          </div>

          <Button
            size="small"
            className="text-sm bg-red-200"
            onClick={() => deleteCategory({ id: item.id })}
          >
            {deleteLoading ? (
              <CircularProgress
                style={{ width: "1.22rem", height: "1.22rem" }}
              />
            ) : (
              "Delete"
            )}
          </Button>
        </div>
      ))}
    </div>
  );
};

export default ManageCategory;
