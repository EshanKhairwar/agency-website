import Image from "next/image"

const MainPage = () => {
  return (
    <>
   <main>
   <div className="heading mt-0">
   <div className="flex m-0 ms-12"><h1>We are a</h1> <span className="ms-3 text-purple-700"><h1>Creative</h1></span></div>
    <h1 className="ms-12 mt-0">Design Agency</h1>
   </div>
   <div className="cardContainer flex gap-5">
     <div className="first ms-12 gap-3 bg-purple-50">
        <Image src='/images/banner.jpg' className="float-left" height={200} width={300}/>
        <h4 className="text-center">Beauty</h4>
        <p className="text-center text-balance">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur iste unde esse, natus aut consequuntur cumque asperiores magnam nulla ipsum, reiciendis dolore delectus quos.</p>
     </div>
     <div className="second ms-12 gap-3 bg-purple-50">
        <Image src='/images/banner.jpg' className="float-left" height={200} width={300}/>
        <h4 className="text-center">Beauty</h4>
        <p className="text-center text-balance">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur iste unde esse, natus aut consequuntur cumque asperiores magnam nulla ipsum, reiciendis dolore delectus quos.</p>
     </div>
   </div>
   </main>
    </>
  )
}

export default MainPage