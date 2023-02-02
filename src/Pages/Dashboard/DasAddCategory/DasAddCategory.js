import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';


const DasAddCategory = () => {
    const navigate = useNavigate()
    const {register,handleSubmit,formState: { errors },} = useForm();

    const addCategoryHandler=data=>{
        console.log(data.categoryname)
        const newCategory ={CategoryName:data.categoryname}
        fetch(`${process.env.REACT_APP_API_URL}/addNewCategory`,{
      method:"POST",
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(newCategory)
    })
    .then(res=>res.json())
    .then(result=>{
      console.log(result)
      toast.success(`${data.categoryname} added successfully`)
      navigate('/dashboard/category')
    })
    }
    return (
        <div>
         <Link to='/dashboard/category'> <button className='btn '>back to category</button></Link>
             <div  className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto p-10 my-20'>
             <h1 className="text-2xl font-bold text-center">add category</h1>
             {/* added form */}
<form onSubmit={handleSubmit(addCategoryHandler)}>
<div className="form-control">
  <label className="label">
    <span className="label-text">category name</span>   
  </label>
  <input type="text" {...register("categoryname",{required:'category name is required'})} placeholder="category name" className="input input-bordered w-full " />
  {errors.categoryname && <p role="alert">{errors.categoryname?.message}</p>}
</div> 
<div className="form-control mt-6">
      <input className=" bg-black input input-bordered w-full  text-white" value="Submit" type="submit" />
      </div>
</form>
             </div>
            
        
        </div>
    );
};

export default DasAddCategory;