import axios from "axios";
import { toast } from 'react-toastify';
 export async function helper(data){
    await axios.post("https://formspree.io/f/moqgadak",data).then((resp)=>{
        toast.success("Your Programming Journey Begins Now", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    }).catch((error)=>{
        toast.error("Something Went Wrong Path Error", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            style:{
                fontfamily:"Nothing"
            }
        });
    })
}