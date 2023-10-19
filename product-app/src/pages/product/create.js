import Link from 'next/link';
import React, { useEffect, useState } from 'react';

import { addProduct } from '@/services/product.service';
import { useRouter } from 'next/router';
import { Form } from 'react-bootstrap';

const create = () => {


    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        const addEmp = await addProduct(data);
        e.target.reset();
       
      router.push(`/product`);
      };
    return (


        <div>
         


 
    <div className="container">
      <h2>Add product List</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="form-group">
          <label htmlFor="productName">Product Name:</label>
          <input type="text" className="form-control" id="productName" name="productName" required />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input type="text" className="form-control" id="description" name="description" required />
        </div>

        <div className="form-group">
          <label htmlFor="countryId">countryId</label>
          <input type="number" className="countryId" id="countryId" name="countryId" required />
        </div>

        <div className="form-group">
          <label htmlFor="rating">Rating</label>
          <input type ="number" className="form-control" id="rating" name="rating"  required />
        </div>

        <div className="form-group">
          <label htmlFor="price">price</label>
          <input type="number" className="price" id="price" name="price" required />
        </div>

        <div className="form-group">
          <label htmlFor="barCode">barCode</label>
          <input type="text" className="barCode" id="barCode" name="barCode" required />
        </div>

        <div className="form-group">
          <label htmlFor="sellPrice">sell price</label>
          <input type="number" className="sellPrice" id="sellPrice" name="sellPrice" required />
        </div>

        

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
 






    
    
            </div>
  

       
    );
};

export default create;