import Link from "next/link";
import Image from "next/image";
import { SignInButton,  SignedIn, SignedOut, UserButton} from "@clerk/nextjs";
import NavItems from "@/components/NavItems";

// Gezinme çubuğu (Navbar) bileşeni.
const Navbar = () => {

    return (
        // 'navbar' sınıfına sahip ana gezinme etiketi.
        <nav className="navbar">
            {/* Logo ve ana sayfaya yönlendirme bağlantısı. */}
            <Link href="/">
                <div className="flex items-center gap-2.5 cursor-pointer">
                    {/* Logo resmi */}
                    <Image
                        src="/images/logo.svg"
                        alt="logo"
                        width={46}
                        height={44}
                    />

                </div>
            </Link>
            {/* Gezinme öğeleri ve giriş yap butonu */}
            <div className="flex items-center gap-8">

                {/* Diğer sayfalara yönlendiren gezinme öğelerini içeren bileşen. */}
                <NavItems />
                <SignedOut>
                        <SignInButton>
                            <button className="btn-signin">
                                Sign In
                            </button>
                        </SignInButton>
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>


            </div>
        </nav>
    )


}
export default Navbar
