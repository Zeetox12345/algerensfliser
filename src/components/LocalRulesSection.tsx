import React from 'react';

const LocalRulesSection = () => {
  return (
    <section id="lokale-regler" className="section bg-gradient-to-b from-amber-50 to-white">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading-lg mb-6 text-center">Lokale Regler & Gode Råd om Algerens af Fliser</h2>
          
          <div className="prose prose-lg max-w-none mb-8">
            <p className="lead mb-6">
              Vær opmærksom på, at der i nogle kommuner kan være restriktioner på brugen af kemiske midler til algerens eller på, hvor spildevandet fra fliserens løber hen. Her finder du information om lokale regler og gode råd til miljøvenlig algerens.
            </p>
            
            <div className="bg-amber-50 rounded-lg shadow-md p-6 my-8">
              <h3 className="text-xl font-semibold mb-4">Kommunale Restriktioner ved Algerens af Fliser</h3>
              
              <p>Forskellige kommuner i Danmark har forskellige regler vedrørende algerens af fliser:</p>
              
              <div className="grid md:grid-cols-2 gap-6 mt-4">
                <div className="bg-white p-4 rounded-lg border border-amber-100">
                  <h4 className="font-semibold text-amber-800">Kemikaliebegrænsninger</h4>
                  <ul className="mt-2 space-y-1 text-sm">
                    <li className="flex items-start">
                      <span className="text-amber-600 mr-2">•</span>
                      <span>Mange kommuner begrænser eller forbyder brug af klorholdige eller fosfatholdige rensemidler til algerens</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-600 mr-2">•</span>
                      <span>Andre har særlige krav vedrørende algebekæmpelse i nærheden af vandmiljøer</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-600 mr-2">•</span>
                      <span>Nogle kommuner anbefaler specifikt miljømærkede produkter til algerens af fliser</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white p-4 rounded-lg border border-amber-100">
                  <h4 className="font-semibold text-amber-800">Spildevandshåndtering ved Algerens</h4>
                  <ul className="mt-2 space-y-1 text-sm">
                    <li className="flex items-start">
                      <span className="text-amber-600 mr-2">•</span>
                      <span>Restriktioner på hvor spildevand fra algerens må ledes hen</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-600 mr-2">•</span>
                      <span>Særlige krav om opsamling af rensevand ved kemisk algerens</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-600 mr-2">•</span>
                      <span>Forbud mod udledning til regnvandskloakker i nogle områder</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 bg-amber-100 p-4 rounded-lg">
                <p className="font-medium">
                  Kontakt altid din lokale kommune, hvis du er i tvivl om reglerne vedrørende algerens af fliser i dit område. Dette er særligt vigtigt, hvis du bor tæt på søer, åer, vandløb eller andre sårbare naturområder.
                </p>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold mb-4 mt-8">Gode Råd til Miljøbevidst Algerens af Fliser</h3>
            
            <div className="grid md:grid-cols-3 gap-6 my-6">
              <div className="bg-white rounded-lg shadow-md p-5 border-t-3 border-blue-500">
                <div className="text-blue-500 mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold mb-2">Brug naturlige alternativer</h4>
                <p className="text-sm">
                  Eddike, natron eller økologisk brun sæbe kan være effektive og miljøvenlige midler til algerens af fliser. De påvirker ikke grundvandet negativt.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-5 border-t-3 border-blue-500">
                <div className="text-blue-500 mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="font-semibold mb-2">Mekanisk rensning først</h4>
                <p className="text-sm">
                  Start altid med mekanisk algerens (børste, skrubbe, højtryk) før eventuel brug af kemikalier. Dette reducerer ofte behovet for stærke midler.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-5 border-t-3 border-blue-500">
                <div className="text-blue-500 mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold mb-2">Planlæg i tørvejr</h4>
                <p className="text-sm">
                  Udfør algerens af fliser i tørvejr, men ikke i stærk sol. Dette minimerer risikoen for afstrømning af rengøringsmidler til miljøet.
                </p>
              </div>
            </div>
            
            <div className="bg-gray-100 rounded-lg p-6 my-8">
              <h3 className="text-xl font-semibold mb-4">Foreningsgrunde & Fælles Algerens af Flisearealer</h3>
              
              <p className="mb-4">
                Bor du i en grundejer- eller andelsforening? Ved fælles algerens af større flisearealer er der flere fordele ved en koordineret indsats:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Økonomiske Fordele</h4>
                  <ul className="space-y-1 text-sm">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Rabatter ved leje af udstyr til algerens af fliser i større mængder</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Mængderabat på professionel service til algebekæmpelse</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Delte udgifter til indkøb af specialudstyr til fliserengøring</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Praktiske Fordele</h4>
                  <ul className="space-y-1 text-sm">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Ensartet udseende af flisearealer i hele bebyggelsen</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Delt viden om effektive algerensmetoder for jeres specifikke flisetyper</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Mulighed for at arrangere fælles arbejdsdage for manuel algerens</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-4 p-3 bg-white rounded border">
                <p className="text-sm">
                  <strong>Tip til foreninger:</strong> Overvej at indhente tilbud fra flere professionelle firmaer, der specialiserer sig i algerens af fliser. Mange tilbyder betydelige rabatter ved større samlede arealer, og I kan ofte få en samlet vedligeholdelsesaftale, der sikrer flotte, algefri fliser året rundt.
                </p>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold mb-4 mt-8">Lokale Forskelle i Algevækst på Fliser</h3>
            
            <p className="mb-4">
              Algevækst på fliser kan variere betydeligt afhængigt af hvor i landet du bor, og selv inden for samme område kan der være store forskelle:
            </p>
            
            <div className="overflow-x-auto">
              <table className="min-w-full border my-4">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border p-3 text-left">Region</th>
                    <th className="border p-3 text-left">Typiske Udfordringer</th>
                    <th className="border p-3 text-left">Anbefalede Algerensmetoder</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-3">Kystnære områder</td>
                    <td className="border p-3">Høj luftfugtighed, saltvandspåvirkning, mere algevækst</td>
                    <td className="border p-3">Hyppigere algerens, saltresistente midler, grundig imprægnering</td>
                  </tr>
                  <tr>
                    <td className="border p-3">Skovområder</td>
                    <td className="border p-3">Skygge, bladnedfald, øget organisk materiale</td>
                    <td className="border p-3">Regelmæssig fejning, specialmidler mod mosevækst, god dræning</td>
                  </tr>
                  <tr>
                    <td className="border p-3">Byområder</td>
                    <td className="border p-3">Luftforurening, færre timer med direkte sol</td>
                    <td className="border p-3">Rensning af luftbårne partikler, fokus på afgrænsede algeangreb</td>
                  </tr>
                  <tr>
                    <td className="border p-3">Landlige områder</td>
                    <td className="border p-3">Pollen, støv fra marker, organisk nedfald</td>
                    <td className="border p-3">Grundig forårsindsats, fokus på forebyggelse af algevækst</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="bg-red-50 border-l-4 border-red-500 p-4 my-6">
              <p className="text-red-800">
                <strong>Advarsel:</strong> Vær særligt opmærksom på lokale vandmiljøregler, hvis du bor tæt på søer, vandløb eller i områder med særlige drikkevandsinteresser. Her kan der være skærpede krav til hvilke midler der må anvendes til algerens af fliser.
              </p>
            </div>
            
            <h3 className="text-xl font-semibold mb-4 mt-8">Rådgivningsmuligheder om Algerens af Fliser</h3>
            
            <div className="grid md:grid-cols-2 gap-6 my-6">
              <div className="bg-white p-5 rounded-lg shadow">
                <h4 className="font-semibold mb-2">Kommunale Ressourcer</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-gray-600 mr-2">•</span>
                    <span>Kommunens tekniske forvaltning kan informere om lokale regler for fliserens</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-600 mr-2">•</span>
                    <span>Miljøafdelingen tilbyder ofte rådgivning om miljøvenlig algerens af fliser</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-600 mr-2">•</span>
                    <span>Nogle kommuner arrangerer informationsmøder om bæredygtig havevedligeholdelse</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-5 rounded-lg shadow">
                <h4 className="font-semibold mb-2">Professionel Vejledning</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-gray-600 mr-2">•</span>
                    <span>Fagfolk inden for fliserens kan give skræddersyet vejledning om algerens</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-600 mr-2">•</span>
                    <span>Byggemarkeder tilbyder ofte gratis rådgivning om produkter til flisealgerens</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-600 mr-2">•</span>
                    <span>Online-platforme og fora hvor haveejere deler erfaringer med algerens</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-blue-50 p-5 rounded-lg shadow-md mt-8">
              <h3 className="text-lg font-semibold mb-3">Lokal Ekspertise: Find Specialister i Algerens af Fliser</h3>
              <p className="mb-4">
                For at sikre den bedste og mest miljøvenlige tilgang til algerens af dine fliser, kan det være en god idé at konsultere lokale specialister, der kender forholdene i dit område:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">→</span>
                  <span>Lokale anlægsgartnere med erfaring i flisevedligeholdelse og algebekæmpelse</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">→</span>
                  <span>Specialiserede fliserensningsfirmaer med miljøcertificering</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">→</span>
                  <span>Forhandlere af fliseprodukter, der tilbyder rådgivning om vedligeholdelse og algeforebyggelse</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">→</span>
                  <span>Grundejerforeninger eller naboer med erfaring i effektiv algerens under lokale forhold</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocalRulesSection; 