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
    <section id="methods" className="section bg-gradient-to-b from-gray-50 to-blue-50">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <h2 className="heading-lg mb-8 text-center">Metoder til Algerens af Fliser</h2>
          
          <div className="overflow-x-auto bg-white rounded-xl shadow-lg mb-8">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr className="bg-blue-50">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-blue-900 uppercase tracking-wider border-b-2 border-blue-200 w-1/5">Metode</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-blue-900 uppercase tracking-wider border-b-2 border-blue-200 w-1/5">Beskrivelse</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-blue-900 uppercase tracking-wider border-b-2 border-blue-200 w-1/5">Fordele</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-blue-900 uppercase tracking-wider border-b-2 border-blue-200 w-1/5">Ulemper</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-blue-900 uppercase tracking-wider border-b-2 border-blue-200 w-1/5">Vurderingspunkter for firma</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900 border-r border-gray-100">
                    <div className="flex items-center">
                      <span className="bg-blue-100 p-2 rounded-full mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span>Højtryksrensning</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800 border-r border-gray-100">
                    Brug af højtryksrenser til at sprøjte vand med højt tryk på fliserne for at fjerne snavs og alger.
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800 border-r border-gray-100">
                    <span className="text-green-600 font-medium">Meget effektiv og hurtig metode.</span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800 border-r border-gray-100">
                    <span className="text-red-600">Kan beskadige flisernes overflade ved for højt tryk.</span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800">
                    Tjek om firmaet har styr på at vælge det rigtige vandtryk i forhold til din flisebelægning.
                  </td>
                </tr>

                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900 border-r border-gray-100">
                    <div className="flex items-center">
                      <span className="bg-green-100 p-2 rounded-full mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                        </svg>
                      </span>
                      <span>Kemisk rensning</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800 border-r border-gray-100">
                    Anvender nogle specielle kemiske rengøringsmidler, der dræber alger og mos.
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800 border-r border-gray-100">
                    <span className="text-green-600 font-medium">Dræber effektivt alger og mos, ofte med langvarig effekt.</span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800 border-r border-gray-100">
                    <span className="text-red-600">Kan være skadeligt for miljøet og kræver forsigtig håndtering.</span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800">
                    Sørg for, at firmaet bruger miljøgodkendte kemikalier, og følger de nødvendige sikkerhedsprocedurer.
                  </td>
                </tr>

                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900 border-r border-gray-100">
                    <div className="flex items-center">
                      <span className="bg-yellow-100 p-2 rounded-full mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                        </svg>
                      </span>
                      <span>Børster og skrubbemetoder</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800 border-r border-gray-100">
                    Skrubber fliserne rent fysisk med et særligt børstehoved på højtryksrenseren.
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800 border-r border-gray-100">
                    <span className="text-green-600 font-medium">Fjerner effektivt både algelaget og snavs på fliserne.</span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800 border-r border-gray-100">
                    <span className="text-red-600">Kan give skader på skrøbte flisetyper.</span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800">
                    Tjek op på firmaets erfaring med at bruge metoden på netop den type fliser, som du har.
                  </td>
                </tr>

                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900 border-r border-gray-100">
                    <div className="flex items-center">
                      <span className="bg-teal-100 p-2 rounded-full mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                        </svg>
                      </span>
                      <span>Miljøvenlige metoder</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800 border-r border-gray-100">
                    Bruger naturlige rengøringsmidler som f.eks. eddike og natron til algefjernelsen.
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800 border-r border-gray-100">
                    <span className="text-green-600 font-medium">Miljøvenlig og sikker for mennesker og dyr.</span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800 border-r border-gray-100">
                    <span className="text-red-600">Kræver oftest et ekstra besøg for at fjerne de døde alger – eller at du selv fejer dem væk fra fliserne. Kan være mindre effektiv på kraftige belægninger.</span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800">
                    Undersøg om firmaet anvender effektive og sikre naturlige midler, og har gode referencer i forhold til effekten af metoden.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p className="text-sm text-gray-600 italic mb-8">
            Som det fremgår af tabellen, vil firmaerne typisk anvende flere af metoderne. F.eks. kemiske rengøringsmidler som det virksomme stof i forbindelse med en skrubning af flisearealerne med et særligt børstehoved på højtryksrenseren.
          </p>
          
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
      </div>
    </section>
  );
};

export default MethodsSection;
