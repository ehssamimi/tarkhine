import {
  AboutItems,
  BannerSliderItems,
  BranchParams,
  CategoryItems,
  HeaderLinks,
  HelpLinksItems,
  MobileLinks,
  ProfileLinks,
  Question,
} from "@/types/type.d";

export const headerLinks: HeaderLinks[] = [
  { _id: 1, type: "link", href: "/", title: "صفحه اصلی" },
  {
    _id: 2,
    title: "شعبه",
    dropDownItems: [
      { _id: 1, type: "link", href: "/branch/etkbatan", title: "اکباتان" },
      { _id: 2, type: "link", href: "/branch/chalos", title: "چالوس" },
      { _id: 3, type: "link", href: "/branch/aghdasie", title: "اقدسیه" },
      { _id: 4, type: "link", href: "/branch/vanak", title: "ونک" },
    ],
  },
  {
    _id: 3,
    title: "منو",
    dropDownItems: [
      {
        _id: 1,
        type: "link",
        href: "/food?filter=mainfood",
        title: "غذای اصلی",
      },
      {
        _id: 2,
        type: "link",
        href: "/food?filter=appetizer",
        title: "پیش غذا",
      },
      { _id: 3, type: "link", href: "/food?filter=dessert", title: "دسر" },
      {
        _id: 4,
        type: "link",
        href: "/food?filter=beverages",
        title: "نوشیدنی",
      },
    ],
  },
  { _id: 4, type: "link", href: "/franchise", title: "اعطای نمایندگی" },
  { _id: 4, type: "link", href: "/about", title: "درباره ی ما" },
  { _id: 5, type: "link", href: "/contact", title: "تماس با ما" },
];

export const profileLinks: ProfileLinks[] = [
  {
    _id: 1,
    title: "پروفایل",
    href: "/profile/info",
    type: "link",
    value: "profile",
    icon: true,
  },
  {
    _id: 2,
    title: "پیگیری سفارش",
    href: "/profile/orders",
    type: "link",
    value: "orders",
    icon: true,
  },
  {
    _id: 3,
    title: "علاقه مندی ها",
    href: "/profile/favorite",
    type: "link",
    value: "favorite",
    icon: true,
  },
  {
    _id: 4,
    title: "آدرس های من",
    href: "/profile/addresses",
    type: "link",
    value: "addresses",
    icon: true,
  },
  {
    _id: 5,
    title: "خروج از حساب",
    type: "logout",
    value: "logout",
    icon: true,
  },
];

export const mobileLinks: MobileLinks[] = [
  {
    _id: 1,
    title: "صفحه اصلی",
    value: "home page",
    icon: true,
    type: "link",
    href: "/",
  },
  {
    _id: 2,
    title: "منو",
    value: "menu",
    icon: true,
    type: "filter",
    accordionItems: [
      {
        _id: 1,
        type: "link",
        href: "/food?filter=mainfood",
        title: "غذای اصلی",
      },
      {
        _id: 2,
        type: "link",
        href: "/food?filter=appetizer",
        title: "پیش غذا",
      },
      { _id: 3, type: "link", href: "/food?filter=dessert", title: "دسر" },
      {
        _id: 4,
        type: "link",
        href: "/food?filter=beverages",
        title: "نوشیدنی",
      },
    ],
  },
  {
    _id: 3,
    title: "شعبه",
    value: "branch",
    icon: true,
    type: "filter",
    accordionItems: [
      { _id: 1, title: "اکباتان", type: "link", href: "/branch/etkbatan" },
      { _id: 2, title: "چالوس", type: "link", href: "/branch/chalos" },
      { _id: 3, title: "اقدسیه", type: "link", href: "/branch/aghdasie" },
      { _id: 4, title: "ونک", type: "link", href: "/branch/vanak" },
    ],
  },
  {
    _id: 4,
    title: "درباره ما",
    icon: true,
    type: "link",
    href: "/about",
    value: "about",
  },
  {
    _id: 5,
    title: "تماس با ما",
    icon: true,
    type: "link",
    href: "/contact",
    value: "contact",
  },
];

export const bannerSliderItems: BannerSliderItems[] = [
  {
    _id: 1,
    picture: "/assets/images/Slider-image1.jpg",
    title: "تجربه غذای سالم و گیاهی به سبک ترخینه",
    buttonText: "سفارش غذا",
    href: "/foods",
  },
  {
    _id: 2,
    picture: "/assets/images/Slider-image2.jpg",
    title: "سرسبزی تریخینه دلیل حس خوب شماست!",
    buttonText: "سفارش غذا",
    href: "/foods",
  },
  {
    _id: 3,
    picture: "/assets/images/Slider-image3.jpg",
    title: "لذت غذای سالم و گیاهی را با ترخینه تجربه کنید!",
    buttonText: "سفارش غذا",
    href: "/foods",
  },
];

