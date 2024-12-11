import Card from "@/components/card/card"
import img1 from '@/assets/images/img1.png'

export default async function ProductByIdPage({params}) {
    let {productByid} = await params
    return(<>
       <div>{productByid}</div>
     <Card img={img1} title={'High-Back Bench'} price={'$9,99'} />
    </>)
}