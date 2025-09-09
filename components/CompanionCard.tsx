import Image from "next/image";
import Link from "next/link";

// CompanionCard bileşeninin alacağı propların arayüzü (interface).
interface CompanionCardProps {
    id: string;         // Yoldaşın benzersiz kimliği (ID).
    name: string;       // Yoldaşın adı.
    topic: string;      // Dersin konusu.
    subject: string;    // Dersin alanı (örneğin, "Bilim", "Matematik").
    duration: string;   // Dersin süresi (dakika cinsinden).
    color: string;      // Kartın arka plan rengi.
}

// Bir yoldaşın (companion) bilgilerini gösteren kart bileşeni.
const CompanionCard = ({ id, name, topic, subject, duration, color }:
    CompanionCardProps ) => {

    return (
        // Kartın ana kapsayıcısı. Arka plan rengi proptan gelen 'color' değeri ile ayarlanır.
        <article className="companion-card" style={{ backgroundColor: color }}>
            <div className="flex justify-between items-center">
                {/* Dersin alanını gösteren etiket. */}
                <div className="subject-badge">{subject}</div>
                {/* Yer imi (bookmark) butonu. */}
                <button className="companion-bookmark">
                    <Image src={"/icons/bookmark.svg"} alt="bookmark" width={12.5} height={12.5} />
                </button>

            </div>

            {/* Yoldaşın adı. */}
            <h2 className="text-2xl font-bold">{name}</h2>
            {/* Dersin konusu. */}
            <p className="text-sm">{topic}</p>
            {/* Dersin süresini gösteren bölüm. */}
            <div className="flex items-center gap-2">
                <Image src="/icons/clock.svg" alt="duration" width={13.5}
                       height={13.5} />
                <p className="text-sm">{duration} minutes</p>
            </div>
            {/* Dersi başlatmak için kullanılan bağlantı ve buton. */}
            {/* Yoldaşın ID'sini kullanarak dinamik bir URL oluşturur. */}
            <Link href={`/companions/${id}`}>
                <button className="btn-primary w-full justify-center">
                    Launch Lesson
                </button>
            </Link>

        </article>
    )
}
export default CompanionCard
