
import { useNavigate } from 'react-router-dom';
import suc from '../../assets/sucess.png'
export default function SucessFul() {
  const navigate = useNavigate()
    
        const handleGoBack = () => {
        navigate(-1); // This will go back to the previous page in the browser history
      };
  return (
    <div className="bg-[#0b0f1d] flex justify-center min-h-screen">
      <div className=' mt-[200px] h-[300px] w-full relative'>
       <div className='bg-[#2C2C30] h-full ab  flex-col items-center justify-center w-full relative'>
       
          <img src={suc} alt="" />
      
       </div>
      </div>
    </div>
  )
}
