import Axios from "axios";
const api = "http://localhost:3000";

export const getExample = async () => {
  return await Axios.get(`${api}/api/v1/question`);
};

export const postExample = async () => {
  return await Axios.post(`${api}/​api​/v1​/question`, {
    categoryId: "ExampleId",
    name: "ExapmleName",
    question: "ExampleQuestion",
    tips: "ExampleTips",
  });
};

export const putExample = async (id = 2, datos) => {
  return await Axios.put(`${api}/​api​/v1​/question/${id}`, datos);
  // ejemplo..... datos = {
  //   categoryId: "ExampleIdUpdated",
  //   name: "ExapmleNameUpdated",
  //   question: "ExampleQuestionUpdated",
  //   tips: "ExampleTipsUpdated",
  // }
};

export const deleteExample = async (id) => {
  return await Axios.delete(`${api}/api/v1/question/${id}`);
};
