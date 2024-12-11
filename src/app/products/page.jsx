'use client'
import Card from "@/components/card/card"
import img1 from '@/assets/images/img1.png'
import Link from "next/link"
import { useState } from "react"

export default function Productpage() {
    let [data,setData] = useState([
        {
            id:1,
            img: '@/assets/images/img1.png',
            title: 'High-Back Bench',
            price: '$9,99',
        },
        {
            id:2,
            img: '@/assets/images/img2.png',
            title: 'High-Back Bench',
            price: '$9,99',
        },
        {
            id:3,
            img: '@/assets/images/img3.png',
            title: 'High-Back Bench',
            price: '$9,99',
        },
        {
            id:4,
            img: '@/assets/images/img4.png',
            title: 'High-Back Bench',
            price: '$9,99',
        }
    ])
    return(<>
     <Link href={'/products/1'}>
     <Card img={img1} title={'High-Back Bench'} price={'$9,99'} />
          </Link>
     <section>
        {data.map((el) => {
        return(<div key={el.id}>
        <Card img={el.img} title={el.title} price={el.price} />
        </div>)
     })}
     </section>
    </>)
}