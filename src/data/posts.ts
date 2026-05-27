import art1 from "@/assets/art-1.jpg";
import art2 from "@/assets/art-2.jpg";
import art3 from "@/assets/art-3.jpg";
import art4 from "@/assets/art-4.jpg";
import art5 from "@/assets/art-5.jpg";
import type { Lang } from "@/i18n/translations";

export type Post = {
  slug: string;
  categoryId: string;
  cat: string;
  date: string;
  readMin: number;
  title: string;
  excerpt: string;
  image: string;
  content: string[];
};

type LocalizedPostFields = Omit<Post, "slug" | "categoryId" | "readMin" | "image">;

type LocalizedPostRecord = {
  slug: string;
  categoryId: string;
  readMin: number;
  image: string;
  translations: Record<Lang, LocalizedPostFields>;
};

const postRecords: LocalizedPostRecord[] = [
  {
    slug: "krizis",
    categoryId: "crisis",
    readMin: 5,
    image: art1,
    translations: {
      ru: {
        cat: "Кризис",
        date: "20 мая 2026",
        title: "Кризис: поворотный пункт к новому",
        excerpt:
          "Кризис — это не только разрушение. Порой это момент, когда прежняя версия себя больше не может жить по-старому, а новая только учится дышать.",
        content: [
          "Кризис (от греч. krisis — поворотный пункт, решение) — нельзя сказать, что это всегда однозначно о разрушении. Порой бывает, что это момент, когда наша прежняя версия себя больше не может жить по-старому, адаптироваться к изменениям, а новая версия ещё только учится дышать.",
          "Можно говорить о ситуационном кризисе и кризисе возрастном. Последний связан с определёнными периодами жизни человека, он необходим для перехода на новый этап развития, начиная с детства и заканчивая пожилым возрастом. Ситуационный кризис — это внутренний перелом, очень часто связанный с наступлением ситуации потери. В такой ситуации человек сталкивается с необходимостью пересобрать себя, переформатировать своё отношение ко многим аспектам своего бытия: свои смыслы, опоры, отношения с миром и с собой.",
          "В кризисе человек особенно остро чувствует уязвимость. Теряется ощущение контроля, привычные ответы перестают работать, а будущее кажется неопределённым. Но именно в этой точке часто рождается глубина: способность слышать себя честнее, чувствовать тоньше и выбирать осознаннее.",
          "Психологи говорят, что кризис — это своего рода этап развития личности. Через внутренний конфликт психика пытается перейти на новый уровень зрелости. Поэтому за тревогой, растерянностью и болью нередко скрывается процесс обновления.",
          "Кризис напоминает зиму: внешне всё будто замирает, но под землёй уже начинается подготовка к новой жизни. И иногда самое важное в этот период — не спешить «починить» себя, а позволить себе пройти через изменения с вниманием и бережностью.",
          "Потому что после самых сложных внутренних штормов человек часто выходит не прежним — а более настоящим.",
        ],
      },
      en: {
        cat: "Crisis",
        date: "May 20, 2026",
        title: "Crisis: A Turning Point Toward Something New",
        excerpt:
          "A crisis is not only about destruction. Sometimes it is the moment when the old version of yourself can no longer live the old way, and the new one is just learning to breathe.",
        content: [
          "A crisis (from the Greek krisis — turning point, decision) is not always something that can be understood only as destruction. Sometimes it is the moment when our former version of self can no longer live the old way or adapt to change, while the new version is only learning how to breathe.",
          "We can speak of a situational crisis and an age-related crisis. The latter is connected with certain periods of a person's life and is necessary for moving into a new stage of development, from childhood to old age. A situational crisis is an inner fracture, very often linked to the arrival of loss. In such a situation, a person faces the need to reassemble themselves and reshape their relationship to many aspects of being: their meanings, supports, relationship with the world and with themselves.",
          "In crisis, a person feels vulnerability especially sharply. The sense of control disappears, familiar answers stop working, and the future seems uncertain. Yet it is often exactly at this point that depth is born: the ability to hear yourself more honestly, feel more subtly, and choose more consciously.",
          "Psychologists say that crisis is a kind of stage in personality development. Through inner conflict, the psyche tries to move to a new level of maturity. That is why anxiety, confusion and pain often conceal a process of renewal.",
          "A crisis resembles winter: outwardly everything seems frozen, but beneath the ground preparation for new life has already begun. Sometimes the most important thing in this period is not to rush to 'fix' yourself, but to allow yourself to go through change with attention and care.",
          "Because after the hardest inner storms, a person often comes out not the same as before, but more real.",
        ],
      },
      lv: {
        cat: "Krīze",
        date: "2026. gada 20. maijs",
        title: "Krīze: pagrieziena punkts uz jaunu dzīvi",
        excerpt:
          "Krīze nav tikai sabrukums. Dažreiz tā ir brīdis, kad vecā sevis versija vairs nevar dzīvot pa veco, bet jaunā tikai mācās elpot.",
        content: [
          "Krīze (no grieķu krisis — pagrieziena punkts, lēmums) nav kaut kas, ko vienmēr var viennozīmīgi saukt par sabrukumu. Reizēm tas ir brīdis, kad mūsu iepriekšējā sevis versija vairs nespēj dzīvot pa vecam un pielāgoties pārmaiņām, bet jaunā versija vēl tikai mācās elpot.",
          "Var runāt par situatīvu krīzi un vecumposma krīzi. Otrā ir saistīta ar noteiktiem cilvēka dzīves periodiem un ir nepieciešama pārejai uz jaunu attīstības posmu, sākot no bērnības un beidzot ar vecumdienām. Situatīva krīze ir iekšējs lūzums, kas ļoti bieži saistīts ar zaudējuma situāciju. Šādā brīdī cilvēks sastopas ar nepieciešamību no jauna salikt sevi kopā un pārveidot savu attieksmi pret daudziem savas esības aspektiem: savām jēgām, balstiem, attiecībām ar pasauli un ar sevi.",
          "Krīzē cilvēks īpaši asi izjūt ievainojamību. Pazūd kontroles sajūta, ierastās atbildes vairs nedarbojas, un nākotne šķiet neskaidra. Taču tieši šajā punktā bieži piedzimst dziļums: spēja godīgāk sadzirdēt sevi, smalkāk just un apzinātāk izvēlēties.",
          "Psihologi saka, ka krīze ir sava veida personības attīstības posms. Caur iekšēju konfliktu psihe mēģina pāriet jaunā brieduma līmenī. Tāpēc aiz trauksmes, apjukuma un sāpēm nereti slēpjas atjaunošanās process.",
          "Krīze atgādina ziemu: ārēji šķiet, ka viss sastingst, bet zem zemes jau ir sākusies gatavošanās jaunai dzīvei. Dažreiz svarīgākais šajā periodā ir nesteigties sevi 'salabot', bet ļaut sev iziet pārmaiņām cauri ar uzmanību un saudzīgumu.",
          "Jo pēc vissmagākajām iekšējām vētrām cilvēks bieži iznāk nevis tāds pats kā iepriekš, bet patiesāks.",
        ],
      },
    },
  },
  {
    slug: "emotsii-i-eq",
    categoryId: "emotions",
    readMin: 7,
    image: art2,
    translations: {
      ru: {
        cat: "Эмоции",
        date: "10 мая 2026",
        title: "Эмоции и эмоциональный интеллект",
        excerpt:
          "Эмоции — это не помеха разуму, а система ориентиров. Они помогают оценивать ситуацию быстрее, чем включается логика, и связывают нас с собой и с другими.",
        content: [
          "Эмоции даны человеку для понимания и оценивания происходящих с ним событий, для выживания и внутренней навигации. Это своего рода сигнал, особый способ психики оценить происходящее и сообщить нам: «что-то происходит, и это имеет для тебя значение, это важно для тебя сейчас». Ещё до того, как включается рациональный анализ ситуации, эмоциональная система уже считывает ситуацию: безопасна она или опасна, несёт ли угрозу, потерю, удовольствие, принятие. Именно поэтому эмоции возникают быстрее мыслей. Они древнее логики и глубже слов.",
          "Каждая эмоция важна — это универсальный барометр происходящего вокруг. Но у человека они поддаются осмыслению, пониманию причин их возникновения, и это крайне важно в работе психолога с клиентами. Психолог видит в эмоциях сигналы психики, которые самим клиентам не всегда понятны, и это не «хорошее» или «плохое», а информация для обсуждения. Когда человек перестаёт подавлять свои эмоции и чувства, а начинает их распознавать, он лучше понимает себя: чего хочет, чего боится, где ему больно, а где по-настоящему важно.",
          "Эмоции — это не помеха разуму, а система ориентиров. Они помогают человеку оценивать ситуацию быстрее, чем успевает включиться логический анализ. Именно поэтому мы сначала чувствуем — и только потом объясняем себе, что произошло.",
          "Настоящая психологическая зрелость заключается не в отсутствии эмоций, а в способности выдерживать их, понимать и проживать экологично — не разрушая ни себя, ни окружающих.",
          "Подавленные эмоции никуда не исчезают. Психика не умеет просто «выключать» переживания. То, что не проживается эмоционально, постепенно начинает проявляться через тревогу, хроническую усталость, раздражительность, внутреннюю пустоту, психосоматические симптомы или ощущение потери смысла.",
          "Эмоциональный интеллект — это способность понимать свои эмоции, распознавать чувства других людей и экологично взаимодействовать с окружающими. Его развитие помогает лучше справляться со стрессом, выстраивать отношения, понимать свои потребности и принимать более осознанные решения.",
          "Развитие эмоционального интеллекта начинается с внимания к себе: умения замечать свои чувства, называть их, понимать причины своих реакций и управлять ими без подавления. Не менее важно развивать эмпатию, способность слушать, уважать эмоции другого человека и сохранять внутреннее равновесие даже в сложных ситуациях.",
          "Эмоциональный интеллект делает человека более устойчивым, гибким и психологически зрелым, помогая создавать более глубокие и гармоничные отношения с собой и окружающими.",
        ],
      },
      en: {
        cat: "Emotions",
        date: "May 10, 2026",
        title: "Emotions and Emotional Intelligence",
        excerpt:
          "Emotions are not an obstacle to reason — they are a navigation system. They help us assess situations faster than logic can, connecting us to ourselves and to others.",
        content: [
          "Emotions are given to a person for understanding and evaluating the events happening to them, for survival and for inner navigation. They are a kind of signal, a special way for the psyche to assess what is happening and tell us: 'something is happening, and it matters to you, it is important to you right now.' Even before rational analysis starts, the emotional system has already read the situation: is it safe or dangerous, does it carry threat, loss, pleasure, or acceptance? That is why emotions arise faster than thoughts. They are older than logic and deeper than words.",
          "Every emotion matters — it is a universal barometer of what is happening around us. Yet in human life emotions can be reflected on and their causes can be understood, and this is extremely important in psychological work with clients. A psychologist sees emotions as signals from the psyche that are not always clear to the client, and this is not something 'good' or 'bad' but information for conversation. When a person stops suppressing emotions and begins to recognise them, they understand themselves better: what they want, what they fear, where it hurts, and what truly matters.",
          "Emotions are not an obstacle to reason but a system of orientation. They help a person assess a situation faster than logical analysis can fully engage. That is why we feel first and only later explain to ourselves what has happened.",
          "Real psychological maturity is not the absence of emotions, but the ability to hold them, understand them and live through them carefully without harming yourself or others.",
          "Suppressed emotions do not disappear. The psyche does not know how to simply 'switch off' experience. What is not emotionally lived through gradually begins to show up as anxiety, chronic fatigue, irritability, inner emptiness, psychosomatic symptoms, or a sense of lost meaning.",
          "Emotional intelligence is the ability to understand your own emotions, recognise the feelings of other people, and interact with others in a healthy way. Its development helps people cope better with stress, build relationships, understand their needs and make more conscious decisions.",
          "The development of emotional intelligence begins with attention to yourself: the ability to notice your feelings, name them, understand the causes of your reactions and regulate them without suppression. It is just as important to develop empathy, the ability to listen, to respect another person's emotions and to keep inner balance even in difficult situations.",
          "Emotional intelligence makes a person more resilient, flexible and psychologically mature, helping them create deeper and more harmonious relationships with themselves and with others.",
        ],
      },
      lv: {
        cat: "Emocijas",
        date: "2026. gada 10. maijs",
        title: "Emocijas un emocionālais intelekts",
        excerpt:
          "Emocijas nav šķērslis prātam — tās ir orientācijas sistēma. Tās palīdz novērtēt situāciju ātrāk nekā loģika un savieno mūs ar sevi un citiem.",
        content: [
          "Emocijas cilvēkam ir dotas, lai saprastu un novērtētu notikumus, kas ar viņu notiek, izdzīvošanai un iekšējai orientācijai. Tas ir sava veida signāls, īpašs psihes veids, kā novērtēt notiekošo un pateikt mums: 'kaut kas notiek, un tam tev ir nozīme, tas tev šobrīd ir svarīgi.' Vēl pirms ieslēdzas racionāla situācijas analīze, emocionālā sistēma jau nolasa situāciju: vai tā ir droša vai bīstama, vai tā nes draudus, zaudējumu, baudu vai pieņemšanu. Tieši tāpēc emocijas rodas ātrāk nekā domas. Tās ir senākas par loģiku un dziļākas par vārdiem.",
          "Katra emocija ir svarīga — tas ir universāls barometrs tam, kas notiek apkārt. Taču cilvēks var tās apzināties un saprast to rašanās iemeslus, un tas ir īpaši svarīgi psihologa darbā ar klientiem. Psihologs emocijās redz psihes signālus, kas pašiem klientiem ne vienmēr ir saprotami, un tas nav ne 'labs', ne 'slikts', bet informācija sarunai. Kad cilvēks pārstāj apspiest savas emocijas un jūtas un sāk tās atpazīt, viņš labāk saprot sevi: ko vēlas, no kā baidās, kur viņam sāp un kas viņam patiesi ir svarīgs.",
          "Emocijas nav šķērslis prātam, bet orientieru sistēma. Tās palīdz cilvēkam novērtēt situāciju ātrāk, nekā pilnībā ieslēdzas loģiskā analīze. Tieši tāpēc mēs vispirms jūtam un tikai pēc tam sev izskaidrojam, kas ir noticis.",
          "Patiesa psiholoģiskā brieduma pazīme nav emociju neesamība, bet spēja tās izturēt, saprast un izdzīvot saudzīgi, nekaitējot ne sev, ne citiem.",
          "Apspiestas emocijas nekur nepazūd. Psihe neprot vienkārši 'izslēgt' pārdzīvojumu. Tas, kas netiek emocionāli izdzīvots, pakāpeniski sāk izpausties kā trauksme, hronisks nogurums, aizkaitināmība, iekšējs tukšums, psihosomatiski simptomi vai dzīves jēgas zuduma sajūta.",
          "Emocionālais intelekts ir spēja saprast savas emocijas, atpazīt citu cilvēku jūtas un veselīgi mijiedarboties ar apkārtējiem. Tā attīstīšana palīdz labāk tikt galā ar stresu, veidot attiecības, izprast savas vajadzības un pieņemt apzinātākus lēmumus.",
          "Emocionālā intelekta attīstība sākas ar uzmanību pret sevi: prasmi pamanīt savas jūtas, nosaukt tās, saprast savu reakciju cēloņus un regulēt tās bez apspiešanas. Tikpat svarīgi ir attīstīt empātiju, prasmi klausīties, cienīt otra cilvēka emocijas un saglabāt iekšējo līdzsvaru arī sarežģītās situācijās.",
          "Emocionālais intelekts padara cilvēku noturīgāku, elastīgāku un psiholoģiski nobriedušāku, palīdzot veidot dziļākas un harmoniskākas attiecības ar sevi un citiem.",
        ],
      },
    },
  },
  {
    slug: "strahi",
    categoryId: "fears",
    readMin: 5,
    image: art3,
    translations: {
      ru: {
        cat: "Страхи",
        date: "28 апреля 2026",
        title: "Страхи: путь к спокойствию через уважение",
        excerpt:
          "Работа со страхами требует прежде всего понимания, уважения и ощущения безопасности. Страх нельзя обесценивать — для человека его переживания абсолютно реальны.",
        content: [
          "Работа с людьми, которые боятся собак, требует прежде всего понимания, уважения и чувства безопасности. Страх нельзя обесценивать фразами «он не кусается» или «нечего бояться», потому что для человека его переживания абсолютно реальны.",
          "Очень важно сохранять спокойствие, не давить и не пытаться ускорить процесс знакомства с собакой. Доверие формируется постепенно — через наблюдение, диалог и положительный опыт. Человек должен чувствовать, что его границы уважают, а ситуацию можно контролировать.",
          "Собаки при этом также нуждаются в правильном сопровождении: спокойное поведение животного, дистанция и отсутствие навязчивого контакта помогают снизить напряжение. Часто именно предсказуемость и понимание поведения собаки помогают человеку почувствовать себя увереннее.",
          "В такой работе большое значение имеет эмоциональная атмосфера. Безопасное пространство, поддержка специалиста, отсутствие осуждения и возможность двигаться маленькими шагами помогают человеку постепенно менять внутреннее восприятие. Иногда путь начинается просто с того, чтобы спокойно находиться рядом с собакой, наблюдать за ней на расстоянии или научиться чувствовать своё тело и дыхание в момент тревоги.",
          "Главная цель такой работы — не заставить человека «перестать бояться», а помочь ему постепенно обрести чувство спокойствия, уверенности и безопасности рядом с собакой. Именно через уважение, доверие и положительный опыт появляется возможность выстроить новые отношения — без паники, напряжения и постоянного ожидания опасности.",
        ],
      },
      en: {
        cat: "Fears",
        date: "April 28, 2026",
        title: "Fears: A Path to Calm Through Respect",
        excerpt:
          "Working with fears requires above all understanding, respect and a sense of safety. A person's experience of fear is absolutely real and must never be dismissed.",
        content: [
          "Working with people who are afraid of dogs requires above all understanding, respect and a sense of safety. Fear should never be dismissed with phrases like 'it doesn't bite' or 'there is nothing to be afraid of', because for the person their experience is absolutely real.",
          "It is very important to remain calm, not to pressure the person and not to try to speed up the process of getting acquainted with a dog. Trust is formed gradually through observation, dialogue and positive experience. The person needs to feel that their boundaries are respected and that the situation can be controlled.",
          "Dogs also need proper guidance in this process: calm behaviour, distance and the absence of intrusive contact help reduce tension. Often it is precisely predictability and understanding a dog's behaviour that help a person feel more confident.",
          "The emotional atmosphere is of great importance in this kind of work. A safe space, support from a specialist, the absence of judgment and the opportunity to move in small steps help a person gradually change their inner perception. Sometimes the path begins simply with calmly being near a dog, observing it from a distance, or learning to feel your body and breathing in moments of anxiety.",
          "The main goal of this work is not to force a person to 'stop being afraid', but to help them gradually gain a sense of calm, confidence and safety next to a dog. It is through respect, trust and positive experience that it becomes possible to build new relationships — without panic, tension and the constant expectation of danger.",
        ],
      },
      lv: {
        cat: "Bailes",
        date: "2026. gada 28. aprīlis",
        title: "Bailes: ceļš uz mieru caur cieņu",
        excerpt:
          "Darbs ar bailēm prasa galvenokārt sapratni, cieņu un drošības sajūtu. Cilvēka bailes ir absolūti reālas un nekad nav noniecināmas.",
        content: [
          "Darbs ar cilvēkiem, kuri baidās no suņiem, vispirms prasa sapratni, cieņu un drošības sajūtu. Bailes nedrīkst noniecināt ar frāzēm 'tas nekož' vai 'nav no kā baidīties', jo cilvēkam viņa pārdzīvojumi ir pilnīgi reāli.",
          "Ir ļoti svarīgi saglabāt mieru, neizdarīt spiedienu un nemēģināt paātrināt iepazīšanās procesu ar suni. Uzticēšanās veidojas pakāpeniski — caur novērošanu, dialogu un pozitīvu pieredzi. Cilvēkam ir jājūt, ka viņa robežas tiek ievērotas un situāciju var kontrolēt.",
          "Arī suņiem šajā procesā ir vajadzīgs pareizs pavadījums: mierīga uzvedība, distance un uzbāzīga kontakta neesamība palīdz mazināt spriedzi. Bieži tieši paredzamība un izpratne par suņa uzvedību palīdz cilvēkam justies pārliecinātākam.",
          "Šādā darbā liela nozīme ir emocionālajai atmosfērai. Droša telpa, speciālista atbalsts, nosodījuma neesamība un iespēja virzīties maziem soļiem palīdz cilvēkam pakāpeniski mainīt savu iekšējo uztveri. Dažreiz ceļš sākas vienkārši ar mierīgu atrašanos blakus sunim, vērojot to no attāluma, vai ar mācīšanos sajust savu ķermeni un elpu trauksmes brīdī.",
          "Šāda darba galvenais mērķis nav piespiest cilvēku 'pārstāt baidīties', bet palīdzēt viņam pakāpeniski iegūt mieru, pārliecību un drošības sajūtu blakus sunim. Tieši caur cieņu, uzticēšanos un pozitīvu pieredzi kļūst iespējams izveidot jaunas attiecības — bez panikas, spriedzes un pastāvīgas bīstamības gaidīšanas.",
        ],
      },
    },
  },
  {
    slug: "ten-kotoruyu-my-ne-vidim",
    categoryId: "self-understanding",
    readMin: 6,
    image: art4,
    translations: {
      ru: {
        cat: "Самопонимание",
        date: "15 апреля 2026",
        title: "Тень, которую мы не видим",
        excerpt:
          "В каждом человеке есть та сторона, которую он предпочёл бы не замечать. Карл Густав Юнг называл её Тенью — и именно её интеграция ведёт к подлинной целостности.",
        content: [
          "В каждом человеке есть та особая сторона, которую он предпочёл бы не замечать. Мы очень тщательно стараемся выстроить образ себя — «правильного», «хорошего», «контролирующего», «последовательного» — и одновременно задвигаем вглубь всё, что в него не вписывается. Злость, зависть, страх, уязвимость, импульсивность. Но вместе с ними — смелость, спонтанность, сила, всё то, что когда-то тоже оказалось «неудобным».",
          "Карл Густав Юнг называл эту скрытую часть психики Тенью. Тень — это не просто «тёмная сторона». Это всё вытесненное: качества, эмоции, желания, которые мы не приняли в себе, потому что когда-то решили, что они недопустимы, неудобны. Чаще всего это происходит ещё в детстве — под влиянием семьи, общества, опыта стыда или наказания.",
          "Но вытесненное не исчезает. Оно продолжает жить внутри нас — и проявляется косвенно: в резкой реакции на других людей, в повторяющихся конфликтах, в ощущении, что «что-то триггерит, но я не понимаю что», в проекциях.",
          "Мы склонны видеть в других то, что не готовы признать в себе. Раздражает чья-то грубость? Возможно, это подавленная собственная агрессия. Чужая уверенность кажется высокомерием? Может быть, это непрожитая собственная сила.",
          "Тень содержит не только негатив, но и огромный пласт подавленной жизненной энергии, инстинктивной силы и творческого потенциала. Интеграция Тени высвобождает этот ресурс, превращая его из разрушительной силы в источник энергии.",
          "Игнорирование Тени не делает нас лучше — оно делает нас менее целостными. То, что вытеснено, становится неконтролируемым. Пока мы не осознаём свою тень, она управляет нами. Интеграция тени — это не про «стать хуже». Это про честность с собой. Про способность видеть в себе не только свет, но и сложность. И именно это делает человека устойчивее, свободнее и живее.",
          "Признание в себе чего-то сложного, негативного даёт возможность работать с этой стороной себя. И, возможно, именно в этом — главный смысл: не стать идеальным, а стать целостным.",
        ],
      },
      en: {
        cat: "Self-understanding",
        date: "April 15, 2026",
        title: "The Shadow We Don't See",
        excerpt:
          "There is a side in every person that they would rather not notice. Carl Gustav Jung called it the Shadow — and integrating it is what leads to genuine wholeness.",
        content: [
          "Every person has a particular side they would rather not notice. We work very hard to construct an image of ourselves as 'proper', 'good', 'in control' and 'consistent', while at the same time pushing deep inside everything that does not fit this image. Anger, envy, fear, vulnerability, impulsiveness. Yet together with them go courage, spontaneity, strength — everything that once also turned out to be 'inconvenient'.",
          "Carl Gustav Jung called this hidden part of the psyche the Shadow. The Shadow is not simply a 'dark side'. It is everything repressed: qualities, emotions and desires that we did not accept in ourselves because at some point we decided they were unacceptable or uncomfortable. Most often this happens in childhood under the influence of family, society, shame or punishment.",
          "But what is repressed does not disappear. It continues to live inside us and shows itself indirectly: in sharp reactions to other people, in repeating conflicts, in the feeling that 'something triggers me, but I do not understand what', and in projections.",
          "We tend to see in others what we are not ready to recognise in ourselves. Does someone's rudeness irritate you? Perhaps it is your own suppressed aggression. Does another person's confidence look like arrogance? Perhaps it is your own unlived strength.",
          "The Shadow contains not only the negative, but also a vast layer of suppressed life energy, instinctive power and creative potential. Integrating the Shadow releases this resource, turning it from a destructive force into a source of energy.",
          "Ignoring the Shadow does not make us better — it makes us less whole. What is repressed becomes uncontrollable. Until we become aware of our shadow, it governs us. Integrating the shadow is not about 'becoming worse'. It is about honesty with yourself. It is about the ability to see not only light in yourself, but also complexity. And that is exactly what makes a person steadier, freer and more alive.",
          "Recognising something difficult or negative in yourself gives you the opportunity to work with that side of yourself. And perhaps that is the main meaning: not to become perfect, but to become whole.",
        ],
      },
      lv: {
        cat: "Pašizpratne",
        date: "2026. gada 15. aprīlis",
        title: "Ēna, kuru mēs neredzam",
        excerpt:
          "Katrā cilvēkā ir tā puse, kuru viņš labprāt nepamanītu. Karls Gustavs Jungs to sauca par Ēnu — un tieši tās integrācija ved uz patiesu veselumu.",
        content: [
          "Katrā cilvēkā ir īpaša puse, kuru viņš labprātāk nepamanītu. Mēs ļoti rūpīgi cenšamies izveidot savu tēlu kā 'pareiziem', 'labiem', 'kontrolējošiem' un 'secīgiem', vienlaikus dziļumā nobīdot visu, kas šajā tēlā neiederas. Dusmas, skaudību, bailes, ievainojamību, impulsivitāti. Taču līdz ar to tiek nobīdīta arī drosme, spontanitāte, spēks — viss, kas kādreiz arī izrādījās 'neērts'.",
          "Karls Gustavs Jungs šo slēpto psihes daļu sauca par Ēnu. Ēna nav tikai 'tumšā puse'. Tā ir visa izstumtā daļa: īpašības, emocijas un vēlmes, ko mēs sevī nepieņēmām, jo kādreiz nolēmām, ka tās ir nepieļaujamas vai neērtas. Visbiežāk tas notiek jau bērnībā ģimenes, sabiedrības, kauna vai soda ietekmē.",
          "Taču izstumtais nepazūd. Tas turpina dzīvot mūsos un izpaužas netieši: asās reakcijās uz citiem cilvēkiem, atkārtojošos konfliktos, sajūtā, ka 'kaut kas mani trigerē, bet es nesaprotu kas', un projekcijās.",
          "Mēs mēdzam citos ieraudzīt to, ko neesam gatavi atzīt sevī. Vai tevi kaitina cita cilvēka rupjība? Iespējams, tā ir tava paša apspiestā agresija. Vai cita cilvēka pārliecība šķiet augstprātība? Varbūt tas ir tavs neizdzīvotais spēks.",
          "Ēna satur ne tikai negatīvo, bet arī milzīgu apspiestas dzīvības enerģijas, instinktīva spēka un radošā potenciāla slāni. Ēnas integrācija atbrīvo šo resursu, pārvēršot to no destruktīva spēka par enerģijas avotu.",
          "Ēnas ignorēšana nepadara mūs labākus — tā padara mūs mazāk veselus. Tas, kas ir izstumts, kļūst nekontrolējams. Kamēr mēs neapzināmies savu ēnu, tā mūs vada. Ēnas integrācija nav par to, lai 'kļūtu sliktāks'. Tā ir par godīgumu pret sevi. Par spēju ieraudzīt sevī ne tikai gaismu, bet arī sarežģītību. Un tieši tas cilvēku padara noturīgāku, brīvāku un dzīvāku.",
          "Atzīt sevī kaut ko sarežģītu vai negatīvu nozīmē iegūt iespēju strādāt ar šo savu pusi. Un, iespējams, tieši tajā ir galvenā jēga: nevis kļūt ideālam, bet kļūt veselam.",
        ],
      },
    },
  },
  {
    slug: "superviziya",
    categoryId: "supervision",
    readMin: 6,
    image: art5,
    translations: {
      ru: {
        cat: "Супервизия",
        date: "01 апреля 2026",
        title: "Супервизия: профессиональное пространство для роста",
        excerpt:
          "Супервизия — это важная часть профессионального развития психолога, помогающая анализировать сложные случаи, сохранять устойчивость и качество работы.",
        content: [
          "Супервизия — это важная часть профессионального развития специалиста психолога. Она помогает не только анализировать сложные случаи из практики и повышать качество работы, но и сохранять психологическую устойчивость, профессиональные границы и эмоциональный ресурс.",
          "Работа психолога всегда связана с глубоким эмоциональным контактом. Иногда в процессе психологической помощи у специалиста могут возникать сильные чувства по отношению к клиенту: раздражение, тревога, бессилие, желание спасать, чрезмерная жалость или слишком сильная эмоциональная вовлечённость. Чаще всего такие реакции затрагивают личный опыт самого психолога, его непроработанные внутренние конфликты, травматический опыт или собственные потребности.",
          "Именно поэтому супервизия становится особенно важным профессиональным пространством. Она помогает специалисту замечать свои эмоциональные реакции, осознавать, где заканчиваются чувства клиента и начинаются его собственные внутренние процессы.",
          "Супервизия позволяет бережно исследовать контрперенос — те чувства и реакции, которые возникают у специалиста в ответ на клиента. Очень часто именно через эти реакции становится видна глубина взаимодействия и те темы, которые требуют внимания не только в терапии клиента, но и в личной работе самого психолога.",
          "Индивидуальная супервизия даёт возможность глубже исследовать внутренние переживания специалиста, его личные реакции, страхи, уязвимость и особенности профессионального стиля. Групповая супервизия помогает увидеть, насколько похожие процессы возникают и у других специалистов, снижает чувство изоляции и расширяет взгляд на ситуацию благодаря разным точкам зрения и опыту коллег.",
          "Именно способность осознавать свои внутренние процессы, замечать собственные ограничения и продолжать профессионально развиваться делает специалиста более зрелым, устойчивым и бережным в работе с людьми.",
        ],
      },
      en: {
        cat: "Supervision",
        date: "April 1, 2026",
        title: "Supervision: A Professional Space for Growth",
        excerpt:
          "Supervision is an essential part of a psychologist's professional development, helping to analyse complex cases, maintain resilience and uphold quality of practice.",
        content: [
          "Supervision is an important part of a psychologist's professional development. It helps not only analyse difficult cases from practice and improve the quality of work, but also preserve psychological stability, professional boundaries and emotional resources.",
          "The work of a psychologist is always connected with deep emotional contact. Sometimes, in the process of psychological help, strong feelings may arise in the specialist toward the client: irritation, anxiety, helplessness, a desire to rescue, excessive pity, or overly strong emotional involvement. Most often these reactions touch the psychologist's personal experience, unresolved inner conflicts, traumatic experience or personal needs.",
          "That is why supervision becomes an especially important professional space. It helps the specialist notice their emotional reactions and understand where the client's feelings end and their own inner processes begin.",
          "Supervision allows the careful exploration of countertransference — the feelings and reactions that arise in the specialist in response to the client. Very often it is exactly through these reactions that the depth of the interaction becomes visible, as well as the themes that require attention not only in the client's therapy, but also in the psychologist's own personal work.",
          "Individual supervision makes it possible to explore the specialist's inner experiences, personal reactions, fears, vulnerability and professional style in greater depth. Group supervision helps reveal how similar processes arise in other specialists as well, reduces the sense of isolation and broadens the view of the situation through different perspectives and colleagues' experience.",
          "The ability to recognise one's inner processes, notice one's own limitations and continue to grow professionally is what makes a specialist more mature, resilient and careful in working with people.",
        ],
      },
      lv: {
        cat: "Supervīzija",
        date: "2026. gada 1. aprīlis",
        title: "Supervīzija: profesionāla telpa izaugsmei",
        excerpt:
          "Supervīzija ir svarīga psihologa profesionālās attīstības daļa, kas palīdz analizēt sarežģītus gadījumus, saglabāt noturību un darba kvalitāti.",
        content: [
          "Supervīzija ir svarīga psihologa profesionālās attīstības daļa. Tā palīdz ne tikai analizēt sarežģītus gadījumus praksē un paaugstināt darba kvalitāti, bet arī saglabāt psiholoģisko noturību, profesionālās robežas un emocionālos resursus.",
          "Psihologa darbs vienmēr ir saistīts ar dziļu emocionālu kontaktu. Dažreiz psiholoģiskās palīdzības procesā speciālistam var rasties spēcīgas jūtas pret klientu: aizkaitinājums, trauksme, bezspēcība, vēlme glābt, pārmērīga žēluma sajūta vai pārāk liela emocionālā iesaiste. Visbiežāk šādas reakcijas skar paša psihologa personīgo pieredzi, neizstrādātus iekšējos konfliktus, traumatisku pieredzi vai paša vajadzības.",
          "Tieši tāpēc supervīzija kļūst par īpaši svarīgu profesionālu telpu. Tā palīdz speciālistam pamanīt savas emocionālās reakcijas un saprast, kur beidzas klienta jūtas un sākas paša iekšējie procesi.",
          "Supervīzija ļauj saudzīgi pētīt pretpārnesi — jūtas un reakcijas, kas speciālistā rodas atbildot uz klientu. Ļoti bieži tieši caur šīm reakcijām kļūst redzams mijiedarbības dziļums, kā arī tēmas, kurām vajadzīga uzmanība ne tikai klienta terapijā, bet arī paša psihologa personīgajā darbā.",
          "Individuālā supervīzija dod iespēju dziļāk pētīt speciālista iekšējos pārdzīvojumus, personīgās reakcijas, bailes, ievainojamību un profesionālā stila īpatnības. Grupas supervīzija palīdz ieraudzīt, cik līdzīgi procesi rodas arī citiem speciālistiem, mazina izolācijas sajūtu un paplašina skatījumu uz situāciju, pateicoties dažādiem skatpunktiem un kolēģu pieredzei.",
          "Tieši spēja apzināties savus iekšējos procesus, pamanīt savus ierobežojumus un turpināt profesionāli augt padara speciālistu nobriedušāku, noturīgāku un saudzīgāku darbā ar cilvēkiem.",
        ],
      },
    },
  },
];

export const getPosts = (lang: Lang): Post[] =>
  postRecords.map(({ translations, ...shared }) => ({
    ...shared,
    ...translations[lang],
  }));