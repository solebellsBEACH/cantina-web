import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

export default function ProductModal() {
    const dispatch = useDispatch();
    const value = useSelector((state: any) => state);
    console.log(value)
    return (
        <div>ProductModal</div>
    )
}