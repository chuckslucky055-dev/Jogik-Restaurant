const app = document.querySelector<HTMLDivElement>('#app');

const dishes = [
  {
    name: 'Party Jollof Rice',
    desc: 'Smoky, deeply spiced party classic served with grilled chicken.',
    price: 'From ₦4,500',
    tag: 'Signature',
  },
  {
    name: 'Fried Rice & Sauced Chicken',
    desc: 'Fragrant fried rice topped with Jogik’s rich, savoury sauced chicken.',
    price: 'From ₦5,000',
    tag: 'Popular',
  },
  {
    name: 'Seafood & Grill Platter',
    desc: 'Grilled crab, lobster, prawns, wings and spring rolls built to share.',
    price: 'From ₦18,000',
    tag: 'For the table',
  },
  {
    name: 'Egusi & Pounded Yam',
    desc: 'Silky egusi paired with classic pounded yam and assorted protein.',
    price: 'From ₦5,500',
    tag: 'Nigerian classic',
  },
  {
    name: 'Peppered Asun',
    desc: 'Char-grilled goat meat tossed in fiery pepper sauce.',
    price: 'From ₦7,000',
    tag: 'Crowd favourite',
  },
  {
    name: 'Grilled Lobster',
    desc: 'Whole lobster grilled in garlic butter with seasonal sides.',
    price: 'Market price',
    tag: 'Premium',
  },
];

const reviews = [
  ['Chinedu O.', '“The party jollof is unreal. Best in Rumuola, hands down.”'],
  [
    'Amaka & Tobi',
    '“We hosted our wedding after-party at Jogik — everyone still talks about it.”',
  ],
  [
    'Ibrahim K.',
    '“Fast WhatsApp ordering, hot delivery, and the pepper soup is life.”',
  ],
];

function wa(message: string) {
  return 'https://wa.me/2348162956148?text=' + encodeURIComponent(message);
}

