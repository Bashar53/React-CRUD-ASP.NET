import React from 'react';

import {

  getProduct,deleteProduct

} from '@/services/product.service'



import { Button, Table } from "react-bootstrap";

import { useEffect, useState } from 'react';



import Link from 'next/link';






const Product = () => {

  const [data, setData] = useState();

  useEffect(() => {
    const getData = async () => {
      const getAllData = await getProduct();
      setData(getAllData);
      console.log(data);
      
    };    
    getData();

  }, []);

  const handleDelete = async (id) => {
    const confirm = window.confirm("Are you sure to delete this product?");
    if (confirm) {
      try {
        await deleteProduct(id);
      } catch (error) {
        console.error("Error deleting country:", error);
      }
    }
  };


  return (
   



    <div>

<div className="p-3 mb-2 bg-success text-white">
     <h2>Product List</h2>
    </div>
    <div>
                  <Link
                    className="btn btn-outline-primary btn-sm"
                    href={"/product/create"}
                  >
                    {" "}
                    Add Product
                  </Link>
                </div>
    <table className="table table-dark">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Product Name</th>
      <th scope="col">Description</th>
      <th scope="col">Country ID </th>
      <th scope="col">Rating</th>
      <th scope="col">Price</th>
      <th scope="col">Barcode</th>
      <th scope="col">Sell Price</th>
      <th scope="col">Actions</th>


    </tr>
  </thead>
  <tbody>

 
  {
    
                      data?.map((da, index) => {
                     
                        return (
                          <tr key={index}>
                            <td>{index+1}</td>
                          
                            <td> {da.productName} </td>
                            <td> {da.description} </td>
                            <td> {da.countryId} </td>
                            <td> {da.rating} </td>
                            <td> {da.price} </td>
                            <td> {da.barCode} </td>
                            <td> {da.sellPrice} </td>


                            <Link
                                href={`product/edit/${da.id}`}
                                className="btn btn-sm me-3 btn-success"
                              >
                                {" "}
                                Edit{" "}
                              </Link>

                              <Button
                                className="btn btn-sm btn-danger"
                                onClick={() => handleDelete(da.id)}
                              >
                                Delete
                              </Button>

                            
                          
                           
                          </tr>
                        );
                      })
                      }
      
    
  </tbody>
</table>
  </div>
  




  );


  


      }
export default Product;



{/* {data?.map((item, index) => (
//   <tr key={index}>
//     <td>{item.id}</td>
//     <td>{item.productName}</td>
//     <td>{item.description}</td>
//     <td>{item.countryId}</td>

//   </tr>
// ))} */}