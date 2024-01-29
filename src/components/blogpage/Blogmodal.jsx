import React from "react";
import toast from "react-hot-toast";

const Blogmodal = ({updateData}) => {
         const {_id, body, title} = updateData;

         const handleblogupdate = (event) => {
          event.preventDefault()
          console.log(_id)
          const title = event.target.title.value;
          const  description = event.target.description.value;
          const blog = {
            title,
            description
          }
          fetch(`http://localhost:5000/blogupdate/${_id}`, {
            method: "PATCH",
            headers: {
              'content-type' : "application/json"
            },
            body: JSON.stringify(blog)
          })
          .then((res) => res.json())
          .then((data) => {
            toast.success("update succesfully")
          })
          .catch((err) => {
            toast.error("update faild")
            console.log(err)
          })
         }

    
  return (
    <div>
      
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          
          <div className="modal-action">
            <form method="dialog" onSubmit={handleblogupdate}>

            <input type="text" name="title" defaultValue={title} required placeholder='Title' id="" className='border border-gray-400 py-2 rounded  pl-2 w-full mx-auto outline-none' />
         <textarea name="description" required placeholder='Description' id="" cols="30" rows="5" className='border border-gray-400 py-2 mt-4 rounded  pl-2 w-full mx-auto outline-none' ></textarea>
              
              <div className="flex gap-4">
              <button className=" text-white w-1/2 bg-slate-500 py-1 font-medium" type="submit">Update</button>
              <button className="btn bg-gray-400 w-1/2 font-medium ">Close</button>
              </div>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Blogmodal;
