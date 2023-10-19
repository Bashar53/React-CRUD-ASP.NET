import React, { useEffect, useState } from 'react';
import { getSingleProduct ,updateProduct} from '@/services/product.service';
import { useRouter } from "next/router";


const Edit = () => {

  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()
  const id = router.query.id;
  console.log(id);

  
    


  


  
  useEffect(() => {
    const getData = async (id) => {
       
            const getAllData = await getSingleProduct(id);
            setData(getAllData);
           
            setIsLoading(false);
           getAllData;
          console.log("All data : ",getAllData);

          console.log("single data : " , data.productName);


       
            
            
        
    };
   
    if (id !== undefined) {
        getData(id);
        console.log("data2 : ",getData(id));
    }




}, [id]);

const handleChange = (e) =>
  {
    const {name , value , type,checked,files } = e.target;
    setData({ ...data, [name]: value }); 
  };


const handleEdit = async (e) => {
  e.preventDefault();
  try {
      const prData = new FormData(e.target)
      const addPR = await updateProduct(id, prData);
      router.push("/product")
  } catch (error) {
      console.error('Error adding Product:', error);
  }
}



  return (
    <div>
      <div>
            {isLoading ? <p>Loading ...</p> : <>
                <div className='emp-bg'>
                    <section className="content">
                        <div className="container">
                            <div className="card">
                                <div className="card-header">
                                    <h3 className="card-title">Edit Product</h3>
                                </div>
                                <form onSubmit={(e) => handleEdit(e)}>
                                    <div className="card-body">

                                        <input type="hidden" name="id" value={data.id} />
                                       
                                        <div className="row mt-2">
                                            <div className="col-md-6">
                                                <div className="row mb-2">
                                                    <label className="col-md-3 col-form-label" htmlFor="productName">Product Name</label>
                                                    <div className="col-md-9">
                                                        <input value={data.productName} onChange={(e) => handleChange(e)} className="form-control" type="text" name="productName" />
                                                    </div>
                                                </div>
                                                <div className="row mb-2">
                                                    <label className="col-md-3 col-form-label" htmlFor="description">Description</label>
                                                    <div className="col-md-9">
                                                        <input value={data.description} onChange={(e) => handleChange(e)} className="form-control" type="text" name="description" />
                                                    </div>
                                                </div>

                                                <div className="row mb-2">
                                                    <label className="col-md-3 col-form-label" htmlFor="countryId">CountryId</label>
                                                    <div className="col-md-9">
                                                        <input value={data.countryId} onChange={(e) => handleChange(e)} className="form-control" type="number" name="countryId" />
                                                    </div>
                                                </div>

                                                <div className="row mb-2">
                                                    <label className="col-md-3 col-form-label" htmlFor="rating">Rating</label>
                                                    <div className="col-md-9">
                                                        <input value={data.rating} onChange={(e) => handleChange(e)} className="form-control" type="text" name="rating" />
                                                    </div>
                                                </div>

                                                <div className="row mb-2">
                                                    <label className="col-md-3 col-form-label" htmlFor="price">Price</label>
                                                    <div className="col-md-9">
                                                        <input value={data.price} onChange={(e) => handleChange(e)} className="form-control" type="text" name="price" />
                                                    </div>
                                                </div>

                                                <div className="row mb-2">
                                                    <label className="col-md-3 col-form-label" htmlFor="barCode">Bar Code</label>
                                                    <div className="col-md-9">
                                                        <input value={data.barCode} onChange={(e) => handleChange(e)} className="form-control" type="text" name="barCode" />
                                                    </div>
                                                </div>

                                                <div className="row mb-2">
                                                    <label className="col-md-3 col-form-label" htmlFor="sellPrice">Sell Price</label>
                                                    <div className="col-md-9">
                                                        <input value={data.sellPrice} onChange={(e) => handleChange(e)} className="form-control" type="text" name="sellPrice" />
                                                    </div>
                                                </div>


                                                

                                                

                                                
                                                
                                    
                                              
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card-footer">
                                        <div className="text-end">
                                            <button type="submit" className="btn btn-outline-primary btn-sm">
                                                <i className="far fa-save"></i> Edit
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </section>
                </div>



            </>}
        </div>
    </div>
  );
};

export default Edit;