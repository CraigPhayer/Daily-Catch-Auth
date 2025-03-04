import Image from "next/image";

export default function Background() {
    return (
        <div className="hidden md:flex w-1/2 relative">
            <Image
                src="/loginbackground.png"
                alt="Background"
                layout="fill"
                objectFit="cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-center text-white">
                <Image src="/logo1.svg" alt="Main Logo" width={320} height={320} />
            </div>
        </div>
    );
}
