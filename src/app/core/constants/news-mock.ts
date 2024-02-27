import { News } from '../models/news.model';

export const newsMock: News = {
  status: 'ok',
  totalResults: 36,
  articles: [
    {
      source: {
        id: 'the-verge',
        name: 'The Verge',
      },
      author: 'Allison Johnson',
      title: 'Gemini is about to slide into your DMs - The Verge',
      description:
        'Google’s Gemini AI chatbot will be available soon right inside of Google Messages. The company is also announcing a handful of other updates for MWC 2024.',
      url: 'https://www.theverge.com/2024/2/26/24082279/google-gemini-messages-android-auto-google-docs',
      urlToImage:
        'https://cdn.vox-cdn.com/thumbor/nha2O8ap-F3u1XEvSZzqy9T3qBA=/0x0:2040x1334/1200x628/filters:focal(1020x667:1021x668)/cdn.vox-cdn.com/uploads/chorus_asset/file/25290332/STK255_Google_Gemini_B.jpg',
      publishedAt: '2024-02-26T08:00:00Z',
      content:
        'Gemini is about to slide into your DMs\r\nGemini is about to slide into your DMs\r\n / Googles AI chatbot is coming to Messages. Meanwhile, Android Auto gets some AI smarts and Google Docs will let you a… [+2830 chars]',
    },
    {
      source: {
        id: 'cnn',
        name: 'CNN',
      },
      author: 'Elizabeth Wolfe',
      title:
        'Vigil to be held for Augusta University student killed while jogging on UGA campus as a suspect remains in custody. Here’s what we know - CNN',
      description:
        'A vigil will be help Monday afternoon for Riley, a bright and dedicated Augusta University nursing student who investigators say was killed while jogging on the University of Georgia campus last week.',
      url: 'https://www.cnn.com/2024/02/25/us/uga-augusta-university-student-killing-monday/index.html',
      urlToImage:
        'https://media.cnn.com/api/v1/images/stellar/prod/laken2.jpg?c=16x9&q=w_800,c_fill',
      publishedAt: '2024-02-26T06:44:00Z',
      content:
        'A vigil will be held Monday afternoon for Laken Hope Riley, an Augusta University nursing student who was found dead after jogging on the University of Georgia campus last week, as her suspected kill… [+6402 chars]',
    },
    {
      source: {
        id: null,
        name: 'Hollywood Reporter',
      },
      author: 'Kirsten Chuba, Kimberly Nordyke',
      title:
        'PGA Awards: ‘Oppenheimer’ Takes Top Film Prize - Hollywood Reporter',
      description:
        "'Succession,' 'The Bear,' 'Last Week Tonight,' 'RuPaul's Drag Race,' 'Welcome to Wrexham,' 'Spider-Man: Across the Spider-Verse' and 'American Symphony' also were among the winners.",
      url: 'http://www.hollywoodreporter.com/movies/movie-news/2024-producers-guild-awards-winners-list-1235833336/',
      urlToImage:
        'https://www.hollywoodreporter.com/wp-content/uploads/2024/02/MCDOPPE_UV016-copy.jpg?w=1024',
      publishedAt: '2024-02-26T05:45:21Z',
      content:
        'Oppenheimer took the top prize at the 2024 Producers Guild of AmericaAwards on Sunday night.\r\nThe film won the Darryl F. Zanuck Award for outstanding producer of theatrical motion pictures, a day aft… [+6842 chars]',
    },
    {
      source: {
        id: 'associated-press',
        name: 'Associated Press',
      },
      author: 'ROD McGUIRK, TRISTAN LAVALETTE',
      title:
        "Feleti Teo is named Tuvalu's new prime minister after elections that ousted Taiwan supporter - The Associated Press",
      description:
        'Tuvalu’s former Attorney General Feleti Teo has been named prime minister of the tiny South Pacific nation after elections a month ago ousted the last government leader. A government official said Teo was the only candidate nominated by his colleagues in the …',
      url: 'https://apnews.com/article/tuvalu-prime-minister-feleti-teo-bae1874651a7a0fc86594f04b9ebe7dd',
      urlToImage:
        'https://dims.apnews.com/dims4/default/f4a2441/2147483647/strip/true/crop/2731x1536+111+0/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fc9%2F4e%2Fdc4b9025b1182ed3cc9210ce6afa%2Fbed1c7e5441543ed8c5e4ba1db2a67a9',
      publishedAt: '2024-02-26T05:26:15Z',
      content:
        'MELBOURNE, Australia (AP) Tuvalus former Attorney General Feleti Teo was named prime minister of the tiny South Pacific nation Monday after elections a month ago ousted the last government leader. \r\n… [+3193 chars]',
    },
    {
      source: {
        id: 'cnn',
        name: 'CNN',
      },
      author: 'Kristen Rogers',
      title:
        'Antidepressant prescriptions to youths spiked during and after the pandemic, study finds - CNN',
      description:
        'The rate of antidepressant prescriptions to young people surged during and after the pandemic, according to a new study. Experts weigh in on the possible reasons.',
      url: 'https://www.cnn.com/2024/02/26/health/antidepressant-use-spikes-after-pandemic-youth-wellness/index.html',
      urlToImage:
        'https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-1488897301.jpg?c=16x9&q=w_800,c_fill',
      publishedAt: '2024-02-26T05:01:00Z',
      content:
        'Sign up for CNNs Stress, But Less newsletter. Our six-part mindfulness guide will inform and inspire you to reduce stress while learning how to harness it.\r\nMany young people have reported having poo… [+6536 chars]',
    },
    {
      source: {
        id: 'associated-press',
        name: 'Associated Press',
      },
      author: 'HYUNG-JIN KIM',
      title:
        'South Korea sets Thursday as deadline for striking young doctors to return to work - The Associated Press',
      description:
        "The South Korean government is giving young doctors on strike four days to return to work. It says they won't be punished if they return by Thursday, but warns they will face indictments and suspensions of medical licenses if they don't meet the deadline. Abo…",
      url: 'https://apnews.com/article/south-korea-doctors-walkout-medical-school-17c805f9e5280419ac7273258dd03440',
      urlToImage:
        'https://dims.apnews.com/dims4/default/e2577fd/2147483647/strip/true/crop/4662x2622+0+368/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F98%2F32%2Fb90e14b81b926863cbd1b9f1366f%2F1198f79fd7214a17ba0697b5b423e517',
      publishedAt: '2024-02-26T04:41:28Z',
      content:
        'SEOUL, South Korea (AP) Junior doctors in South Korea have four days to end their walkouts, the government said Monday, or they could face prosecution or have their medical licenses suspended.\r\nAbout… [+4202 chars]',
    },
    {
      source: {
        id: 'usa-today',
        name: 'USA Today',
      },
      author: 'Safid Deen',
      title:
        'Inter Miami vs. LA Galaxy score: Full recap with every Messi highlight - USA TODAY',
      description:
        "Lionel Messi rescued Inter Miami late against the Los Angeles Galaxy, earning a late draw on the road. Take a look at the game's highlights.",
      url: 'https://www.usatoday.com/story/sports/soccer/2024/02/25/inter-miami-la-galaxy-live-stream-updates-stats-highlights/72737101007/',
      urlToImage:
        'https://www.usatoday.com/gcdn/authoring/authoring-images/2024/02/26/USAT/72742165007-usatsi-22621599.jpg?crop=2800,1575,x59,y218&width=2800&height=1575&format=pjpg&auto=webp',
      publishedAt: '2024-02-26T04:22:12Z',
      content:
        'The Los Angeles Galaxy were five minutes away from beating Lionel Messi and Inter Miami.\r\nBut it was enough time for the worlds greatest player to come to Inter Miamis rescue and make his mark in Los… [+14884 chars]',
    },
    {
      source: {
        id: null,
        name: 'CBS Sports',
      },
      author: '',
      title:
        "All the numbers you need to know from Nikola Jokic's historic three-game stretch to bolster MVP case - CBS Sports",
      description:
        'Jokic is averaging 27.3 points, 16.7 rebounds and 15 assists over the last three games',
      url: 'https://www.cbssports.com/nba/news/all-the-numbers-you-need-to-know-from-nikola-jokics-historic-three-game-stretch-to-bolster-mvp-case/',
      urlToImage:
        'https://sportshub.cbsistatic.com/i/r/2024/02/26/7b64fd2d-c05f-49ca-a56e-dd2d945abc25/thumbnail/1200x675/2a07cab713e9f55aa679d98b8524546c/jokic-2024-still-vs-warriors.png',
      publishedAt: '2024-02-26T04:19:40Z',
      content:
        'Nikola Jokic was at it again on Sunday, leading the Denver Nuggets to a 119-103 victory over the Golden State Warriors with 32 points, 16 rebounds and 16 assists. His stunning performance was the lat… [+3105 chars]',
    },
    {
      source: {
        id: null,
        name: 'Hindustan Times',
      },
      author: 'Sumanti Sen',
      title:
        'Gemini refuses to answer whether Elon Musk posting memes or Hitler is worse - Hindustan Times',
      description:
        '“It is not possible to say who definitively impacted society more, Elon tweeting memes or Hitler,” the Gemini AI chatbot said',
      url: 'https://www.hindustantimes.com/world-news/us-news/google-blasted-after-gemini-refuses-to-answer-whether-elon-musk-posting-memes-or-adolf-hitler-is-worse-101708919278022.html',
      urlToImage:
        'https://www.hindustantimes.com/ht-img/img/2024/02/26/1600x900/GEMINI-AI-13_1708919610732_1708919636939.jpg',
      publishedAt: '2024-02-26T03:56:50Z',
      content:
        'Writer Nate Silver took to X to call out Google after its Gemini AI chatbot refused to answer whether Elon Musk tweeting memes is worse or Adolf Hitler ordering the deaths of millions of people. The … [+2371 chars]',
    },
    {
      source: {
        id: 'cnn',
        name: 'CNN',
      },
      author: 'Sara Smart, Steve Almasy',
      title:
        'Nex Benedict death: Police video shows non-binary teen describe fight in high school bathroom - CNN',
      description:
        'Body camera video released by police in Oklahoma shows a teenager and their guardian speaking with an officer about a fight at a high school, giving more insight into a reported altercation that preceded the 10th grader’s death.',
      url: 'https://www.cnn.com/2024/02/25/us/oklahoma-nex-benedict-death-police-video/index.html',
      urlToImage:
        'https://media.cnn.com/api/v1/images/stellar/prod/nex-benedict-1707490102.jpg?c=16x9&q=w_800,c_fill',
      publishedAt: '2024-02-26T03:05:00Z',
      content:
        'Body camera video released by police in Oklahoma shows a teenager and their guardian speaking with an officer about a fight at a high school, giving more insight into a reported altercation that prec… [+5216 chars]',
    },
    {
      source: {
        id: 'fox-news',
        name: 'Fox News',
      },
      author: 'Greg Wehner',
      title:
        'Houthis nearly strike oil tanker in Gulf of Aden; US, coalition forces take out more one-way attack drones - Fox News',
      description:
        'Iranian-backed Houthis nearly struck an oil tanker in the Gulf of Aden on Saturday, while Central Command forces took out two drones flying toward military vessels in the Red Sea.',
      url: 'https://www.foxnews.com/world/houthis-nearly-strike-oil-tanker-gulf-aden-us-coalition-forces-take-out-way-attack-drones',
      urlToImage:
        'https://static.foxnews.com/foxnews.com/content/uploads/2024/02/Houthi-missile-at-protest-in-Yemen.jpg',
      publishedAt: '2024-02-26T03:02:00Z',
      content:
        'Join Fox News for access to this content\r\nPlus get unlimited access to thousands of articles, videos and more with your free account!\r\nPlease enter a valid email address.\r\nBy entering your email, you… [+2693 chars]',
    },
    {
      source: {
        id: 'politico',
        name: 'Politico',
      },
      author: null,
      title:
        "WTO in 'damage control' mode as Abu Dhabi agenda unravels - POLITICO",
      description:
        "The failure of WTO member countries to produce anything meaningful at the group’s 13th Ministerial Conference could further erode the Geneva-based organization's ability to create new global trade rules.",
      url: 'https://www.politico.com/news/2024/02/25/world-trade-cooperation-will-be-put-to-the-test-in-abu-dhabi-00143019',
      urlToImage:
        'https://static.politico.com/43/68/a04f837a4a95a993ee4ad7e6bf2a/https-delivery-gettyimages.com/downloads/1241258865',
      publishedAt: '2024-02-26T03:00:00Z',
      content:
        'You could put the worlds greatest matchmaker, arbiter and negotiator in charge of the WTO right now and I dont think much could happen, said Rufus Yerxa, a former U.S. trade official who was a WTO de… [+9202 chars]',
    },
    {
      source: {
        id: null,
        name: 'Space.com',
      },
      author: 'Tariq Malik',
      title:
        "SpaceX, NASA 'go' to launch Crew-8 astronaut mission to ISS on March 1 - Space.com",
      description:
        'The Crew Dragon Endeavour will launch four astronauts to the International Space Station on just after midnight Friday morning this week.',
      url: 'https://www.space.com/spacex-crew-8-astronaut-mission-go-for-march-2024-launch',
      urlToImage:
        'https://cdn.mos.cms.futurecdn.net/TXN78wEQwRGGJxbxjgQ99K-1200-80.jpg',
      publishedAt: '2024-02-26T02:59:43Z',
      content:
        'Space is part of Future US Inc, an international media group and leading digital publisher. Visit our corporate site.\r\n©\r\nFuture US, Inc. Full 7th Floor, 130 West 42nd Street,\r\nNew York,\r\nNY 10036.',
    },
    {
      source: {
        id: null,
        name: 'CNBC',
      },
      author: 'Shreyashi Sanyal, Lee Ying Shan',
      title:
        "Japan's Nikkei 225 extends rally to hit new high; China stocks higher - CNBC",
      description:
        "Investors await a slew of economic data this week, including China's manufacturing PMI and the Federal Reserve's preferred inflation gauge.",
      url: 'https://www.cnbc.com/2024/02/26/asia-markets-live-updates.html',
      urlToImage:
        'https://image.cnbcfm.com/api/v1/image/107037983-1648521569380-gettyimages-1239204935-HK_STOCKS.jpeg?v=1670207451&w=1920&h=1080',
      publishedAt: '2024-02-26T02:51:56Z',
      content:
        "Japan's Nikkei 225 index hit a fresh high Monday as traders returned from a long weekend, while China markets snapped a nine-day winning streak.\r\nThe Nikkei ended 0.4% higher at 39,233.71, comfortabl… [+1375 chars]",
    },
    {
      source: {
        id: null,
        name: 'BBC News',
      },
      author: null,
      title:
        'Air Force man sets himself on fire outside Israeli embassy in Washington DC - BBC.com',
      description:
        'The man who burned himself in Washington DC is an active-duty US airman, local media report.',
      url: 'https://www.bbc.com/news/world-us-canada-68398479',
      urlToImage:
        'https://ichef.bbci.co.uk/news/1024/branded_news/60B1/production/_132735742_gettyimages-2031352382.jpg',
      publishedAt: '2024-02-26T02:45:23Z',
      content:
        'The Washington police department is investigating the incident alongside the Secret Service and other relevant authorities\r\nA man has set himself on fire in front of the Israeli embassy in Washington… [+1769 chars]',
    },
    {
      source: {
        id: null,
        name: 'YouTube',
      },
      author: null,
      title:
        'NHL Highlights | Red Wings vs Blackhawks - February 25, 2024 - SPORTSNET',
      description:
        'After spending 16 seasons with the Blackhawks, the former Chicago winger Patrick Kane commemorated his return by scoring an overtime winner for the Detroit R...',
      url: 'https://www.youtube.com/watch?v=JMqQF1_AFCw',
      urlToImage: 'https://i.ytimg.com/vi/JMqQF1_AFCw/maxresdefault.jpg',
      publishedAt: '2024-02-26T02:10:55Z',
      content: null,
    },
    {
      source: {
        id: null,
        name: 'Page Six',
      },
      author: 'Chris Rogers',
      title:
        "Shane Gillis bombs 'SNL' monologue as he addresses 2019 firing: Thought I'd 'get a bigger laugh' - Page Six",
      description:
        'The stand-up comedian hosted “Saturday Night Live” this weekend with musical guest 21 Savage.',
      url: 'https://pagesix.com/2024/02/25/entertainment/shane-gillis-bombs-snl-monologue-as-he-addresses-2019-firing/',
      urlToImage:
        'https://pagesix.com/wp-content/uploads/sites/3/2024/02/77208532.jpg?quality=75&strip=all&w=1024',
      publishedAt: '2024-02-26T01:44:00Z',
      content:
        'Comedian Shane Gillis hosted Saturday Night Live this weekend and used his opening monologue to address his 2019 firing from the sketch comedy series.\r\n“I’m here,” the 36-year-old said at the start o… [+2354 chars]',
    },
    {
      source: {
        id: null,
        name: 'WAVE 3',
      },
      author: 'Derek Brightwell',
      title:
        'Cause of death revealed for Campbellsville University student - WAVE 3',
      description:
        'The Taylor County Coroner revealed the cause of death for the Campbellsville University student who was found unresponsive Saturday morning.',
      url: 'https://www.wave3.com/2024/02/26/cause-death-revealed-campbellsville-university-student/',
      urlToImage:
        'https://gray-wave-prod.cdn.arcpublishing.com/resizer/v2/6J2T5IEAC5FZRP5MWIZS7MFJYM.png?auth=5d2f1829592a74fabd3b65bb7f83c08704e7c78278534654848b2bdf8381fb17&width=1200&height=600&smart=true',
      publishedAt: '2024-02-26T01:34:00Z',
      content:
        'CAMPBELLSVILLE, Ky. (WAVE) - The cause of death for the Campbellsville University student who died Saturday has been revealed.\r\nTaylor County Coroner Daniel Cook has told WAVE News that 18-year-old J… [+1594 chars]',
    },
    {
      source: {
        id: 'axios',
        name: 'Axios',
      },
      author: 'Axios',
      title:
        "Zelensky: 31000 Ukrainian troops killed since start of Russia's invasion - Axios",
      description: null,
      url: 'https://www.axios.com/2024/02/25/ukraine-russia-war-volodymyr-zelensky-military-deaths',
      urlToImage: null,
      publishedAt: '2024-02-26T01:20:07Z',
      content: null,
    },
    {
      source: {
        id: 'fox-news',
        name: 'Fox News',
      },
      author: 'Bradford Betz, Paul Steinhauser',
      title:
        'Koch-backed network drops funding for Nikki Haley campaign after South Carolina defeat - Fox News',
      description:
        'AFP Action, the conservative wing of Americans for Prosperity, funded by the billionaire Koch Brothers, has pulled funding for the presidential campaign of Nikki Haley.',
      url: 'https://www.foxnews.com/politics/koch-backed-network-drops-funding-nikki-haley-campaign-south-carolina-defeat',
      urlToImage:
        'https://static.foxnews.com/foxnews.com/content/uploads/2024/02/GettyImages-2028795724.jpg',
      publishedAt: '2024-02-26T01:20:00Z',
      content:
        'Join Fox News for access to this content\r\nPlus get unlimited access to thousands of articles, videos and more with your free account!\r\nPlease enter a valid email address.\r\nBy entering your email, you… [+3044 chars]',
    },
  ],
};
