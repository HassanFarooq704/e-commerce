'use client';

import { useDispatch, useSelector } from "react-redux";
import Container from "../components/Container";
import { StateProps } from "../../../type";
import CartItem from "../components/CartItem";
import { resetCart } from "@/redux/shoppingSlice";
import PaymentForm from "../components/PaymentForm";
import Link from "next/link";


const Cart = () => {
    const { productData } = useSelector((state: StateProps) => state?.shopping)
    const dispatch = useDispatch();
    return (
        <Container>
            {
                productData.length > 0 ? <Container>
                    <h2 className="text-2xl font-semibold mb-2">cart</h2>
                    <div className="flex flex-col gap-5">
                        <CartItem />
                        <div className="flex items-center justify-end">
                            <button onClick={() => dispatch(resetCart())} className="bg-red-500 text-base text-slate-100 font-semibold py-2 px-6 first-letter hover:bg-red-700 hover:text-white duration-200 cursor-pointer">reset cart</button>
                        </div>
                        <PaymentForm />
                    </div>
                </Container> : <div className="flex flex-col items-center justify-center h-96 gap-y-6 bg-white px-4">
                    <p className="border-[1px] border-orange-600  w-full p-2 text-center">Your product cart is currently empty</p>
                    <Link href={'/'}>
                        <button className="bg-black text-white hover:bg-orange-600 px-6 py-2 cursor-pointer duration-100 text-lg rounded-xl">Return to shop</button>
                    </Link>
                </div>
            }
        </Container>
    )
}


export default Cart