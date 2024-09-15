import { api } from "./index";

export const productsApi = api.injectEndpoints({
  endpoints: (build) => ({
    getProduct: build.query({
      query: (params) => ({
        url: `/products`,
        params,
      }),
      providesTags: ["Products"],
    }),
    getCategories: build.query({
      query: (params) => ({
        url: "/categories",
        params,
      }),
      providesTags: ["Categories"],
    }),
    createProduct: build.mutation({
      query: ({ body }) => ({
        url: "/products",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Products"],
    }),
    createCategory: build.mutation({
      query: ({ body }) => ({
        url: "/categories",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Categories"],
    }),
    updateProduct: build.mutation({
      query: ({ id, body }) => ({
        url: `/products/${id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["Products"],
    }),
    updateCategory: build.mutation({
      query: ({ id, body }) => ({
        url: `/categories/${id}`,
        method: "PUT",
        body,
      }),
    }),
    deleteProduct: build.mutation({
      query: (id) => ({
        url: `/products/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Products"],
    }),
    deleteCategory: build.mutation({
      query: ({ id }) => ({
        url: `/categories/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Categories"],
    }),
  }),
});

export const {
  useGetProductQuery,
  useGetCategoriesQuery,
  useCreateProductMutation,
  useCreateCategoryMutation,
  useUpdateProductMutation,
  useUpdateCategoryMutation,
  useDeleteProductMutation,
  useDeleteCategoryMutation,
} = productsApi;
