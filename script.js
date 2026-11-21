/* =====================================================================
   SHOP CONTENT — edit ONLY this object to reuse the site for another shop.
   Everything visible on the page (both languages) comes from here.
   hours: index 0 = Sunday … 6 = Saturday, ["HH:MM", "HH:MM"] in Dubai time, or null if closed.
   hoursGroups: how days are grouped in the hours table. See README.md.
   ===================================================================== */
const SHOP = {
  "name": "Pretty Eye Ladies Salon",
  "siteUrl": "https://tanish0212.github.io/pretty-eye-demo/",
  "schemaType": "BeautySalon",
  "phoneDisplay": "+971 52 281 1900",
  "phoneHref": "tel:+971522811900",
  "phoneIntl": "+971522811900",
  "whatsappNumber": "971522811900",
  "directionsUrl": "https://www.google.com/maps/search/?api=1&query=Pretty+Eye+Ladies+Salon+Karama+Commercial+Complex+Al+Karama+Dubai",
  "reviewsUrl": "https://www.google.com/maps/search/?api=1&query=Pretty+Eye+Ladies+Salon+Karama+Commercial+Complex+Al+Karama+Dubai",
  "mapEmbedUrl": "https://maps.google.com/maps?q=Pretty%20Eye%20Ladies%20Salon%2C%20Karama%20Commercial%20Complex%2C%20Al%20Karama%2C%20Dubai&output=embed",
  "address": {
    "street": "Karama Commercial Complex, 37 16th Street, Al Karama",
    "city": "Dubai",
    "country": "AE"
  },
  "timeZone": "Asia/Dubai",
  "hours": [
    [
      "10:00",
      "22:00"
    ],
    [
      "10:00",
      "22:00"
    ],
    [
      "10:00",
      "22:00"
    ],
    [
      "10:00",
      "22:00"
    ],
    [
      "10:00",
      "22:00"
    ],
    [
      "10:00",
      "22:00"
    ],
    [
      "10:00",
      "22:00"
    ]
  ],
  "hoursGroups": [
    {
      "days": [
        0,
        1,
        2,
        3,
        4,
        5,
        6
      ],
      "key": "daily"
    }
  ],
  "rating": {
    "value": "4.5",
    "count": 376
  },
  "showDemoBanner": true,
  "credit": "Tanish",
  "images": {
    "hero": {
      "src": "images/vanity.svg",
      "en": "Line drawing of a round vanity mirror reflecting an eye with long lashes",
      "ar": "رسم خطي لمرآة زينة دائرية تعكس عينًا برموش طويلة"
    }
  },
  "stepIcons": [
    "i-wa",
    "i-store",
    "i-eye"
  ],
  "services": [
    {
      "image": "images/haircut.svg",
      "en": {
        "name": "Haircuts",
        "desc": "Haircuts for ladies. Tell us the style you'd like.",
        "alt": "Line drawing of scissors beside a wavy lock of hair",
        "ask": "a haircut"
      },
      "ar": {
        "name": "قص الشعر",
        "desc": "قصات شعر للسيدات. أخبرينا بالقصة التي تحبينها.",
        "alt": "رسم خطي لمقص بجانب خصلة شعر مموجة",
        "ask": "قص الشعر"
      }
    },
    {
      "image": "images/blow-dry.svg",
      "en": {
        "name": "Blow dry",
        "desc": "A blow dry to finish your hair.",
        "alt": "Line drawing of a round styling brush with curved air lines",
        "ask": "a blow dry"
      },
      "ar": {
        "name": "سشوار",
        "desc": "سشوار لتصفيف شعرك.",
        "alt": "رسم خطي لفرشاة تصفيف دائرية مع خطوط هواء",
        "ask": "السشوار"
      }
    },
    {
      "image": "images/hair-spa.svg",
      "en": {
        "name": "Hair spa",
        "desc": "A hair spa treatment. Ask us what it includes.",
        "alt": "Line drawing of three rolled towels with small bubbles",
        "ask": "a hair spa"
      },
      "ar": {
        "name": "سبا الشعر",
        "desc": "جلسة سبا للشعر. اسألينا عما تتضمنه.",
        "alt": "رسم خطي لثلاث مناشف ملفوفة مع فقاعات صغيرة",
        "ask": "جلسة سبا الشعر"
      }
    },
    {
      "image": "images/facial.svg",
      "en": {
        "name": "Facials",
        "desc": "Facials to leave your skin feeling fresh.",
        "alt": "Line drawing of an open jar of cream with a spatula",
        "ask": "a facial"
      },
      "ar": {
        "name": "تنظيف البشرة",
        "desc": "جلسات تنظيف بشرة لتشعري بالانتعاش.",
        "alt": "رسم خطي لعلبة كريم مفتوحة مع ملعقة صغيرة",
        "ask": "تنظيف البشرة"
      }
    },
    {
      "image": "images/threading.svg",
      "en": {
        "name": "Threading",
        "desc": "Eyebrow and face threading, done neatly.",
        "alt": "Line drawing of an eye and eyebrow with a twisted thread",
        "ask": "threading"
      },
      "ar": {
        "name": "الخيط",
        "desc": "تنظيف الحواجب والوجه بالخيط بعناية.",
        "alt": "رسم خطي لعين وحاجب مع خيط ملتف",
        "ask": "الخيط"
      }
    },
    {
      "image": "images/mani-pedi.svg",
      "en": {
        "name": "Manicure & pedicure",
        "desc": "Manicure and pedicure for hands and feet.",
        "alt": "Line drawing of a basin of water with a folded towel",
        "ask": "a manicure and pedicure"
      },
      "ar": {
        "name": "مانيكير وباديكير",
        "desc": "مانيكير وباديكير لليدين والقدمين.",
        "alt": "رسم خطي لوعاء ماء ومنشفة مطوية",
        "ask": "المانيكير والباديكير"
      }
    },
    {
      "image": "images/nails.svg",
      "en": {
        "name": "Nails",
        "desc": "Nail care and polish. Message us for the options.",
        "alt": "Line drawing of a bottle of nail polish beside three painted nails",
        "ask": "nails"
      },
      "ar": {
        "name": "الأظافر",
        "desc": "العناية بالأظافر وطلاؤها. راسلينا لمعرفة الخيارات.",
        "alt": "رسم خطي لزجاجة طلاء أظافر بجانب ثلاثة أظافر ملونة",
        "ask": "الأظافر"
      }
    },
    {
      "image": "images/saree.svg",
      "en": {
        "name": "Saree draping",
        "desc": "Help draping your saree for an occasion.",
        "alt": "Line drawing of a dress form with a draped saree and pleats",
        "ask": "saree draping"
      },
      "ar": {
        "name": "لف الساري",
        "desc": "مساعدة في لف الساري للمناسبات.",
        "alt": "رسم خطي لمجسم عرض عليه ساري ملفوف بطيّات",
        "ask": "لف الساري"
      }
    }
  ],
  "reviews": [
    "The ladies are absolutely wonderful, so friendly, professional, and welcoming.",
    "The threading is also done very neatly.",
    "The facial is really relaxing and my skin feels fresh and glowing afterwards."
  ],
  "text": {
    "en": {
      "skip": "Skip to content",
      "navLabel": "Main",
      "navServices": "Services",
      "navHow": "How it works",
      "navReviews": "Reviews",
      "navVisit": "Visit",
      "langLabel": "Language",
      "waCta": "Message on WhatsApp",
      "waShort": "WhatsApp",
      "callCta": "Call the salon",
      "directions": "Get Directions",
      "newTab": "(opens in a new tab)",
      "ratingLine": "{rating} on Google · {count} reviews",
      "statusOpen": "Open now · until {time}",
      "statusOpensToday": "Closed now · opens today at {time}",
      "statusReopens": "Closed now · reopens today at {time}",
      "closed": "Closed",
      "statusOpensTomorrow": "Closed now · opens tomorrow at {time}",
      "statusOpensLater": "Closed now · opens {day} at {time}",
      "am": "AM",
      "pm": "PM",
      "days": [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "today": "Today",
      "stripAria": "Quick facts",
      "stripServicesLabel": "Services",
      "stripHoursLabel": "Hours",
      "stripRatingLabel": "Google rating",
      "stripRating": "{rating} / 5 · {count} reviews",
      "servicesKicker": "Services",
      "quoteCta": "Ask on WhatsApp",
      "quoteNote": "Prices aren't listed online. Message us on WhatsApp for prices.",
      "howKicker": "How it works",
      "reviewsKicker": "Reviews",
      "basedOn": "{count} reviews on Google",
      "reviewLabel": "Google review",
      "readMore": "Read more on Google",
      "visitKicker": "Visit",
      "addressLabel": "Address",
      "hoursLabel": "Opening hours",
      "phoneLabel": "Phone & WhatsApp",
      "footerContact": "Contact",
      "credit": "Website by {credit}",
      "pageTitle": "Pretty Eye Ladies Salon · Beauty salon in Al Karama, Dubai",
      "metaDescription": "Ladies beauty salon at Karama Commercial Complex, Al Karama, Dubai: haircuts, blow dry, hair spa, facials, threading, manicure, pedicure, nails and saree draping. Open every day. Rated 4.5 on Google.",
      "demoBanner": "Demo preview – made for Pretty Eye Ladies Salon. Not the official website yet.",
      "brandName": "Pretty Eye",
      "brandSub": "Ladies Salon · Al Karama",
      "waMessage": "Hello Pretty Eye, I found you on your website and I'd like to ask about your services.",
      "waMessageAbout": "Hello Pretty Eye, I found you on your website and I'd like to ask about {service}.",
      "waAria": "Message Pretty Eye Ladies Salon on WhatsApp",
      "heroEyebrow": "Ladies Salon · Al Karama",
      "heroTitle": [
        "A little time",
        "just for you."
      ],
      "heroSub": "Hair, facials, threading, nails, manicure and pedicure, and saree draping at Karama Commercial Complex. Open every day.",
      "heroPlace": "Karama Commercial Complex, 16th Street",
      "heroCaption": "Ladies only · Al Karama",
      "stripServices": "Hair · Facials · Threading · Manicure & pedicure · Nails · Saree draping",
      "groups": {
        "daily": "Every day"
      },
      "groupsShort": {
        "daily": "Daily"
      },
      "servicesTitle": "Hair, face and nails.",
      "servicesIntro": "Tap any service to ask us about it on WhatsApp.",
      "howTitle": "Easy as one, two, three.",
      "steps": [
        {
          "title": "Message us on WhatsApp",
          "text": "Ask about any service, or about prices."
        },
        {
          "title": "Visit the salon",
          "text": "Find us at Karama Commercial Complex, 16th Street."
        },
        {
          "title": "Relax",
          "text": "Sit back for your hair, facial, threading or nails."
        }
      ],
      "reviewsTitle": "Kind words from our ladies.",
      "visitTitle": "Come and see us.",
      "addressLines": [
        "Karama Commercial Complex",
        "37 16th Street, Al Karama",
        "Dubai"
      ],
      "mapTitle": "Map showing Pretty Eye Ladies Salon at Karama Commercial Complex, Al Karama, Dubai",
      "ctaTitle": "Ready for some pampering?",
      "ctaSub": "Send us a message on WhatsApp, or call the salon.",
      "footerName": "Pretty Eye Ladies Salon",
      "footerTag": "Ladies beauty salon in Al Karama, Dubai."
    },
    "ar": {
      "skip": "انتقل إلى المحتوى",
      "navLabel": "القائمة الرئيسية",
      "navServices": "الخدمات",
      "navHow": "كيف نعمل",
      "navReviews": "التقييمات",
      "navVisit": "الموقع",
      "langLabel": "اللغة",
      "waCta": "راسلينا عبر واتساب",
      "waShort": "واتساب",
      "callCta": "اتصلي بالصالون",
      "directions": "احصلي على الاتجاهات",
      "newTab": "(يفتح في نافذة جديدة)",
      "ratingLine": "{rating} على جوجل · {count} تقييمًا",
      "statusOpen": "مفتوح الآن · حتى {time}",
      "statusOpensToday": "مغلق الآن · يفتح اليوم الساعة {time}",
      "statusReopens": "مغلق الآن · يعيد الفتح اليوم الساعة {time}",
      "closed": "مغلق",
      "midnight": "منتصف الليل",
      "statusOpensTomorrow": "مغلق الآن · يفتح غدًا الساعة {time}",
      "statusOpensLater": "مغلق الآن · يفتح يوم {day} الساعة {time}",
      "am": "صباحًا",
      "pm": "مساءً",
      "days": [
        "الأحد",
        "الاثنين",
        "الثلاثاء",
        "الأربعاء",
        "الخميس",
        "الجمعة",
        "السبت"
      ],
      "today": "اليوم",
      "stripAria": "معلومات سريعة",
      "stripServicesLabel": "الخدمات",
      "stripHoursLabel": "ساعات العمل",
      "stripRatingLabel": "التقييم على جوجل",
      "stripRating": "{rating} من 5 · {count} تقييمًا",
      "servicesKicker": "الخدمات",
      "quoteCta": "اسألي عبر واتساب",
      "quoteNote": "الأسعار غير معروضة على الموقع. راسلينا عبر واتساب لمعرفة الأسعار.",
      "howKicker": "كيف نعمل",
      "reviewsKicker": "التقييمات",
      "basedOn": "{count} تقييمًا على جوجل",
      "reviewLabel": "تقييم من جوجل",
      "readMore": "اقرأ المزيد على جوجل",
      "visitKicker": "زورونا",
      "addressLabel": "العنوان",
      "hoursLabel": "ساعات العمل",
      "phoneLabel": "الهاتف وواتساب",
      "footerContact": "تواصل معنا",
      "credit": "تصميم الموقع: {credit}",
      "pageTitle": "صالون بريتي آي للسيدات · صالون تجميل في الكرامة، دبي",
      "metaDescription": "صالون تجميل للسيدات في مجمع الكرامة التجاري، الكرامة، دبي: قص الشعر، السشوار، سبا الشعر، تنظيف البشرة، الخيط، مانيكير وباديكير، الأظافر ولف الساري. مفتوح يوميًا. تقييم 4.5 على جوجل.",
      "demoBanner": "نسخة تجريبية – صُممت خصيصًا لصالون بريتي آي للسيدات. ليست الموقع الرسمي بعد.",
      "brandName": "بريتي آي",
      "brandSub": "صالون للسيدات · الكرامة",
      "waMessage": "مرحبًا بريتي آي، وجدتكم عبر موقعكم الإلكتروني وأودّ الاستفسار عن خدماتكم.",
      "waMessageAbout": "مرحبًا بريتي آي، وجدتكم عبر موقعكم الإلكتروني وأودّ الاستفسار عن {service}.",
      "waAria": "راسلي صالون بريتي آي للسيدات عبر واتساب",
      "heroEyebrow": "صالون للسيدات · الكرامة",
      "heroTitle": [
        "وقت صغير",
        "لكِ أنتِ."
      ],
      "heroSub": "الشعر، تنظيف البشرة، الخيط، الأظافر، مانيكير وباديكير، ولف الساري في مجمع الكرامة التجاري. مفتوح يوميًا.",
      "heroPlace": "مجمع الكرامة التجاري، شارع 16",
      "heroCaption": "للسيدات فقط · الكرامة",
      "stripServices": "الشعر · البشرة · الخيط · مانيكير وباديكير · الأظافر · لف الساري",
      "groups": {
        "daily": "كل يوم"
      },
      "groupsShort": {
        "daily": "يوميًا"
      },
      "servicesTitle": "الشعر والبشرة والأظافر.",
      "servicesIntro": "اضغطي على أي خدمة لتسألينا عنها عبر واتساب.",
      "howTitle": "بثلاث خطوات سهلة.",
      "steps": [
        {
          "title": "راسلينا عبر واتساب",
          "text": "اسألي عن أي خدمة أو عن الأسعار."
        },
        {
          "title": "زوري الصالون",
          "text": "تجديننا في مجمع الكرامة التجاري، شارع 16."
        },
        {
          "title": "استرخي",
          "text": "تفضّلي لشعرك أو تنظيف بشرتك أو الخيط أو أظافرك."
        }
      ],
      "reviewsTitle": "كلمات لطيفة من عميلاتنا.",
      "visitTitle": "تفضّلي بزيارتنا.",
      "addressLines": [
        "مجمع الكرامة التجاري",
        "37 شارع 16، الكرامة",
        "دبي"
      ],
      "mapTitle": "خريطة توضح موقع صالون بريتي آي للسيدات في مجمع الكرامة التجاري، الكرامة، دبي",
      "ctaTitle": "مستعدة لبعض الدلال؟",
      "ctaSub": "أرسلي لنا رسالة عبر واتساب، أو اتصلي بالصالون.",
      "footerName": "صالون بريتي آي للسيدات",
      "footerTag": "صالون تجميل للسيدات في الكرامة، دبي."
    }
  }
};

/* =====================================================================
   SITE LOGIC — no need to edit below this line.
   ===================================================================== */
(function () {
  "use strict";

  const LANG_KEY = "site-lang";
  const root = document.documentElement;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let lang = "en";

  try {
    const saved = localStorage.getItem(LANG_KEY);
    if (saved === "en" || saved === "ar") lang = saved;
  } catch (e) { /* storage unavailable — default to English */ }

  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
  const t = () => SHOP.text[lang];

  function fmt(str, extra) {
    let out = String(str)
      .replace(/\{rating\}/g, SHOP.rating.value)
      .replace(/\{count\}/g, SHOP.rating.count)
      .replace(/\{credit\}/g, SHOP.credit)
      .replace(/\{name\}/g, SHOP.name);
    if (extra) for (const [k, v] of Object.entries(extra)) out = out.split("{" + k + "}").join(v);
    return out;
  }

  function el(tag, attrs, children) {
    const node = document.createElement(tag);
    if (attrs) {
      for (const [k, v] of Object.entries(attrs)) {
        if (v === null || v === undefined || v === false) continue;
        if (k === "class") node.className = v;
        else if (k === "text") node.textContent = v;
        else node.setAttribute(k, v === true ? "" : v);
      }
    }
    (children || []).forEach((c) => node.append(c));
    return node;
  }

  function useIcon(id, size) {
    const s = size || 20;
    const span = el("span", { class: "icon", "aria-hidden": "true" });
    span.innerHTML = '<svg viewBox="0 0 24 24" width="' + s + '" height="' + s + '"><use href="#' + id + '"/></svg>';
    return span;
  }

  function stars(value) {
    const wrap = el("span", { class: "stars", "aria-hidden": "true" });
    const full = Math.round(parseFloat(value));
    for (let i = 0; i < 5; i++) {
      wrap.insertAdjacentHTML("beforeend",
        '<svg viewBox="0 0 20 20" width="16" height="16"><path d="M10 1.8l2.5 5.3 5.8.7-4.3 4 1.1 5.7L10 14.7l-5.1 2.8L6 11.8 1.7 7.8l5.8-.7Z" ' +
        (i < full ? 'fill="currentColor"' : 'fill="none" stroke="currentColor" stroke-width="1.3"') + "/></svg>");
    }
    return wrap;
  }

  const ltr = (text) => el("span", { dir: "ltr", class: "ltr num", text });

  /* ---------- WhatsApp links ---------- */
  function waUrl(service) {
    const tx = t();
    const msg = service ? fmt(tx.waMessageAbout, { service }) : tx.waMessage;
    return "https://wa.me/" + SHOP.whatsappNumber + "?text=" + encodeURIComponent(msg);
  }

  /* ---------- Hours + open / closed badge (shop time zone) ---------- */
  const toMin = (hhmm) => { const [h, m] = hhmm.split(":").map(Number); return h * 60 + m; };
  // A day is null (closed), one range ["HH:MM","HH:MM"], or several ranges [["09:30","14:00"],["17:00","22:30"]].
  // "24:00" = closes at midnight.
  const rangesOf = (day) => { const h = SHOP.hours[day]; if (!h) return []; return typeof h[0] === "string" ? [h] : h; };

  function timeLabel(hhmm) {
    const tx = t();
    const [h, m] = hhmm.split(":").map(Number);
    const hh = h % 24;
    if (hh === 0 && m === 0 && tx.midnight) return tx.midnight;
    const h12 = hh % 12 === 0 ? 12 : hh % 12;
    return h12 + (m ? ":" + String(m).padStart(2, "0") : "") + " " + (hh < 12 ? tx.am : tx.pm);
  }

  function nowInShopTZ() {
    const parts = new Intl.DateTimeFormat("en-US", {
      timeZone: SHOP.timeZone, weekday: "short", hour: "2-digit", minute: "2-digit", hourCycle: "h23",
    }).formatToParts(new Date());
    const get = (type) => parts.find((p) => p.type === type).value;
    const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(get("weekday"));
    return { day, min: Number(get("hour")) * 60 + Number(get("minute")) };
  }

  function shopStatus() {
    const now = nowInShopTZ();
    const today = rangesOf(now.day);
    const cur = today.find((r) => now.min >= toMin(r[0]) && now.min < toMin(r[1]));
    if (cur) return { open: true, key: "statusOpen", time: cur[1], day: now.day };
    const next = today.find((r) => now.min < toMin(r[0]));
    if (next) {
      const onBreak = today.some((r) => now.min >= toMin(r[1]));
      return { open: false, key: onBreak ? "statusReopens" : "statusOpensToday", time: next[0], day: now.day };
    }
    for (let i = 1; i <= 7; i++) {
      const d = (now.day + i) % 7;
      const r = rangesOf(d);
      if (r.length) {
        return { open: false, key: i === 1 ? "statusOpensTomorrow" : "statusOpensLater", time: r[0][0], day: d };
      }
    }
    return { open: false, key: "statusOpensToday", time: "00:00", day: now.day };
  }

  function rangeLabels(day) {
    const r = rangesOf(day);
    return r.length ? r.map((h) => timeLabel(h[0]) + " – " + timeLabel(h[1])) : [t().closed];
  }

  function renderStatus() {
    const tx = t();
    const s = shopStatus();
    const text = fmt(tx[s.key], { time: timeLabel(s.time), day: tx.days[s.day] });
    $$(".js-status").forEach((node) => {
      node.dataset.state = s.open ? "open" : "closed";
      $(".status-text", node).textContent = text;
    });
    const today = nowInShopTZ().day;
    $$(".js-hours tr").forEach((row) => {
      const isToday = row.dataset.days.split(",").map(Number).includes(today);
      row.classList.toggle("is-today", isToday);
      const flag = $(".today-flag", row);
      if (flag) flag.hidden = !isToday;
    });
  }

  const ltrIfEn = (text) => (lang === "ar" ? document.createTextNode(text) : ltr(text));

  function renderHours() {
    const tx = t();
    $(".js-hours").replaceChildren(el("tbody", null, SHOP.hoursGroups.map((g) => el("tr", { "data-days": g.days.join(",") }, [
      el("th", { scope: "row" }, [
        document.createTextNode(tx.groups[g.key] + " "),
        el("span", { class: "today-flag", text: tx.today, hidden: true }),
      ]),
      el("td", null, rangeLabels(g.days[0]).map((l) => el("span", { class: "range" }, [ltrIfEn(l)]))),
    ]))));
    $(".js-strip-hours").replaceChildren(...SHOP.hoursGroups.map((g) =>
      el("span", { class: "strip-line" }, [document.createTextNode(tx.groupsShort[g.key] + " "),
        ...rangeLabels(g.days[0]).flatMap((l, i) => (i ? [document.createTextNode(", "), ltrIfEn(l)] : [ltrIfEn(l)]))])));
  }

  /* ---------- Render ---------- */
  function renderText() {
    const tx = t();
    $$("[data-t]").forEach((node) => { if (tx[node.dataset.t] !== undefined) node.textContent = fmt(tx[node.dataset.t]); });
    $$("[data-shop]").forEach((node) => { node.textContent = SHOP[node.dataset.shop]; });
    $$("[data-t-aria]").forEach((node) => { node.setAttribute("aria-label", fmt(tx[node.dataset.tAria])); });

    $$(".js-tel").forEach((a) => { a.href = SHOP.phoneHref; });
    $$(".js-wa").forEach((a) => { a.href = waUrl(); a.target = "_blank"; a.rel = "noopener"; });
    $$(".js-dir").forEach((a) => { a.href = SHOP.directionsUrl; a.target = "_blank"; a.rel = "noopener"; });
    $$(".js-reviews").forEach((a) => { a.href = SHOP.reviewsUrl; a.target = "_blank"; a.rel = "noopener"; });
    $$(".js-newtab").forEach((n) => { n.textContent = " " + tx.newTab; });
    $$(".js-phone").forEach((n) => { n.replaceChildren(ltr(SHOP.phoneDisplay)); });

    document.title = tx.pageTitle;
    const md = $('meta[name="description"]');
    if (md) md.setAttribute("content", tx.metaDescription);

    const banner = $(".demo-banner");
    if (banner) banner.hidden = !SHOP.showDemoBanner;

    // Hero headline: one line per entry, last line in the accent style.
    const h1 = $(".js-hero-title");
    h1.replaceChildren(...tx.heroTitle.map((line, i) =>
      el("span", { class: "line" + (i === tx.heroTitle.length - 1 ? " accent" : ""), style: "--i:" + i, text: line + " " })));

    // Rating
    $$(".js-rating").forEach((a) => {
      a.replaceChildren(stars(SHOP.rating.value), el("span", { text: fmt(tx.ratingLine) }), el("span", { class: "visually-hidden js-newtab", text: " " + tx.newTab }));
    });
    $$(".js-stars").forEach((n) => n.replaceChildren(stars(SHOP.rating.value)));
    $$(".js-score").forEach((n) => { n.textContent = SHOP.rating.value; });

    // Image slots
    $$(".js-img").forEach((img) => {
      const slot = SHOP.images[img.dataset.img];
      if (img.getAttribute("src") !== slot.src) img.src = slot.src;
      img.alt = slot[lang];
    });

    // Services
    const other = lang === "ar" ? "en" : "ar";
    $(".js-services").replaceChildren(...SHOP.services.map((s, i) => el("li", { class: "service reveal", style: "--d:" + (i % 3) * 80 + "ms" }, [
      el("div", { class: "service-media" }, [
        el("img", { src: s.image, alt: s[lang].alt, width: 480, height: 600, loading: "lazy", decoding: "async" }),
      ]),
      el("div", { class: "service-body" }, [
        el("span", { class: "service-num", "aria-hidden": "true", text: String(i + 1).padStart(2, "0") }),
        el("h3", { class: "service-name", text: s[lang].name }),
        el("p", { class: "service-alt", lang: other, dir: other === "ar" ? "rtl" : "ltr", text: s[other].name }),
        el("p", { class: "service-desc", text: s[lang].desc }),
        el("a", { class: "service-link", href: waUrl(s[lang].ask), target: "_blank", rel: "noopener" }, [
          el("span", { text: tx.quoteCta }),
          el("span", { class: "visually-hidden", text: " – " + s[lang].name + " " + tx.newTab }),
          useIcon("i-arrow", 18),
        ]),
      ]),
    ])));

    // Steps
    $(".js-steps").replaceChildren(...tx.steps.map((s, i) => el("li", { class: "step reveal", style: "--d:" + i * 90 + "ms" }, [
      el("div", { class: "step-mark" }, [el("span", { class: "step-num", text: String(i + 1) }), stepIcon(SHOP.stepIcons[i])]),
      el("h3", { text: s.title }),
      el("p", { text: s.text }),
    ])));

    // Reviews (kept in English — real quotes)
    $(".js-reviews-list").replaceChildren(...SHOP.reviews.map((r, i) => el("li", { class: "review reveal", style: "--d:" + i * 90 + "ms" }, [
      el("figure", null, [
        quoteMark(),
        el("blockquote", { lang: "en", dir: "ltr" }, [el("p", { text: r })]),
        el("figcaption", { text: tx.reviewLabel }),
      ]),
    ])));

    $$(".js-address").forEach((n) => n.replaceChildren(...tx.addressLines.map((l) => el("span", { text: l }))));
    renderHours();

    const map = $(".js-map");
    if (!map.getAttribute("src")) map.setAttribute("src", SHOP.mapEmbedUrl);
    map.title = tx.mapTitle;

    $(".js-year").textContent = new Date().getFullYear();
    $$("[data-lang]").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));

    renderStatus();
    observeReveals();
  }

  function stepIcon(id) {
    const s = el("span", { class: "step-icon", "aria-hidden": "true" });
    s.innerHTML = '<svg viewBox="0 0 24 24" width="22" height="22"><use href="#' + id + '"/></svg>';
    return s;
  }

  function quoteMark() {
    const s = el("span", { class: "quote-mark", "aria-hidden": "true" });
    s.innerHTML = '<svg viewBox="0 0 48 36" width="36" height="27"><path fill="currentColor" d="M0 36V22.4C0 9.6 6.2 2.2 18.6 0l2 4.6C13.8 6.6 10.6 10.4 10.2 16H19v20Zm27 0V22.4C27 9.6 33.2 2.2 45.6 0l2 4.6C40.8 6.6 37.6 10.4 37.2 16H46v20Z"/></svg>';
    return s;
  }

  function applyLang(next, persist) {
    lang = next;
    root.lang = next;
    root.dir = next === "ar" ? "rtl" : "ltr";
    renderText();
    if (persist) { try { localStorage.setItem(LANG_KEY, next); } catch (e) { /* ignore */ } }
  }

  /* ---------- Structured data (built from SHOP) ---------- */
  function addJsonLd() {
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const data = {
      "@context": "https://schema.org",
      "@type": SHOP.schemaType,
      name: SHOP.name,
      url: SHOP.siteUrl,
      image: SHOP.siteUrl + "images/og-image.jpg",
      logo: SHOP.siteUrl + "images/logo.svg",
      telephone: SHOP.phoneIntl,
      address: {
        "@type": "PostalAddress",
        streetAddress: SHOP.address.street,
        addressLocality: SHOP.address.city,
        addressCountry: SHOP.address.country,
      },
      hasMap: SHOP.directionsUrl,
      openingHoursSpecification: SHOP.hoursGroups.flatMap((g) => rangesOf(g.days[0]).map((r) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: g.days.map((d) => dayNames[d]),
        opens: r[0],
        closes: r[1] === "24:00" ? "23:59" : r[1],
      }))),
      aggregateRating: { "@type": "AggregateRating", ratingValue: SHOP.rating.value, bestRating: "5", reviewCount: String(SHOP.rating.count) },
      makesOffer: SHOP.services.map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s.en.name } })),
    };
    document.head.append(el("script", { type: "application/ld+json", text: JSON.stringify(data) }));
  }

  /* ---------- Motion: reveal on scroll ---------- */
  let io = null;
  function observeReveals() {
    if (reduceMotion || !("IntersectionObserver" in window)) {
      $$(".reveal").forEach((n) => n.classList.add("is-in"));
      return;
    }
    if (!io) {
      io = new IntersectionObserver((entries) => {
        entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); } });
      }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    }
    $$(".reveal:not(.is-in)").forEach((n) => io.observe(n));
  }

  /* ---------- Sticky header compacts on scroll ---------- */
  const header = $(".site-header");
  let ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => { header.classList.toggle("is-compact", window.scrollY > 24); ticking = false; });
  }

  /* ---------- Init ---------- */
  if (!reduceMotion) root.classList.add("motion");
  applyLang(lang, false);
  addJsonLd();
  $$("[data-lang]").forEach((b) => b.addEventListener("click", () => { if (b.dataset.lang !== lang) applyLang(b.dataset.lang, true); }));
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  setInterval(renderStatus, 60 * 1000);
})();
