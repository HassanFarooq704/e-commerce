'use client';
import Image from "next/image";
import { ItemsProps } from "../../../type";
import { calculatePercentage } from "@/helpers";
import FormatedPrice from "./FormatedPrice";
import { IoIosStar } from "react-icons/io"
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/shoppingSlice";
import toast, { Toaster } from "react-hot-toast";


const productData = ({ item }: ItemsProps) => {

    const dispatch = useDispatch();
    const starArray = Array.from({ length: item?.rating }, (_, index) => (
        <span key={index} className="text-yellow-400">
            <IoIosStar />
        </span>
    ))

    return (
        <div className="w-full rounded-lg overflow-hidden">
            <div>
                <Link href={{ pathname: "/product", query: { _id: item?._id } }}>
                    <div className="w-full h-96 overflow-hidden group relative">
                        {/* product image */}
                        <Image src={item?.image} alt="product image" width={500} height={500} className="w-full h-full object-cover group-hover:scale-110 duration-200 rounded-t-lg" />
                        {item?.isNew && (
                            <span className="absolute right-2 top-2 font-medium text-xs py-1 px-3 bg-white rounded-full group-hover:bg-orange-500 group-hover:text-white" >
                                New Arrival
                            </span>)}
                    </div>
                </Link>
                {/* items title */}
                <div className="border-[1px] border-slate-300 border-t-0 px-2 py-4 flex flex-col gap-y-2 bg-white rounded-b-lg">
                    <p> {item?.title}</p>

                    {/* price */}
                    <div className="flex items-center justify-between">
                        {/* percentage */}
                        <div className="border-[1px] border-orange-600 rounded-full px-2 py-1 text-xs">
                            <p>{calculatePercentage(item?.price, item?.oldPrice)}%off</p>
                        </div>
                        {/* old and actual price */}
                        <div className="flex items-center gap-x-2">
                            <p className="text-slate-500 line-through text-sm"><FormatedPrice amount={item?.oldPrice} /></p>
                            <p className="font-semibold"><FormatedPrice amount={item?.price} /></p>
                        </div>
                    </div>
                    {/* Add to cart */}
                    <div className="flex items-center justify-between ">
                        <button onClick={() => dispatch(addToCart(item)) &&
                            toast.success(
                                `${item?.title.substring(0, 15)} added sucesfully!`
                            )} className=" px-4 py-2 text-sm  bg-orange-600 text-slate-100 tracking-wide
                        rounded-full  hover:bg-orange-800 hover:text-white duration-200">add to cart</button>
                        {/* star button */}
                        <div className="flex items-center gap-x-1">{starArray}</div>
                    </div>
                </div>
            </div>
            <Toaster />
        </div>
    )
}

export default productData