function render() {
  if (!app) return;
  app.innerHTML = `
    <header class="nav">
      <a class="brand" href="#home"><span class="brand-mark">J</span><span>JOGIK</span></a>
      <nav>
        <a href="#menu">Menu</a><a href="#about">About</a><a href="#events">Events</a><a href="#contact">Contact</a>
      </nav>
      <a class="nav-cta" href="${wa('Hi Jogik, I’d like to place an order.')}" target="_blank" rel="noreferrer">Order on WhatsApp</a>
    </header>

    <main>
      <section id="home" class="hero">
        <div class="hero-copy">
          <div class="eyebrow">PORT HARCOURT • NIGERIAN & CONTINENTAL</div>
          <h1>Good food.<br><em>Good people.</em><br>Great nights.</h1>
          <p>From smoky party jollof to continental favourites, Jogik brings bold flavour, warm hospitality and a full bar to the heart of Port Harcourt.</p>
          <div class="actions">
            <a class="button primary" href="#menu">Explore the menu <span>↗</span></a>
            <a class="button ghost" href="${wa('Hi Jogik, I’d like to make a reservation.')}" target="_blank" rel="noreferrer">Reserve a table</a>
          </div>
          <div class="hero-meta"><span>★ 5.0</span><span>Google • 5 reviews</span><span>Delivery available</span></div>
        </div>
        <div class="hero-visual">
          <div class="food-orbit orbit-one"></div><div class="food-orbit orbit-two"></div>
          <div class="plate"><div class="rice">🍛</div></div>
          <div class="hero-card"><strong>Today’s mood</strong><span>Eat. Sip. Stay awhile.</span></div>
        </div>
      </section>

      <section class="ticker"><span>SMOKY JOLLOF</span><i>✦</i><span>FRESH GRILLS</span><i>✦</i><span>FULL BAR</span><i>✦</i><span>EVENT HOSTING</span><i>✦</i><span>HOME DELIVERY</span></section>

      <section id="menu" class="section">
        <div class="section-head"><div><div class="eyebrow">FROM THE KITCHEN</div><h2>Favourites worth<br><em>coming back for.</em></h2></div><a class="text-link" href="${wa('Hi Jogik, please send me the full menu and prices.')}">Get full menu ↗</a></div>
        <div class="menu-grid">${dishes.map((d, i) => `<article class="dish"><div class="dish-art art-${i}"><span>${['🍛', '🍚', '🦐', '🥘', '🍢', '🦞'][i]}</span></div><div class="dish-body"><span class="tag">${d.tag}</span><h3>${d.name}</h3><p>${d.desc}</p><div class="dish-bottom"><strong>${d.price}</strong><a href="${wa('Hi Jogik, I’d like to order ' + d.name + '.')}" target="_blank" rel="noreferrer">Order ↗</a></div></div></article>`).join('')}</div>
      </section>

      <section id="about" class="split-section">
        <div class="dark-panel"><div class="eyebrow light">THE JOGIK EXPERIENCE</div><h2>A table made for <em>every kind</em> of gathering.</h2><p>Come for lunch, stay for the drinks. Jogik is built around generous Nigerian flavours, continental plates, a lively lounge and the kind of hospitality that keeps the table talking.</p><div class="stats"><div><strong>2</strong><span>Port Harcourt locations</span></div><div><strong>5★</strong><span>Google rating shown</span></div><div><strong>24/7</strong><span>Good vibes, not our hours</span></div></div></div>
        <div class="feature-list">
          <div><span class="feature-icon">01</span><div><h3>Home delivery</h3><p>Order through WhatsApp and get Jogik delivered to your home or office across Port Harcourt.</p></div></div>
          <div><span class="feature-icon">02</span><div><h3>Events & catering</h3><p>Weddings, birthdays, corporate dinners and large-format catering with custom menus.</p></div></div>
          <div><span class="feature-icon">03</span><div><h3>Lounge & games</h3><p>Settle into the lounge, enjoy the bar and take a shot on the snooker table.</p></div></div>
          <div><span class="feature-icon">04</span><div><h3>Full bar</h3><p>Wines, spirits, cocktails and refreshing Nigerian favourites to pair with your meal.</p></div></div>
        </div>
      </section>

      <section id="events" class="events">
        <div class="event-copy"><div class="eyebrow">MAKE IT A JOGIK NIGHT</div><h2>Your event.<br><em>Our table.</em></h2><p>From intimate dinners to grand receptions, our team can handle the food, drinks and atmosphere.</p><a class="button primary" href="${wa('Hi Jogik, I’d like to enquire about hosting an event.')}">Plan an event ↗</a></div>
        <div class="event-collage"><div class="collage-main">🥂</div><div class="collage-small">🍗</div><div class="collage-note"><strong>Private parties</strong><span>Birthdays • Weddings • Corporate</span></div></div>
      </section>

      <section class="reviews"><div class="eyebrow">WHAT GUESTS SAY</div><h2>Loved across <em>Port Harcourt.</em></h2><div class="review-grid">${reviews.map(r => `<blockquote><div class="stars">★★★★★</div><p>${r[1]}</p><cite>— ${r[0]}</cite></blockquote>`).join('')}</div></section>

      <section id="contact" class="contact">
        <div><div class="eyebrow">COME THROUGH</div><h2>Find your table.</h2><p>Two Port Harcourt locations. One Jogik welcome.</p></div>
        <div class="locations">
          <div><span class="pin">01</span><h3>Rumuola</h3><p>No. 114 Rumuola Road, before Rumukuta flyover, Port Harcourt, Rivers State</p><a href="https://www.google.com/maps/search/?api=1&query=Jogik+Eatery+Rumuola+Port+Harcourt" target="_blank" rel="noreferrer">Get directions ↗</a></div>
          <div><span class="pin">02</span><h3>Izo Ahia</h3><p>21 Eneka Link Rd, Paradise Ln, Port Harcourt, Rivers, Nigeria</p><a href="https://www.google.com/maps/search/?api=1&query=Jogik+Eatery+Izo+Ahia+Port+Harcourt" target="_blank" rel="noreferrer">Get directions ↗</a></div>
        </div>
      </section>
    </main>

    <footer><div class="brand"><span class="brand-mark">J</span><span>JOGIK</span></div><p>Nigerian & Continental cuisine • Restaurant • Bar • Events</p><div><a href="${wa('Hi Jogik, I have a question.')}" target="_blank" rel="noreferrer">WhatsApp</a><a href="mailto:jogikfood@gmail.com">Email</a></div></footer>
  `;
}

render();
