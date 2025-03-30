import React from 'react';

const SeasonalSection = () => {
  return (
    <section id="saesonbestemt-vedligeholdelse" className="section bg-gradient-to-b from-blue-50 to-amber-50">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading-lg mb-6 text-center">Sæsonbestemt Vedligeholdelsesplan for Algerens af Fliser</h2>
          
          <div className="prose prose-lg max-w-none mb-8">
            <p className="lead mb-6">
              Alger på fliser trives bedst i fugtige og lune omgivelser, typisk forår og efterår. For at holde dine fliser fri for alger året rundt, er en sæsonbestemt tilgang til algerens den mest effektive strategi.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 my-8">
              <div className="bg-green-50 rounded-lg shadow-md p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 h-24 w-24 opacity-10">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-green-800">
                    <path d="M11.584 2.376a.75.75 0 01.832 0l9 6a.75.75 0 11-.832 1.248L12 3.901 3.416 9.624a.75.75 0 01-.832-1.248l9-6z" />
                    <path fillRule="evenodd" d="M20.25 10.332v9.918H21a.75.75 0 010 1.5H3a.75.75 0 010-1.5h.75v-9.918a.75.75 0 01.634-.74A49.109 49.109 0 0112 9c2.59 0 5.134.202 7.616.592a.75.75 0 01.634.74zm-7.5 2.418a.75.75 0 00-1.5 0v6.75a.75.75 0 001.5 0v-6.75zm3-.75a.75.75 0 01.75.75v6.75a.75.75 0 01-1.5 0v-6.75a.75.75 0 01.75-.75zM9 12.75a.75.75 0 00-1.5 0v6.75a.75.75 0 001.5 0v-6.75z" clipRule="evenodd" />
                    <path d="M12 7.875a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-green-800">Forår (Marts-April): Hovedrengøring</h3>
                <p className="mb-4">
                  Foråret er den ideelle tid til grundig algerens af fliser, da de typisk har været udsatte for fugt i vinterhalvåret.
                </p>
                <ul className="space-y-2 pl-0">
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-2">1.</span>
                    <span><strong>Grundig rensning:</strong> Fjern blade, grene og andet organisk materiale der kan fremme algevækst på fliserne.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-2">2.</span>
                    <span><strong>Højtryksrensning:</strong> Den mest effektive metode til forårsklar flisealgerens. Brug passende tryk til din flisetype (se vores flisetype-guide).</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-2">3.</span>
                    <span><strong>Algerensemiddel:</strong> Påfør et effektivt algerensemiddel efter rengøring for at eliminere tilbageværende sporer.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-2">4.</span>
                    <span><strong>Imprægnering:</strong> Forsegl dine fliser med imprægnering efter algerens for at beskytte mod ny algevækst gennem sommeren.</span>
                  </li>
                </ul>
                <div className="mt-4 p-3 bg-white rounded border border-green-200">
                  <h4 className="text-sm font-semibold text-green-800">Pro-tip til forårsalgerens</h4>
                  <p className="text-sm">Vælg en tør dag med let skyet vejr til algerens af fliser. For stærk sol kan få rensemidler til at tørre for hurtigt og dermed reducere effekten.</p>
                </div>
              </div>
              
              <div className="bg-yellow-50 rounded-lg shadow-md p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 h-24 w-24 opacity-10">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-yellow-800">
                    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-yellow-800">Sommer (Juni-Juli): Let vedligeholdelse</h3>
                <p className="mb-4">
                  Sommerens tørre vejr reducerer algevækst, men skyggefulde områder kan stadig være udsatte. Fokusér på forebyggende algerens.
                </p>
                <ul className="space-y-2 pl-0">
                  <li className="flex items-start">
                    <span className="text-yellow-600 font-bold mr-2">1.</span>
                    <span><strong>Regelmæssig fejning:</strong> Fjern blade, pollen og støv fra fliserne, der kan blive næring for alger.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 font-bold mr-2">2.</span>
                    <span><strong>Spot-tjek skyggefulde områder:</strong> Inspicér og rens flisearealer under træer eller i konstant skygge, hvor alger trives trods varme.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 font-bold mr-2">3.</span>
                    <span><strong>Let vask med sæbevand:</strong> En månedlig let rengøring med mild sæbeopløsning kan forebygge algevækst uden aggressiv algerens.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 font-bold mr-2">4.</span>
                    <span><strong>Beskær planter:</strong> Klip buske og træer, der kaster tæt skygge over fliserne for at øge sollys og reducere fugt.</span>
                  </li>
                </ul>
                <div className="mt-4 p-3 bg-white rounded border border-yellow-200">
                  <h4 className="text-sm font-semibold text-yellow-800">Pro-tip til sommeralgerens</h4>
                  <p className="text-sm">Ved grillfester, fjern straks fedtpletter fra fliserne. Fedt kan tiltrække skimmelsvamp og alger og gøre senere algerens mere vanskelig.</p>
                </div>
              </div>
              
              <div className="bg-orange-50 rounded-lg shadow-md p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 h-24 w-24 opacity-10">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-orange-800">
                    <path fillRule="evenodd" d="M5.636 4.575a.75.75 0 010 1.06 9 9 0 000 12.729.75.75 0 01-1.06 1.06c-4.101-4.1-4.101-10.748 0-14.849a.75.75 0 011.06 0zm12.728 0a.75.75 0 011.06 0c4.101 4.1 4.101 10.749 0 14.85a.75.75 0 11-1.06-1.061 9 9 0 000-12.728.75.75 0 010-1.06zM7.757 6.696a.75.75 0 010 1.061 6 6 0 000 8.485.75.75 0 01-1.06 1.061 7.5 7.5 0 010-10.607.75.75 0 011.06 0zm8.486 0a.75.75 0 011.06 0 7.5 7.5 0 010 10.607.75.75 0 01-1.06-1.06 6 6 0 000-8.486.75.75 0 010-1.06zM9.879 8.818a.75.75 0 010 1.06 3 3 0 000 4.243.75.75 0 11-1.061 1.06 4.5 4.5 0 010-6.363.75.75 0 011.06 0zm4.242 0a.75.75 0 011.061 0 4.5 4.5 0 010 6.364.75.75 0 01-1.06-1.06 3 3 0 000-4.244.75.75 0 010-1.06z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-orange-800">Efterår (September-Oktober): Forebyggende indsats</h3>
                <p className="mb-4">
                  Efteråret bringer igen fugtige forhold, der fremmer algevækst. En grundig efterårsindsats er afgørende inden vinteren.
                </p>
                <ul className="space-y-2 pl-0">
                  <li className="flex items-start">
                    <span className="text-orange-600 font-bold mr-2">1.</span>
                    <span><strong>Fjern nedfaldne blade:</strong> Regelmæssig fjernelse af blade er essentiel, da de kan blive en fugtig grobund for alger på fliserne.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 font-bold mr-2">2.</span>
                    <span><strong>Målrettet algerens:</strong> Behandl særligt udsatte områder med algerensemiddel for at forhindre vinteralgevækst.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 font-bold mr-2">3.</span>
                    <span><strong>Kontroller afløb:</strong> Sikr dig, at regnvand ikke samler sig på fliserne. Stående vand fremmer algevækst og gør algerens nødvendig oftere.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 font-bold mr-2">4.</span>
                    <span><strong>Ekstra rensning:</strong> Overvej en mindre omfattende algerens end forårsindsatsen for at fjerne begyndende algevækst.</span>
                  </li>
                </ul>
                <div className="mt-4 p-3 bg-white rounded border border-orange-200">
                  <h4 className="text-sm font-semibold text-orange-800">Pro-tip til efterårsalgerens</h4>
                  <p className="text-sm">Anvend en løvblæser før algerens af fliser for at fjerne alle små bladrester fra fugerne, hvor alger ofte starter deres vækst.</p>
                </div>
              </div>
              
              <div className="bg-blue-50 rounded-lg shadow-md p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 h-24 w-24 opacity-10">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-blue-800">
                    <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-blue-800">Vinter (December-Februar): Overvågning</h3>
                <p className="mb-4">
                  Vinterens frost kan faktisk hjælpe med at begrænse algevækst, men overvågning er stadig vigtig for at undgå langvarige skader.
                </p>
                <ul className="space-y-2 pl-0">
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">1.</span>
                    <span><strong>Undgå større rengøringsprojekter:</strong> Kraftig algerens i frostperioder kan skade fliserne og bør undgås.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">2.</span>
                    <span><strong>Fjern sne:</strong> Sørg for at fjerne sne fra fliserne, da overgangen mellem frost og tø kan skabe ideelle betingelser for algevækst.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">3.</span>
                    <span><strong>Hold øje med overskydende vand:</strong> Især i milde vintre kan stillestående vand fremme algevækst på fliserne og nødvendiggøre algerens til foråret.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">4.</span>
                    <span><strong>Planlæg forårets indsats:</strong> Overvåg algesituationen og planlæg, hvilke områder der kræver særlig opmærksomhed ved forårets hovedalgerens.</span>
                  </li>
                </ul>
                <div className="mt-4 p-3 bg-white rounded border border-blue-200">
                  <h4 className="text-sm font-semibold text-blue-800">Pro-tip til vintervedligeholdelse</h4>
                  <p className="text-sm">Undgå salt til afisning på fliser, da det kan ændre pH-værdien og faktisk fremme visse typer algevækst, når det bliver varmere igen.</p>
                </div>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold mb-3 mt-10">Årshjul for Algerens og Vedligeholdelse af Fliser</h3>
            
            <div className="bg-white rounded-lg shadow-md p-6 my-6">
              <div className="overflow-x-auto">
                <table className="min-w-full border">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border p-3 text-left">Måned</th>
                      <th className="border p-3 text-left">Algerisiko</th>
                      <th className="border p-3 text-left">Anbefalede Algerensaktiviteter</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border p-3">Januar</td>
                      <td className="border p-3">Lav</td>
                      <td className="border p-3">Fjern sne, tjek for stående vand</td>
                    </tr>
                    <tr>
                      <td className="border p-3">Februar</td>
                      <td className="border p-3">Lav-Middel</td>
                      <td className="border p-3">Forberedelse til forårsrengøring, indkøb af algerenseprodukter</td>
                    </tr>
                    <tr>
                      <td className="border p-3">Marts</td>
                      <td className="border p-3">Middel</td>
                      <td className="border p-3">Begyndende algerens, fjern vinterens skidt</td>
                    </tr>
                    <tr>
                      <td className="border p-3">April</td>
                      <td className="border p-3">Høj</td>
                      <td className="border p-3">Hovedrengøring, højtryksrensning, algebehandling</td>
                    </tr>
                    <tr>
                      <td className="border p-3">Maj</td>
                      <td className="border p-3">Høj</td>
                      <td className="border p-3">Imprægnering efter hovedrengøring, sidste kontrol før sommer</td>
                    </tr>
                    <tr>
                      <td className="border p-3">Juni</td>
                      <td className="border p-3">Middel</td>
                      <td className="border p-3">Let rengøring, fokus på skyggefulde områder</td>
                    </tr>
                    <tr>
                      <td className="border p-3">Juli</td>
                      <td className="border p-3">Lav-Middel</td>
                      <td className="border p-3">Spot-tjek af problematiske områder, fejning</td>
                    </tr>
                    <tr>
                      <td className="border p-3">August</td>
                      <td className="border p-3">Middel</td>
                      <td className="border p-3">Kontrol af fugtige områder, let algerens hvor nødvendigt</td>
                    </tr>
                    <tr>
                      <td className="border p-3">September</td>
                      <td className="border p-3">Høj</td>
                      <td className="border p-3">Start efterårsrengøring, fjern blade løbende</td>
                    </tr>
                    <tr>
                      <td className="border p-3">Oktober</td>
                      <td className="border p-3">Høj</td>
                      <td className="border p-3">Grundig algerens før vinteren, kontrol af afløb</td>
                    </tr>
                    <tr>
                      <td className="border p-3">November</td>
                      <td className="border p-3">Middel-Høj</td>
                      <td className="border p-3">Sidste bladfjernelse, kontrol inden frost</td>
                    </tr>
                    <tr>
                      <td className="border p-3">December</td>
                      <td className="border p-3">Lav</td>
                      <td className="border p-3">Minimal vedligeholdelse, fjern sne efter behov</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 my-8">
              <p className="text-indigo-800">
                <strong>Vigtig information:</strong> Algevækst på fliser varierer afhængigt af lokale forhold som skygge, fugtighed og vejrforhold. Tilpas denne vedligeholdelsesplan til dine specifikke omstændigheder og flisetyper for at opnå de bedste resultater med din algerens.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeasonalSection; 