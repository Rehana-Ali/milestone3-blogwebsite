import Image from "next/image";
import Link from "next/link";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export default function Header() {
    return (
        <nav className="flex items-center justify-between px-4 md:px-10 bg-black text-white py-3">
            {/* Logo Section */}
            <div className="flex items-center gap-2">
                <Image src={"/logo.png"} width={50} height={30} alt="logo" />
                <h1 className="font-bold text-1xl md:text-2xl">The World Travel Guide</h1>
            </div>

            {/* Desktop Menu */}
            <ul className="hidden md:flex gap-8 font-bold mr-44">
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/blog">Blog</Link>
                </li>
                <li>
                    <Link href="/destination">Destination</Link>
                </li>

                <li>
                     <Link href="/contact">Contact</Link>
                 </li>

                
                

           </ul>

    

            {/* Mobile Hamburger Menu */}
            <Sheet>
                <SheetTrigger className="md:hidden">
                    <Menu className="text-3xl" />
                </SheetTrigger >
                <SheetContent side="right" className="bg-white  p-6">
                    <SheetHeader >
                        <SheetTitle>Menu</SheetTitle>
                        <SheetDescription>
                            <ul className="mt-6 space-y-6 text-3xl font-semibold text-white">
                                <li>
                                    <Link href="/">Home</Link>
                                </li>
                                <li>
                                    <Link href="/blog">Blog</Link>
                                </li>
                                <li>
                                    <Link href="/destination">Destination</Link>
                                </li>
                                
                                <li>
                                    <Link href="/contact">Contact</Link>
                                </li>

                               
                            </ul>
                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </nav>
    );
}


Header();




