import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Hvor ofte bør jeg rense mine fliser for alger?",
      answer: "Det anbefales at rense fliser for alger mindst én gang om året, men det kan variere afhængigt af forskellige faktorer som placering, skygge, fugtighed og vejrforhold. Fliser i skyggefulde områder med høj luftfugtighed kan kræve rensning to gange årligt, mens solrige områder måske kun kræver behandling hvert andet år."
    },
    {
      question: "Er algerens af fliser miljøvenligt?",
      answer: "Det afhænger af de produkter, der bruges. Traditionelle algerensemidler indeholder ofte kemikalier, der kan være skadelige for miljøet. Vi anbefaler at vælge miljøvenlige alternativer som eddike, brun sæbe eller specialprodukter mærket som miljøvenlige. De professionelle tjenester, vi anbefaler, bruger alle miljøcertificerede produkter, der er effektive uden at skade miljøet."
    },
    {
      question: "Kan jeg bruge højtryksrenser til at fjerne alger på fliser?",
      answer: "Ja, en højtryksrenser kan være effektiv til at fjerne alger fra fliser. Dog skal du være forsigtig med trykket, da for højt tryk kan beskadige fuger og fliseoverflader. Det er bedst at bruge et moderat tryk og holde dysen et stykke fra overfladen. For optimale resultater bør du først påføre et algerensemiddel, lade det virke og derefter skylle med højtryksrenseren."
    },
    {
      question: "Hvorfor kommer algerne tilbage så hurtigt efter rensning?",
      answer: "Alger vender ofte tilbage fordi fliserne forbliver i et miljø, der er gunstigt for algevækst: fugt, skygge og organisk materiale. For at forhindre hurtig tilbagevenden af alger, bør du: 1) Sørge for god afvanding af området, 2) Fjerne organisk materiale regelmæssigt, 3) Beskære planter, der kaster tæt skygge, 4) Anvende en imprægnering efter rensning, der skaber en barriere mod ny algevækst."
    },
    {
      question: "Hvad er forskellen mellem alger, mos og lav på fliser?",
      answer: "Alger er enkle, grønne organismer der danner en glat, slimet film. Mos er en lille plante, der vokser i tykke, bløde totter og foretrækker konstant fugtige områder. Lav er en symbiotisk organisme der ofte ses som flade, skorpelignende vækster i grå, gule eller orange nuancer. Hver type kræver lidt forskellige behandlingsmetoder, men mange algefjerningsprodukter er effektive mod alle tre."
    },
    {
      question: "Kan jeg forebygge algevækst på mine fliser?",
      answer: "Ja, algevækst kan forebygges med flere metoder: 1) Sørg for god afvanding af flisebelagte områder, 2) Hold fliserne rene for blade og andet organisk materiale, 3) Beskær buske og træer for at mindske skygge og øge luftcirkulation, 4) Anvend fliseimprægnering der danner en vandafvisende barriere, 5) Udfør let vedligeholdelsesrensning et par gange årligt med sæbevand eller eddikeopløsning."
    },
    {
      question: "Hvilken årstid er bedst til algerens af fliser?",
      answer: "Foråret er generelt den bedste tid til algerens af fliser. Vejret er moderat, hvilket giver ideelle forhold for rengøringsmidler til at virke effektivt, og det giver dig mulighed for at nyde dine rene fliser hele sommeren. Efteråret er også en god tid, da det hjælper med at forberede fliserne til vinterens højere fugtighed. Undgå algerens i meget varmt vejr, da rengøringsmidlerne kan tørre for hurtigt og blive mindre effektive."
    },
    {
      question: "Kan alger på fliser være farligt?",
      answer: "Ja, alger på fliser kan udgøre en sikkerhedsrisiko, da de gør overfladen meget glat, især når den er våd. Dette øger risikoen for faldulykker betydeligt. Derudover kan nogle algetyper udløse allergiske reaktioner hos følsomme personer. Fra et strukturelt perspektiv kan langvarig algevækst på fliser over tid føre til nedbrydning af overfladen og reducere flisernes levetid."
    }
  ];

  return (
    <section id="faq" className="section">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="heading-lg mb-4">Ofte Stillede Spørgsmål</h2>
          <p className="text-lg">
            Finder du ikke svar på dit spørgsmål nedenfor? Kontakt os, og vi vil hjælpe dig med at finde de rette løsninger til dine fliser.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 hover:bg-site-gray-100 hover:no-underline">
                  <span className="text-left font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 pt-0">
                  <p>{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
