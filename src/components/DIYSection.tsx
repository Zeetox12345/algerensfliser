
import React from 'react';
import { CheckCircle } from 'lucide-react';

const DIYSection = () => {
  const steps = [
    {
      id: 1,
      title: 'Forberedelse',
      description: 'Fjern møbler, potter og andre genstande fra fliserne. Fej fliserne grundigt for at fjerne løst snavs og blade.',
      tips: 'Vælg en tør, overskyet dag for at undgå, at rengøringsmidlet tørrer for hurtigt i solen.'
    },
    {
      id: 2,
      title: 'Bland rengøringsmiddel',
      description: 'Bland en løsning af algerens ifølge produktets anvisninger. For miljøvenlige alternativer kan du blande eddike og vand i forholdet 1:1.',
      tips: 'Brug handsker og beskyttelsesbriller, når du håndterer rengøringsmidler.'
    },
    {
      id: 3,
      title: 'Påfør på fliserne',
      description: 'Påfør rengøringsmidlet jævnt over fliserne med en vandkande eller haveslange med spraydyse. Lad det virke i henhold til produktets anvisninger.',
      tips: 'For særligt snavsede områder kan du bruge en blød børste til at skrubbe forsigtigt.'
    },
    {
      id: 4,
      title: 'Skyl grundigt',
      description: 'Skyl fliserne grundigt med rent vand for at fjerne alle rester af rengøringsmidler og løsnede alger.',
      tips: 'En højtryksrenser kan være effektiv, men brug et lavt tryk for at undgå at beskadige fugerne mellem fliserne.'
    },
    {
      id: 5,
      title: 'Forebyggelse',
      description: 'Påfør en fliseimprægnering for at forebygge ny algevækst. Dette skaber en beskyttende barriere mod fugt og alger.',
      tips: 'Gentag behandlingen en gang om året for at opretholde beskyttelsen mod alger.'
    }
  ];

  const materials = [
    "Algerens eller miljøvenligt alternativ (eddike/vand)",
    "Haveslange eller vandkande med sprøjtedyse",
    "Blød børste eller kost",
    "Handsker og beskyttelsesbriller",
    "Højtryksrenser (valgfri)",
    "Fliseimprægnering til forebyggelse"
  ];

  return (
    <section id="diy" className="section bg-site-gray-100">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="heading-lg mb-4">DIY Algerens: Sådan Gør Du Selv</h2>
          <p className="text-lg">
            Vil du selv fjerne alger fra dine fliser? Følg vores trin-for-trin guide til effektiv rensning og forebyggelse af algevækst på dine fliser.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Steps for DIY cleaning */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="heading-md mb-6">Rengøring i 5 Trin</h3>
            
            {steps.map((step) => (
              <div key={step.id} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start">
                  <div className="bg-site-green-400 text-white h-8 w-8 rounded-full flex items-center justify-center font-bold shrink-0 mr-4">
                    {step.id}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                    <p className="mb-3">{step.description}</p>
                    <div className="bg-site-green-100 p-3 rounded-md">
                      <p className="text-sm font-semibold">TIP: {step.tips}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Materials needed */}
          <div>
            <div className="bg-white p-6 rounded-lg shadow-md sticky top-24">
              <h3 className="text-xl font-bold mb-6">Du skal bruge:</h3>
              <ul className="space-y-3">
                {materials.map((material, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="text-site-green-400 mr-2 shrink-0 mt-1" size={18} />
                    <span>{material}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <h4 className="font-bold mb-2">Tid påkrævet:</h4>
                <p>2-4 timer (afhængigt af areal)</p>
              </div>

              <div className="mt-6">
                <h4 className="font-bold mb-2">Sværhedsgrad:</h4>
                <div className="flex items-center">
                  <div className="h-3 w-3/5 bg-site-green-400 rounded-l"></div>
                  <div className="h-3 w-2/5 bg-gray-200 rounded-r"></div>
                </div>
                <p className="text-sm mt-1">Moderat</p>
              </div>

              <div className="mt-8 p-4 bg-site-green-100 rounded-lg">
                <h4 className="font-semibold mb-2">Har du ikke tid eller lyst?</h4>
                <p className="text-sm mb-4">
                  Overlad arbejdet til professionelle. De har erfaring, udstyr og de rigtige produkter til at fjerne alger effektivt.
                </p>
                <a href="#services" className="btn-primary block text-center">
                  Find Profesionelle
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="heading-md mb-4">Hvorfor rense alger fra fliser?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <h4 className="font-bold mb-2">Sikkerhed</h4>
              <p>Alger gør fliser glatte og kan føre til faldulykker, især i vådt vejr. Rensning af alger hjælper med at forhindre ulykker.</p>
            </div>
            <div>
              <h4 className="font-bold mb-2">Æstetik</h4>
              <p>Rene fliser forbedrer udseendet af dit hjem og giver et velholdt indtryk. Grønne alger kan få selv de bedste fliser til at se forsømte ud.</p>
            </div>
            <div>
              <h4 className="font-bold mb-2">Levetid</h4>
              <p>Alger kan med tiden nedbryde fliseoverfladerne. Regelmæssig rensning beskytter dine fliser mod beskadigelse og forlænger deres levetid.</p>
            </div>
            <div>
              <h4 className="font-bold mb-2">Ejendomsværdi</h4>
              <p>Velholdte udendørsområder øger værdien af din ejendom og giver et godt førstehåndsindtryk ved fremvisninger.</p>
            </div>
            <div>
              <h4 className="font-bold mb-2">Sundhed</h4>
              <p>Nogle alger kan forårsage allergiske reaktioner og luftvejsproblemer. Fjernelse af alger skaber et sundere miljø omkring dit hjem.</p>
            </div>
            <div>
              <h4 className="font-bold mb-2">Forebyggelse</h4>
              <p>Regelmæssig rensning og vedligeholdelse forhindrer spredning af alger til andre områder af din ejendom som f.eks. vægge og tagrender.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DIYSection;
