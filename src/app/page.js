import Card from "@/components/card/card"
import img1 from '@/assets/images/img1.png'

export default function Home() {
  return(<>
<section className="text-center">
<div className="max-w-7xl m-auto flex justify-between py-[50px]">
 <Card img={img1} title={'High-Back Bench'} price={'$9,99'} />
 <Card img={img1} title={'High-Back Bench'} price={'$9,99'} />
 <Card img={img1} title={'High-Back Bench'} price={'$9,99'} />
 </div>
 <button className="bg-[#BA5D2C] text-white rounded-[3px] py-[10px] px-[15px] text-[18px] m-auto text-center">ALL PRODUCTS</button>
</section>
  </>)
}