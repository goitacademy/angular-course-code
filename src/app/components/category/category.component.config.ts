export interface QuestionItem {
  id: number;
  question: string;
  answer?: string;
}

export interface MockDataStructure {
  angular?: QuestionItem[];
  typescript?: QuestionItem[];
  javascript?: QuestionItem[];
  rxjs?: QuestionItem[];
}

export const MOCK_DATA: MockDataStructure = {
  angular: [
    {
      id: 1,
      question: 'Що таке Angular?',
      answer:
        'Angular — це платформа і фреймворк для розробки динамічних веб-додатків на мові TypeScript, який підтримується командою Google. Angular забезпечує розробників інструментами та бібліотеками для створення масштабованих, підтримуваних і високопродуктивних веб-додатків. Основні можливості Angular включають декларативне програмування для створення користувацького інтерфейсу, двостороннє зв’язування даних для синхронізації між моделлю і представленням, потужну систему модулів для організації коду, підтримку форм і валідації, а також засоби для роботи з маршрутизацією та HTTP-запитами. Angular також інтегрується з іншими бібліотеками та фреймворками, що дозволяє розробникам використовувати найкращі інструменти для вирішення конкретних завдань.',
    },
    {
      id: 2,
      question: 'Як встановити Angular CLI?',
      answer:
        'Для встановлення Angular CLI, необхідно мати встановлений Node.js та npm (Node Package Manager). Після цього можна відкрити командний рядок і виконати команду npm install -g @angular/cli, яка встановить Angular CLI глобально на вашій системі. Це дозволить використовувати команду ng для створення нових проектів, генерації компонентів, сервісів, модулів та інших будівельних блоків, а також для запуску, тестування та збірки додатків. Angular CLI спрощує процес розробки, автоматизуючи рутинні завдання і забезпечуючи узгодженість коду.',
    },
    {
      id: 3,
      question: 'Що таке компонент в Angular?',
      answer:
        'Компонент в Angular — це основний будівельний блок додатку, який включає в себе HTML-шаблон, CSS-стилі та логіку на TypeScript. Кожен компонент відповідає за певну частину інтерфейсу і може містити вкладені компоненти. Компоненти визначаються за допомогою декоратора @Component, який вказує на шаблон і стилі компонента, а також інші метадані, такі як селектор і залежності. Компоненти інкапсулюють логіку і представлення, що дозволяє їх повторно використовувати в різних частинах додатку. Angular забезпечує потужний механізм зв’язування даних, що дозволяє автоматично оновлювати представлення при зміні даних у моделі.',
    },
    {
      id: 4,
      question: 'Як створити новий компонент в Angular?',
      answer:
        'Для створення нового компонента в Angular використовується Angular CLI. Відкрийте командний рядок і виконайте команду ng generate component component-name або скорочено ng g c component-name. Angular CLI створить новий каталог з чотирма файлами: HTML-шаблоном, CSS-стилями, TypeScript-класом і тестовим файлом для компонента. Компонент автоматично додається до найближчого модуля (наприклад, AppModule). Ви можете налаштувати компонент, додаючи власні стилі, логіку і залежності. Використання Angular CLI спрощує процес створення компонентів і забезпечує узгодженість структури проекту.',
    },
    {
      id: 5,
      question: 'Що таке модуль в Angular?',
      answer:
        'Модуль в Angular — це контейнер для групи пов’язаних компонентів, сервісів, директив і пайпів, які формують певну функціональність додатку. Основний модуль додатку називається AppModule. Модулі визначаються за допомогою декоратора @NgModule, який містить метадані про компоненти, сервіси, директиви, пайпи, а також імпортовані та експортовані модулі. Модулі дозволяють організувати додаток у логічні блоки, що покращує масштабованість, підтримуваність і зрозумілість проекту. Крім основного модуля, можна створювати фіче-модулі для розділення різних функціональних частин додатку, а також шерові модулі для спільного використання компонентів і сервісів у різних частинах додатку.',
    },
    { id: 6, question: 'Що таке директива в Angular?' },
    { id: 7, question: 'Що таке сервіс в Angular?' },
    { id: 8, question: 'Що таке двостороннє зв’язування даних?' },
    { id: 9, question: 'Що таке шаблон в Angular?' },
    { id: 10, question: 'Як працює маршрутизація в Angular?' },
    { id: 11, question: 'Як додати стиль до компонента в Angular?' },
    { id: 12, question: 'Що таке інтерполяція в Angular?' },
    { id: 13, question: 'Що таке *ngIf директива?' },
    { id: 14, question: 'Що таке *ngFor директива?' },
    { id: 15, question: 'Як відправити дані з одного компонента в інший?' },
    { id: 16, question: 'Що таке property binding в Angular?' },
    { id: 17, question: 'Що таке event binding в Angular?' },
    { id: 18, question: 'Що таке Angular CLI і як його використовувати?' },
    { id: 19, question: 'Що таке структурні директиви в Angular?' },
    { id: 20, question: 'Що таке Angular шаблонний синтаксис?' },
    { id: 21, question: 'Як створити форму в Angular?' },
    { id: 22, question: 'Як працює ngModel?' },
    { id: 23, question: 'Що таке валідація форм в Angular?' },
    { id: 24, question: 'Що таке life cycle hooks в Angular?' },
    { id: 25, question: 'Як працює Angular CLI?' },
    { id: 26, question: 'Що таке Standalone компонент в Angular?' },
    { id: 27, question: 'Як створити Standalone компонент?' },
    { id: 28, question: 'Які переваги використання Standalone компонентів?' },
    { id: 29, question: 'Що таке Deferrable Views?' },
    { id: 30, question: 'Як використовувати @defer в Angular?' },
    { id: 31, question: 'Які є тригери для @defer?' },
    { id: 32, question: 'Що таке синтаксис @if в Angular?' },
    { id: 33, question: 'Що таке синтаксис @for в Angular?' },
    { id: 34, question: 'Що таке синтаксис @switch в Angular?' },
    { id: 35, question: 'Як працює @defer (on viewport)?' },
    { id: 36, question: 'Що таке анімації в Angular?' },
    { id: 37, question: 'Як працює Dependency Injection в Angular?' },
    { id: 38, question: 'Що таке форми в Angular?' },
    { id: 39, question: 'Як працює реактивне програмування в Angular з RxJS?' },
    { id: 40, question: 'Що таке Change Detection в Angular?' },
    { id: 41, question: 'Що таке HttpClientModule і як його використовувати?' },
    { id: 42, question: 'Як реалізувати lazy loading в Angular?' },
    { id: 43, question: 'Що таке pipes в Angular і як їх створювати?' },
    { id: 44, question: 'Як працює роутинг в Angular?' },
    { id: 45, question: 'Що таке інтерцептори в Angular?' },
    { id: 46, question: 'Як реалізувати guard в Angular?' },
    { id: 47, question: 'Як налаштувати форми в Angular?' },
    { id: 48, question: 'Що таке Angular Material?' },
    { id: 49, question: 'Як працювати з Observables в Angular?' },
    { id: 50, question: 'Що таке шаблонні змінні в Angular?' },
    { id: 51, question: 'Як працює ViewChild і ContentChild?' },
    { id: 52, question: 'Як працювати з реактивними формами в Angular?' },
    { id: 53, question: 'Що таке ViewEncapsulation?' },
    { id: 54, question: 'Як налаштувати і використовувати Angular Router?' },
    { id: 55, question: 'Як працювати з @Input та @Output?' },
    { id: 56, question: 'Що таке модульні тести в Angular?' },
    {
      id: 57,
      question: 'Як використовувати Dependency Injection в компонентах?',
    },
    { id: 58, question: 'Що таке продовжувані оператори в RxJS?' },
    { id: 59, question: 'Як працює trackBy функція в ngFor?' },
    { id: 60, question: 'Що таке OnPush Change Detection Strategy?' },
    { id: 61, question: 'Як використовувати Router Guards?' },
    { id: 62, question: 'Що таке RouterLinkActive?' },
    { id: 63, question: 'Як працює Angular Service Worker?' },
    { id: 64, question: 'Що таке Angular Animations?' },
    {
      id: 65,
      question: 'Як налаштувати прогресивний веб-додаток (PWA) з Angular?',
    },
    { id: 66, question: 'Що таке Standalone сервіси?' },
    { id: 67, question: 'Як створити Standalone сервіси?' },
    { id: 68, question: 'Як використовувати @defer з @placeholder?' },
    { id: 69, question: 'Як використовувати @defer (on idle)?' },
    { id: 70, question: 'Що таке @defer (on timer)?' },
    {
      id: 71,
      question: 'Як використовувати синтаксис @if з множинними умовами?',
    },
    { id: 72, question: 'Що таке @switch (expression)?' },
    { id: 73, question: 'Як комбінувати @defer з @if?' },
    {
      id: 74,
      question:
        'Які переваги використання нового синтаксису if, for та switch?',
    },
    { id: 75, question: 'Як працює @defer з асинхронними даними?' },
    { id: 76, question: 'Як працює Angular Ivy?' },
    { id: 77, question: 'Що таке Renderer2 в Angular?' },
    { id: 78, question: 'Як оптимізувати продуктивність додатка на Angular?' },
    { id: 79, question: 'Як працювати з NgZone в Angular?' },
    {
      id: 80,
      question: 'Що таке Angular Universal і як його використовувати?',
    },
    { id: 81, question: 'Що таке Ahead-of-Time (AOT) компіляція?' },
    {
      id: 82,
      question:
        'Як налаштувати і використовувати серверний рендеринг з Angular Universal?',
    },
    { id: 83, question: 'Як працює ChangeDetectorRef?' },
    {
      id: 84,
      question: 'Як створювати та використовувати бібліотеки в Angular?',
    },
    { id: 85, question: 'Що таке платформи в Angular?' },
    { id: 86, question: 'Як працювати з Web Workers в Angular?' },
    { id: 87, question: 'Як реалізувати багатомовність в Angular додатку?' },
    {
      id: 88,
      question: 'Що таке Service Workers і як їх використовувати в Angular?',
    },
    { id: 89, question: 'Як працювати з інтерналізацією (i18n) в Angular?' },
    { id: 90, question: 'Як реалізувати Dynamic Components в Angular?' },
    { id: 91, question: 'Що таке ElementRef і як його використовувати?' },
    { id: 92, question: 'Як працювати з NgModules?' },
    { id: 93, question: 'Що таке Angular Schematics?' },
    {
      id: 94,
      question: 'Що таке Angular CDK?',
    },
    {
      id: 95,
      question:
        'Як використовувати Angular CDK для створення власних компонентів?',
    },
    {
      id: 96,
      question: 'Як реалізувати Drag-and-Drop за допомогою Angular CDK?',
    },
    {
      id: 97,
      question: 'Що таке Reactive Forms у Angular?',
    },
    {
      id: 98,
      question: 'Як працювати з Dynamic Forms у Angular?',
    },
    {
      id: 99,
      question: 'Що таке FormArray у Angular?',
    },
    {
      id: 100,
      question: 'Як налаштувати асинхронну валідацію форм у Angular?',
    },
    {
      id: 101,
      question: 'Як працює Virtual Scrolling у Angular CDK?',
    },
    {
      id: 102,
      question: 'Що таке Portal та PortalHost у Angular CDK?',
    },
    {
      id: 103,
      question: 'Як використовувати Tree компоненти з Angular CDK?',
    },
    {
      id: 104,
      question: 'Як налаштувати серверний рендеринг у Angular Universal?',
    },
    {
      id: 105,
      question: 'Що таке Hydration у Angular?',
    },
    {
      id: 106,
      question: 'Як працювати з новими lifecycle hooks у Angular Universal?',
    },
    {
      id: 107,
      question: 'Як використовувати Vite та ESBuild у нових проектах Angular?',
    },
    {
      id: 108,
      question: 'Як відлагоджувати Dependency Injection у Angular DevTools?',
    },
    {
      id: 109,
      question: 'Як використовувати Standalone API у Angular?',
    },
    {
      id: 110,
      question: 'Що таке Signal-based Components у Angular?',
    },
    {
      id: 111,
      question: 'Як використовувати новий синтаксис @if з Reactive Forms?',
    },
    {
      id: 112,
      question: 'Як оптимізувати продуктивність за допомогою @defer?',
    },
    {
      id: 113,
      question: 'Як реалізувати серверний рендеринг з Angular SSR?',
    },
    {
      id: 114,
      question: 'Що таке Prefetch у @defer?',
    },
    {
      id: 115,
      question: 'Як працювати з Vite та ESBuild у нових проектах Angular?',
    },
    {
      id: 116,
      question: 'Як використовувати новий синтаксис @switch з Angular?',
    },
    {
      id: 117,
      question: 'Як реалізувати Deferrable Views у великому Angular проекті?',
    },
    {
      id: 118,
      question: 'Як налаштувати Prefetch для покращення продуктивності?',
    },
    {
      id: 119,
      question: 'Що таке стабільні сигнали у Angular 17?',
    },
    {
      id: 120,
      question: 'Як використовувати Prefetch з @defer?',
    },
    {
      id: 121,
      question:
        'Як використовувати Standalone компоненти для спрощення архітектури?',
    },
    {
      id: 122,
      question:
        'Як реалізувати новий синтаксис @for для покращення продуктивності?',
    },
    {
      id: 123,
      question: 'Як працювати з новими Standalone API у Angular?',
    },
    {
      id: 124,
      question: 'Що таке Signal-based state management у Angular?',
    },
    {
      id: 125,
      question: 'Як використовувати новий синтаксис @if з асинхронними даними?',
    },
    {
      id: 126,
      question: 'Як реалізувати Prefetch з умовами @if у Angular?',
    },
  ],
  typescript: [
    {
      id: 1,
      question: 'Що таке TypeScript?',
      answer:
        'TypeScript — це надмножина JavaScript, яка додає статичну типізацію та інші можливості, такі як інтерфейси, дженеріки, модулі та підтримку сучасних функцій JavaScript. TypeScript компілюється у чистий JavaScript, що дозволяє виконувати код на будь-якій платформі, яка підтримує JavaScript. Основна мета TypeScript — поліпшення інструментів для розробників за рахунок надання потужної системи типів, що допомагає уникати помилок під час написання коду та покращує його зрозумілість.',
    },
    {
      id: 2,
      question: 'Яка основна різниця між TypeScript і JavaScript?',
      answer:
        'Основна різниця між TypeScript і JavaScript полягає в тому, що TypeScript додає статичну типізацію. У JavaScript типи визначаються динамічно під час виконання, тоді як у TypeScript типи визначаються на етапі розробки. Це дозволяє виявляти помилки на ранніх етапах і забезпечує кращу підтримку інструментів розробки, таких як автодоповнення та рефакторинг. Крім того, TypeScript підтримує сучасні функції JavaScript та надає додаткові можливості, такі як інтерфейси, дженеріки та декоратори.',
    },
    {
      id: 3,
      question: 'Як встановити TypeScript?',
      answer:
        'Для встановлення TypeScript необхідно мати встановлений Node.js та npm. Після цього можна відкрити командний рядок і виконати команду npm install -g typescript, яка встановить TypeScript глобально на вашій системі. Це дозволить використовувати команду tsc для компіляції TypeScript файлів у JavaScript. Також можна додати TypeScript як залежність у проекті, використовуючи команду npm install --save-dev typescript.',
    },
    {
      id: 4,
      question: 'Як компілювати TypeScript у JavaScript?',
      answer:
        'Для компіляції TypeScript у JavaScript використовується команда tsc, яка запускає компілятор TypeScript. Наприклад, щоб скомпілювати файл example.ts, виконайте команду tsc example.ts. Це створить файл example.js з скомпільованим кодом. Також можна налаштувати конфігураційний файл tsconfig.json, який містить параметри компіляції та перелік файлів для компіляції. Команда tsc без параметрів скомпілює всі файли, визначені у tsconfig.json.',
    },
    {
      id: 5,
      question: 'Що таке типи в TypeScript?',
      answer:
        'Типи в TypeScript — це визначення, які дозволяють вказати, які значення можуть бути присвоєні змінним, параметрам функцій або властивостям об’єктів. Основні типи включають примітивні типи (number, string, boolean), спеціальні типи (any, void, null, undefined), складені типи (arrays, tuples) та об’єктні типи (interfaces, classes). Використання типів допомагає уникати помилок, забезпечує автодоповнення і покращує документацію коду.',
    },
    { id: 6, question: 'Як оголосити змінну з типом у TypeScript?' },
    { id: 7, question: 'Що таке інтерфейс у TypeScript?' },
    { id: 8, question: 'Як створити інтерфейс у TypeScript?' },
    { id: 9, question: 'Що таке Union типи у TypeScript?' },
    { id: 10, question: 'Як використовувати тип any у TypeScript?' },
    { id: 11, question: 'Що таке Enum у TypeScript?' },
    { id: 12, question: 'Як використовувати Enum у TypeScript?' },
    { id: 13, question: 'Що таке tuple у TypeScript?' },
    { id: 14, question: 'Як оголосити та використовувати tuple?' },
    { id: 15, question: 'Що таке типи функцій у TypeScript?' },
    { id: 16, question: 'Як оголосити функцію з типом у TypeScript?' },
    { id: 17, question: 'Що таке Generics у TypeScript?' },
    { id: 18, question: 'Як використовувати Generics у TypeScript?' },
    { id: 19, question: 'Що таке void у TypeScript?' },
    { id: 20, question: 'Як використовувати тип void у TypeScript?' },
    { id: 21, question: 'Що таке never у TypeScript?' },
    { id: 22, question: 'Як використовувати тип never у TypeScript?' },
    { id: 23, question: 'Що таке типи масивів у TypeScript?' },
    {
      id: 24,
      question: 'Як оголосити та використовувати масиви у TypeScript?',
    },
    { id: 25, question: 'Що таке type assertion у TypeScript?' },

    // Середній рівень
    { id: 26, question: 'Що таке типова перевірка у TypeScript?' },
    { id: 27, question: "Як працює TypeScript з об'єктами?" },
    { id: 28, question: 'Що таке розширення інтерфейсу у TypeScript?' },
    { id: 29, question: 'Як реалізувати розширення інтерфейсу?' },
    { id: 30, question: 'Що таке перетин типів у TypeScript?' },
    { id: 31, question: 'Як реалізувати перетин типів?' },
    { id: 32, question: 'Що таке декларація простору імен у TypeScript?' },
    { id: 33, question: 'Як використовувати простори імен у TypeScript?' },
    { id: 34, question: 'Що таке модулі у TypeScript?' },
    { id: 35, question: 'Як експортувати та імпортувати модулі у TypeScript?' },
    { id: 36, question: 'Що таке декларація змінних у TypeScript?' },
    {
      id: 37,
      question: 'Як використовувати ключові слова let і const у TypeScript?',
    },
    { id: 38, question: 'Що таке клас у TypeScript?' },
    { id: 39, question: 'Як оголосити клас у TypeScript?' },
    { id: 40, question: 'Що таке конструктор у класі TypeScript?' },
    { id: 41, question: 'Як реалізувати конструктор у класі?' },
    { id: 42, question: 'Що таке методи класу у TypeScript?' },
    { id: 43, question: 'Як оголосити та використовувати методи класу?' },
    { id: 44, question: 'Що таке доступ до модифікаторів у TypeScript?' },
    {
      id: 45,
      question: 'Як використовувати приватні та публічні модифікатори доступу?',
    },
    { id: 46, question: 'Що таке статичні методи у TypeScript?' },
    { id: 47, question: 'Як оголосити та використовувати статичні методи?' },
    { id: 48, question: 'Що таке абстрактні класи у TypeScript?' },
    { id: 49, question: 'Як реалізувати абстрактні класи?' },
    { id: 50, question: 'Що таке інтерфейс для класів у TypeScript?' },
    { id: 51, question: 'Що таке декоратори у TypeScript?' },
    { id: 52, question: 'Як реалізувати декоратори класу?' },
    { id: 53, question: 'Що таке декоратори властивостей?' },
    { id: 54, question: 'Як реалізувати декоратори методів?' },
    { id: 55, question: 'Що таке метапрограмування у TypeScript?' },
    { id: 56, question: 'Як використовувати рефлексію у TypeScript?' },
    { id: 57, question: 'Що таке типи утиліт у TypeScript?' },
    {
      id: 58,
      question: 'Як використовувати типи утиліт (Pick, Omit, Partial)?',
    },
    { id: 59, question: 'Що таке Mapped Types у TypeScript?' },
    { id: 60, question: 'Як реалізувати Mapped Types?' },
    { id: 61, question: 'Що таке Conditional Types у TypeScript?' },
    { id: 62, question: 'Як використовувати Conditional Types?' },
    { id: 63, question: 'Що таке індексні типи у TypeScript?' },
    { id: 64, question: 'Як використовувати індексні типи?' },
    { id: 65, question: 'Що таке Template Literal Types?' },
    { id: 66, question: 'Як використовувати Template Literal Types?' },
    { id: 67, question: 'Що таке Type Guards у TypeScript?' },
    { id: 68, question: 'Як реалізувати Type Guards?' },
    { id: 69, question: 'Що таке Advanced Types у TypeScript?' },
    { id: 70, question: 'Як реалізувати Advanced Types?' },
  ],
  javascript: [
    {
      id: 1,
      question: 'Що таке JavaScript?',
      answer:
        'JavaScript — це мова програмування, яка використовується для створення динамічних і інтерактивних веб-сторінок. Спочатку розроблена як мова сценаріїв для браузерів, JavaScript тепер використовується і на сервері за допомогою середовища Node.js. JavaScript є мовою з динамічною типізацією і підтримує об’єктно-орієнтоване, імперативне та функціональне програмування. Вона дозволяє змінювати HTML та CSS, обробляти події, робити асинхронні запити до серверів та багато іншого, що робить її ключовою технологією у веб-розробці.',
    },
    {
      id: 2,
      question: 'Як оголосити змінну в JavaScript?',
      answer:
        'У JavaScript для оголошення змінних використовуються ключові слова var, let і const. var — це старий спосіб оголошення змінних, який має функціональну область видимості. let і const введені в ECMAScript 6 (ES6) і мають блочну область видимості. let використовується для змінних, значення яких може змінюватися, тоді як const для констант, значення яких не змінюється після ініціалізації. Рекомендується використовувати let і const замість var для більш зрозумілого і передбачуваного коду.',
    },
    {
      id: 3,
      question: 'Що таке функція в JavaScript?',
      answer:
        'Функція в JavaScript — це блок коду, який може бути викликаний за іменем і виконаний стільки разів, скільки потрібно. Функції дозволяють структурувати код, робити його більш організованим і повторно використовуваним. Функції можуть приймати аргументи і повертати значення. В JavaScript функції є об’єктами першого класу, тобто їх можна передавати як аргументи іншим функціям, повертати з функцій і призначати змінним. Існують різні способи оголошення функцій, включаючи функціональні вирази та стрілкові функції (arrow functions), введені в ES6.',
    },
    {
      id: 4,
      question: 'Як оголосити функцію в JavaScript?',
      answer:
        'Функцію в JavaScript можна оголосити кількома способами. Найпоширеніший спосіб — це використання ключового слова function. Також можна використовувати функціональні вирази або стрілкові функції (arrow functions), введені в ECMAScript 6 (ES6). Кожен з цих способів має свої особливості, але всі вони дозволяють створювати і викликати функції у вашому коді.',
    },
    {
      id: 5,
      question: 'Що таке масив в JavaScript?',
      answer:
        'Масив в JavaScript — це структура даних, яка дозволяє зберігати впорядковані колекції значень. Масиви можуть містити значення будь-яких типів, включаючи інші масиви, і дозволяють доступ до елементів за індексами, починаючи з нуля. Масиви є об’єктами в JavaScript і мають вбудовані методи для маніпуляції даними, такі як push, pop, shift, unshift, slice, splice, forEach, map, filter, reduce та багато інших. Масиви є важливою частиною JavaScript і широко використовуються для зберігання та обробки списків даних.',
    },
    { id: 6, question: 'Як додати елемент до масиву в JavaScript?' },
    { id: 7, question: 'Що таке об’єкт в JavaScript?' },
    { id: 8, question: 'Як створити об’єкт в JavaScript?' },
    { id: 9, question: 'Що таке цикл в JavaScript?' },
    { id: 10, question: 'Як працює цикл for в JavaScript?' },
    { id: 11, question: 'Що таке умовний оператор в JavaScript?' },
    { id: 12, question: 'Як працює оператор if в JavaScript?' },
    { id: 13, question: 'Що таке оператор порівняння в JavaScript?' },
    { id: 14, question: 'Як працює оператор === в JavaScript?' },
    { id: 15, question: 'Що таке строка в JavaScript?' },
    { id: 16, question: 'Як конкатенувати строки в JavaScript?' },
    { id: 17, question: 'Що таке шаблонні строки в JavaScript?' },
    { id: 18, question: 'Як використовувати шаблонні строки?' },
    { id: 19, question: 'Що таке null та undefined в JavaScript?' },
    { id: 20, question: 'Яка різниця між null та undefined?' },
    { id: 21, question: 'Що таке NaN в JavaScript?' },
    { id: 22, question: 'Як перевірити, чи значення є NaN?' },
    { id: 23, question: 'Що таке замикання (closure) в JavaScript?' },
    { id: 24, question: 'Як працює замикання (closure)?' },
    { id: 25, question: 'Що таке стрілочні функції в JavaScript?' },
    { id: 26, question: 'Що таке прототипне наслідування в JavaScript?' },
    { id: 27, question: 'Як працює прототипне наслідування?' },
    {
      id: 28,
      question: 'Що таке контекст виконання (execution context) в JavaScript?',
    },
    { id: 29, question: 'Як працює контекст виконання?' },
    { id: 30, question: 'Що таке "this" в JavaScript?' },
    { id: 31, question: 'Як працює "this" у різних контекстах?' },
    { id: 32, question: 'Що таке call, apply та bind в JavaScript?' },
    { id: 33, question: 'Як використовувати call, apply та bind?' },
    { id: 34, question: 'Що таке асинхронність в JavaScript?' },
    { id: 35, question: 'Як працює setTimeout у JavaScript?' },
    { id: 36, question: 'Що таке проміси в JavaScript?' },
    { id: 37, question: 'Як створити та використовувати проміси?' },
    { id: 38, question: 'Що таке async/await у JavaScript?' },
    { id: 39, question: 'Як використовувати async/await?' },
    { id: 40, question: 'Що таке замикання та як його використовувати?' },
    { id: 41, question: 'Що таке "strict mode" у JavaScript?' },
    { id: 42, question: 'Як увімкнути "strict mode"?' },
    { id: 43, question: 'Що таке "hoisting" у JavaScript?' },
    { id: 44, question: 'Як працює "hoisting"?' },
    { id: 45, question: 'Що таке модулі в JavaScript?' },
    { id: 46, question: 'Як використовувати модулі (import/export)?' },
    {
      id: 47,
      question: 'Що таке IIFE (Immediately Invoked Function Expression)?',
    },
    { id: 48, question: 'Як використовувати IIFE?' },
    { id: 49, question: 'Що таке Event Loop у JavaScript?' },
    { id: 50, question: 'Як працює Event Loop?' },
    { id: 51, question: 'Що таке оператор "new" у JavaScript?' },
    { id: 52, question: 'Як працює оператор "new"?' },
    { id: 53, question: 'Що таке Map та Set у JavaScript?' },
    { id: 54, question: 'Як використовувати Map та Set?' },
    { id: 55, question: 'Що таке WeakMap та WeakSet?' },
    { id: 56, question: 'Як використовувати WeakMap та WeakSet?' },
    { id: 57, question: 'Що таке генератори у JavaScript?' },
    { id: 58, question: 'Як використовувати генератори?' },
    { id: 59, question: 'Що таке Proxy у JavaScript?' },
    { id: 60, question: 'Як працювати з Proxy?' },
    { id: 61, question: 'Що таке символи (Symbols) у JavaScript?' },
    { id: 62, question: 'Як використовувати символи?' },
    { id: 63, question: 'Що таке Reflect у JavaScript?' },
    { id: 64, question: 'Як працювати з Reflect?' },
    {
      id: 65,
      question: 'Що таке міжнародні стандартизації (Intl) у JavaScript?',
    },
    { id: 66, question: 'Як використовувати Intl?' },
    { id: 67, question: 'Що таке Web Workers?' },
    { id: 68, question: 'Як працювати з Web Workers?' },
    { id: 69, question: 'Що таке Service Workers?' },
    { id: 70, question: 'Як реалізувати Service Workers?' },
    { id: 71, question: 'Що таке модулі ES6?' },
    { id: 72, question: 'Як використовувати динамічний import?' },
    { id: 73, question: 'Що таке метапрограмування в JavaScript?' },
    { id: 74, question: 'Як використовувати метапрограмування?' },
    { id: 75, question: 'Що таке канали повідомлень (Message Channels)?' },
    { id: 76, question: 'Як працювати з канали повідомлень?' },
    { id: 77, question: 'Що таке Atomics та SharedArrayBuffer?' },
    { id: 78, question: 'Як використовувати Atomics та SharedArrayBuffer?' },
    { id: 79, question: 'Що таке трансдюсери (Transducers)?' },
    { id: 80, question: 'Як працювати з трансдюсерами?' },
    { id: 81, question: 'Що таке мемоізація (Memoization)?' },
    { id: 82, question: 'Як реалізувати мемоізацію?' },
    { id: 83, question: 'Що таке tree shaking?' },
    { id: 84, question: 'Як працювати з tree shaking?' },
    { id: 85, question: 'Що таке алгоритми розв’язання конфліктів?' },
    { id: 86, question: 'Як реалізувати алгоритми розв’язання конфліктів?' },
    { id: 87, question: 'Що таке прототипи у JavaScript?' },
    { id: 88, question: 'Як працювати з прототипами?' },
    { id: 89, question: 'Що таке JavaScript Engine?' },
    { id: 90, question: 'Як працює JavaScript Engine?' },
  ],
  rxjs: [
    {
      id: 1,
      question: 'Що таке RxJS?',
      answer:
        'RxJS (Reactive Extensions for JavaScript) — це бібліотека для реактивного програмування за допомогою Observables, що дозволяє легко компонувати асинхронні або подієві програми. RxJS забезпечує великий набір операторів для створення, перетворення і комбінування потоків даних, що допомагає розробникам писати більш зрозумілий і підтримуваний асинхронний код. Бібліотека широко використовується у сучасних фронтенд-фреймворках, таких як Angular.',
    },
    {
      id: 2,
      question: 'Що таке Observable в RxJS?',
      answer:
        'Observable в RxJS — це основний будівельний блок, який представляє собою потік даних, що може містити нуль або більше значень, які можуть бути передані асинхронно. Observables можуть створюватися з масивів, подій, HTTP-запитів та інших джерел. Вони дозволяють обробляти дані у вигляді потоків, на які можна підписуватися (subscribe), застосовувати оператори трансформації, комбінувати і фільтрувати. Observables забезпечують ефективну роботу з асинхронними даними, такими як таймери, інтервали і події користувача.',
    },
    {
      id: 3,
      question: 'Як створити Observable?',
      answer:
        'Observable можна створити кількома способами. Найбільш поширений спосіб — це використання конструктора Observable. Інший спосіб — це використання створюючих операторів, таких як of, from, interval і fromEvent. Ці методи дозволяють легко створювати Observables з різних джерел даних, таких як масиви, події DOM, таймери та проміси.',
    },
    {
      id: 4,
      question: 'Що таке Observer в RxJS?',
      answer:
        'Observer в RxJS — це об’єкт, який визначає набір з трьох колбеків: next, error і complete. Ці колбеки використовуються для обробки значень, помилок і завершення Observable відповідно. Observer підписується (subscribe) на Observable для отримання повідомлень і виклику відповідних колбеків. Observer забезпечує механізм обробки асинхронних даних, що передаються Observable.',
    },
    {
      id: 5,
      question: 'Як працює метод subscribe()?',
      answer:
        'Метод subscribe() дозволяє Observer підписатися на Observable для отримання значень. Він приймає об’єкт Observer або окремі колбеки для обробки значень, помилок і завершення. Під час підписки Observable починає передавати дані Observer. Метод subscribe() також повертає об’єкт Subscription, який дозволяє відписатися від Observable, припинивши отримання даних і звільнивши ресурси.',
    },
    { id: 6, question: 'Що таке оператори в RxJS?' },
    { id: 7, question: 'Що таке Subject в RxJS?' },
    { id: 8, question: 'Що таке BehaviorSubject?' },
    { id: 9, question: 'Що таке ReplaySubject?' },
    { id: 10, question: 'Що таке AsyncSubject?' },
    { id: 11, question: 'Що таке hot Observable?' },
    { id: 12, question: 'Що таке cold Observable?' },
    { id: 13, question: 'Яка різниця між hot і cold Observables?' },
    { id: 14, question: 'Що таке операція map()?' },
    { id: 15, question: 'Що таке операція filter()?' },
    { id: 16, question: 'Що таке мультикастінг в RxJS?' },
    { id: 17, question: 'Як використовувати multicast()?' },
    { id: 18, question: 'Що таке юнікастінг в RxJS?' },
    { id: 19, question: 'Як працювати з share()?' },
    { id: 20, question: 'Як створити кастомний оператор у RxJS?' },
    {
      id: 21,
      question: 'Як використовувати debounceTime() у реальному проекті?',
    },
    { id: 22, question: 'Що таке switchMap() і коли його використовувати?' },
    {
      id: 23,
      question: 'Як працювати з forkJoin() для обробки кількох запитів?',
    },
    { id: 24, question: 'Як обробляти помилки за допомогою catchError()?' },
    {
      id: 25,
      question: 'Що таке mergeMap() і як він відрізняється від switchMap()?',
    },
    {
      id: 26,
      question: 'Як управляти підписками в Angular за допомогою RxJS?',
    },
    {
      id: 27,
      question: 'Що таке оператор takeUntil() і як його використовувати?',
    },
    {
      id: 28,
      question: 'Як застосовувати combineLatest() у реальних додатках?',
    },
    {
      id: 29,
      question: 'Як використовувати retryWhen() для повторного запиту?',
    },
    { id: 30, question: 'Що таке асинхронне програмування з RxJS?' },
    {
      id: 31,
      question:
        'Як працювати з реактивними формами в Angular за допомогою RxJS?',
    },
    {
      id: 32,
      question: 'Як оптимізувати продуктивність за допомогою мультикастінгу?',
    },
    { id: 33, question: 'Що таке патерн backpressure і як його обробляти?' },
    {
      id: 34,
      question: 'Як реалізувати складні послідовності операторів у RxJS?',
    },
    { id: 35, question: 'Як використовувати RxJS для обробки вебсокетів?' },
    {
      id: 36,
      question: 'Що таке оператор finalize() і як його використовувати?',
    },
    {
      id: 37,
      question:
        'Як працювати з операторами higher-order mapping (mergeMap, switchMap, concatMap, exhaustMap)?',
    },
    {
      id: 38,
      question: 'Як використовувати scan() для створення акумуляторів стану?',
    },
    { id: 39, question: 'Як реалізувати кастомний Subject?' },
    { id: 40, question: 'Як тестувати RxJS оператори?' },
    {
      id: 41,
      question:
        'Як використовувати RxJS у поєднанні з іншими бібліотеками (наприклад, Redux)?',
    },
    { id: 42, question: 'Що таке Observable-based state management?' },
    {
      id: 43,
      question:
        'Як використовувати RxJS для обробки подій у великомасштабних додатках?',
    },
    { id: 44, question: 'Як ефективно відлагоджувати RxJS оператори?' },
    {
      id: 45,
      question:
        'Що таке оператор toPromise() і коли його варто використовувати?',
    },
    {
      id: 46,
      question:
        'Як працювати з операторами time-based (debounceTime, throttleTime, auditTime)?',
    },
    {
      id: 47,
      question: 'Як використовувати RxJS для роботи з графічним інтерфейсом?',
    },
    { id: 48, question: 'Що таке flattening операції і як вони працюють?' },
    { id: 49, question: 'Як реалізувати і обробляти асинхронні події з RxJS?' },
    {
      id: 50,
      question: 'Як використовувати RxJS у прогресивних веб-додатках (PWA)?',
    },
  ],
};
