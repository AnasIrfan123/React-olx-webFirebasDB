// user profile folder firebase info
// delete ads and info tile descrip amount etc
// update items and info tile descrip amount etc
// sweetalert 
// add to cart with redux krna chaho to krlo
// theme change redux sy refresh par bh wohi rahegi
// portfolio saad ny apne software walo ko ban kar dia tha wohi us ne bola sunday ko donga 
// map    react-map-gl  map dashboard me lgna ha map ka icon map ka maker 1 state bnegi or uski location map ki enter kare to firebase me save bh ho 

// is prj ki ui ka pora kam bekhra pra ha responsive ness dekh lena ha apne
import { useNavigate } from "react-router-dom";

function Dashboard() {

    const navigate = useNavigate()
    return (
        <div>
            <h1>welcome to Dashboard</h1>

            <button
             style={{color: 'white', padding: '10px', backgroundColor: 'yellowgreen', borderRadius: '7px', fontWeight: 'bold'}}
             onClick={() => navigate('/addpost')}
             >addpost</button>




             
        </div>
    )
}

export default Dashboard;