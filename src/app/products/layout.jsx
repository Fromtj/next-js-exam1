export default function Productspage({children}) {
    return(<>
    <section className="max-w-7xl m-auto flex mt-[50px]">
    <div className="w-[200px]">
        <span className="text-[20px] text-[#235275] bg-[#F1F5F8] py-[10px] pl-[10px] pr-[80px]">Search...</span>
        <div>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
        </div>
    </div>
    {children}
    </section>
    </>)
}