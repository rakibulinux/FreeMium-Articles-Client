import React, { useState } from 'react';
import { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { FaPencilAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Spinner from '../../../components/Spinner/Spinner';
import { APIContext } from '../../../contexts/APIProvider';
import CategoryDeletModal from '../DashbordCategory/CategoryDeletModal/CategoryDeletModal';


const DashbordCategory = () => {
    const [deleteCategory,setDeleteCategory]=useState(null)
    const closeCategoryModal=()=>{
        setDeleteCategory(null);
    }
// category data
const { categoryButton, isCategoryLoading,reFetchCategory } = useContext(APIContext);
if (isCategoryLoading) {
  return <Spinner />;
}

// delete seller
const categoryDeleteHandl=category=>{
    fetch(`${process.env.REACT_APP_API_URL}/categoryButton/${category._id}`,{
      method:'DELETE'
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      if(data.deletedCount>0){
        toast.success(`successfully delete ${category.CategoryName}`)
        reFetchCategory()
      }
    })
  }
    return (
        <div>
           <div className='flex justify-between mb-3'>
           <h1 className='text-2xl font-bold text-[#616060]'>Category</h1>
           <Link to='/dashboard/addCategory'><button className='btn  bg-[#616060]'>Add category</button></Link>
           </div>
            <div className="overflow-x-auto w-full">
  <table className="table w-full">
    
    <thead>
      <tr>
        <th>
          
        </th>
        <th>name</th>      
        
        <th>delete</th>
        <th className='md:hidden lg:block'>Edit</th>
      </tr>
    </thead>
    <tbody>
       {/* <!-- row 1 --> */}
      {
        categoryButton?.map((category,i)=><tr 
        key={category._id} 
        category={category}
        >
        <th>
          <label>
            {i+1}
          </label>
        </th>
       
        <td>
       {category.CategoryName}          
        </td>
        <td><label onClick={()=>setDeleteCategory(category)} htmlFor="delete-modal" className="btn btn-ghost btn-xs">delete</label></td>
        
        <th>         
            
              <button  className="btn btn-ghost btn-xs"> <FaPencilAlt /></button>
                
         </th>
      </tr>)
      }
   
    </tbody>  
    
  </table> 
</div>
{
  deleteCategory && <CategoryDeletModal
  title = {`are you sure to delete ${deleteCategory.CategoryName}`}
message ={`if you delete ${deleteCategory.CategoryName},it can not undone`}
closeCategoryModal={closeCategoryModal}
btnName = {'Delete'}
deleteHandler= {categoryDeleteHandl}
categoryData = {deleteCategory}
  ></CategoryDeletModal>
}
        </div>
    );
};

export default DashbordCategory;