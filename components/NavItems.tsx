"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {cn} from "@/lib/utils";

// Gezinme öğelerini (linkleri) içeren dizi.
const navItems =   [

    { label:'Home', href:'/'},
    { label: 'Companions', href: '/companions'},
    { label: 'My Journey', href: '/my-journey'},

]

// Gezinme çubuğundaki (Navbar) linkleri oluşturan bileşen.
const NavItems = () => {

    // `usePathname` hook'u, mevcut sayfanın URL yolunu (pathname) almak için kullanılır.
    // Bu, aktif olan linki belirlemek için kullanılacaktır.
    const pathname = usePathname();

    return (
        // 'nav' etiketi içinde linkleri yatayda hizalayan bir yapı.
        <nav className="flex items-center gap-4">
            {/* `navItems` dizisindeki her bir öğe için bir `Link` bileşeni oluşturulur. */}
            {navItems.map(({ label, href }) => (
                <Link href={href}
                      key={label}
                      // `cn` fonksiyonu, koşullu olarak sınıf (class) eklemek için kullanılır.
                      // Eğer mevcut yol (`pathname`), linkin yolu (`href`) ile aynı ise,
                      // linke 'text-primary' ve 'font-semibold' sınıfları eklenir.
                      className={cn(pathname === href && 'text-primary font-semibold')}
                >
                    {label}
                </Link>
            ))}
        </nav>
    );
};

export default NavItems