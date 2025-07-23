import Link from "next/link";

export default function LoadersLayout({ children }) {
  return (
    <div className=" w-screen h-screen flex justify-center items-center bg-[url('/sky.png')] bg-cover bg-center">
      <div className="mastWhiteShadow  min-w-[95%] h-[90%] rounded border border-white/40 flex backdrop-blur-2xl">

        {/* Sidebar */}
        <div className=" w-[15%] flex flex-col justify-center items-center gap-5">
          <div className="bg-white/30 border border-black/30 w-[50%] h-[85%] rounded backdrop-blur-2xl flex flex-col items-center gap-5 py-5">
            <Link href="/LoadersComponents/loader01" className="border border-black/30 bg-sky-200 w-[70px] h-[70px] rounded-full flex justify-center items-center">L1</Link>
            <Link href="/LoadersComponents/loader02" className="border border-black/30 bg-sky-200 w-[70px] h-[70px] rounded-full flex justify-center items-center">L2</Link>
            <Link href="/loaders/loader03" className="border border-black/30 bg-sky-200 w-[70px] h-[70px] rounded-full flex justify-center items-center">L3</Link>
          </div>
        </div>

        {/* Main Content */}
        <div className=" w-full h-full border border-white/30">
          <div className="w-full h-full  rounded-tr-sm rounded-br-sm p-4 ">
            {children} {/* This renders the loader page here */}
          </div>
        </div>

      </div>
    </div>
  );
}