export const categoryItems: CategoryItems[] = [
  {
    _id: 1,
    pitcture: "/assets/images/ct-1.png",
    href: "/food?category=nooshidani",
    title: "نوشیدنی",
  },
  {
    _id: 2,
    pitcture: "/assets/images/ct-2.png",
    href: "/food?category=deser",
    title: "دسر",
  },
  {
    _id: 3,
    pitcture: "/assets/images/ct-3.png",
    href: "/food?category=pishghaza",
    title: "پیش غذا",
  },
  {
    _id: 4,
    pitcture: "/assets/images/ct-4.png",
    href: "/food?category=mainfood",
    title: "غذای اصلی",
  },
];

export const branchList: BranchParams[] = [
  {
    _id: 1,
    title: "شعبه اکباتان",
    address: "شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبقه سوم",
    thumbnail: "/assets/images/branch-1.png",
    href: "/branch/ekbatan",
    phoneOne: "021-54891254",
    phoneTwo: "021-54891255",
    workTime: "همه روزه از ساعت 12 تا 23 بجز روز های تعطیل",
    slideImages: [
      { _id: 1, picture: "/assets/images/res-slide-1.jpg" },
      { _id: 2, picture: "/assets/images/res-slide-2.jpg" },
      { _id: 2, picture: "/assets/images/res-slide-3.jpg" },
      { _id: 3, picture: "/assets/images/res-slide-4.jpg" },
    ],
  },
  {
    _id: 2,
    title: "شعبه چالوس",
    address:
      "چالوس، خیابان ۱۷ شهریور، بعد کوچه کوروش، جنب داروخانه دکتر میلانی",
    thumbnail: "/assets/images/branch-2.png",
    href: "/branch/chalos",
    phoneOne: "021-54891254",
    phoneTwo: "021-54891255",
    workTime: "همه روزه از ساعت 12 تا 23 بجز روز های تعطیل",
    slideImages: [
      { _id: 1, picture: "/assets/images/res-slide-1.jpg" },
      { _id: 2, picture: "/assets/images/res-slide-2.jpg" },
      { _id: 2, picture: "/assets/images/res-slide-3.jpg" },
      { _id: 3, picture: "/assets/images/res-slide-4.jpg" },
    ],
  },
  {
    _id: 3,
    title: "شعبه اقدسیه",
    address: "خیابان اقدسیه ، نرسیده به میدان خیام، پلاک ۸",
    thumbnail: "/assets/images/branch-3.png",
    href: "/branch/ahdasie",
    phoneOne: "021-54891254",
    phoneTwo: "021-54891255",
    workTime: "همه روزه از ساعت 12 تا 23 بجز روز های تعطیل",
    slideImages: [
      { _id: 1, picture: "/assets/images/res-slide-1.jpg" },
      { _id: 2, picture: "/assets/images/res-slide-2.jpg" },
      { _id: 2, picture: "/assets/images/res-slide-3.jpg" },
      { _id: 3, picture: "/assets/images/res-slide-4.jpg" },
    ],
  },
  {
    _id: 4,
    title: "شعبه ونک",
    address: "میدان ونک، خیابان فردوسی، نبش کوچه نیلوفر، پلاک ۲۶",
    thumbnail: "/assets/images/branch-4.png",
    href: "/branch/vanak",
    phoneOne: "021-54891254",
    phoneTwo: "021-54891255",
    workTime: "همه روزه از ساعت 12 تا 23 بجز روز های تعطیل",
    slideImages: [
      { _id: 1, picture: "/assets/images/res-slide-1.jpg" },
      { _id: 2, picture: "/assets/images/res-slide-2.jpg" },
      { _id: 2, picture: "/assets/images/res-slide-3.jpg" },
      { _id: 3, picture: "/assets/images/res-slide-4.jpg" },
    ],
  },
];

export const aboutItems: AboutItems[] = [
  { _id: 1, text: "پرسنلی مجرب و حرفه ای", icon: "user" },
  { _id: 2, text: "کیفیت بالای غذاها", icon: "chart" },
  { _id: 3, text: "محیطی دلنشین و آرام", icon: "home" },
  { _id: 4, text: "منوی متنوع", icon: "menu" },
];

