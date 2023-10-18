import { apiUrl } from "@/environment/environment";

async function getProduct() {
  const response = await fetch("https://localhost:7213/api/Product");
    try {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
  
      return await response.json();
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  }

  async function addProduct(data) {
    console.log(data);
    try {
        const response = await fetch("https://localhost:7213/api/Product", {
            method: 'POST',
            body: data,
        });

        if (!response.ok) {
            throw new Error(`Network response was not ok: `);
        }
        return await response.json();
    } catch (error) {
        console.error('Error adding Employee:', error);
        throw error;
    }
}


  export{getProduct,addProduct}