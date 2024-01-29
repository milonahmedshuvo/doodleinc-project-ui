import React from "react";
import toast from "react-hot-toast";

const Modal = ({ comment }) => {

           const {_id} = comment;
    const handleCommentUpdate = ( event ) => {
        event.preventDefault()
          const name = event.target.name.value;
          const email = event.target.email.value;
          const comment = event.target.comment.value;
          
          const updatedoc = {
            name,
            email,
            comment
          }
          console.log(updatedoc)
          fetch(`http://localhost:5000/commentUpdate/${_id}`, {
            method: "PATCH",
            headers: {
              "content-type": "application/json"
            },
            body: JSON.stringify(updatedoc)
          })
          .then((res) => res.json())
          .then((data) =>{
            toast.success("comment update succes")
          } )
          .catch((err) => {
            toast.error("comment faild")
          })
    }


  



  return (
    <div>
      
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Your comment update!</h3>
          
          <div className="modal-action">



            <form onSubmit={handleCommentUpdate} method="dialog">
              <input
                type="text"
                name="name"
                defaultValue={comment.name}
                id=""
                className="border border-gray-300 py-2 rounded  pl-2 w-full mx-auto outline-none"
              />
              <input
                type="text"
                name="email"
                defaultValue={comment.email}
                id=""
                className="border border-gray-300 py-2 rounded  pl-2 w-full mx-auto outline-none"
              />

              <input
                type="text"
                name="comment"
                defaultValue={comment.body}
                id=""
                className="border border-gray-300 py-2 rounded  pl-2 w-full mx-auto outline-none"
              />
             
                
               
                <input
                type="submit"
                value="Comment"
                className="bg-black text-white font-semibold px-4 py-1 mt-2 "
              />
             
              

            </form>
            
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Modal;
