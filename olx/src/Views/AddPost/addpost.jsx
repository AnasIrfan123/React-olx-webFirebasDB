import './addpost.css'
import { adPostToDB } from '../../config/firebase';

import { RiCurrencyFill } from "react-icons/ri";
import { HiPencilSquare } from "react-icons/hi2";
import { MdDescription } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

function AddPost() {

    const navigate = useNavigate()

    const [title, setTitle] = useState()
    const [descrip, setDescrip] = useState()
    const [amount, setAmount] = useState()
    const [image, setImage] = useState()

    const CreatedAT = new Date()  //created new date variable 

    const DataSubmit = async () => {

        if (!title || !descrip || !amount || !image) {
            alert('please fill all the input fields')
            return
        }

        if (title.trim() === '' || descrip.trim() === '') {
            alert('please enter the data in input')
            return
        }

        const amountNumber = parseFloat(amount)// Convert amount to number

        console.log('title:', title)
        console.log('descrip:', descrip)
        console.log('CreatedAT ', CreatedAT);
        console.log('amount:', amountNumber) // Display amount as number
        console.log('image=> ', image);

        try {

         await adPostToDB({

          title,
          descrip,
          amount: amountNumber, // Set amount as number

          image,

          CreatedAT
         })

         navigate('/dashboard')

        } catch (e) {
            alert(e.message)
            console.log(e.message);
        }
        // const ad = {
        //     title,
        //     descrip,
        //     amount: amountNumber,
        //     image
        // }
        // adPostToDB(ad)

    } 
//jb submit par click karen to navigate dashboard par jaye
    return ( 
        <div className='addpostBody'>
             
             <div className="addpostcontent">

                <div className="addpostHeader">Add Post</div>

                <div>

                    <div className="addpostfield">
                        <input type="text" placeholder='Enter Post Title' onChange={(e) => setTitle(e.target.value)}/>
                        <span><HiPencilSquare /></span>
                    </div>

                    <div className="addpostfield">
                        <input type="text" placeholder='Enter Post Descript' onChange={(e) => setDescrip(e.target.value)}/>
                        <span><MdDescription /></span>
                    </div>

                    <div className="addpostfield">
                        <input type="number" placeholder='Enter Post Amount' onChange={(e) => setAmount(e.target.value)}/>
                        <span><RiCurrencyFill /></span>
                    </div>

                    <div class='addpostfield'>
                         <input type="file" onChange={(e) => setImage(e.target.files[0])} />
                        <button>Select File</button>
                    </div>

                    <button className='addpostBtn' onClick={DataSubmit}>Submit</button>
<br /><br />
                    <button className='addpostBtn' onClick={() => navigate(-1)}>Cencel</button>

                </div>

             </div>
        </div>
    )
}
//addpost sy amount ka sth discount or stock quantity search kro google ya youtube dashboard me enter kr wao
export default AddPost; 