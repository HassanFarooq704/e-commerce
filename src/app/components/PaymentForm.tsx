'use client';

import { useSelector } from "react-redux";
import { Products, StateProps } from "../../../type";
import { useEffect, useState } from "react";
import FormatedPrice from "./FormatedPrice";

const PaymentForm = () => {
    const { productData, userInfo } = useSelector(
        (state: StateProps) => state?.shopping
    );

    const [totalAmt, setTotalAmt] = useState(0);
    useEffect(() => {
        let amt = 0;
        productData.map((item: Products) => {
            amt += item.price * item.quantity;
            return;
        });
        setTotalAmt(amt);
    }, [productData]);

    return (
        <div>
            <h2 className="text-2xl font-semibold">Cart Totals</h2>
            <div className="border-b-[1px] border-b-slate-300 py-2">
                <div className="flex items-center justify-between max-w-lg">
                    <p className="uppercase font-medium">Subtotal</p>
                    <p>
                        <FormatedPrice amount={totalAmt} />
                    </p>
                </div>
            </div>
            <div className="border-b-[1px] border-b-slate-300 py-2">
                <div className="flex items-center justify-between max-w-lg">
                    <p className="uppercase font-medium">Shipping</p>
                    <p>
                        <FormatedPrice amount={20} />
                    </p>
                </div>
            </div>
            <div className="border-b-[1px] border-b-slate-300 py-2">
                <div className="flex items-center justify-between max-w-lg">
                    <p className="uppercase font-medium">Total price</p>
                    <p>
                        <FormatedPrice amount={totalAmt + 20} />
                    </p>
                </div>
            </div>
            {
                userInfo ? (
                    <button className="bg-black text-slate-100 mt-4 py-3 px-6 hover:bg-orange-950 cursor-pointer">Proceed to checkout</button>
                ) : (
                    <div>
                       <button className="bg-black text-slate-100 mt-4 py-3 px-6 hover:bg-orange-950 cursor-not-allowed">Proceed to checkout </button> 
                    <p className="text-base mt-1 text-red-500 font-semibold animate-bounce">Please login to continue</p>
                    </div>
                )}
        </div>
    )
}

export default PaymentForm