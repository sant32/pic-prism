import ImageCard from "./ImageCard";
import { MdShoppingCart } from "react-icons/md";
import { IoIosHeart } from "react-icons/io";

const PhotoGallery = () => {
  return (
    <div className="my-20 bg-white flex flex-col justify-center items-center">
      <h3 className="text-3xl font-semibold my-14">Photos</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 bg-20">
        {/* <div className="rounded-lg bg-white shadow-lg p-2">
          <div className="w-full h-[200px] overflow-hidden rounded-2xl">
            <img
              src="https://images.pexels.com/photos/26559989/pexels-photo-26559989/free-photo-of-a-person-s-feet-are-on-the-edge-of-a-boat.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="asset"
              className="w-full h-full hover:scale-105 transition-all ease-linear duration-300 transform cursor-pointer"
            />
          </div>
          <p className="font-semibold text-white bg-black w-fit px-5 py-1 rounded-full text-sm mt-3">Sant29

          </p>
          <div className="flex justify-between items-center mt-2">
            <div>
                <h3 className="text-lg font-semibold">Dark wheather</h3>
                <p className="text-gray-500">Price : $20</p>
            </div>
            <div className="flex gap-5 justify-center items-center">
            <MdShoppingCart className="text-2xl text-black cursor-pointer hover:scale-110 transition-all ease-linear duration-300" />
            <IoIosHeart className="text-2xl text-red-500 cursor-pointer hover:scale-110 transition-all ease-linear duration-300" />
            </div>
          </div>
        </div> */}
       <ImageCard 
        title='Dark Wheather' 
        author='sant29'
        img='https://images.pexels.com/photos/26559989/pexels-photo-26559989/free-photo-of-a-person-s-feet-are-on-the-edge-of-a-boat.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        price={10}
        icon1={<MdShoppingCart className="text-2xl text-black cursor-pointer hover:scale-110 transition-all ease-linear duration-300" />}
        icon2={<IoIosHeart className="text-2xl text-red-500 cursor-pointer hover:scale-110 transition-all ease-linear duration-300" />}
        />
      <ImageCard 
        title='Light' 
        author='veer08'
        img='https://images.pexels.com/photos/11258148/pexels-photo-11258148.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load'
        price={4}
        icon1={<MdShoppingCart className="text-2xl text-black cursor-pointer hover:scale-110 transition-all ease-linear duration-300" />}
        icon2={<IoIosHeart className="text-2xl text-red-500 cursor-pointer hover:scale-110 transition-all ease-linear duration-300" />}
        />

<ImageCard 
        title='Bag' 
        author='Prabhu'
        img='https://images.pexels.com/photos/122390/pexels-photo-122390.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        price={8}
        icon1={<MdShoppingCart className="text-2xl text-black cursor-pointer hover:scale-110 transition-all ease-linear duration-300" />}
        icon2={<IoIosHeart className="text-2xl text-red-500 cursor-pointer hover:scale-110 transition-all ease-linear duration-300" />}
        />

<ImageCard 
        title='Wall' 
        author='shaat9'
        img='https://images.pexels.com/photos/2932020/pexels-photo-2932020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        price={5}
        icon1={<MdShoppingCart className="text-2xl text-black cursor-pointer hover:scale-110 transition-all ease-linear duration-300" />}
        icon2={<IoIosHeart className="text-2xl text-red-500 cursor-pointer hover:scale-110 transition-all ease-linear duration-300" />}
        />

<ImageCard 
        title='Beach' 
        author='sandeep'
        img='https://images.pexels.com/photos/26731546/pexels-photo-26731546/free-photo-of-kayak.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        price={9}
        icon1={<MdShoppingCart className="text-2xl text-black cursor-pointer hover:scale-110 transition-all ease-linear duration-300" />}
        icon2={<IoIosHeart className="text-2xl text-red-500 cursor-pointer hover:scale-110 transition-all ease-linear duration-300" />}
        />

<ImageCard 
        title='Moon' 
        author='sank'
        img='https://images.pexels.com/photos/26546430/pexels-photo-26546430/free-photo-of-a-photo-of-the-moon-taken-from-a-window.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        price={4}
        icon1={<MdShoppingCart className="text-2xl text-black cursor-pointer hover:scale-110 transition-all ease-linear duration-300" />}
        icon2={<IoIosHeart className="text-2xl text-red-500 cursor-pointer hover:scale-110 transition-all ease-linear duration-300" />}
        />

      </div>
    </div>
  );
};

export default PhotoGallery;
