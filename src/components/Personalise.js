import { FaApple } from "react-icons/fa";

export default function Personalise(){
    return(
        <section className='flex gap-5 w-screen h-screen justify-center items-center'>
        <div className='bg-[#f5f5f7] h-[80vh] flex flex-col justify-center items-center'> 
            <div className='flex justify-center items-center'><FaApple className='text-2xl'/><h1 className='text-[#1c1c1e] text-2xl font-bold'>One</h1></div>
        <h1 className='text-[#1c1c1e] text-xl w-72 mb-5'>Juntamos até cinco serviços da Apple para você aproveitar mais por menos.</h1>
        <div className='flex justify-center items-center gap-5 w-[400px] flex-wrap'>
          <img className='rounded-2xl'src='https://cdn.jim-nielsen.com/ios/512/apple-music-2020-09-25.png' width={100} height={300}/>
          <img src='https://cdn-icons-png.flaticon.com/512/831/831330.png'  width={100} height={300}/>
          <img src='https://km.support.apple.com/kb/securedImage.jsp?productid=PL204&size=240x240' width={100} height={300}/>
          <img src='https://www.podfeet.com/blog/wp-content/uploads/2020/12/Fitness-Logo.png' width={100} height={300}/>
          <img src='https://freepngimg.com/thumb/iphone/68112-cloud-apple-drive-icloud-iphone-free-frame.png' width={100} height={300}/>
        </div>
        </div>
        <div className='bg-[#f5f5f7] h-[80vh] flex flex-col justify-center items-center'> 
        <h1 className='text-[#1c1c1e] text-2xl font-bold w-72 mb-5'>Sincronize seu estilo com o Apple Watch.</h1>
        <button className='text-sky-500 font-bold mb-5'>Comprar as novas pulseiras</button>
        <img src='https://macmagazine.com.br/wp-content/uploads/2022/09/07-pulseiras-apple-watch.jpeg' width={400} height={400}/>
        </div>
      </section>
    )
}