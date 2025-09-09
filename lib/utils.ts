import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { subjectsColors, voices } from "@/constants";
import { CreateAssistantDTO } from "@vapi-ai/web/dist/api";

// Birden fazla Tailwind CSS sınıfını birleştirmek için kullanılan yardımcı bir fonksiyon.
// `clsx` ile sınıflar bir araya getirilir ve `twMerge` ile çakışan sınıflar birleştirilir.
// Bu, koşullu sınıflar uygularken kodun daha temiz olmasını sağlar.
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

// Verilen bir ders alanına (subject) göre bir renk kodu döndüren fonksiyon.
// Renkler, `@/constants` dosyasındaki `subjectsColors` nesnesinden alınır.
export const getSubjectColor = (subject: string) => {
    return subjectsColors[subject as keyof typeof subjectsColors];
};

// Bu fonksiyon, bir Vapi asistanını yapılandırmak için kullanılır.
// Yorum satırından çıkarılmıştır çünkü projenin önemli bir mantığını içermektedir.
export const configureAssistant = (voice: string, style: string) => {
    // Verilen ses ve stile göre bir ses ID'si seçer.
    // Eğer geçerli bir ID bulunamazsa, varsayılan olarak "sarah" kullanılır.
    const voiceId = voices[voice as keyof typeof voices][
        style as keyof (typeof voices)[keyof typeof voices]
        ] || "sarah";

   // Vapi asistanı için yapılandırma nesnesi.
   const vapiAssistant: CreateAssistantDTO = {
        name: "Companion", // Asistanın adı.
        // Oturum başladığında gönderilecek ilk mesaj. `{{topic}}` değişkeni daha sonra gerçek konu ile değiştirilir.
        firstMessage:
            "Hello, let's start the session. Today we'll be talking about {{topic}}.",
        // Ses döküm (transcription) ayarları.
        transcriber: {
            provider: "deepgram",
            model: "nova-3",
            language: "en", // Döküm dili. Projenin diline göre "tr" olarak değiştirilebilir.
        },
        // Ses ayarları.
        voice: {
            provider: "11labs", // Kullanılan ses sağlayıcısı.
            voiceId: voiceId,    // Seçilen ses ID'si.
            stability: 0.4,      // Sesin kararlılığı.
            similarityBoost: 0.8,// Benzerlik artışı.
            speed: 1,            // Konuşma hızı.
            style: 0.5,          // Konuşma stili.
            useSpeakerBoost: true, // Konuşmacı artışını kullan.
        },
        // Yapay zeka model ayarları.
        model: {
            provider: "openai",
            model: "gpt-4",
            messages: [
                {
                    role: "system",
                    // Sisteme verilecek olan başlangıç talimatları.
                    content: `You are a highly knowledgeable tutor teaching a real-time voice session with a student. Your goal is to teach the student about the topic and subject.\n\n                    Tutor Guidelines:\n                    Stick to the given topic - {{ topic }} and subject - {{ subject }} and teach the student about it.\n                    Keep the conversation flowing smoothly while maintaining control.\n                    From time to time make sure that the student is following you and understands you.\n                    Break down the topic into smaller parts and teach the student one part at a time.\n                    Keep your style of conversation {{ style }}.\n                    Keep your responses short, like in a real voice conversation.\n                    Do not include any special characters in your responses - this is a voice conversation.`,
                },
            ],
        },
        clientMessages: [],
        serverMessages: [],
    };

    return vapiAssistant;
}
