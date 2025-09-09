import Image from "next/image";
import Link from "next/link";

// CTA (Call to Action - Harekete Geçirici Mesaj) bileşeni.
// Kullanıcıları yeni bir "yoldaş" oluşturmaya teşvik eder.
const CTA = () => {

    return (
        // CTA bölümünün ana kapsayıcısı.
        <section className="cta-section">
            {/* CTA etiketi. */}
            <div className="cta-badge"> Start learning your way.</div>
            {/* Ana başlık. */}
            <h2 className="text-3xl font-bold">
                Build and personize Learning Companion
            </h2>
            {/* Açıklama metni. */}
            <p>
                Pick a name,subject, voice, personality  and start learning
                through voice conversationsa that feel natural and fun.
            </p>
            {/* Görsel. */}
            <Image src="images/cta.svg" alt="cta" width={362} height={232} />
            {/* Yeni bir yoldaş oluşturma butonu. */}
            <button className="btn-primary">
                <Image src="/icons/plus.svg" alt="plus" width={12} height={12} />
                <Link href="/companions/new">
                    <p>Build a new companion</p>
                </Link>
            </button>
        </section>
    )
}
export default CTA