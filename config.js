ivar config = {
    style: 'mapbox://styles/sabeare/cli6zn62202qs01qyhghphbos',
    accessToken: 'pk.eyJ1Ijoic2FiZWFyZSIsImEiOiJjbGdnam12aXMwY2M2M2NwOGQ5YzhuN2FiIn0.XV3OFsZ65Niqc9F5ulg6Ig',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Slow datavisualisaties over het Soesterkwatier',
    subtitle: 'Hoe een geborduurd tafelkleed verbindt',
    byline: 'By Baukje Rienks | 12 juni 2023',
    footer: '',
    chapters: [
        {
            id: 'welkom',
            alignment: 'center',
            hidden: false,
            title: 'Welkom',
            image: 'images/borduurt.jpg',
            imageDescription:'Baukje Rienks embroiders during her research', 
            description: 'Dit is een storymap voor wijkmakers. Iedereen die zich inzet voor het gelijkwaardiger maken en verbeteren van de lokale leefomgeving, op een creatieve, verbindende en tastbare manier. Deze storymap presenteert mijn onderzoek naar: <em>Hoe kan een slow datavisualisatiemethode worden vormgegeven die bijdraagt aan het zichtbaar maken van de beleving en de betekenis van een wijk voor en met wijkmakers</em> voor mijn master Design aan de Willem de Kooning Academy in Rotterdam.  <br><br>            Door mijn achtergrond in geografie visualiseerde ik veel geodata, dat is data gerelateerd aan een locatie. Ik miste daarbij steeds vaker de relatie van de mens met zijn context. Ik vroeg me daarbij af of meer subjectieve data, verkregen via zintuigen en vertragen, zouden kunnen bijdragen aan een completer beeld van een wijk met nieuwe inzichten. Dit inspireerde me om ontwerpend te onderzoeken of ik een methode hiervoor kon ontwikkelen. Het resultaat ervan presenteer ik hier: mijn slow datavisualisatie methode. <br><br>            Ik deed participatief wijkonderzoek tussen september 2021 en juni 2023, met de Amersfoortse wijk het Soesterkwartier als case. Een belangrijk onderdeel van de methode die ik ontwikkelde is de inzet van een conversation piece. In het Soesterkwartier was dat een geborduurd tafelkleed. <br><br>            Ga je mee op reis? Eerst vertel ik je over de door mij ontwikkelde en toegepaste slow datavisualisatie methode. Vervolgens toon ik aan de hand van de conversation piece, het geborduurde tafelkleed, mijn iteraties en een aantal verhalen uit het Soesterkwartier. Als laatste ga ik dieper in op de rol van borduren in mijn methode aan de hand van het community borduurproject <em>Sterke Vrouwen</em>, dat ik heb opgezet. <br><br>            Deze storymap is al scrollend naar beneden te lezen en komt het beste tot haar recht op een computerscherm. Zo ontvouwt het hele onderzoek zich. Een andere optie is om via de hyperlinks in de tekst of via het tabblad: ‘Inhoud’ gericht naar de gewenste hoofdstukken te gaan. In de andere tabbladen onderin is aanvullende informatie te vinden, zoals een samenvatting, het colofon, de bibliografie en het lexicon. Deze tabbladen zijn ieder moment te raadplegen.   <br><br>          Ik hoop je te kunnen inspireren om zo met al je zintuigen andere inzichten over een gebied te ontdekken, in kaart te brengen en te delen.            <br><br>             Amersfoort, juni 2023 <br>Baukje Rienks            ',
            location: {
                center: [5.36808, 52.16647],
                zoom: 8.75,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'amersfoort',
                    opacity: 1,
                    }
            ],
            onChapterExit: [
                {
                    layer: 'amersfoort',
                    opacity: 0
                    }
            ]
        },
        {
            id: 'vrouw',
            alignment: 'full',
            hidden: false,
            title: 'Soesterkwartier | Sterke vrouwen Nel en Marjolein',
            image: 'images/nel.svg',
            description: '                  ',
            location: {
                center: [5.36207, 52.15940],
                zoom: 12.00,
                pitch: 13.00,
                bearing: 0.00 
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'amersfoort',
                    opacity: 1,
                    }
            ],
            onChapterExit: [
                {
                    layer: 'amersfoort',
                    opacity: 0
                    }
            ]
        },
        {
            id: 'methode',
            alignment: 'center',
            hidden: false,
            title: 'Methode | Slow datavisualisatie',
            image: 'images/slowdata.svg',
            imageDescription:'Schema slow datavisualisatie ontwerpend ontwikkeld door Baukje Rienks.',
            description: 'SLOW DATAVISUALISATIE is een vorm van <a href="#slowr">SLOW RESEARCH</a> die gebruik maakt van <a href="#slowd">SLOW DESIGN</a> principes. Slow datavisualisaties laten ruimte voor meerstemmigheid en geven ruimte om je eigen verhalen te destilleren en aan te vullen. Ik heb mijn slow datavisualisatiemethode ontwerpend ontwikkeld om participatief wijkonderzoek te doen. Met deze methode kun je, door je langdurig aan een wijk en de WIJKMAKERS te verbinden, verborgen informatie zichtbaar maken. Ik heb meerdere iteraties met diverse wijkmakers in het Soesterkwartier gedaan. Deze waren gericht op verbinding, reflectie en het omarmen van de complexiteit van de context van de wijk.   <br><br>              Het centrale onderdeel is een conversation piece. In dit geval een geborduurd tafelkleed, dat de waarde van die context toont met behulp van subjectieve data en anekdotes. <br><br>           Het slow datavisualisatie proces bestaat uit drie fases, namelijk: <a href="#verkenimg">verkennen</a>, <a href="#verbeeldimg">verbeelden</a> en <a href="#verdiepimg">verdiepen</a>. In iedere fase staat een andere tool centraal, namelijk: wandelen, borduren en de conversation piece                               ',
            location: {
                center: [5.36207, 52.15940],
                zoom: 14.00,
                pitch: 13.00,
                bearing: 0.00 
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'verkenimg',
            alignment: 'center',
            hidden: false,
            title: 'Methode | Verkennen',
            image: 'images/verkenimg.svg',
            imageDescription:'Geborduurde plattegrond van de Bloemenbuurt in Amersfoort.', 
            description: 'De methode start met het verkennen van het gebied. Ik heb mij voor langere tijd verbonden aan de wijk het Soesterkwartier en de WIJKMAKERS die daar wonen en/of werken. Dit heb ik gedaan door daar alleen en met anderen te gaan <a href="#flaneuse">wandelen</a>, te observeren, te fotograferen en daarbij bewust de zintuigen in te zetten. Zo heb ik verrassende en bijzondere inzichten over de wijk gekregen die ik op andere manieren niet had kunnen ervaren.',
            location: {
                center: [5.36207, 52.15940],
                zoom: 14.00,
                pitch: 13.00,
                bearing: 0.00   
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'verbeeldimg',
            alignment: 'center',
            hidden: false,
            title: 'Methode | Verbeelden',
            image: 'images/verbeeldimg.svg',
            imageDescription: 'Leeftijdsopbouw in het Soesterkwartier, tastbaar geborduurd met kraaltjes en op dahlia`s.',
            description: 'De tweede stap is het verbeelden van de vergaarde informatie en subjectieve data in mappings en SLOW DATAVISUALISATIES. Door het verbeelden bewust te vertragen door te <a href="#borduur">borduren</a>, ontstaat er meer ruimte voor reflectie. Dit is van belang om nieuwe inzichten over de beleving van de wijk te verkrijgen. Het borduren deed ik zowel alleen als in groepsverband, in een community project met verschillende participanten, WIJKMAKERS zoals bewoners, stedenbouwers of vrouwen met beginnende dementie. Dit project leidde tot bijzondere ontmoetingen, gesprekken en verhalen. ',
            location: {
                center: [5.36207, 52.15940],
                zoom: 14.00,
                pitch: 13.00,
                bearing: 0.00 
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'verdiepimg',
            alignment: 'center',
            hidden: false,
            title: 'Methode | Verdiepen',
            image: 'images/verdiepimg.svg',
            imageDescription:'Deelnemers van het community borduurproject <em>Sterke Vrouwen</em> in gesprek rondom de conversation piece; het geborduurde tafelkleed', 
            description: 'Het laatste onderdeel is het verdiepen van de opgehaalde kennis door samen met WIJKMAKERS verder te borduren op en rondom de <a href="#conver">conversation piece</a>. Voor mijn project heb ik gekozen voor een geborduurd tafelkleed. Dit maakt de informatie niet alleen tastbaar, maar ook meerdere malen inzetbaar. Een tafelkleed ligt letterlijk te midden van de groep en is steeds weer in te zetten bij andere doelgroepen. Op deze manier geeft het tafelkleed ruimte aan ieders stem om zo de SLOW DATAVISUALISATIES ook letterlijk te verrijken. Deze meerstemmigheid laat tegelijkertijd de complexiteit van de onderwerpen zien en geeft zo een diepere betekenis. ',
            location: {
                center: [5.36207, 52.15940],
                zoom: 14.00,
                pitch: 13.00,
                bearing: 0.00 
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'kleedimg',
            alignment: 'full',
            hidden: false,
            title: 'Methode | Verdiepen | Tafelkleed als conversation piece',
            iframe: '',
            image: 'images/cp.jpg',
            imageDescription:'Conversation piece met slow datavisualisaties en een aantal geborduurde sterke vrouwen portretten.', 
            description: '',
            location: {
                center: [5.36207, 52.15940],
                zoom: 14.00,
                pitch: 13.00,
                bearing: 0.00           
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'conver',
            alignment: 'left',
            hidden: false,
            title: 'Methode | Verdiepen | Tafelkleed als conversation piece II',
            image: 'images/joke.jpg',
            imageDescription:'Borduren tijdens het community borduurproject Sterke Vrouwen rondom de conversation piece.', 
            description: 'Als onderdeel van de methode die ik ontwerpend ontwikkelde heb ik een conversation piece geborduurd. De conversation piece wordt ingezet om samen met WIJKMAKERS de opgehaalde informatie van de <a href="#vertraag">vertragende</a> wandel- en borduuriteraties die ik in de wijk deed te verdiepen. Deze conversation piece is als een topografie van dat gebied, de Amersfoortse wijk het <a href="#wijk">Soesterkwartier</a>. <br><br>            Uit mijn onderzoek is gebleken dat deze conversation piece die in eerste instantie bedoeld was om te verdiepen ook gebruikt kan worden om onderwerpen opnieuw te verkennen en te verbeelden. Dit maakt de conversation piece een MULTILAYERED STORYTELLING TOOL. Het is daarom een goede vorm om (verborgen) verhalen uit de wijk te delen, omdat de wereld waarin we leven complex is en zich niet laat reduceren tot een ordelijk en simpel verhaal. <br><br>                                    ',
            location: {
                center: [5.36207, 52.15940],
                zoom: 14.00,
                pitch: 13.00,
                bearing: 0.00 
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'kastanje',
            alignment: 'right',
            hidden: false,
            title: 'Soesterkwartier | Introductie',
            image: 'images/kastanje.png',         
            imageDescription:'De reddingsactie van een monumentale boom is na drie jaar nog niet vergeten.  ', 
            description: 'Het Soesterkwartier is een voormalige volksbuurt en ligt <em>boven</em> het treinstation van Amersfoort en is zo’n honderd jaar oud. Vanwege het spoor heeft het Soesterkwartier een wat geïsoleerde ligging. Ondanks dat de wijk dicht bij het centrum ligt, groeten de mensen elkaar hier op straat, alsof het een dorp is. De wijk bestaat uit meerdere buurten. De belangrijkste zijn de: Bloemen-, Bomen- en Rivierenbuurt. <br><br>  In deze wijk komen veel maatschappelijke issues samen. Denk aan <a href="#talk">gentrificatie</a> en nieuwbouw die leidt tot een toenemende druk op de voorzieningen en het groen. Een gerelateerde ontwikkeling is een toename in van het wij-zij denken, de polarisatie binnen de wijk. <br><br> Deze jaren 30-wijk ligt in Amersfoort en is mijn eigen LEEFOMGEVING. De nabijheid van een wijk maakt het eenvoudiger om je er langdurig aan te verbinden, maar het is geen voorwaarde om participatief wijkonderzoek te kunnen doen. <br><br>              Het redden van een monumentale boom was mijn eerste wijkactie, drie jaar geleden. We maakten met de buurt een gehaakte sjaal voor de zieke kastanje aan de IJsselstraat in Amersfoort. Met een succesvolle afloop! De monumentale boom mocht blijven staan. Het doet me goed dat mensen genieten van <em>onze</em> kastanje. Voor mij was deze actie ook het startsein om het Soesterkwartier als gebied te kiezen om mijn methode voor participatief wijkonderzoek te ontwikkelen. ',
            location: {
                center: [5.37209, 52.16003],
                zoom: 18.10,
                pitch: 50.00,
                bearing: 0.00 
            },
            setMarker: true,
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'flaneuse',
            alignment: 'left',
            hidden: false,
            title: 'Methode | Verkennen | Flaneuse',
            image: 'images/walking.jpg',
            imageDescription: 'Geborduurde quote uit het boek Flâneuse van Lauren Elkin (p.21).', 
            description: 'Een flaneur is man die doelloos ronddwaalt. Diegene begrijpt de stad omdat hij die al wandelend memoriseert en een mate van onzichtbaarheid heeft om dat te doen. Flâneuse is de titel van het boek van Lauren Elkin over hoe een vrouw past in het stadsgezicht. Een flâneuse is volgens haar meer dan een vrouwelijke vorm van flaneur: een vrouw, die al wandelend gaat waar ze niet behoort te gaan en daarbij afstemt op het creatieve potentieel van de stad (Elkin, 2016). <br><br>            Ook neurowetenschapper Shane O’Mara schrijft in zijn boek In Praise of Walking dat wandelen de beste manier is om een plek te leren kennen. De sfeer van een plek, de energie, het tempo. Te voet ben je direct <em>in touch</em> met het stadsleven. (O’Mara, 2020) <br><br>            In de verkenningsfase van mijn onderzoek ging ik de straten van het Soesterkwartier bewandelen en observeren. Dit deed ik samen met mijn hond om zo de onzichtbaarheid als van flâneuse volgens Elkin te creëren. Ondertussen fotografeerde ik de dingen die me opvielen zoals, de vele aannemersbusjes voor verbouwingen of <a href="#autopark">geparkeerde auto’s</a> in de voortuin. De informatie die het me gaf nam ik mee als gesprekspunten voor de interviews die ik later voerde met WIJKMAKERS. <br><br>            Wandelen inzetten als tool gaat wat mij betreft over het observeren en <em>mappen</em> van een plek. Dat doe ik niet alleen door te kijken. Om de plek in zijn geheel te ervaren gebruik ik daarbij ook de andere zintuigen. Zoals ruiken, wanneer ruik ik de terugkerende geur van de koffiebranderij of autospuiterij verderop. Maar ook horen. Hoe vaak worden die illegale straatraces eigenlijk gehouden? Wandelen als een flâneuse is daarom een goede manier om latente informatie op te halen voor SLOW DATAVISUALISATIES.                                            ',
            location: {
                center: [5.37171, 52.15778],
                zoom: 15.22,
                pitch: 0.00,
                bearing: 0.00
                
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'flaneuse3',
                    opacity: 1,
                    }
             ],
            onChapterExit: [
                {
                    layer: 'flaneuse3',
                    opacity: 0
                    }
            ]
        },
        {
            id: 'autopark',
            alignment: 'full',
            hidden: false,
            title: 'Soesterkwartier | Parkeren in de voortuin',
            image: 'images/autopark.svg',
            imageDescription: 'Fotoselectie voor slow datavisualisatie van auto’s geparkeerd in de voortuinen in het Soesterkwartier. ',
            description: ' Door regelmatig door de wijk te flaneren en daarbij mijn zintuigen in te zetten verzamelde ik informatie die je niet via reguliere databronnen kunt vergaren. Wat mij bijvoorbeeld opviel in de Bloemen- en de Bomenbuurt van het Soesterkwartier, is dat de voortuinen vaak volledig betegeld zijn en regelmatig als parkeerplaats dienen.         ',
            location: {
                center: [5.37171, 52.15778],
                zoom: 15.22,
                pitch: 0.00,
                bearing: 0.00
                
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'flaneuse3',
                    opacity: 1,
                    }
             ],
            onChapterExit: [
                {
                    layer: 'flaneuse3',
                    opacity: 0,
                    }
            ]
        },
        {
            id: 'zintuig',
            alignment: 'left',
            hidden: false,
            title: 'Methode | Verkennen | zintuigwandelen',
            image: 'images/zintuigwandeling.svg',
            imageDescription:'Eerste versie van de iteratie voor wijkmakers om een wandelroute door de wijk te bepalen op basis van zintuigen. ', 
            description:'Ik wilde weten of ik ook nieuwe informatie over de wijk zou krijgen als ik niet voor de hand liggende doelgroepen in zou zetten. Uit het boek <a href="#straat">Invisible Women</a> van Caroline Criado Perez komt, wat zij noemt de <em>gender data gap</em>, naar voren. Zij onderbouwt dat in ons dagelijkse- en publieke leven vrouwen over het hoofd worden gezien. (Perez, 2020) Ik heb daarom bewust bij deze iteratie gekozen om alleen vrouwen te benaderen. Ik ontwierp de iteratie gericht op flaneren met zintuigen zo, dat ik daar zelf niet bij aanwezig was. Zo kon ik niet beïnvloeden wat er aan informatie werd opgehaald. <br><br>            De deelneemsters ontvingen van mij de hierboven getoonde flyer om zelf de buurt te verkennen. Dit deden ze met behulp van een zelfgekozen zintuig of een woord zoals <em>toegankelijkheid</em> in een vergelijkbare iteratie. Ik merkte dat het gebruik van zintuigen de voorkeur had. De woorden vonden de deelnemers te abstract. <br><br>            De meeste deelneemsters van deze iteratie kwamen uit de wijk zelf, maar ik heb ook een aantal vrouwen gevraagd om mee te doen die het gebied nauwelijks kenden. Beide doelgroepen gaven aan dat ze door het zintuigwandelen zowel met andere ogen als opmerkzamer door de buurt wandelden en dit vaker willen doen. <br><br>            Ook testte ik verschillende manieren van het delen van de wandelervaringen. Dit deed ik door de personen naderhand hun ervaringen in groepsverband te laten delen en zo aan elkaar over te dragen. Een andere optie was om de deelneemsters individueel foto’s, video of audio met aanvullende tekst terug te laten sturen. Bij deze optie koos iedereen voor foto’s als informatiedrager.                                     ',
            location: {
                center: [5.36207, 52.15940],
                zoom: 14.00,
                pitch: 13.00,
                bearing: 0.00 
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 
            ],
            onChapterExit: [
                 
            ]
        },
        {
            id: 'blauw',
            alignment: 'right',
            hidden: false,
            title: 'Soesterkwartier | Blauw',
            image: 'images/blauw.jpg',
            imageDescription: '<em>"Het oude buurthuis "De Sleutel" waar nu een ontmoetings- en activiteitencentrum zit. Voor de toekomst van de wijk is dit een plek waar mensen elkaar blijven ontmoeten." </em>(citaat en afbeelding: Manon Tinabu)',
            description:'Na het ontvangen van de opdracht zintuigwandelen koos Manon ervoor om de route te bepalen aan de hand van de kleur blauw. Ze ging alleen op pad. Ze stuurde me naderhand per mail vijf afbeeldingen en de volgende tekst. <br><br>             <em>"Deze blauwe elementen hebben de route van mijn wandeling bepaald: Ik heb gekozen voor het thema kleur en daarbij voor mijn lievelingskleur blauw gekozen. Vaak wandel ik mijn vaste rondje, maar door nu het thema te volgen, ben ik toch op andere plekken beland. Aan het begin wist ik niet hoe mijn wandeling eruit zou gaan zien omdat alle opties in principe nog open waren. Een hele leuke ervaring en ga zeker ook nog een keer een ander thema te pakken😊. Manon" </em><br><br>            Door het bewust inzetten van je zintuigen ontdek je nieuwe dingen. Zelfs als je al in de wijk woont. Het buurthuis De Sleutel is één van de plekken waar ik later het community borduurproject <a href="#sterk">Sterke Vrouwen</a> ben gestart met beginnend dementerende vrouwen.                        ', 
            location: {
                center: [5.35268, 52.16018],
                zoom: 17.99,
                pitch: 72.50,
                bearing: 0.00       
            },
            setMarker: true,
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'rafel',
            alignment: 'right',
            hidden: false,
            title: 'Soesterkwartier | Rafelrandjes',
            image: 'images/reliefs.jpg',
            imageDescription:'Reliëf de <em>Vuurspuwende draak</em> van Gerard Hordijk op een schakelstation aan de Amsterdamseweg in Amersfoort. (afbeelding: Chantal van der Leest)', 
            description: 'Ook Chantal ging alleen op pad. Ze stuurde me naderhand per mail een aantal afbeeldingen en de volgende tekst. <br><br> <em>”Ik heb me gericht op gevoel/structuur. Tijdens het wandelen viel het contrast tussen nieuw en oud me erg op. De bomen in onze wijk zijn oud met een grove structuur in de bast. Het gras is geen eentonige sprietenmat, maar er zitten mos en plantjes in verstopt die je van veraf niet ziet. Bakstenen hebben beschadigingen en brokkelen af, er zijn nog veel oude muur reliëfs bewaard gebleven die een beetje verstopt zijn en niet opvallen langs grote wegen. Het verleden is tastbaar. <br>            Onder onze voeten zijn er structuren die ons de weg wijzen. Omdat we niet meer goed zien, of omdat we de stad niet kennen en het centrum niet zien.<br>            Het moderne leven brengt koude materialen de wijk in. Gladde auto’s, sterke ijzeren omheiningen. Maar nieuwe stenen blijken ook weerloos en krijgen een zacht karakter door de natuur die zelfs op de kleinste plekken wil groeien. Groeten Chantal"</em> <br><br> Naast het feit dat het gebruik van zintuigen je anders laat kijken, helpen deze zintuigwandelingen ook om inzicht te krijgen in wat WIJKMAKERS belangrijk vinden om te delen over de wijk. Chantal heeft zich bijvoorbeeld sterk gemaakt voor het <a href="#talk">vergroenen</a> door middel van <em>tegelwippen</em> in de Dollardstraat in de rivierenbuurt, waarbij de gemeente nieuwe stoeptuintjes aanlegt op voorwaarde dat de bewoners deze tuintjes helpen onderhouden.   ', 
            location: {
                center: [5.37807, 52.15916],
                zoom: 17.99,
                pitch: 52.50,
                bearing: -136.00
            },
            setMarker: true,
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'tuin',
            alignment: 'right',
            hidden: false,
            title: 'Soesterkwartier | De Voortuin',
            image: 'images/beeldjes.jpeg',
            imageDescription: 'Een tuin vol met beeldjes in de Sint Bonifaciusstraat. (afbeelding door Jenneke)', 
            description:'Jenneke heeft geen directe binding met het Soesterkwartier. Ze werkt bij de gemeente Amsterdam en is fotograaf. Ze is op mijn uitnodiging door de wijk gaan flaneren. Dit is was Jenneke mailde: <br><br>             <em>“Ik vond het Soesterkwartier een mooie buurt, maar er viel mij maar 1 ding echt op: de voortuintjes en de voorliefde voor tegels, soms vermengd met kabouters en plantenbakken met (fake) planten. Het was maart, maar het was niet moeilijk om de barbecueënde bewoners hierbij in te beelden.<br><br>            Mijn oog is meer gericht op de natuur; vandaar toch ook foto’s van het mos en de verdroogde hortensia’s. De speeltjes van de bewoners zijn sociologisch interessanter, maar ze maken mij een beetje depressief. Ze doen mij namelijk denken aan de BBB, de ‘eigen ik eerst-mentaliteit, de ‘fuck de natuur’ houding.<br><br>            De contradictie: gezellig hamburgers eten met de buren in mijn plastic stoel op mijn betonnen tegels versus een plekje met groen voor de merel, de egel en de vlinder. Tegelijkertijd leidt het gebruik van de voortuin hopelijk tot gezelligheid en is het goed voor de sociale cohesie in een buurt, maar om dat te kunnen beoordelen was het nog te koud. <br><br> Misschien is dit te negatief gedacht door een ‘elitaire’ stedeling, maar de uitkomst van de provinciale verkiezingen – een week later – was helaas een bevestiging van dit gevoel. Jenneke Visser”</em><br><br>            Aan de inrichting van de tuin kun je zien in welk deel van de wijk je bent. In de Bloemenbuurt leven de bewoners in de zomer veel buiten in de vaak volledig betegelde voortuinen.                               ', 
            location: {
                center: [5.37103, 52.15786],
                zoom: 18.29,
                pitch: 52.00,
                bearing: -80.80
            },
            setMarker: true,
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'walktalk',
            alignment: 'left',
            hidden: false,
            title: 'Methode | Verkennen | Walk&talk',
            image: 'images/walk&talk.svg',
            imageDescription:'Eva Kail is in Wenen expert op het gebied van vrouwvriendelijke stadsplanning. Naast haar uitspraak de opzet van een walk&talkinterview. ', 
            description: 'Om verbinding aan te gaan met de wijk en haar WIJKMAKERS ontwierp ik vervolgens de walk&talkinterviewmethode. Ik wilde een netwerk van wijkmakers van het Soesterkwartier in kaart brengen. Daarom besloot ik voor deze iteratie geen gender onderscheid te maken. <br><br>            Ik benaderde drie wijkmakers om mee te starten. Met elk van hen maakte ik een wandeling. De walk&talkmethode waren bewust gesprekken tussen twee personen, waarbij ik erop gericht was om met volle aandacht naar de wijkmaker te luisteren. De deelnemer bepaalde al wandelend de route en we hadden vaak hele open en persoonlijke gesprekken vanuit de vraag “Hoe gaat het met Soesterkwartier?” Naderhand adviseerden de wijkmakers mij over nieuwe participanten om te benaderen. Ik kreeg op deze manier een goed inzicht in het <a href="#net">netwerk</a> van wijkmakers en hoe deze mensen met elkaar verbonden zijn. <br><br>            De meeste wandelingen duurden langer dan anderhalf uur. Sommige waren begrensd op een uur, maar dan had de deelnemer vooraf al aangegeven beperkt de tijd te hebben. Ik merkte dat de deelnemers, doordat zij zelf de tijd bepaalden vaak ruim de tijd namen, en zich echt gehoord voelden door deze manier van interviewen. De walk&talkmethode is tijdsintensief en werkt alleen als de interviewer zelf bereid is om te vertragen en te luisteren<br><br>            Doordat de gesprekken buiten plaatsvonden,  dienden de gespreksonderwerpen zich als vanzelf aan. Een kapot bushokje leverde meerdere verhalen over de buurt op. Dit maakte ook dat de gesprekken heel natuurlijk verliepen. Wat mij verder opviel, is dat er op deze manier ruimte is voor veel meer persoonlijkere gesprekken. Over hoe mensen in het leven staan en wat - al dan niet in relatie tot de buurt - belangrijk voor hen is. Wellicht komt dit door de nabijheid tot elkaar als je samen wandelt maar er egelijkertijd meestal geen oogcontact is.                                   ',
            location: {
                center: [5.35415, 52.16008],
                zoom: 14.29,
                pitch: 13.00,
                bearing: 0.00
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                layer: 'tracks-color',
                opacity: 1,
                }
            ],
            onChapterExit: [
                {
                layer: 'tracks-color',
                }
            ]
        },
        {
            id: 'netwerk',
            alignment: 'right',
            hidden: false,
            title: 'Soesterkwartier | Netwerk walk&talk',
            image: 'images/netwerk.png',
            imageDescription:'Netwerkschema van walk&talkdeelnemers (rood) en organisaties (mint) en potentiele deelnemers (grijs)',
            description: 'Ik merkte dat het merendeel van de WIJKMAKERS die ik sprak, vaker te horen zijn in de wijk, via de media en de gemeente. Maar ik sprak ook wijkmakers die organisaties vertegenwoordigen met meer onzichtbare doelgroepen, zoals bijvoorbeeld kinderen (Kinderwijkraad) en ouderen met beginnende dementie (King Arthur Groep). Via de walk&talkinterviews kon ik mijn eigen netwerk in de wijk uitbreiden, wat mij verder hielp om contact te krijgen met de meer <a href="#sterk2">verborgen doelgroepen</a>.                   ',
            location: {
                center: [5.36276, 52.16034],
                zoom: 15.00,
                pitch: 0.00,
                bearing: 0.00
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                layer: 'tracks-color',
                opacity: 1,
                }
            ],
            onChapterExit: [
                {
                layer: 'tracks-color',
                opacity: 0
                }
            ]
        },
        {
            id: 'talk',
            alignment: 'right',
            hidden: false,
            title: 'Soesterkwartier | Analyse walk&talkinterviews',
            image: 'images/radarchart_walk&talk.png',
            imageDescription: 'Grafiek n.a.v. analyse interviews, die als basis dient voor een slow datavisualisatie.', 
            description: 'Ik heb een analyse van de gevoerde walk&talk gesprekken gemaakt. Hiervoor gebruikte ik de <a href="#mental">MENTAL MAPS</a> die de deelnemers als samenvatting hadden gemaakt en de door mijzelf geschreven reflecties. Ik ordende de onderwerpen waarover gesproken was. Deze konden in vier categorieën worden ingedeeld: jongeren, gentrificatie, democratie en vergroening. Vervolgens maakte ik een score-indeling om deze onderwerpen in een grafiek te koppelen aan hoelang iemand in het Soesterkwartier woont. <br><br>            Je ziet dat degenen die het langst in het Soesterkwartier wonen het meest over jongeren en gentrificatie spreken. Zij ondervinden de veranderingen het sterkst. Ook is vergroening voor hen een belangrijk onderwerp. Dat is verklaarbaar, aangezien deze personen in de Bloemenbuurt wonen en hier weinig groen in de omgeving is. Degenen die het kortst in de wijk wonen, wonen in de Rivierenbuurt of de nieuwbouwwijk op de Wagenwerkplaats. Zij richten zich meer op gentrificatie en democratie en verbinding in de buurt.                               ',
            location: {
                center: [5.36276, 52.16034],
                zoom: 15.00,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                layer: 'tracks-color',
                opacity: 1,
                }
            ],
            onChapterExit: [
                {
                layer: 'tracks-color',
                opacity: 0
                }
            ]
        },
        {
            id: 'analoog',
            alignment: 'left',
            hidden: false,
            title: 'Methode | Verbeelden | Analoog werken',
            image: 'images/verborgen.png',
            imageDescription: 'Borduursel over een verborgen doelgroep: beginnende dementerende vrouwen.', 
            description: 'Wat is de rol van <em>slow</em> in <a href="#methode">SLOW DATAVISUALISATIE</a>, vroeg ik me af. Het <em>slow</em> in slow datavisualisaties gaat niet alleen over vertragen door te wandelen en zo informatie op te halen. Het <em>slow</em> is er juist ook om de opgehaalde informatie te verbeelden op een analoge manier om zo ruimte te maken voor reflectie en het verdiepen van de complexiteit van de context. <br><br>            Graphic novel auteur Lynda Barry stelt dat door met de hand te schrijven, te tekenen of te maken, <em>creative concentration</em> ontstaat. Het gaat er hierbij niet om of een tekening mooi of lelijk is, maar om een state of mind die juist ontstaat als je ANALOOG werkt. Met open aandacht kun je zowel het geheel als de details beschouwen (Barry, 2014).  <br><br>            Giorgia Lupi is een information designer die veel van haar datavisualisaties met de hand schetst. Door langere tijd met de inhoud bezig te zijn, kun je Volgens Lupi beter begrijpen hoe de structuur van de data is en hoe je deze kunt organiseren en visualiseren. Zo ontstaat er meer ruimte voor contextuele details. Zonder het gebruik van digitale techniek en standaard grafieken word je bovendien meer uitgedaagd om andere manieren van visualiseren te vinden. Lupi zegt hierover: “Hoe complexer de vraagstukken, hoe belangrijker het is om unieke, contextuele, persoonlijke verhalen en anekdotische details toe te voegen”. Zo zorg je volgens haar voor rijkere data en meer verbonden kennis. Op deze manier is het mogelijk om een laag dieper te gaan en zo onvoorziene informatie te ontsluiten (Lupi, 2017). <br><br>            Volgens information designer Federica Fragapane krijg je betekenisvollere verhalen als je verbinding aangaat met de context van je onderzoek. Het gaat niet alleen om communicatie, maar je kunt zo ook een stem geven aan mensen die niet vanzelfsprekend een platform hebben om dat te doen (Fragapane, 2021). <br><br>Tijdens de verbeeldingsfase van mijn onderzoek heb ik gekeken of borduren inderdaad leidt tot <em>creative concentration</em>, en diepere reflectie tot stand laat komen door anekdotische details toe te voegen.                    ',
            location: {
                center: [5.36207, 52.15940],
                zoom: 14.00,
                pitch: 13.00,
                bearing: 0.00 
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'stapel',
            alignment: 'right',
            hidden: false,
            title: 'Soesterkwartier | Gestapelde huizen',
            image: 'images/huisverheuvel.png',
            imageDescription: 'geborduurde collage over een huisje waar al vier generaties dezelfde familie woont.', 
            description: 'Tijdens veel <a href="#walktalk">walk&talkinterviews</a> kwam naar voren dat er in het Soesterkwartier op veel plekken meerdere generaties na elkaar in hetzelfde huis wonen. Dat zegt voor mij iets over de verbondenheid die zij voelen met die plek. Al haar hele leven woont mevrouw Verheuvel, ruim negentig jaar oud, in dit huisje. Ze is de vierde generatie die in dit huis woont: ook haar ouders, grootouders en overgrootmoeder hebben hier gewoond. <br><br>            Ik hoorde dit verhaal tijdens de wandelingen door de buurt. Later sprak ik de zus van mevrouw Verheuvel hierover, tijdens mijn bezoek aan een dagbestedingsgroep van beginnende dementerenden. Zij vertelde mij dat haar overgrootmoeder weduwe werd en met haar kinderen dit huisje mocht betrekken in ruil voor het onderhoud van de naast gelegen Joodse begraafplaats. Door deze anekdote als SLOW DATAVISUALISATIE toe te voegen aan de <a href="#conver">conversation piece</a>, heb ik dit verhaal zichtbaar gemaakt en kan ik het delen met andere WIJKMAKERS in het Soesterkwartier.                             ',
            location: {
                center: [5.37023, 52.15690],
                zoom: 18.50,
                pitch: 55.50,
                bearing: -139.20
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            setMarker: true,
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 
            ],
            onChapterExit: [
                 
            ]
        },
        {
            id: 'schoolimg',
            alignment: 'full',
            hidden: false,
            title: 'Soesterkwartier | Inzoomen op de lagereschoolleerlingen',
            image: 'images/school.svg',
            imageDescription: 'Iedere lagereschoolleerling uit het Soesterkwartier is geëerd met een geborduurd knoopje, 1210 in totaal. Hiervan gaan 659, meer dan de helft buiten de wijk naar school (alle cijfers)*.',
            location: {
                center: [5.37024, 52.16024],
                zoom: 16.47,
                pitch: 55.50,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'school',
            alignment: 'right',
            hidden: false,
            title: 'Soesterkwartier | Kansengelijkheid schoolkinderen',
            image: 'images/schooldetail.svg',
            imageDescription:'Geborduurde kaart met lagereschoolleerlingen uit het Soesterkwartier', 
            description: 'De SLOW DATAVISUALISATIE hierboven laat zien naar welke scholen de kinderen uit het Soesterkwartier gaan. Het blijkt dat de meerderheid van de kinderen buiten de wijk naar school gaat (groen). Is dat erg? In veel van de walk&talkinterviews die ik hield kwam scholenproblematiek als onderwerp ter sprake. <br><br>            Sommige WIJKMAKERS vertelden over de afwegingen die ze gemaakt hadden om hun kinderen wel of niet in de buurt naar school te laten gaan. Voor meerderen was het grove taalgebruik van kinderen op de buurtscholen een reden om naar andere scholen buiten de buurt te gaan kijken. <br><br>            Een van de wandelaars die ontevreden is over de huidige buurtscholen in de wijk, stelde voor om alle scholen te sluiten en één nieuwe school op een nieuwe locatie te ontwikkelen, inclusief nieuw een docenten- en directieteam. <br><br>            Ook vertelde iemand over de komst van een internationale school in één van de scholen vanwege de gunstige ligging bij het treinstation en omdat de internationale scholen in de omliggende grote steden allemaal vol zitten. Volgens haar was dit positief omdat de internationale school een samenwerking met alle scholen aangaat en zo het Engelstalig onderwijs op alle buurtscholen kan verbeteren. <br><br>            Het is nog onduidelijk wat deze oplossingen teweeg kunnen brengen. Ik maakte een dataset over welke scholen door de basisschoolleerlingen uit de wijk Soesterkwartier bezocht worden. Dit deed ik met gegevens die ik verkreeg via het basisscholen overzicht van allecijfers.nl*. Ik gebruikte deze data om ieder kind te eren met een geborduurd knoopje op het tafelkleed. Tijdens het borduren reflecteerde ik op de informatie en quotes die ik had gekregen tijdens de wandelinterviews.       <br><br>             De scholen lijken te kampen met de gevolgen van sociaaleconomische segregatie. Ik merkte dat vooral de kinderen van vooral hoger opgeleide uit de Rivierenbuurt buiten de wijk naar school gaan. Dit heeft effect op de samenstelling van de schoolpopulatie in de wijk zelf. Er is meer gelaagde informatie nodig, dan alleen cijfers van het aantal kinderen om oplossingen te vinden waardoor alle kinderen in deze wijk dezelfde scholingskansen hebben. <br><br>                              ',
            location: {
                center: [5.37024, 52.16024],
                zoom: 16.47,
                pitch: 55.50,
                bearing: 0.00
            },
            setMarker: true,
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'mental',
            alignment: 'left',
            hidden: false,
            title: 'Methode | Verbeelden | Mental maps',
            image: 'images/licht.png',
            imageDescription: 'Borduursel over straatverlichting voor veiligheid gemaakt door Maaike de Laat.', 
            description: 'Na ieder <a href="#walktalk"> walk&talkinterview </a> maakte iedere deelnemer een samenvatting van de wandeling die we samen maakten in de vorm van een MENTAL MAP. Ik nam altijd tekenspullen mee. Voor sommigen was het een behoorlijke drempel om te tekenen. Ik moedigde hen aan door te zeggen dat het voldoende was om een route tekenen met kleine teksten of icoontjes erbij. <br><br>            Eerder had ik het maken van mental maps van je eigen omgeving getest met eerste- en derdejaars studenten van de bacheloropleiding Geo Media en Design van Aeres Hogeschool in Almere. Na een korte introductie over het belang van herinneringen voor het beeld dat je hebt van een plek, gingen de studenten aan de slag. Ik liet de derdejaars vooraf oriëntatiepunten en herinneringen opschrijven. Dat gaf hen meer houvast om de mental map te tekenen. Het doel van de opdracht was om een kaart voor een vreemde te tekenen met de route naar het huis van de maker. Met de derdejaars besprak ik de mental map resultaten in combinatie met de vraag hoe gendergelijkwaardig de eigen omgeving is. Hier kwam bijvoorbeeld uit dat verbetering van veiligheid door goede lantaarnverlichting helpt om de gendergelijkwaardigheid te vergroten.  <br><br>            In de een-op-een situatie na de walk&talk volgde soms een soort samenvattend gesprek. Andere deelnemers waren juist heel geconcentreerd alleen bezig met hun mental map. Na een aantal iteraties te hebben gedaan koos ik er bewust voor om me niet meer met de inhoud van de mapping te bemoeien om het zoveel mogelijk de persoonlijke samenvatting van de participant te laten zijn. Vervolgens schreef ik thuis mijn eigen reflectie, al dan niet aangevuld met online-informatie van de deelnemer.                             ',
            location: {
                center: [5.36207, 52.15940],
                zoom: 14.00,
                pitch: 13.00,
                bearing: 0.00 
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'tracks',
            alignment: 'right',
            hidden: false,
            title: 'Soesterkwartier | Tracks ',
            image: 'images/tussen.png',
            imageDescription:'Detail van de geborduurde tracks op de conversation piece.', 
            description: 'Als onderdeel van elk <a href="#walktalk"> walk&talkinterview </a> trackte ik de route met de OSM tracker app de route. De routes verzamelde ik met QGIS. Ik was benieuwd of dit nieuwe informatie zou opleveren. Welke delen van de wijk bewandelden we? En waar zijn de onontdekte delen?  <br><br>            Wat opvalt is dat er veel langs de groengordel van het Soesterkwartier wordt gewandeld. Hier zijn de stoepen breed en is het aangenaam om langs te lopen. Volgens O’Mara (2020) vinden mensen een groene ruimte het meest <em>plezierig</em> om te wandelen. <br><br>            Wat verder opvalt is dat het deel dichtbij het station en de nieuwbouw aan de Oostkant worden overgeslagen. De Bloemen- en de Rivierenbuurt worden vooral door WIJKMAKERS van maatschappelijke organisaties als elkaars tegengestelden bewandeld. Deze tegenstelling komt ook vaak in de verhalen tijdens de walk&talkinterviews terug. <em“De Noordewierweg is de scheiding van de wijk”. “Je ervaart aan beide kanten rust.”</em> En <em>“Stoppen met continue het verschil, het contrast te blijven benoemen, daarmee houden we het dus ook in stand”</em>.                              ',
            location: {
                center: [5.36276, 52.16034],
                zoom: 15.00,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                layer: 'tracks-color',
                opacity: 1,
                }
            ],
            onChapterExit: [
                {
                layer: 'tracks-color',
                opacity: 0
                }
            ]
        },
        {
            id: 'noord',
            alignment: 'right',
            hidden: false,
            title: 'Soesterkwartier | Noordewierweg',
            image: 'images/noord.jpg',
            imageDescription: 'Borduursel met de bijnamen van een deel van het Soesterkwartier. ', 
            description: 'De Noordewierweg is de straat die de Bloemenbuurt met daarin vooral huurwoningen en de Rivierenbuurt met vooral koopwoningen scheidt. Het is een lange rechte weg die uitnodigt om hard te rijden. ’s Ochtends en ’s middags steken hier veel kinderen de straat over om naar de <a href="#school"> scholen </a> scholen in de Rivierenbuurt te gaan. Daar waar het kan fietsen vele jonge fietsers en ouders om, via de rustigere en groenere Dollardstraat. <br><br>            Zoals uit de bijnamen, opgehaald tijdens de <a href="#walktalk"> walk&talkinterviews</a> blijkt, is deze Noordewierweg een barrière in de wijk. Met één uitzondering: de kleine Albert Heijn supermarkt in het midden van de straat. Op deze plek komen de bewoners van beide delen samen. Nadat ik één van de borduurdames in de Albert Heijn had getroffen, vertelde haar begeleidster van de King Arthur Groep voor beginnend dementerenden mij dat het in deze supermarkt zelfs mogelijk is om met het personeel af te spreken dat iemands boodschappen achteraf worden betaald. Zodat een demente ouder nog zelf een boodschap kan doen zonder af te rekenen.                                   ',
            location: {
                center: [5.37331, 52.15863],
                zoom: 14.48,
                pitch: 4.00,
                bearing: 0.00
            },
            setMarker: true,
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'borduur',
            alignment: 'left',
            hidden: false,
            title: 'Methode | Verdiepen | Borduren',
            image: 'images/vrouw.jpg',
            imageDescription:'Geborduurd silhouet van de ontbrekende vrouw in de publieke ruimte',
            description: '“Hoe kan borduren worden ingezet in wijkonderzoek?”, zo vroeg ik mij af. Borduren is een manier van ANALOOG werken om het <em>slow</em> in de <a href="#methode">SLOW DATAVISUALISATIES</a> te benadrukken. Mijn ervaringen met borduren zijn in lijn met wat Barry en Lupi zeggen over <a href="#analoog">analoog</a> werken. Maar het is meer dan dat. Borduren is het middel waar alles samenkomt. <br><br>            Het boek Record, Map and Capture (2022) van borduurexpert Jordan Cunliffe gaat over geborduurde datavisualisaties. Cunliffe schrijft, documenteert, tekent en ontwerpt analoog. “Waarom werkt dat zo goed? Heb je ook ervaring met digitaal?”, vroeg ik haar via Instagram. Ze antwoordde me: “Ik heb het nodig dat alles fysiek voor me ligt. Je kunt het <em>in het echte leven</em> zo om je heen ordenen; dat kan ik niet zo op een scherm reproduceren!” Volgens Cunliffe geef je een stem aan wat verborgen bleef, door letterlijk tijd te besteden aan het onderwerp. Het gaat volgens haar over nadenktijd en een diepere betekenis geven aan persoonlijke, subjectieve verhalen. Terwijl Cunliffe de herhalende beweging van het borduren maakt, komt ze in een probleemoplossende gemoedstoestand, zo heeft ze ontdekt. (Cunliffe, 2022) <br><br>            Mijn ervaringen komen ook overeen met de visie van activist-met-naald-en-draad Sara Vrugt. Ze ziet haar werk als een pleidooi om steeds beter te kijken, te reflecteren en zó impact te maken. In essentie wil ze een heel nieuwe wereld borduren, waarin meer ruimte is voor waarachtigheid (Vrugt, 2022). <br><br>            Ik heb gemerkt dat borduren zich erg goed leent om in te zetten als verbinder in community-projecten waar voortgebouwd wordt op de zaken die in de wijk spelen. Daarnaast heb ik ervaren dat borduren helpt om te reflecteren op de opgehaalde informatie in de verkennende fase. Zo doe je al bordurend nieuwe ontdekkingen tijdens het visualiseren van de informatie. Tot slot kan het door slow datavisualisatie ontstane borduurwerk ingezet worden als conversation piece. In dit geval als een tafelkleed dat ruimte creëert voor verdieping , door nieuwe, aanvullende informatie en meerstemmigheid toe te voegen.                              ',
            location: {
                center: [5.36207, 52.15940],
                zoom: 14.00,
                pitch: 13.00,
                bearing: 0.00 
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'vertraag',
            alignment: 'left',
            hidden: false,
            title: 'Methode | Verdiepen | Vertragen is vermenigvuldigen',
            image: 'images/koffie.jpg',
            imageDescription:'Koffievlek ontstaan tijdens het inzetten van het tafelkleed als conversation piece.', 
            description: 'Vertragen gaat wat mij betreft om het waarderen van aandacht. Het gebruiken van zintuigen en het toepassen van analoge werkvormen. Het gaat om verbinding aangaan met het gebied en de betrokkenen om zo betere inzichten te krijgen in de context. Vertragen helpt om te reflecteren: wat gebeurt er eigenlijk als we stilstaan bij wat we zien (Berg en Seeber, 2017). Door de snelheid waarmee we werken zien we vaak veel over het hoofd. Door te vertragen en te observeren ontdekte ik bijvoorbeeld bewoners van ouderwoningen lastig zelf hun papier kunnen weggooien, omdat de geplaatste papierbakken een te hoge drempel hebben. <br><br>              Het laatste onderdeel van mijn SLOW DATAVISUALISATIEMETHODE is verdiepen en het omarmen van de complexiteit van wijkonderzoek. Het gaat er niet om om tot één oplossing te komen, maar juist de meerstemmigheid en de complexiteit van het dagelijkse leven te tonen. Vertragen is vermenigvuldigen <br><br>               In mijn ontwerpend onderzoek om een slow datavisualisatiemethode te ontwikkelen heb ik getest of een geborduurd tafelkleed geschikt was als conversation piece om meerstemmigheid te creëren en kennis te verdiepen en daarmee nog meer verbinding in de wijk tot stand te brengen. Om verschillende doelgroepen te kunnen bereiken, wilde ik dat de conversation piece laagdrempelig inzetbaar en tastbaar is. Ik heb in mijn iteraties gemerkt dat ik met het geborduurde tafelkleed mijn doelen steeds weer kon bereiken. Daarnaast bleek het tafelkleed ook geschikt om nieuwe ontwikkelingen in de wijk te verkennen en te verbeelden en bleek het dus een MULTILAYERED STORYTELLING TOOL te zijn. <br><br>              De conversation piece kan op verschillende manieren ingezet worden. Bijvoorbeeld om een bepaald thema dat tijdens de<a href="#walktalk"> walk&talk </a> vaak genoemd werd, verder te verdiepen. Zo kunnen betrokken WIJKMAKERS uitgenodigd worden om dit thema aan de hand van de conversation piece dit onderwerp op een gelijkwaardige manier met elkaar bespreken en informatie te delen.<br><br>             Een andere optie die ik heb onderzocht, is om de conversation piece in te zetten als multilayered storytelling tool, om eerder opgehaalde informatie juist te koppelen aan nieuwe ontwikkelingen in de wijk. Daarvoor zette ik een community borduurproject <a href=“#sterk”>Sterke Vrouwen</a> op.                       ',
            location: {
                center: [5.36207, 52.15940],
                zoom: 14.00,
                pitch: 13.00,
                bearing: 0.00 
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'straat',
            alignment: 'left',
            hidden: false,
            title: 'Methode | Verdiepen | Genderongelijkheid en straatnamen',
            image: 'images/straatnaam.jpg',
            imageDescription: 'Voorbeeld uit de Weense wijk Aspern Seestadt met alleen straatnamen vernoemd naar vrouwen.',
            description: 'Tijdens mijn onderzoek raakte ik geïnspireerd om me verder te verdiepen in gender ongelijkheid in de LEEFOMGEVING. Dit kwam door mijn eerste iteratie: <em>Ik ben van de kaart</em>. Ik nodigde vrienden uit om mij een brief te schrijven over waar ze zich druk over maakten in de maatschappij. In meerdere brieven kwam de ongelijkwaardige situatie van vrouwen in de publieke ruimte naar voren. Hierop besloot ik mij hier verder in te verdiepen door het boek <em>Invisible Women</em> van schrijfster Caroline Criado Perez (2020) te lezen en zo meer te weten te komen over de bias en hoe vrouwen, ook in de stedelijke leefomgeving worden buitengesloten.  <br><br>            Vervolgens bezocht ik in september 2022 de <ahref="https://www.matrimonydays.be/nl/"> Matrimonium dagen </a> in Brussel. Hier had ik afgesproken met feministe en grafische designer Claire Allard van <a href="https://www.klar.graphics/en/homepage-en/"> Klär graphics</a>. Zij drukte samen met andere deelnemers ansichtkaarten van bekende <a href=" https://www.instagram.com/datadelles/"> Brusselse vrouwen </a> om aandacht te vragen voor een eerlijkere straatnamen verdeling voor vrouwen en genderminderheden. <br><br>            Onlangs bezocht ik Wenen met een aantal <a href="https://www.urbanistasrdam.nl/ "> urbanistas</a>. Dit is een netwerkgroep en platform voor vrouwxn die werken in stedelijke ontwikkeling. Wenen staat bekend om haar gendergelijkwaardig ruimtelijk beleid. Zo zet de stad bewust in op een gender gelijkwaardige verdeling van straatnamen, door alle straatnamen in de nieuwbouwwijk Aspern Seestadt, zo groot als het centrum van Wenen zelf, alleen naar vrouwen te vernoemen.  <br><br>            In het Soesterkwartier is vijftien procent van de straten naar een persoon vernoemd. Niet één daarvan is vrouw. Eerder onderzoek in Amsterdam wees uit dat van de straten die naar mensen zijn vernoemd, gemiddeld 88 procent vernoemd is naar mannen en 12 procent naar vrouwen (Korte & Sprinkhuizen, 2018). In Groningen is het percentage vrouwen nog lager, slechts 10 procent van de personen die tot straatnamen zijn vernoemd is vrouw (Bol, 2018).  Rondom en in het Soesterkwartier zullen de komende jaren veel nieuwe straten en pleinen komen. Daarom is het nu een uitgelezen kans om een begin te maken met een gelijkwaardige verdeling.  <br><br>                                ',
            location: {
                center: [5.36207, 52.15940],
                zoom: 14.00,
                pitch: 13.00,
                bearing: 0.00 
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'vrouw2',
            alignment: 'full',
            hidden: false,
            title: 'Soesterkwartier | Sterke vrouwen Anne en Marta',
            image: 'images/anne.svg',
            description: '                  ',
            location: {
                center: [5.36207, 52.15940],
                zoom: 12.00,
                pitch: 13.00,
                bearing: 0.00 
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
               
            ],
            onChapterExit: [
                
            ]
        },
        {
            id: 'sterk',
            alignment: 'right',
            hidden: false,
            title: 'Soesterkwartier | Sterke vrouwen I',
            image: 'images/hedy.jpg',
            imageDescription:'Hedy d`Ancona geborduurd door Edith.', 
            description: ' Om mijn <a href="#conver"> conversation piece</a> het geborduurde tafelkleed bij nieuwe doelgroepen in te zetten, ontwikkelde ik het community-borduurproject Sterke Vrouwen om eenmalig uit te voeren op Internationale Vrouwendag 2023. De bedoeling was om samen met de deelnemers een aantal sterke vrouwen uit het Soesterkwartier, Amersfoort, Nederland en het buitenland te borduren. Op deze manier wilde ik aandacht vragen voor de ongelijke genderverdeling van <a href="#straat"> straatnamen</a>. Rondom en in het Soesterkwartier zullen de komende jaren bijvoorbeeld ongeveer 5000 woningen en ook nieuwe straten komen. De impact hiervan wilde ik met behulp van de conversation piece verdiepen. <br><br>            Ik benaderde deelnemers via mijn inmiddels opgebouwde netwerk in het Soesterkwartier en via de website van Internationale Vrouwendag met de volgende tekst: <br><br> <em>Op 8 maart 2023 is het Internationale Vrouwendag. Dit is de start van de aanleg van een verzameling van straatnamen met alleen sterke vrouwen. We hebben er al een aantal uitgezocht die een link met Amersfoort hebben. Maar je mag ook je eigen sterke-vrouwen-portretten meenemen</em>. <br><br>            Expliciet had ik vermeld dat iedereen mee mocht doen, ongeacht ervaring en gender. M/v/x, iedereen was welkom. Er kwamen alleen vrouwen van begin twintig tot achter in de zestig.  <br><br>            Voor de locatie van het community borduurproject <a href=“#sterk”>Sterke Vrouwen</a> heb ik bewust gekozen voor het <a href=https://wijkmuseumsoesterkwartier.nl/>Wijkmuseum Soesterkwartier </a>. Het museum is erop gericht om het verleden van de wijk levend te houden en verbinding met de wijk tot stand te brengen. Het project <em>Sterke Vrouwen</em> stimuleert de onderlinge verbinding en de verbinding met de wijk, wat naadloos aansluit op de doelstelling van het museum. De vrijwilligers van het wijkmuseum gaven aan hiervoor open te staan, om zo ook meer bezoekers te trekken en het bestaansrecht van het museum te versterken.                                     ',
            location:{
                center: [5.37143, 52.15849],
                zoom: 19.96,
                pitch: 32.00,
                bearing: 99.20
            },
            setMarker: true,
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'sterkb',
            alignment: 'right',
            hidden: false,
            title: 'Soesterkwartier | Sterke vrouwen II',
            image: 'images/zus.jpg',
            imageDescription:'Deelneemster Lotte eerde haar zus als sterke vrouw.', 
            description: 'Sommige deelnemers borduurden de vrouwen die ik vooraf had geselecteerd, anderen gaven de voorkeur aan eigen idolen zoals hardloopster Femke Bol of klimaatactivist Greta Thunberg. Daarnaast gaven een aantal aan juist hun eigen moeder of zus te willen eren. Een relevante aanvulling, die laat zien dat een sterke vrouw niet iemand met een publieke functie hoeft te zijn. <br><br>             Rondom het tafelkleed kwamen zeventien vrouwen borduren. Het werd een gezellige avond met veel ruimte voor ontmoetingen en verbinding over sterke vrouwen en de ongelijke gender-verdeling van straatnamen. Maar er was ook ruimte om de informatie, onder andere over de eerder besproken categorieën zoals jongeren, gentrificatie, democratie en vergroening, op de conversation piece met elkaar te delen. Zoals het verhaal van <a href=“#stapel”>mevrouw Verheuvel </a> en een open gesprek over de keuzes om kinderen wel of niet in de wijk naar school te laten gaan. Het was waardevol om te zien dat opgehaalde informatie aan de hand van de conversation piece kon worden verdiept. Hieruit blijkt dat mensen samen brengen rondom door mij geborduurde conversation en het samen borduren daadwerkelijk WIJKMAKERS in meerstemmigheid verbindt. <br><br>             Tijdens de avond vroegen veel deelnemers om een vervolg aan het project. Ook uit de berichtjes na de workshop bleek dat de behoefte om op deze manier met elkaar te verbinden in de wijk groot was. Daarop heb ik een subsidie aangevraagd en gekregen om het project <em>Sterke Vrouwen</em> verder uit te rollen.  <br><br>            Tijdens de jaarlijkse Zomerparade in het Soesterkwartier op 7 juli 2023 zal ik de portretten van de geborduurde sterke vrouwen exposeren. Het is de bedoeling dat ik dan ook de hierover door mij samengestelde publicatie van geborduurde sterke vrouwen, aan de wethouder van de gemeente Amersfoort zal overhandigen. Zo vragen we als community aandacht voor een gender gelijkwaardiger straatnamenbeleid in het Soesterkwartier en heel Amersfoort.                                                ',
            location: {
                center: [5.36207, 52.15940],
                zoom: 14.00,
                pitch: 13.00,
                bearing: 0.00 
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'vrouw3',
            alignment: 'full',
            hidden: false,
            title: 'Soesterkwartier | sterke vrouwen Coco en Kino',
            image: 'images/coco.svg',
            description: '                  ',
            location: {
                center: [5.36207, 52.15940],
                zoom: 12.00,
                pitch: 13.00,
                bearing: 0.00 
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                
            ],
            onChapterExit: [
                
            ]
        },
        {
            id: 'sterk2',
            alignment: 'right',
            hidden: false,
            title: 'Soesterkwartier | Nog meer sterke vrouwen',
            image: 'images/arthur.png',
            description: 'Om ook doelgroepen die vaak onzichtbaar zijn een stem te geven, benaderde ik de King Arthur groep met het voorstel om het community borduurproject <a href="#sterk"> Sterke Vrouwen </a> ook met beginnende dementerende vrouwen te doen. We spraken af dat ik vier dinsdagochtenden met hen zou borduren in het buurthuis <a href="#blauw">  De Sleutel </a>. <br><br>             Het steeds voller rakende geborduurde tafelkleed ging weer mee en kwam centraal op tafel te liggen. Daarop kwamen de materialen en de kopjes koffie. Zo borduurden we samen met de begeleiding. Voor mij was dit heel waardevol. Ik luisterde naar de levensverhalen van deze sterke vrouwen en hoorde hoe het vroeger in de wijk was,  terwijl we samen borduurden en zo ook samen werkten aan een collectief geheugen. <br><br>            Het communityproject <em>Sterke Vrouwen</em> verbindt buurtbewoners op verschillende plekken in de wijk. Zo is het dankzij de subsidie die ik aanvroeg mogelijk om een excursie naar het Wijkmuseum te regelen voor de borduursters van de King Arthur groep. Om daar met de andere vrouwen uit de wijk samen verder te werken aan het project. Dit gaat begin september 2023 plaatsvinden.                      ',
            location: {
                center: [5.35268, 52.16018],
                zoom: 17.99,
                pitch: 72.50,
                bearing: 0.00 
            },
            setMarker: true,
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slowr',
            alignment: 'left',
            hidden: false,
            title: 'Theorie | Slow research',
            image: '',
            description: 'SLOW DATAVISUALISATIE is een vorm van SLOW RESEARCH. Het gaat om betekenis geven aan het denken door verbinding, reflectie en het omarmen van complexiteit volgens Maggie Berg en Barbara Seeber, zoals beschreven in hun boek <em>The Slow Professor </em> (2017). Bij slow research gaat het om <a href="#vertraag">vertragen</a>. Daarom gebruik ik embodied en/of analoge werkvormen, wandelen en borduren, tijdens het designproces om tot nieuwe inzichten te komen. <br><br>             Het gaat er wat mij betreft in mijn onderzoek vooral om, om verbinding met de wijk en de WIJKMAKERS onderling tot stand te brengen. Ten tweede pas ik slow research toe om tijd en ruimte te maken om te kunnen reflecteren en om meer besef te krijgen van de complexiteit van de dingen die spelen in het gebied. Met daarbij het streven om ongehoorde doelgroepen zichtbaar te maken en zo tot nieuwe inzichten over gebiedsverbetering te komen. ',
            location: {
                center: [5.36207, 52.15940],
                zoom: 14.00,
                pitch: 13.00,
                bearing: 0.00 
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slowd',
            alignment: 'left',
            hidden: false,
            title: 'Theorie | Slow design',
            description: 'De SLOW DATAVISUALISATIEMETHODE volgt de slow design principes. Deze zijn ontworpen door oprichter van SlowLab Amsterdam Carolyn Strauss en professor in Design Research Alastair Fuad-Luke (2008). Zij noemen slow design een vorm van creatief activisme en een evaluatietool die nieuwe waarden levert voor design in de verschuiving naar duurzaamheid door gebruik te maken van zowel kwantitatieve, kwalitatieve als intuïtieve beoordelingsmethodes. De zes principes zijn: onthullen (REVEAL), uitbreiden (EXPAND), reflecteren (REFLECT), verbinden (ENGAGE), participeren (PARTICIPATE) en ontwikkelen (EVOLVE).  <br><br>            De slow datavisualisatiemethode past in de traditie van slow design, omdat het gericht is op het waarderen van kwalitatieve informatie en om daar betekenis aan te geven. Met het doel om op die manier nieuwe inzichten te verkrijgen (onthullen) door betrokkenen te verbinden met elkaar en de buurt, te participeren en te reflecteren, waardoor kennis zich steeds verder kan uitbreiden en ontwikkelen.                 ',
            location: {
                center: [5.36207, 52.15940],
                zoom: 14.00,
                pitch: 13.00,
                bearing: 0.00 
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'place',
            alignment: 'left',
            hidden: false,
            title: 'Theorie | Creative placemaking',
            iframe:'https://www.youtube.com/embed/31PUM6cd8Fw',
            description: 'In 2006 zag ik de dans performance <em>Love’s geography</em> van <a <a href="https://sarawookey.com/"> Sara Wookey</a> in de Melkweg Amsterdam. Deze voorstelling is mij altijd goed bijgebleven.<br><br>            Wookey is geïnspireerd door William H. Whyte (Wookey, 2020). Hij was er samen met Jane Jacobs van overtuigd dat je veel kunt leren door mensen in de publieke ruimte te observeren. Zij waren de grondleggers van het ontwikkelen van steden voor mensen: placemaking. (pps.org, 2017)<br><br>            Placemaking is zowel een filosofie als een methode, die WIJKMAKERS betrekt bij de ontwikkeling van de LEEFOMGEVING. Het is gericht op het observeren van en het luisteren naar de gebruikers – de experts van die openbare ruimte. Met het doel om de kwaliteit van de openbare ruimte te verbeteren, maar ook om netwerkvorming, een gevoel van eigenaarschap en verantwoordelijkheid over deze leefomgeving te bevorderen. Zo ervaren de betrokkenen dat ze zelf invloed hebben op de kwaliteit ervan (pps.org, 2017). <br><br>            SLOW DATAVISUALISATIE is wat mij betreft een vorm van creatieve placemaking. Het zet creatieve en embodied werkvormen in om het observeren en het luisteren te versterken. Met het doel om op deze manier nieuwe inzichten over een wijk op te halen bij betrokkenen. Ik ontdekte dat betrokkenen deze informatie kunnen verdiepen als de informatie ook op een tastbare manier wordt gevisualiseerd, bijvoorbeeld in een conversation piece. Op deze manier verbinden ook deze betrokkenen zich aan de verbetering van de leefomgeving. <br><br>                                         ',
            location: {
                center: [5.36207, 52.15940],
                zoom: 14.00,
                pitch: 13.00,
                bearing: 0.00 
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'data',
            alignment: 'left',
            hidden: false,
            title: 'Theorie | Data feminism',
            image: '',
            description: 'Data feminism is een doel en een proces om vanuit intersectioneel feminisme te werken naar meer rechtvaardigheid in het groeiende veld van data science. Het gelijknamige boek (2020) is geschreven door Catherine  D’Ignazio, urban planner op het MIT en Lauren Klein, research professor in het digital humanities lab van de Emory University. Volgens de schrijfsters gaat data feminism over meer dan alleen gender:  het gaat om wie de machtsposities hebben en wie niet en hoe dat kan veranderen. <br><br>            D’Ignzio en Klein werken met zeven principes om verandering in de wereld aan te jagen en aan te tonen dat data over mensen gaat, namelijk: macht onderzoeken (examine power), macht uitdagen (challenge power), waarde toekennen aan emotie en embodiment ( elevate emotion and embodiment), heroverwegen van hierarchiën (rethink binaries and hierarchies), omarmen van pluralisme (embrace pluralism), context beschouwen (consider context) en maak werk zichtbaar (make labor visible) (D’Ignazio & Klein,p. 8-10). <br><br>            Met name de principes over waarde toekennen aan emotie en embodiment, het omarmen van pluralisme en het beschouwen van context zijn principes die je ook terugziet in mijn werk. <br><br>            Data in welke vorm dan ook is niet neutraal of objectief. Het is altijd belangrijk om na te gaan wie de data heeft verzameld en met welk doel. Het is een product van ongelijke sociale verhoudingen. Door dit in ogenschouw te nemen kan SLOW DATAVISUALISATIE bijdragen aan een gelijkwaardigere en rechtvaardigere wereld.                                   ',
            location: {
                center: [5.36207, 52.15940],
                zoom: 14.00,
                pitch: 13.00,
                bearing: 0.00 
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },  
        {
            id: 'conclusie',
            alignment: 'center',
            hidden: false,
            title: 'Conclusie',
            image: 'images/conclusie.jpg',
            imageDescription:'Detail van de geborduurde versie van de slow datavisualisatie methode', 
            description: 'In dit onderzoek zocht ik naar het antwoord op de vraag: <em>Hoe kan een SLOW DATAVISUALISATIE methode worden vormgegeven die bijdraagt aan het zichtbaar maken van de beleving en de betekenis van een wijk voor en met WIJKMAKERS</em> Hiervoor deed ik ontwerpend onderzoek en ontwikkelde zo de slow datavisualisatiemethode in de Amersfoortse wijk het Soesterkwartier. Met deze methode zocht ik naar manieren om andere inzichten over het gebied zichtbaar maken. Om zo bij te dragen aan een gelijkwaardige LEEFOMGEVING, een leefomgeving met gelijke kansen voor de bewoners. <br><br>            Een centraal onderdeel van de door mij ontwikkelde methode is een conversation piece die dient als een MULTILAYERED STORYTELLING TOOL.  Deze conversation piece is via de fases <em>verkennen, verbeelden</em> en <em>verdiepen</em> tot stand gekomen. Het zorgt voor verbinding van wijkmakers met de leefomgeving, het versterken van reflectie en het omarmen van de complexiteit van de thema’s die spelen in een wijk. <br><br>            Het <em>slow</em> uit slow datavisualisatie is terug te zien in de gebruikte werkvormen, zoals wandelen en het ANALOOG verbeelden door te borduren. Activiteiten die bewust vertragen. Tijdens de verkenningsfase is wandelen op verschillende manieren ingezet met als doel om te observeren, allerlei zintuigen te gebruiken en langdurig aanwezig te kunnen zijn. Dit heeft inzichten opgeleverd die op andere manieren niet naar boven waren gekomen. <br><br>            Borduren is op drie manieren belangrijk geweest bij het vertragen in dit onderzoek. Ten eerste door mappings, anekdotes en datavisualisaties al bordurend uit te werken met de bedoeling om dieper te kunnen reflecteren op de context. Ten tweede heeft het samen borduren tijdens een community project bijgedragen aan het verbinden van participanten. Als laatste speelt borduren een rol in het tastbaar maken van de conversation piece. Dit heeft ruimte gemaakt om meerstemmigheid te faciliteren en de complexiteit van de onderwerpen te omarmen. Op deze manieren heeft het borduren bijgedragen aan het verdiepen van de context. <br><br>            De methode is ontwikkeld met participatief onderzoek met wijkmakers uit de Amersfoortse wijk het Soesterkwartier. wijkmakers zijn diegenen die zich inzetten voor het gelijkwaardiger maken en verbeteren van de leefomgeving op een creatieve, verbindende en tastbare manier. Dit betreft een breed spectrum van participanten: van betrokken burgers tot urban designers. <br><br>            Uit mijn onderzoek blijkt dat de slow datavisualisatiemethode effectief bijdraagt aan gelaagde meerstemmige informatie en dat je door het toepassen van deze methode nieuwe inzichten kunt verkrijgen en delen. Hieruit blijkt dat vertragen vermenigvuldigen is.  ', 
            location: {
                center: [5.36207, 52.15940],
                zoom: 14.00,
                pitch: 13.00,
                bearing: 0.00 
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slowd',
            alignment: 'center',
            hidden: false,
            title: 'Methode | Schema slow datavisualisatie',
            image: 'images/slowdata.svg',
            imageDescription:'', 
            description: '                 ', 
            location: {
                center: [5.36207, 52.15940],
                zoom: 14.00,
                pitch: 13.00,
                bearing: 0.00 
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },   
        {
            id: 'toekomst',
            alignment: 'center',
            hidden: false,
            title: 'Toekomst',
            image: 'images/explore.jpg',
            imageDescription: 'Zen-mindset, waar Baukje Rienks ook na haar master Design mee door zal gaan.',
            description: 'In de nabije toekomst ga ik een workshop over mijn methode geven binnen het netwerk van Urbanista’s Rotterdam. Daarnaast ga ik in september 2023 een walking experience leiden op de conferentie Creatieve Methods in Manchester. <br><br>            Verder ga ik door met het communityborduurproject <a href=“#sterk”>Sterke Vrouwen</a>  in het Soesterkwartier. Ten eerste om de bibliotheek verder te vullen met geborduurde portretten om zo aandacht te genereren voor het belang van een meer gendergelijkwaardige LEEFOMGEVING. Hiervoor heb ik een subsidie gekregen van de gemeente Amersfoort. Daarnaast wil ik samenwerkingen zoeken zoals bijvoorbeeld met kennisinstituut voor emancipatie en vrouwengeschiedenis Atria. <br><br>            Ik denk dat ik op deze manier het project ook kan uitbreiden naar andere wijken. Ook hoop ik de zichtbaarheid van het project te versterken door een interactieve stratenkaart te ontwikkelen om de genderverschillen inzichtelijk te maken. Dit geeft me ook de mogelijkheid om het idee van een borduurboek SLOW DATAVISUALISATIE verder te ontwikkelen en borduurtafels te ontwerpen die als een pop-up sociaal terras overal ingezet kunnen worden. Al deze onderdelen hebben ten doel om verdieping te geven aan de beleving en betekenis van WIJKMAKERS met hun leefomgeving. <br><br>            Daarnaast wil ik gaan onderzoeken of de slow datavisualisatie methode ook werkt met een andere werkvorm dan borduren in de verdiepingsfase. Om andere verborgen doelgroepen die een drempel hebben om te borduren te kunnen bereiken. Deze werkvorm moet dan wel voldoen aan de voorwaarden die ik geïdentificeerd heb: vertragen, geschikt om geo- en andere data te visualiseren; gelaagdheid en samenwerken. Ik denk daarbij bijvoorbeeld aan het maken van murals. <br><br>       Ondertussen wil ik mijn slow urban design studio, Sabeare verder ontwikkelen en opdrachten en samenwerkingen aangaan vanuit mijn ontwikkelde methode. Om dit verder kracht bij te zetten ga ik in het najaar van 2023 een aanvraag doen bij het stimuleringsfonds.  <br><br> <a href="#welkom">Terug naar het begin</a>                                  ',
            location: {
                center: [5.36207, 52.15940],
                zoom: 14.00,
                pitch: 13.00,
                bearing: 0.00 
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },            
    ]
};
