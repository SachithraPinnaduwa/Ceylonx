import AgeButton from "./AgeButton"
import superkid from "../../public/super-kid.svg"

function Top() {
  return (
    <section className="bg-white  min-h-screen my-auto">
        <div style={{ position: 'absolute', top: '13.5%', left: '21%', transform: 'translate(-50%, -50%)' }}>
        <svg width="67" height="23" viewBox="0 0 67 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.4897 5.8623L1.07971 17.6513L14.7897 10.7207L66.1997 11.3929L10.4897 5.8623Z" fill="#002C44"/>
<path d="M1.36971 0.498535C1.36971 0.498535 11.8097 4.67544 10.3897 6.00129L65.7097 11.2584C65.6997 11.2584 39.0897 2.60785 1.36971 0.498535Z" fill="#FF7B3A"/>
<path d="M0.659715 17.8784C0.229715 18.2539 21.6297 16.8678 21.6297 16.8678L14.2897 10.5815C14.2897 10.5815 4.44971 14.5916 0.659715 17.8784Z" fill="#FBC949"/>
<path d="M14.2897 10.5817C14.2897 10.5817 24.3497 18.2123 18.7197 22.6442L66.5897 11.3559C66.5897 11.3559 19.3797 10.132 14.2897 10.5817Z" fill="#F75E28"/>
</svg>

</div>
<div style={{ position: 'absolute', top: '20%', left: '10%', transform: 'translate(-50%, -50%)' }}>
<svg width="253" height="93" viewBox="0 0 253 93" fill="none" xmlns="http://www.w3.org/2000/svg">

<path d="M2 65.7633C2.82 78.433 26.39 89.9856 53.67 90.8479C80.95 91.7101 107.88 81.5576 111.15 68.9713C111.96 65.8421 111.36 62.4857 107.62 59.8525C103.88 57.2194 96.4 55.569 90.01 56.6584C82.81 57.8823 79.65 62.1936 82.06 65.5685C84.48 68.9434 91.13 71.3541 98.28 72.6429C113.43 75.3734 131.91 73.5422 143.32 68.1739C156.16 62.1287 159.03 53.0981 163.88 44.9205C174.51 26.9704 192.45 -0.830793 250.98 1.63548" stroke="#FBCD5F" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="8 8"/>

</svg>


</div>

    <div className="grid px-4 py-8 mx-[6rem] md:grid-cols-2 grid-cols-1">
        <div className="flex flex-col justify-center">
            <h1 className="max-w-2xl mb-4 text-5xl font-bold tracking-tight leading-none">Making Kids Fall in Love with Math!</h1>
            <p className="max-w-2xl mb-4 font-semibold text-black text-[16px] mt-[4rem]">BOOK YOUR FREE CLASS WITH AGE GROUP</p>
            <div className="w-[80%]">
            <div className="grid grid-cols-4 gap-x-4 gap-y-6">
                <AgeButton age={3} />
                <AgeButton age={4} />
                <AgeButton age={5} />
                <AgeButton age={7} />
                <AgeButton age={7} />
                <AgeButton age={8} />
            </div>
            </div>
            <div className="flex flex-col w-[70%]">
            <button className="text-center hover:shadow-lg bg-gradient-to-r bg-no-repeat bg-right bg-cover from-[#FF7B3A] via-[#FF7B3A96] to-[#FF7B3A] px-10 py-2 mt-4 text-white block  rounded-md  border-2">
               BOOK A FREE LIVE CLASS
            </button>
            <div className="flex items-center justify-center flex-col mt-4">
            <p className="flex mx-auto justify-center items-center"><span className="font-[500] text-[30px]">₹0 	&nbsp;</span>
             For First Class &nbsp;
             <span className="text-[#008958] font-[700]">100% off </span></p>
            <p className="text-black/50">Booked a Demo Already?
                <span className="text-[#FF7C3B] font-[500]"> JOIN NOW</span>
                 </p>
            </div>
            </div>
        </div>
        <div className="pt-10 md:pt-0">
            <img src={superkid} alt="mockup" />
        </div>                
    </div>
</section>
  )
}

export default Top