import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, Navigate, useNavigate } from 'react-router-dom';


const Media = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    // const imageHostKey ='733ccff8b2166f98b7716e88c8d0bc09';
    const imageHostKey =process.env.REACT_APP_IMGBB_KEY || 'b423aca06460e394bc851f7b77e43154';

    // console.log(imageHostKey);

    const handleAddProduct = data => {
        console.log(data);

        // 733ccff8b2166f98b7716e88c8d0bc09

        // const imageHostKey = 'b423aca06460e394bc851f7b77e43154';
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgData => {
            if(imgData.success){
                console.log(imgData.data.url);
                const comment = {
                    name: data.name, 
                    email: data.email,
                    image: imgData.data.url,
                    // price:data.price,
                    // condition: data.codition,
                    // location:data.location,
                    // phone: data.phone,
                    // description: data.description,
                    // purchase: data.purchase


                    

                }

                // save information to the database
                // fetch('https://resale-here-server.vercel.app/products', {
                fetch('https://spectra-server-two.vercel.app/create', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json', 
                        // authorization: `bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(comment)
                })
                .then(res => res.json())
                .then(result =>{
                    console.log(result);
                    toast.success(`${data.name} is added successfully`);
                    Navigate('/myMedia')
                })
            }
        })
        
    }
  
      
        return (
            <div className='w-full p-7'>
            <h2 className="text-4xl">Post your comment</h2>
            <form className='grid grid-cols-2 gap-6 w-full bg-slate-200  p-12' onSubmit={handleSubmit(handleAddProduct)}>
              
                
    
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">upload your Photo</span></label>
                    <input type="file" {...register("image", {
                        required: "Photo is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.img && <p className='text-red-500'>{errors.img.message}</p>}
                </div>

                <div className="form-control w-full h-full scroll">
                    <label className="label"> <span className="text">Write your comment</span></label>
                    
                    <input placeholder='write your comment'  type="text" {...register("name", {
                        // required: "Name is Required"
                        placeholder:"Write a comment...",
                       
                    })} className="input input-bordered w-full h-48 textarea" />
                    {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                </div>
               
                <br />
                <Link to={'/myMedia'}><input className='btn btn-accent w-full mt-4' value="Post Comment" type="submit" /></Link>
            </form>
        </div>
    
    );
};

export default Media;