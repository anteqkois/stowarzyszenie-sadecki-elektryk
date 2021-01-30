const database = require('../config/database');
const Post = require('../models/project');

exports.findOne = async (req, res) => {
    try{
        const post = await Post.findOne({
            slug: req.params.slug
        });
        return res.status(200).send({post});
    } catch (error){
        console.log(error);
    }
};

exports.findAll = async (req, res) => {
    let limit = parseInt(req.query.limit);

    try{
        const posts = await Post.find({
        }).limit(limit).sort({date: 'desc'});
        return res.status(200).send(posts);
    } catch (error){
        console.log(error);
    }
};

exports.create = async (req, res) => {
    try{
        const post = new Post({
            title: req.params.title,
            date: req.params.date,
            description: req.params.description
        });
        await post.save();

        return res.status(201).send({post, message: 'Post has just been created'});
    } catch (error){
        console.log(error);
    }
};

/*
const createPost = async (data) =>{
    try{
        const post = new Post(data)
        await post.save()

        console.log(post);
    } catch(error){
        console.log(error);
    }
}


createPost({
    category: 'mechanics',
    title: 'IX Piknik Naukowy w Elektryku',
    date: new Date(2020,01,14),
    description: 'Piknik Naukowy odbył już się dziewiąty raz. Gościł on też Prezydent Nowego Sącza Ludomira Handzela, który spotkał się z pasjonatami prezentującymi swoje prace podczas IX Pikniku Naukowego w Elektryku. Uczniowie prezentowali swoje prace w czterech kategoriach: elektronika/elektrotechnika, automatyka/robotyka, multimedia oraz informatyka. Wszystkich wynalazków było dwadzieścia. Oczywiści enajlepsze z nich zostały nagrodzone, a wyróżnienia wręczał prezydent Nowego Sącza Ludomir Handzel. W pikniku chodzi także o to by świetne pomysły były później wcielone w życie i służyły ludziom. Projekty budzą zainteresowanie firm, a nawet tych zza granicy.'
})

createPost({
    category: 'programming',
    title: 'Nauka Programowania w Praktyce III Edycja',
    date: new Date(2019,11,11),
    description: 'To ostatni projekt realizowany w roku 2019. Rozpoczął się we wrześniu 15 godzinnymi zajęciami z programowania, które prowadzili studenci należący do Koła Naukowego Informatyków.  Następnie ucznioweie mieli dwa miesiące na pracę własną. 11 grudnia wszyscy spotkali się, żeby ocenić przygotowane projekty programistyczne. Ocena prac oraz podsumowanie projektu odbyło się w salach Instytutu Technicznego PWSZ o godzinie 10-tej. Uczestniczyli w nim beneficjenci projektu oraz uczniowie klasy programistycznej I pP.  Komisja konkursowa składała się z trzech wykładowców Instytutu Technicznego po przewodnictwem dr Grzegorza Litawy. Ostatecznie swoje prace programistyczne zaprezentowało 10 uczestników.'
})

createPost({
    category: 'culture',
    title: 'II Edycja Debaty Naukowej w Elektryku',
    date: new Date(2019,11,10),
    description: '10 grudnia 2019 w świetlicy ZSEM odbyła się ostatnia w ramach projektu debata, tym razem szkolna, która była ostatnim elementem projektu.  Do tej debaty zgłosiły się dwie klasy informatyczne III j oraz II i. Obie klasy wystawiła do debaty trzy, 3-osobowe grupy, z których każda debatowała na inny temat. Tematy nad którymi debatowano to: "Gry komputerowe – rozwijają czy szkodzą?", "Planeta albo plastik – czy mamy jeszcze szansę?", "Unia Europejska – brexit czy sojusz ?". W komisji konkursowej zasiedli: Przewodnicząca Jury Pani Katarzyna Tokarczyk, dziennikarka z Gazety Krakowskiej, która pełniła rolę moderatora debaty, Wicedyrektorka ZSEM Pani Ewa Dziedzic, Prezes Stowarzyszenia Sądecki Elektryk Pan Marek Ryglewicz, Wychowawczyni klasy III j Pani Małgorzata Matląg, Wychowawca klasy II j Pan Piotr Szczypuła.'
})

createPost({
    category: 'culture',
    title: 'Spotkania z Kulturą w Elektryku',
    date: new Date(2019,11,7),
    description: '28 grudnia 2019r. w Zespole Szkół Elektryczno- Mechanicznych w Nowym Sączu odbył się konkurs literacko- teatralny. Młodzież zaprezentowała swoje umiejętności, zdobyte podczas warsztatów poetyckich i teatralnych,realizowanych w ramach projektu "Spotkania z kulturą w Elektryku". Konkurs składał się z dwóch części: pierwszej literackiej - młodzież prezentowała swoje wiersze oraz drugiej teatralnej - krótkie formy teatralne. W konkursie wzięli udział uczniowie  Zespołu Szkół Elektryczno - Mechanicznych w Nowym Sączu i II Liceum Ogólnokształcącego w Nowym Sączu.'
})

createPost({
    category: 'nature',
    title: 'Pszczoły Zagościły w Elektryku II Edycja',
    date: new Date(2019,11,4),
    description: 'Tym razem 4 grudnia 2019r. w świetlicy szkolnej spotkali się wszyscy uczestnicy projektu na podsumowaniu oraz ogłoszeniu wyników prac konkursowych w trzech kategoriach: plakat, strona oraz aplikacja. W komisji konkursowej zasiedli przedstawiciele Karpackiego Związku Pszczelarzy pp. Stanisław Kowalczyk - Prezes KZP, Narcyz Kędziora - instruktor w KZP, Zbigniew Gawryś - Prezes Koła Pszczelarzy w Nowym Sączu oraz Adam Szołdra z KZP. Wśród gości obecni było p. Ewa Dziedzic, wicedyrektor szkoły, dyrektor wydziału środowiska Grzegorz Tabasz oraz przedstawicielka firmy Wiśniowski p. Urszula Kądziołka. Prowadzeniem spotkania oraz organizacją całej imprezy zajęły się klasy I oraz II g pod kierunkiem p. Anny Chronowskiej. '
})

createPost({
    category: 'programming',
    title: 'I Maraton Coding Night w Elektryku',
    date: new Date(2019,09,25),
    description: 'W dniach 25-26 pażdzierniak 2019 odbyła się pierwsza edycja Coding Night w Elektryku. A w niej wzięło udział 12 zespołów, w każdym od 2 do 5 uczniów, w sumie 37 programistów. Cała impreza zaczeła się o godzinie 13 i trwała aż 20, jednak znalazł się też czas choćby na zjedzenie pizzy ! Tematem pierwszej edycji był bardzo przyjemny dla uczniów, a mianowici wyzywanie polegało na zaprojektowaniu gry komputerowej. Zwycięzcy byli wybrani przez jury złożone m.in z programistów z dwóch firm programistycznych IBCS Poland oraz GOTOMA, które są partnerami stowarzyszenia i wspierali je w realizacji tego przedsięwzięcia. W komisji znajdaowali się również przedstawiciele z firmy FAKRO, która od wielu lat wspiera stowarzyszenie. Również Prezydent Nowego Sącza, Ludomir Handzel objął Patronatem Honorowym I Maraton Programistyczny w sądeckim Elektryku. Trzy zwycięskie drużyny zgarnęły wypasione nagrody pieniężne, jednak pozostałe również otrzymały nagrody pocieszenia w kwocie 100 zł, a pizziernia GONDOLA przygotowało niespodziankę dla wszystkich zawodników w postaci bonu.'
})
//  date: new Date(2020,9,3), */