export const helpLinksItems: HelpLinksItems[] = [
  { _id: 1, title: "سوالات متداول", href: "/faq" },
  { _id: 2, title: "قوانین ترخینه", href: "/tarkhine-rules" },
  { _id: 3, title: "حریم خصوصی", href: "/privacy" },
];

export const faqQuestionsList: Question[] = [
  {
    _id: 1,
    title: "ترخینه چه امکانات متفاوتی داره؟",
    content:
      "وبسایت سفارش غذای رستوران‌های زنجیره‌ای ترخینه با اتصال مستقیم به نرم افزار اتوماسیون شعبات رستوران، امکان اشتباهات هنگام ثبت سفارش آنلاین غذا و همچنین زمان مورد نیاز برای آماده سازی و تحویل آن را به حداقل ممکن می رسونه.",
  },
  {
    _id: 2,
    title: "چطور می تونم در ترخینه حساب کاربری ایجاد کنم؟",
    content:
      "خیلی ساده، پس از انتخاب غذای مورد علاقه تان از منوی رستوران، هنگام ثبت سفارش با وارد کردن شماره تلفن همراه یک پیامک حاوی کد تایید برای شما ارسال و با وارد کردن کد تایید، ثبت نام شما تکمیل می شه. یا می تونید در صفحه اصلی سایت روی گزینه ورود کلیک کنید.",
  },
  {
    _id: 3,
    title: "سابقه و لیست خریدهای قبلی ام رو کجا ببینم؟",
    content:
      "با ورود به حساب کاربری و کلیک روی گزینه سفارشات قبلی سابقه تمام خریدهای شما نمایش داده می شه.",
  },
  {
    _id: 4,
    title: "چه راه هایی برای پرداخت دارم؟",
    content:
      "هنگام ثبت سفارش غذا می تونید روش پرداخت دلخواه خودتون رو انتخاب کنید. آنلاین و یا نقدی در هنگام تحویل سفارش بصورت حضوری.",
  },
  {
    _id: 5,
    title:
      "آیا قیمت در منوی وبسایت ترخینه با قیمت منوی شعبات رستوران یکسان است؟",
    content:
      "بله. قیمت منوی وبسایت ترخینه دقیقا مطابق با قیمت منوی شعب رستوران  است و در صورت تغییر قیمت از طرف رستوران این تغییر در وبسایت ترخینه بلافاصله قابل مشاهده است.",
  },
  {
    _id: 6,
    title: "چطور می تونم از اعتبار هدیه و تخفیف استفاده کنم؟",
    content:
      "برای استفاده از کد تخفیف میتونید به سادگی کد رو در سبد خرید، در قسمت مشخص شده وارد کنید. اعتبار هدیه هنگام انتخاب روش پرداخت برای شما نمایش داده میشه و در صورت تمایل میتونید ازش استفاده کنید.",
  },
];

