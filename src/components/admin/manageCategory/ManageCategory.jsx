import {
  useDeleteCategoryMutation,
  useGetCategoriesQuery,
  useUpdateCategoryMutation,
} from "@/redux/api/product-api";
import { CircularProgress } from "@mui/material";
import { Button } from "antd";
import React, { useRef, useState } from "react";

const ManageCategory = () => {
  const [isEditing, setIsEditing] = useState(false);
  const { data, isLoading } = useGetCategoriesQuery();
  const [deleteCategory, { isLoading: deleteLoading }] =
    useDeleteCategoryMutation();

  const [updateCategory, { isLoading: isUpdating }] =
    useUpdateCategoryMutation();

  const ref = useRef();

  const handleEdit = () => {
    console.log(ref.current);
  };

  return (
    <div className="grid gap-2">
      {data?.map((item, idx) => (
        <div
          key={item.id}
          className="flex items-center gap-4 p-3 border-2 border-sky-100"
        >
          {isEditing ? (
            <input
              ref={ref}
              defaultValue={item.title}
              className="border-2 p-1 text-sm"
            />
          ) : (
            <span className="text-base">{item.title}</span>
          )}
          {isEditing ? (
            <Button
              onClick={() => handleEdit()}
              className="bg-green-200"
              size="small"
            >
              Done
            </Button>
          ) : (
            <Button size="small" onClick={() => setIsEditing((p) => !p)}>
              Edit
            </Button>
          )}

          <Button
            size="small"
            className="text-sm bg-red-200"
            onClick={() => deleteCategory({ id: item.id })}
          >
            {" "}
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
