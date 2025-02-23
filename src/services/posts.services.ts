import axios from "axios"

export const fetchAllPosts = async () => {
   const response = await axios.get("https://postms-g2cvgfeeg5cfbsdn.centralindia-01.azurewebsites.net/api/v1/posts");
   return response.data
}

export const createPosts = async (post: IPost) => {
   const response = await axios.post("https://postms-g2cvgfeeg5cfbsdn.centralindia-01.azurewebsites.net/api/v1/create", post);
   return response.data.data
}

export const editPosts = async (id: string, post:IPost) => {
   const response = await axios.put(`https://postms-g2cvgfeeg5cfbsdn.centralindia-01.azurewebsites.net/api/v1/posts/post/${id}`, post);
   return response.data.data
}

export const deletePosts = async (id: string) => {
   const response = await axios.delete(`https://postms-g2cvgfeeg5cfbsdn.centralindia-01.azurewebsites.net/api/v1/posts/post/${id}`);
   return response.data.data
}