export const tarkhineRuleQuestionsList: Question[] = [
  {
    _id: 1,
    title: "حداقل سفارش",
    content:
      "حداقل سفارشات در رستوران‌های ترخینه، مبلغ ۵۰.۰۰۰ تومان است. برای ثبت، پردازش و ارسال سفارشات، باید حداقل، این مبلغ سفارش داده شود در غیر اینصورت سفارشات، ثبت نخواهد شد.",
  },
  {
    _id: 2,
    title: "فاصله تحویل",
    content:
      "ترخینه در ارسال سفارشات به نقاط دور محدودیت دارد و حداکثر فاصله از رستوران‌های زنجیره‌ای ترخینه برای ارسال کالا، ۶ کیلومتر است. لطفا قبل از ثبت سفارش، نزدیک‌ترین شعبه به محل ارسال را انتخاب کنید و از رعایت کردن حداکثر فاصله برای ارسال سفارشات اطمینان حاصل فرمایید.",
  },
  {
    _id: 3,
    title: "زمان تحویل",
    content:
      "جدول زمانی تخمینی تحویل در زمان ثبت سفارش به اطلاع شما خواهد رسید. این ممکن است تحت تأثیر عوامل زیادی مانند ترافیک، آب و هوا، دوره‌های شلوغ رستوران و غیره باشد، بنابراین در صورت تأخیر لطفا صبور باشید.",
  },
  {
    _id: 4,
    title: "گزینه‌های پرداخت",
    content:
      "ما گزینه‌های پرداخت مختلفی را می پذیریم، از جمله پرداخت اینترنتی، کارت‌های اعتباری یا پول نقد. لطفاً قبل از تکمیل سفارش، روش پرداختی را که ترجیح می دهید، تأیید کنید.",
  },
  {
    _id: 5,
    title: "دقت سفارش",
    content:
      "لطفاً قبل از ارسال، از دقیق بودن تمام جزئیات سفارش خود، از جمله موارد منو، دستورالعمل‌های خاص و  جزئیات سفارش خود اطمینان حاصل کنید تا اختلالی در فرایند پردازش و تحویل سفارشات شما ایجاد نشود و سفارشات شما در سریع‌ترین زمان ممکن به دست‌تان برسد.",
  },
  {
    _id: 6,
    title: "شرایط لغو سفارش",
    content:
      "شما می‌توانید با تماس مستقیم با هر شعبه از رستوران‌های زنجیره‌ای ترخینه، سفارش خود را لغو کنید. لطفا توجه داشته باشید که ممکن است محدودیت زمانی برای لغو وجود داشته باشد، زیرا ممکن است غذا از قبل آماده شده باشد و در اینصورت متاسفانه امکان لغو سفارش وجود ندارد.",
  },
  {
    _id: 7,
    title: "شرایط بازگشت سفارش",
    content:
      "اگر سفارش شما انتظارات شما را برآورده نمی کند، لطفاً بلافاصله از طریق تماس تلفنی با ما تماس بگیرید؛ ما در اسرع وقت به دنبال حل مشکل شما  خواهیم بود.",
  },
  {
    _id: 8,
    title: "تخفیفات",
    content:
      "هر‌گونه تخفیف یا برنامه‌های وفاداری ممکن است قوانین و شرایط خاصی داشته باشد که به وضوح در وب سایت مشخص می‌شود.",
  },
];

