"use client";
import Container from "./Container"
import Logo from "./Logo"
import { BsCart3 } from 'react-icons/bs'
import { FiSearch, FiLogOut } from 'react-icons/fi'
import { AiOutlineUser } from 'react-icons/ai'
import { useSession, signIn, signOut } from "next-auth/react"
import Image from "next/image";
import { Products, StateProps } from "../../../type";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import FormatedPrice from "./FormatedPrice";
import Link from 'next/link'
import { deleteUser, userInfo } from "@/redux/shoppingSlice";

const Header = () => {
  const { data: session } = useSession();
  const { productData } = useSelector((state: StateProps) => state.shopping);
  const dispatch = useDispatch();

useEffect(()=>{
  if(session){
    dispatch(
      userInfo({
        name:session?.user?.name,
        email:session?.user?.email,
        image:session?.user?.image
      })
    )
  } else{
    dispatch(deleteUser())
  }
},[session,dispatch]);

  const [totalAmt, setTotalAmt] = useState(0);
  useEffect(() => {
    let amt = 0;
    productData.map((item: Products) => {
      amt += item.price * item.quantity;
      return;
    });
    setTotalAmt(amt);
  }, [productData]);

  return (<>
    <div className='bg-bodyColor h-20 top-0 sticky z-50'>
      <Container className="h-full flex items-center md:gap-x-5 justify-between md:justify-start">
        <Logo />
        {/* Search Field */}
        <div className="w-full bg-white hidden md:flex items-center gap-x-1 border-[1px] rounded-full px-4 py-1.5 focus-within:border-orange-500 group ">
          <FiSearch className="text-gray-500 group-focus-within:text-darkText duration-200" />
          <input type="text" placeholder="search for products"
            className="placeholder:text-sm flex-1 outline-none" />
        </div>

        {/* Login/register */}
        {!session && (<div onClick={() => signIn()} className="bg-bgLight text-gray flex items-center justify-center p-1.5 rounded-full hover:bg-white border-[1px] border-gray-200 hover:border-orange-500 duration-200 cursor-pointer" >
          <AiOutlineUser className="text-2xl" />
          <p className="text-sm font-semibold">Login/Register</p>
        </div>
        )}

        {/* cart button */}
        <Link href={'/cart'}>
          <div className="bg-black hover:bg-slate-950 text-slate-100 rounded-full py-1.5 hover:text-white gap-x-1  flex items-center justify-center px-3 border-[1px] border-black hover:border-orange-500 duration-200 relative"   >
            <BsCart3 className="text-2xl " />
            <p className="text-sm font-semibold">
              <FormatedPrice amount={totalAmt ? totalAmt : 0} />
            </p>
            <span className="text-xs font-semibold text-orange-500 bg-white rounded-full absolute -right-2 -top-1 w-5 h-5 flex items-center justify-center shadow-xl shadow-black">
              {productData ? productData?.length : 0}
            </span>
          </div>
        </Link>
        {/* user Image */}
        {
          session && (
            <Image src={session?.user?.image as string}
              alt="User Image"
              width={45}
              height={45}
              className="rounded-full object-cover"
            />
          )}
        {/* Logout */}
        {
          session && (<div onClick={() => signOut()} className="bg-bgLight text-gray flex items-center justify-center p-1.5 rounded-full hover:bg-white border-[1px] border-gray-200 hover:border-orange-500 duration-200 cursor-pointer" >
            <FiLogOut className="text-2xl" />
            <p className="text-sm font-semibold">LogOut</p>
          </div>)
        }
      </Container>
    </div>
  </>
  )
}

export default Header

