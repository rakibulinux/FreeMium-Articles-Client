import React, { useState } from 'react';
import { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { FaPencilAlt } from 'react-icons/fa';
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
        toast.success('successfully delete')
        reFetchCategory()
      }
    })
  }
    return (
        <div>
            <h1>DashbordCategory</h1>
            <div className="overflow-x-auto w-full">
  <table className="table w-full">
    
    <thead>
      <tr>
        <th>
          
        </th>
        <th>name</th>      
        
        <th>delete</th>
        <th>Edit</th>
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