export const privacyQuestionsList: Question[] = [
  {
    _id: 1,
    title: "حریم خصوصی",
    content: `ترخینه متعهد می‌شود حریم خصوصی شما را حفظ کند و به آن احترام بگذارد. بخش «حریم خصوصی» روش‌های استفاده از اطلاعات شخصی کاربران در این وب سایت را شرح می‌دهد. اگر برای سفارش غذای خوب از خدمات ما استفاده می‌کنید، سیاست‌های حفظ حریم خصوصی وب‌سایت ترخینه، در مورد شما صدق می‌کند.
  پردازش و ارسال سفارش‌ها نیازمند اطلاعات دقیق کاربران است؛ برای این‌که بتوانیم خدمات مطلوب‌تری به شما ارائه دهیم، ممکن است به هنگام خرید، ثبت نظر و استفاده از برخی امکانات سایت، به اطلاعات شما نیاز داشته باشیم؛ هم‌چنین ترخینه برای ارتباط با مشتریان، بهبود رابط کاربری، بهینه‌سازی محتوا و تحقیقات بازاریابی، بایستی از اطلاعات کاربران خود استفاده کند. این در حالی است که اطلاع‌رسانی خدمات جدید و سرویس‌های ویژه یا پروموشن‌ها، اخبار و رویدادها با ارسال ایمیل یا پیامک به کاربران انجام می‌شود.`,
  },
  {
    _id: 2,
    title: "چه اطلاعاتی را گردآوری می‌کنیم؟",
    content: `
  اطلاعاتی که درباره‌ی شما گردآوری و نگه‌داری می‌کنیم، ممکن است شامل موارد زیر باشد:
نام و نام خانوادگی شما
شماره تلفن همراه
تاریخ تولد
نشانی‌های مورد نظر برای تحویل سفارش‌ها
اطلاعات دیگری که شما برای ما نوشته‌اید یا از راه‌های دیگر در اختیار ما قرار داده‌اید.`,
  },
  {
    _id: 3,
    title: "چگونه اطلاعات شما را گردآوری می‌کنیم؟",
    content: `از شما تقاضا خواهیم کرد اطلاعات خود را در اختیار ما قرار دهید؛ هنگامی‌که:به‌شکل کاربر مهمان غذا سفارش می‌دهید.
  در وب‌سایت ترخینه یک حساب کاربری ایجاد می‌کنید.
  در قسمت اعطای نمایندگی، فرم پر می‌کنید.`,
  },
  {
    _id: 4,
    title: "چرا به شماره تلفن شما نیاز داریم؟",
    content: `برای ثبت نام در وب‌سایت ترخینه باید نخست شماره موبایل خود را وارد کنید تا کد فعال‌سازی برای شما ارسال شود.
  شماره تلفن همراه شما نقش نام کاربری را ایفا می‌کند.
  ممکن است به هر دلیل رمز عبور خود را فراموش کنید؛ در این موقعیت، می‌توانید از تلفن همراه خود کد فعال‌سازی مجدد دریافت کنید.
  ممکن است برای آگاه کردن شما از اخبار و تغییرات جدید از شماره همراهتان استفاده کنیم؛ مانند، اطلاع‌رسانی از تغییر شیوه‌ی دسترسی شما به خدمات آنلاین ما، یا خدمات جدید و پیشنهادهای خاص.`,
  },
  {
    _id: 5,
    title: "فعالیت‌های مرورگر شما در هنگام بازدید از وب‌سایت ترخینه",
    content: `هنگامی‌که شما از وب‌سایت ترخینه استفاده می‌کنید، ما اطلاعاتی درباره‌ی فعالیت‌های شما گردآوری می‌کنیم که برخی از این اطلاعات عبارتند از:
  نشانی آی. پی. کامپیوتر شما (این نشانی یک شماره‌ی دیجیتالی ۱۲ رقمی منحصربه‌فرد است که برنامه‌های اینترنتی به‌وسیله‌ی آن کامپیوتر را شناسایی و با آن ارتباط برقرار می‌کنند).
  نوع مرورگری که شما استفاده می‌کنید (مرورگر برنامه‌ای است که شما برای دیدن وب‌سایت‌ها از آن استفاده می‌کنید؛ مانند Internet Explorer، Firefox، Safari، Google Chrome).
  زمانی‌که شما وارد وب‌سایت شده‌اید و مدت زمانی که از وب‌سایت استفاده کرده‌اید.
  URL مرجع شما (سایتی که شما برای دسترسی و ورود به وب‌سایت ما از آن استفاده کرده‌اید).
  ما با استفاده از این اطلاعات نمی‌توانیم شما را شناسایی کنیم، بلکه این اطلاعات را از تعداد بسیار بازدیدکنندگان سایت‌مان گردآوری و آن‌ها را تحلیل می‌کنیم؛ با استفاده از این اطلاعات، می‌توانیم بفهمیم که کابران چگونه از وب‌سایت ما استفاده می‌کنند و فهمیدن این موضوع به ما کمک می‌کند خدمات بهتری به آنان ارائه دهیم.`,
  },
  {
    _id: 6,
    title: "استفاده از کوکی‌ها و دستگاه‌های ذخیره‌سازی دیگر",
    content: `کوکی‌ها فایل‌های اطلاعاتی هستند که روی کامپیوتر شما ذخیره می‌شوند تا به وب‌سایت‌ها کمک کنند شما را به خاطر بیاورند. ما و همکاران‌مان، با استفاده از کوکی‌ها اطلاعاتی درباره شیوه‌ی استفاده شما از وب‌سایت‌مان گردآوری می‌کنیم؛ این اطلاعات ما را در بهبود رابط کاربری و محتوای سایت کمک خواهد کرد. شما نیز به وسیله‌ی ثبت و ذخیره‌سازی این کوکی‌ها، هنگام ورود مجدد به سایت، نیازی به ثبت مجدد نام کاربری و کلمه‌ی عبور نخواهید داشت. هم‌چنین ما به وسیله‌ی کوکی‌ها، آخرین وضعیت سفارش روز شما را ذخیره می‌کنیم تا شما بتوانید آن‌ها را در پروفایل خود مشاهده کنید.
  `,
  },
  {
    _id: 7,
    title: "اطلاعات بیشتر",
    content: `در مجموعه‌ی ترخینه، حفظ امنیت اطلاعات شخصی شما را امری بسیار جدی و مهم می‌دانیم و در وب‌سایت خود از سیاست‌های امنیتی و فناوری‌هایی استفاده می‌کنیم که برای محافظت از اطلاعات شخصی طراحی شده‌اند؛ هم‌چنین از روش‌ها و دستورالعمل‌های امنیتی سختی که قوانین حفظ حریم خصوصی کاربران به آن‌ها نیاز دارد، پیروی می‌کنیم. این روش‌های محافظتی ذخیره‌سازی، استفاده و انتشار همه‌ی اطلاعات شما را دربر می‌گیرد و از دسترسی و استفاده‌ی غیرمجاز از این اطلاعات جلوگیری می‌کند.`,
  },
];
