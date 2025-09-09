import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import Link from "next/link";
import {cn, getSubjectColor} from "@/lib/utils";
import Image from "next/image";


// CompanionsList bileşeninin alacağı propların arayüzü.
interface CompanionsListProps {
    title: string;              // Listenin başlığı.
    companions?: Companion[];   // Gösterilecek yoldaşların dizisi. (Opsiyonel)
    classNames?: string;        // Bileşene eklenecek ek CSS sınıfları. (Opsiyonel)
}

// Yoldaşları (companions) bir tablo içinde listeleyen bileşen.
const CompanionsList = ({ title, companions, classNames}: CompanionsListProps) => {

    return (
        // 'companion-list' ve proptan gelen ek sınıfları içeren ana kapsayıcı.
        <article className={cn('companion-list', classNames)}>
            {/* Liste başlığı */}
            <h2 className="font-bold text-3xl">{title}</h2>
            <Table>

                <TableHeader>
                    <TableRow>
                        <TableHead className="text-lg w-2/3">Lessons</TableHead>
                        <TableHead className="text-lg">Subject</TableHead>
                        <TableHead className="text-lg text-right" >Duration</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {/* `companions` dizisindeki her bir yoldaş için bir tablo satırı (TableRow) oluşturulur. */}
                    {companions?.map(({ id, subject, name, topic, duration }) => (

                        <TableRow key={id}>
                            <TableCell>
                                {/* Yoldaşın detay sayfasına yönlendiren bağlantı. */}
                                <Link href={`/companions/${id}`}>
                                    <div className="flex items-center gap-2">
                                        {/* Ders alanına özel ikon ve arka plan rengi. */}
                                        {/* `getSubjectColor` fonksiyonu, ders alanına göre bir renk döndürür. */}
                                        {/* Bu bölüm, orta ve büyük ekranlarda görünür (max-md:hidden). */}
                                        <div className="size-[72px] flex items-center justify-center

                                        rounded-lg max-md:hidden" style={{backgroundColor:getSubjectColor(subject)}}>
                                            <Image
                                                src={`/icons/${subject}.svg`}
                                                alt={subject} width={35}
                                                height={35}
                                            />

                                        </div>

                                        {/* Yoldaş adı ve konusu. */}
                                        <div className="flex flex-col gap-2">
                                            <p className="font-bold text-2xl">
                                                {name}
                                            </p>
                                            <p className="text-lg">
                                                {topic}
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            </TableCell>
                            <TableCell>
                                {/* Ders alanını gösteren etiket (büyük ekranlar için). */}
                                <div className="subject-badge w-fit max-md:hidden">
                                    {subject}
                                </div>
                                {/* Ders alanını gösteren ikon (küçük ekranlar için). */}
                                <div className="flex items-center justify-center rounded-lg
                                w-fit p-2 md:hidden" style={{backgroundColor:getSubjectColor(subject)}}>

                                    <Image
                                        src={`/icons/${subject}.svg`}
                                        alt={subject}
                                        width={18}
                                        height={18}
                                    />
                                </div>

                            </TableCell>
                            <TableCell>
                                {/* Ders süresi. */}
                                <div className="flex items-center gap-2 w-full justify-end">
                                    <p className="text-2xl">
                                        {duration} {' '}
                                        {/* "mins" metni, orta ve büyük ekranlarda görünür. */}
                                        <span className="max-md:hidden">
                                            mins
                                        </span>
                                    </p>
                                    {/* Saat ikonu (küçük ekranlar için). */}
                                    <Image src="/icons/clock.svg" alt="minutes"
                                           width={14} height={14} className="md:hidden" />
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}

                </TableBody>
            </Table>

        </article>
    )
}
export default CompanionsList
