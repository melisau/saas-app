import React from 'react'
import CompanionCard from "@/components/CompanionCard";
import CompanionsList from "@/components/CompanionsList";
import CTA from "@/components/CTA";
import {recentSessions} from "@/constants";

// Uygulamanın ana giriş noktası olan sayfa bileşeni (`/` rotası).
// Bu bileşen, popüler yoldaşları ve son oturumları sergilemek için statik veriler kullanır.
const Page = () => {
  return (
    <main>
        <h1 >Popular Companions</h1>

        {/* Popüler yoldaşları sergilemek için kullanılan `CompanionCard` bileşenleri. */}
        {/* Bu bölüm, gelecekte dinamik veri ile doldurulabilir. */}
        <section className="home-section">
            <CompanionCard
                id="123"
                name="Neura the Brainy Explorer"
                topic="Neural Network of the Brain"
                subject="science"
                duration="45"
                color="#ffda6e"
            />
            <CompanionCard
                id="456"
                name="Countsy the Number Wizard"
                topic="Topic: Derivatives & Integrals"
                subject="Maths"
                duration="30"
                color="pink"
            />
            <CompanionCard
                id="789"
                name="Verba the Vocabulary Builder"
                topic="Topic: English Literature "
                subject="Language"
                duration="30"
                color="#BDE7FF"
            />
        </section>

        {/* Son oturumları ve bir harekete geçirici mesaj (CTA) bölümünü içeren section. */}
        <section className="home-section">
            {/* `CompanionsList`, `recentSessions` verisini bir tablo formatında gösterir. */}
            <CompanionsList
                title = "Recently completed sessions"
                companions={recentSessions}
                classNames="w-2/3 max-lg:w-full"
            />
            {/* `CTA`, kullanıcıyı yeni bir yoldaş oluşturmaya yönlendirir. */}
            <CTA />
        </section>
    </main>
  )
}

export default Page