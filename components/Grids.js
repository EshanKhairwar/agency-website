import Image from "next/image"

const Grids = () => {
  return (
    <>
    <div className="grid-container">
        <div className="first card">
        <Image
     src='/images/banner.jpg'
     alt="banner"
      width={1700}
      height={400}
    />
        </div>
        <div className="second card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
    </div>
    </>
  )
}

export default Grids