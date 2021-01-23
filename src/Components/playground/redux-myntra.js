import { act } from "react-dom/test-utils";
import { createStore, combineReducers } from "redux";
import uuid from "uuid";
const addItem = ({ brand, category, price, src, createdAt = 0 } = {}) => ({
  type: "ADD_ITEM",
  baggedItem: {
    id: uuid(),
    brand,
    category,
    price,
    src,
    createdAt,
  },
});

const removeItem = ({ id } = {}) => ({
  type: "REMOVE_ITEM",
  id,
});

const baggedItemReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, action.baggedItem];
    case "REMOVE_ITEM":
      return state.filter(({ id }) => id !== action.id);
    default:
      return state;
  }
};

const store = createStore(
  combineReducers({
    baggedItems: baggedItemReducer,
  })
);

const demoState = {
  baggedItems: [
    {
      id: "asjhfkjaf",
      brand: "libas",
      category: "Kurta",
      price: "1023",
      src: "ajsdjhg",
      createdAt: 0,
    },
  ],
  filters: {
    text: "rent",
    sortBy: "price",
    startDate: undefined,
    endDate: undefined,
  },
};
