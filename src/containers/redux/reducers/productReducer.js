import { ActionTypes } from "../types/action-types";

const initialState = {
  products: [
    {
      id: "1234ads421egjdsc",
      name: "NIKE Huararche 2019",
      description:
        "Get comfy and comfortable with the new 2019 designer sneaker for all your events",
      image: "some_image_link",
      price: "₦45,000 - ₦90,000",
      location: "Lagos",
      stock: 5,
    },
  ],
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_PRODUCTS:
      return state;
    default:
      return state;
  }
};
