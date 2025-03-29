
import React from 'react';
import { Check, Info, ArrowRight } from 'lucide-react';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const MethodsSection = () => {
  const methods = [
    {
      name: "Højtryksrensning",
      description: "Brug af højtryksrenser til at sprøjte vand med højt tryk på fliserne for at fjerne snavs og alger.",
      advantages: "Meget effektiv og hurtig metode.",
      disadvantages: "Kan beskadige flisernes overflade ved for højt tryk.",
      evaluation: "Tjek om firmaet har styr på at vælge det rigtige vandtryk i forhold til din flisebelægning."
    },
    {
      name: "Kemisk rensning",
      description: "Anvender nogle specielle kemiske rengøringsmidler, der dræber alger og mos.",
      advantages: "Dræber effektivt alger og mos, ofte med langvarig effekt.",
      disadvantages: "Kan være skadeligt for miljøet og kræver forsigtig håndtering.",
      evaluation: "Sørg for, at firmaet bruger miljøgodkendte kemikalier, og følger de nødvendige sikkerhedsprocedurer."
    },
    {
      name: "Børster og skrubbemetoder",
      description: "Skrubber fliserne rent fysisk med et særligt børstehoved på højtryksrenseren.",
      advantages: "Fjerner effektivt både algelaget og snavs på fliserne.",
      disadvantages: "Kan give skader på skrøbte flisetyper.",
      evaluation: "Tjek op på firmaets erfaring med at bruge metoden på netop den type fliser, som du har."
    },
    {
      name: "Miljøvenlige metoder",
      description: "Bruger naturlige rengøringsmidler som f.eks. eddike og natron til algefjernelsen.",
      advantages: "Miljøvenlig og sikker for mennesker og dyr.",
      disadvantages: "Kræver ofteSt et ekstra besøg for at fjerne de døde alger – eller at du selv fejer dem væk fra fliserne. Kan være mindre effektiv på kraftige belægninger.",
      evaluation: "Undersøg om firmaet anvender effektive og sikre naturlige midler, og har gode referencer i forhold til effekten af metoden."
    }
  ];

  return (
    <section id="methods" className="section bg-site-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="heading-lg mb-4">Hvilke metoder bruges til algerens af fliser?</h2>
          <p className="text-lg">
            Professionelle firmaer bruger forskellige teknikker til <strong>algerens af fliser</strong>. Her får du overblik over metoderne, 
            så du kan vælge det firma, der anvender den mest passende metode til netop dine fliser.
          </p>
        </div>

        <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-md">
          <Table>
            <TableCaption>Oversigt over metoder til algerens af fliser</TableCaption>
            <TableHeader>
              <TableRow className="bg-site-green-100">
                <TableHead className="font-bold">Metode</TableHead>
                <TableHead className="font-bold">Beskrivelse</TableHead>
                <TableHead className="font-bold">Fordele</TableHead>
                <TableHead className="font-bold">Ulemper</TableHead>
                <TableHead className="font-bold">Vurderingspunkter for firma</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {methods.map((method, index) => (
                <TableRow key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <TableCell className="font-medium">{method.name}</TableCell>
                  <TableCell>{method.description}</TableCell>
                  <TableCell>{method.advantages}</TableCell>
                  <TableCell>{method.disadvantages}</TableCell>
                  <TableCell>{method.evaluation}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="mt-6 text-sm text-site-gray-300">
          <p>Som det fremgår af tabellen, vil firmaerne typisk anvende flere af metoderne. F.eks. kemiske rengøringsmidler som det virksomme stof i forbindelse med en skrubning af flisearealerne med et særligt børstehoved på højtryksrenseren.</p>
        </div>

        <div className="mt-12 bg-white p-8 rounded-lg shadow-md">
          <h3 className="heading-sm mb-6">Sådan finder du det bedste tilbud på algerens af fliser</h3>
          
          <div className="space-y-6">
            <div>
              <h4 className="font-bold text-lg mb-2">Forberedelse til professionel algerens af fliser</h4>
              <p className="mb-4">
                For at få det bedste resultat ved <strong>algerens af fliser</strong>, er det vigtigt at forberede flisearealet korrekt inden servicefirmaet ankommer:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="text-site-green-400 mr-2 shrink-0 mt-1" size={20} />
                  <span>Sørg for nem adgang til flisearealet for teknikerne og deres udstyr</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-site-green-400 mr-2 shrink-0 mt-1" size={20} />
                  <span>Fjern alle møbler, krukker og andre genstande fra fliserne</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-site-green-400 mr-2 shrink-0 mt-1" size={20} />
                  <span>Informer om eksisterende skader på fliserne før arbejdet påbegyndes</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-site-green-400 mr-2 shrink-0 mt-1" size={20} />
                  <span>Beskyt tilstødende planter og græsarealer hvis nødvendigt</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-site-green-100 p-6 rounded-lg">
              <h4 className="font-bold text-lg mb-2">Hvorfor imprægnering er vigtig efter algerens af fliser</h4>
              <p>
                Mange firmaer tilbyder imprægnering af fliserne efter <strong>algerens</strong>. Dette anbefaler vi altid at takke ja til, da det:
              </p>
              <ul className="mt-3 space-y-2">
                <li className="flex items-start">
                  <Check className="text-site-green-400 mr-2 shrink-0 mt-1" size={16} />
                  <span>Hjælper regnvand med at løbe hurtigere af flisearealet</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-site-green-400 mr-2 shrink-0 mt-1" size={16} />
                  <span>Forhindrer alger i at få fodfæste på fliserne igen</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-site-green-400 mr-2 shrink-0 mt-1" size={16} />
                  <span>Forlænger perioden mellem hver <strong>algerens af fliser</strong> med flere år</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-site-green-400 mr-2 shrink-0 mt-1" size={16} />
                  <span>Sparer dig for penge på lang sigt ved færre behandlinger</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-2">Fordele ved professionel algerens frem for gør-det-selv</h4>
              <p className="mb-4">
                Selvom du kan fjerne noget af algebelægningen med en kost eller skovl, er det langt fra tilstrækkeligt. En professionel <strong>algerens af fliser</strong> giver langt bedre resultater fordi:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="text-site-green-400 mr-2 shrink-0 mt-1" size={16} />
                      <span>Professionelle har kraftigere og mere effektivt udstyr</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-site-green-400 mr-2 shrink-0 mt-1" size={16} />
                      <span>De anvender specialiserede rensemidler tilpasset forskellige flisetyper</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="text-site-green-400 mr-2 shrink-0 mt-1" size={16} />
                      <span>Imprægnering giver langvarig beskyttelse mod nye alger</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-site-green-400 mr-2 shrink-0 mt-1" size={16} />
                      <span>Professionel rensning fjerner også dybere algegrowth</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center">
            <a href="#services" className="btn-primary flex items-center justify-center">
              Se anbefalede firmaer til algerens af fliser <ArrowRight size={18} className="ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodsSection;
