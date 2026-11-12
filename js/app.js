/* ===== deleFOCO · Cines de Costa Rica ===== */
var IMGMAP = window.IMGMAP || null;

function img(s) { return IMGMAP ? IMGMAP[s] : encodeURI('assets/' + (s.indexOf('.') > -1 ? s : s + '.jpg')) }

var T = {
    es: { title: "Cines de Costa Rica | deleFOCO", n1: "Cadenas de cines", n2: "", n3: "Cines independientes", n4: "Contacto", k1: "01 — DIRECTORIO", k2: "02 — OTRAS SALAS", fh1: "IMPORTANTE", f1: "Nosotros", f2: "Servicios", f3: "Cartelera", f4: "Contacto", fh2: "CONTACTO", fh3: "SÍGUENOS", warn: "Aviso", menuOpen: "Abrir menú", menuClose: "Cerrar menú", langBtn: "Cambiar a inglés", themeToLight: "Cambiar a tema claro", themeToDark: "Cambiar a tema oscuro", tag: "CARTELERA · COSTA RICA", h1: "Del estreno<br>a tu butaca.<b>Encontrá tu<br>cine ideal.</b>", lead: "Cadenas · Sedes únicas · Cines independientes — Costa Rica · Información, fotos, ubicación y horarios de cada sala", cta: "Explorar cines", cta2: "Cines independientes", cta3: "Contacto", s1: "CADENAS", s2: "SEDE ÚNICA", s3: "INDEPENDIENTES", feat: "CINE DESTACADO", c1: "Cadenas de cines", c1s: "Explorá las cadenas comerciales y sus sucursales en Costa Rica.", c2: "", c2s: "", c3: "Cines independientes y culturales", c3s: "Espacios alternativos, de autor, patrimoniales y de difusión cultural.", chain: "Cadena", single: "Sede única", indep: "Independiente", hrs: "Horario", map: "Ver en mapa", cart: "Buscar cartelera", br: "sucursales", see: "Ver información", loc: "Ubicación", close: "Cerrar", note: "Los cines no publican un horario fijo de apertura: abren según las funciones del día. Los horarios son referenciales; confirmá siempre la cartelera en el sitio o redes oficiales de cada cine antes de ir.", ft: "Comunidad Audiovisual · Conectamos talento, profesionales, proyectos y oportunidades." },
    en: { title: "Cinemas in Costa Rica | deleFOCO", n1: "Cinema chains", n2: "", n3: "Independent cinemas", n4: "Contact", k1: "01 — DIRECTORY", k2: "02 — OTHER VENUES", fh1: "IMPORTANT", f1: "About us", f2: "Services", f3: "Showtimes", f4: "Contact", fh2: "CONTACT", fh3: "FOLLOW US", warn: "Notice", menuOpen: "Open menu", menuClose: "Close menu", langBtn: "Switch to Spanish", themeToLight: "Switch to light theme", themeToDark: "Switch to dark theme", tag: "SHOWTIMES · COSTA RICA", h1: "From premiere<br>to your seat.<b>Find your<br>ideal cinema.</b>", lead: "Chains · Single venues · Independent cinemas — Costa Rica · Info, photos, location and hours for every theater", cta: "Explore cinemas", cta2: "Independent cinemas", cta3: "Contact", s1: "CHAINS", s2: "SINGLE VENUE", s3: "INDEPENDENT", feat: "FEATURED CINEMA", c1: "Cinema chains", c1s: "Explore commercial cinema brands and their locations across Costa Rica.", c2: "", c2s: "", c3: "Independent & cultural cinemas", c3s: "Alternative, arthouse, heritage and public cultural venues.", chain: "Chain", single: "Single venue", indep: "Independent", hrs: "Hours", map: "View on map", cart: "Find showtimes", br: "branches", see: "See information", loc: "Location", close: "Close", note: "Cinemas don't publish fixed opening hours: they open according to the day's screenings. Hours are indicative; always confirm showtimes on each cinema's official website or social media before going.", ft: "Audiovisual Community · Connecting talent, professionals, projects and opportunities." }
};

var H = ["Lun–Dom · 11:00 – 22:00 (aprox., según funciones)", "Mon–Sun · 11:00 AM – 10:00 PM (approx., per screenings)"];
var CINES = [{
        id: "cinepolis",
        k: "chain",
        n: "Cinépolis",
        cover: "CineLincoln",
        d: ["Cadena con complejos en la GAM y otras zonas comerciales. Cada sucursal tiene su propio horario de funciones.", "Chain with complexes in the GAM and other commercial areas. Each branch has its own screening times."],
        b: [{ n: "Plaza Lincoln", z: "Moravia, San José", i: ["CineLincoln", "Lincoln"], d: ["Complejo en Plaza Lincoln, Moravia; Cinépolis tomó estas salas tras la salida de CCM Cinemas.", "Complex at Plaza Lincoln, Moravia; Cinépolis took over these screens after CCM Cinemas left."] },
            { n: "Terramall", z: "Tres Ríos, Cartago", i: ["Terramall", "Terramal"], d: ["Sucursal en el centro comercial Terramall, en Tres Ríos.", "Branch inside the Terramall shopping center in Tres Ríos."] },
            { n: "Paseo de las Flores", z: "Heredia", i: ["LasFlores", "las-flores"], d: ["Sucursal dentro del mall Paseo de las Flores, en Heredia.", "Branch inside Paseo de las Flores mall, in Heredia."] },
            { n: "Paseo Metrópoli", z: "Cartago", i: ["Paseo-_Metropoli", "Metropoli"], d: ["Sucursal en el centro comercial Paseo Metrópoli, en Cartago.", "Branch at the Paseo Metrópoli shopping center in Cartago."] },
            { n: "Multicentro Desamparados", z: "Desamparados, San José", i: ["Multicentro", "Multicentr"], d: ["Sucursal en Multicentro, en Desamparados.", "Branch at Multicentro in Desamparados."] },
            { n: "Terrazas Lindora", z: "Santa Ana, San José", i: ["Terrazas", "Cineepolis-Terrazas"], d: ["Sucursal con salas VIP en Terrazas Lindora, Santa Ana.", "Branch with VIP screens at Terrazas Lindora, Santa Ana."] }
        ],
        u: "https://delefoco.com/?action=v&id=10&mid=920"
    },
    {
        id: "cinemark",
        k: "chain",
        n: "Cinemark",
        cover: "multiplaza-min",
        d: ["Cadena multinacional con operaciones en Costa Rica.", "Multinational chain operating in Costa Rica."],
        b: [{ n: "Multiplaza Escazú", z: "Escazú, San José", i: ["multiplaza-min", "Escazu"], d: ["Sucursal en el centro comercial Multiplaza Escazú.", "Branch at Multiplaza Escazú mall."] },
            { n: "Multiplaza Curridabat", z: "Curridabat, San José", i: ["Curridabat", "Curridaba"], d: ["Sucursal en Multiplaza del Este, Curridabat.", "Branch at Multiplaza del Este, Curridabat."] },
            { n: "CityMall", z: "Alajuela", i: ["CityMall", "CityMal"], d: ["Sucursal en CityMall, Alajuela.", "Branch at CityMall, Alajuela."] },
            { n: "Oxígeno", z: "Heredia", i: ["Oxigeno", "Oxigen"], d: ["Sucursal en el Mall Oxígeno, Heredia.", "Branch at Mall Oxígeno, Heredia."] }
        ],
        u: "https://delefoco.com/?action=v&id=10&mid=917"
    },
    {
        id: "nova",
        k: "chain",
        n: "Nova Cinemas",
        cover: "Escaz",
        d: ["Cadena costarricense de Grupo Repretel con presencia en varias provincias.", "Costa Rican chain from Grupo Repretel present in several provinces."],
        b: [{ n: "Avenida Escazú", z: "San Rafael, Escazú", i: ["Escaz", "Avenida-Escazu"], d: ["Complejo de siete salas con sala IMAX, renovado con nueva dulcería y lobby.", "Seven-screen complex with an IMAX theater, renovated with a new concession and lobby."] },
            { n: "Ciudad del Este", z: "Curridabat, San José", i: ["Ciudad-Del-Este", "Ciudad-Del-Est"], d: ["Salas en el centro comercial Ciudad del Este.", "Screens at the Ciudad del Este shopping center."], w: ["Las salas se informaron cerradas hasta nuevo aviso tras un incendio en el centro comercial. Confirmá si ya reabrieron.", "The screens were reported closed until further notice after a fire at the mall. Check whether they have reopened."] },
            { n: "Plaza Real", z: "Alajuela", i: ["Plaza-Real", "PlazaReal"], d: ["Sucursal en Plaza Real, Alajuela.", "Branch at Plaza Real, Alajuela."] },
            { n: "Plaza Moín", z: "Limón", i: ["Plaza-Moin", "Limon"], d: ["Complejo en Plaza Moín, la sucursal de Nova en el Caribe.", "Complex at Plaza Moín, Nova's branch on the Caribbean coast."] },
            { n: "Garden Plaza", z: "Tamarindo, Guanacaste", i: ["Tamarind", "Tamarin.jpeg"], d: ["Sucursal más reciente, en Garden Plaza, Tamarindo.", "Newest branch, at Garden Plaza, Tamarindo."] }
        ],
        u: "https://delefoco.com/?action=v&id=10&mid=922"
    },
    {
        id: "ccm",
        k: "chain",
        n: "CCM Cinemas",
        cover: "CCMPlazaM",
        d: ["Exhibidor tradicional local con sedes fuera del área metropolitana.", "Traditional local exhibitor with venues outside the metro area."],
        b: [{ n: "Plaza Mayor", z: "Rohrmoser, San José", i: ["CCMPlazaM", "CCMPlazM"], d: ["Sucursal en Plaza Mayor, San José.", "Branch at Plaza Mayor, San José."] },
            { n: "San Carlos", z: "Ciudad Quesada, Alajuela", i: ["CCMSanCarlos", "CCMSanCarlo"], d: ["Sucursal en la zona norte, San Carlos.", "Branch in the northern zone, San Carlos."] },
            { n: "San Ramón", z: "Alajuela", i: ["CCMSanRamon"], d: ["Sucursal en San Ramón.", "Branch in San Ramón."] }
        ],
        u: "https://delefoco.com/?action=v&id=10&mid=921"
    },
    {
        id: "studio",
        k: "single",
        n: "Studio Cinemas",
        cover: "Studio",
        d: ["Complejo de una única sede en el centro comercial City Place.", "Single-venue complex at the City Place mall."],
        b: [{ n: "City Place", z: "Santa Ana, San José", i: ["Studio", "StudioCinemas"], d: ["Complejo de una única sede en el centro comercial City Place.", "Single-venue complex at the City Place mall."] }],
        u: "https://delefoco.com/?action=v&id=10&mid=957"
    },
    {
        id: "pedro",
        k: "single",
        n: "Cinema San Pedro",
        cover: "SanPedro",
        d: ["Sala comercial única en el Mall San Pedro.", "Unique commercial theater inside Mall San Pedro."],
        b: [{ n: "Mall San Pedro", z: "Montes de Oca, San José", i: ["SanPedro", "SanPedr"], d: ["Sala comercial única en las instalaciones del Mall San Pedro.", "Unique commercial theater inside Mall San Pedro."] }],
        u: "https://delefoco.com/?action=v&id=10&mid=950"
    },
    {
        id: "pz",
        k: "single",
        n: "Multicinemas Pérez Zeledón",
        cover: "MultiCinemas",
        d: ["Estrenos comerciales en la Región Brunca.", "Commercial releases in the Brunca Region."],
        b: [{ n: "Pérez Zeledón", z: "San Isidro, Región Brunca", i: ["MultiCinemas", "MultiCinena"], d: ["Infraestructura única para estrenos comerciales en la Región Brunca.", "Single venue for commercial releases in the Brunca Region."] }],
        u: "https://delefoco.com/?action=v&id=10&mid=950"
    },
    {
        id: "pacific",
        k: "single",
        n: "Pacific Cinemas",
        cover: "Pacific",
        d: ["Única pantalla comercial de la zona fronteriza.", "Only commercial screen in the border area."],
        b: [{ n: "Paso Canoas", z: "Corredores, zona fronteriza", i: ["Pacific", "Pacifi"], d: ["Única pantalla comercial de la zona fronteriza de Paso Canoas.", "Only commercial screen in the Paso Canoas border area."] }],
        u: "https://delefoco.com/?action=v&id=10&mid=956"
    },
    {
        id: "magaly",
        k: "indep",
        n: "Cine Magaly",
        cover: "cine-magaly",
        d: ["Histórico espacio alternativo independiente e imán de festivales artísticos.", "Historic alternative independent venue and magnet for arts festivals."],
        b: [{ n: "Sala principal y La Salita", z: "Barrio La California, San José", i: ["cine-magaly", "CineMaga"], h: ["Según cartelera · funciones por la tarde y noche", "Per program · afternoon and evening screenings"], d: ["Sala principal renovada y una salita pequeña; retomó funciones el 1 de octubre tras una falla eléctrica.", "Renovated main hall plus a small screening room; resumed screenings on October 1 after an electrical failure."] }],
        u: "https://delefoco.com/?action=v&id=10&mid=933"
    },
    {
        id: "garbo",
        k: "indep",
        n: "Sala Garbo",
        cover: "SalaGarbo",
        d: ["Cine independiente y de culto, especializado en cine de autor.", "Independent and cult cinema specializing in auteur films."],
        b: [{ n: "Sala Garbo", z: "San José centro", i: ["SalaGarbo", "SalaGarb"], h: ["Según cartelera · funciones por la tarde y noche", "Per program · afternoon and evening screenings"], d: ["Cine independiente y de culto, especializado en cine de autor y clásicos.", "Independent and cult cinema specializing in auteur films and classics."] }]
    },
    {
        id: "ccca",
        k: "indep",
        n: "Sala Gómez Miralles (CCCA)",
        cover: "SalaGom",
        d: ["Sala oficial de difusión cultural del Ministerio de Cultura y Juventud.", "Official cultural venue of the Ministry of Culture and Youth."],
        b: [{ n: "Centro de Cine", z: "Barrio Amón, San José", i: ["SalaGom", "SalaG"], h: ["Según programación · entrada gratuita", "Per program · free admission"], d: ["Sala del Centro Costarricense de Cine y Audiovisual, con acceso gratuito.", "Venue of the Costa Rican Film and Audiovisual Center, free access."] }]
    },
    {
        id: "variedades",
        k: "indep",
        n: "Cine Variedades",
        cover: "Variedades",
        d: ["Inmueble patrimonial restaurado por el Estado para proyecciones y espectáculos.", "Heritage building restored by the State for screenings and shows."],
        b: [{ n: "Teatro Variedades", z: "Centro de San José", i: ["Variedades", "Variedade"], h: ["Según programación de eventos", "Per event program"], d: ["Inmueble patrimonial restaurado por el Estado para proyecciones y espectáculos culturales.", "Heritage building restored by the State for screenings and cultural shows."] }]
    }
];

var lang = "es",
    cur = null,
    curB = 0,
    curI = 0,
    lastFocus = null;
var $ = function(id) { return document.getElementById(id) };

function L(a) { return a[lang === "es" ? 0 : 1] }

function esc(s) { return String(s).replace(/[&<>"]/g, function(c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c] }) }

function gmap(q) { return "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(q) }

function gsearch(q, u) { return u ? u : "https://www.google.com/search?q=" + encodeURIComponent(q + " horarios cartelera") }

function bg(s) { return s ? 'style="background-image:url(' + img(s) + ')"' : '' }

function kindLabel(c) { var t = T[lang]; return (c.k === "chain" || c.k === "single") ? t.chain : t.indep }

function render() {
    var t = T[lang];
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-t]").forEach(function(e) { e.textContent = t[e.dataset.t] });
    document.querySelectorAll("[data-h]").forEach(function(e) { e.innerHTML = t[e.dataset.h] });
    document.title = t.title;
    $("lang").textContent = lang === "es" ? "EN" : "ES";
    $("lang").setAttribute("aria-label", t.langBtn);
    $("lang").title = t.langBtn;
    updateThemeButton(getCurrentTheme());
    updateMenuLabel();
    ["chain", "indep"].forEach(function(k, n) {
        $("g" + (n === 0 ? 1 : 3)).innerHTML = CINES.filter(function(c) { return k === "chain" ? (c.k === "chain" || c.k === "single") : c.k === "indep" }).map(function(c) {
            var many = c.b.length > 1;
            return '<button class="cinema" data-id="' + c.id + '" aria-label="' + esc(c.n) + '">' +
                '<span class="ph' + (c.cover ? '' : ' noimg') + '" ' + bg(c.cover) + '></span>' +
                '<span class="tx"><span class="badge' + (k === "single" ? " s" : k === "indep" ? " i" : "") + '">' + kindLabel(c) + (many ? ' · ' + c.b.length + ' ' + t.br : '') + '</span>' +
                '<h3>' + esc(c.n) + '</h3><p>' + esc(L(c.d)) + '</p><span class="go">' + t.see + ' →</span></span></button>'
        }).join("");
    });
    document.querySelectorAll(".cinema").forEach(function(b) { b.onclick = function() { openPanel(b.dataset.id) } });
    if (cur) paint();
}

function openPanel(id) {
    cur = CINES.filter(function(c) { return c.id === id })[0];
    curB = 0;
    curI = 0;
    lastFocus = document.activeElement;
    $("panel").hidden = false;
    document.body.style.overflow = "hidden";
    paint();
    $("panel").scrollTop = 0;
    $("pClose").focus();
}

function closePanel() {
    $("panel").hidden = true;
    document.body.style.overflow = "";
    cur = null;
    if (lastFocus) lastFocus.focus();
}

function paint() {
    var t = T[lang],
        b = cur.b[curB],
        many = cur.b.length > 1,
        imgs = b.i,
        main = imgs[curI] || imgs[0];
    $("pKind").textContent = kindLabel(cur);
    $("pTitle").textContent = cur.n;
    $("pDesc").textContent = L(cur.d);
    $("pTabs").style.display = many ? "flex" : "none";
    $("pTabs").innerHTML = cur.b.map(function(x, n) { return '<button class="btn' + (n === curB ? ' on' : '') + '" role="tab" aria-selected="' + (n === curB) + '" data-b="' + n + '">' + esc(x.n) + '</button>' }).join("");
    var pic = main || cur.cover;
    $("pBg").style.backgroundImage = pic ? 'url(' + img(pic) + ')' : 'none';
    $("pBig").className = "big" + (main ? '' : ' noimg');
    $("pBig").style.backgroundImage = main ? 'url(' + img(main) + ')' : '';
    $("pThumbs").innerHTML = imgs.length > 1 ? imgs.map(function(s, n) { return '<button class="' + (n === curI ? 'on' : '') + '" data-i="' + n + '" aria-label="Foto ' + (n + 1) + '" style="background-image:url(' + img(s) + ')"></button>' }).join("") : "";
    var q = (many ? cur.n + " " + b.n : cur.n + " " + b.n) + " " + b.z + " Costa Rica";
    $("pInfo").innerHTML = '<h3>' + esc(many ? cur.n + " · " + b.n : b.n === cur.n ? b.n : b.n) + '</h3>' +
        (b.w ? '<div class="alert">' + t.warn + ': ' + esc(L(b.w)) + '</div>' : '') +
        '<p>' + esc(L(b.d)) + '</p>' +
        '<div class="row">' + t.loc + ': <span>' + esc(b.z) + '</span></div>' +
        '<div class="row">' + t.hrs + ': <span>' + esc(b.h ? L(b.h) : L(H)) + '</span></div>' +
        '<div class="acts"><a class="solid" target="_blank" rel="noopener" href="' + gmap(q) + '">' + t.map + '</a>' +
        '<a class="solid ghost" target="_blank" rel="noopener" href="' + gsearch(cur.n + " " + b.n + " " + b.z, cur.u) + '">' + t.cart + '</a></div>';
}
$("pTabs").onclick = function(e) { var x = e.target.closest("[data-b]"); if (x) { curB = +x.dataset.b;
        curI = 0;
        paint() } };
$("pThumbs").onclick = function(e) { var x = e.target.closest("[data-i]"); if (x) { curI = +x.dataset.i;
        paint() } };
$("pClose").onclick = closePanel;
$("pClose").setAttribute("aria-label", "Cerrar / Close");
document.addEventListener("keydown", function(e) { if (e.key === "Escape" && cur) closePanel() });

/* ----- Tema e idioma: la página siempre abre en oscuro y en español ----- */
function getCurrentTheme() {
    return document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
}

var ICON_SUN = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>';
var ICON_MOON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>';

function updateThemeButton(mode) {
    var t = T[lang], b = $("theme");
    // Oscuro -> muestra el sol (para pasar a claro); claro -> muestra la luna
    b.innerHTML = mode === "dark" ? ICON_SUN : ICON_MOON;
    var lbl = mode === "dark" ? t.themeToLight : t.themeToDark;
    b.setAttribute("aria-label", lbl);
    b.title = lbl;
}

function setTheme(m) {
    document.documentElement.setAttribute("data-theme", m);
    var meta = $("metaTheme");
    if (meta) meta.setAttribute("content", m === "dark" ? "#080808" : "#ffffff");
    updateThemeButton(m);
}

$("theme").onclick = function() {
    setTheme(getCurrentTheme() === "dark" ? "light" : "dark");
};

$("lang").onclick = function() {
    lang = lang === "es" ? "en" : "es";
    render();
};

setTheme("dark");
render();

/* ----- Menu hamburguesa (móvil) ----- */
var toggleBtn = $("menuToggle");
var mainNav = $("mainNav");

function updateMenuLabel() {
    if (!toggleBtn) return;
    var open = mainNav.classList.contains("active");
    toggleBtn.innerHTML = open ? "&#10005;" : "&#9776;";
    toggleBtn.setAttribute("aria-expanded", open ? "true" : "false");
    toggleBtn.setAttribute("aria-label", open ? T[lang].menuClose : T[lang].menuOpen);
}

function closeMenu() {
    if (!mainNav.classList.contains("active")) return;
    mainNav.classList.remove("active");
    updateMenuLabel();
}
if (toggleBtn && mainNav) {
    toggleBtn.onclick = function() {
        mainNav.classList.toggle("active");
        updateMenuLabel();
    };
    mainNav.querySelectorAll("a").forEach(function(link) { link.addEventListener("click", closeMenu); });
    document.addEventListener("keydown", function(e) { if (e.key === "Escape") closeMenu(); });
    document.addEventListener("click", function(e) { if (!e.target.closest("header")) closeMenu(); });
    window.addEventListener("resize", function() { if (window.innerWidth > 860) closeMenu(); });
    updateMenuLabel();
}

/* ----- Portada: carrusel de cines destacados + marquesina ----- */
var SLIDES = [
    { img: "Plaza-Real", id: "nova", n: "Nova Cinemas", z: "Plaza Real · Alajuela" },
    { img: "Cineepolis-Terrazas", id: "cinepolis", n: "Cinépolis", z: "Terrazas Lindora · Santa Ana" },
    { img: "Avenida-Escazu", id: "nova", n: "Nova Cinemas", z: "Avenida Escazú · Escazú" },
    { img: "Lincoln", id: "cinepolis", n: "Cinépolis", z: "Plaza Lincoln · Moravia" }
];
var hi = 0,
    hTimer = null;

function heroBuild() {
    $("hTrack").innerHTML = SLIDES.map(function(s, n) {
        return '<div class="slide" data-n="' + n + '" style="background-image:url(' + img(s.img) + ')">' +
            '<button class="cap" data-id="' + s.id + '" aria-label="' + esc(s.n + " " + s.z) + '"><b>' + esc(s.n) + '</b><span>' + esc(s.z) + '</span></button></div>'
    }).join("");
    $("hDots").innerHTML = SLIDES.map(function(s, n) { return '<button data-n="' + n + '" aria-label="Foto ' + (n + 1) + '"></button>' }).join("");
    var names = CINES.map(function(c) { return c.n.toUpperCase() });
    var row = names.map(function(n) { return '<span>' + esc(n) + '</span><i>•</i>' }).join("");
    $("mq").innerHTML = row + row;
    heroGo(0);
}

function heroGo(n) {
    hi = (n + SLIDES.length) % SLIDES.length;
    var fr = $("hFrame"),
        sl = $("hTrack").children,
        w = fr.clientWidth,
        sw = w * (w < 560 ? .9 : .86),
        gap = 12;
    $("hTrack").style.setProperty("--sw", sw + "px");
    var off = (w - sw) / 2 - hi * (sw + gap),
        mn = w - (SLIDES.length * sw + (SLIDES.length - 1) * gap);
    off = Math.max(mn, Math.min(0, off));
    $("hTrack").style.transform = "translateX(" + off + "px)";
    Array.prototype.forEach.call(sl, function(e, k) { e.classList.toggle("on", k === hi) });
    Array.prototype.forEach.call($("hDots").children, function(e, k) { e.classList.toggle("on", k === hi) });
}

function heroPlay() { clearInterval(hTimer); if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    hTimer = setInterval(function() { heroGo(hi + 1) }, 5000) }
$("hPrev").onclick = function() { heroGo(hi - 1);
    heroPlay() };
$("hNext").onclick = function() { heroGo(hi + 1);
    heroPlay() };
$("hDots").onclick = function(e) { var x = e.target.closest("[data-n]"); if (x) { heroGo(+x.dataset.n);
        heroPlay() } };
$("hTrack").onclick = function(e) { var c = e.target.closest(".cap"); if (c && c.closest(".slide").classList.contains("on")) openPanel(c.dataset.id);
    else { var s = e.target.closest(".slide"); if (s) { heroGo(+s.dataset.n);
            heroPlay() } } };
$("hFrame").onmouseenter = function() { clearInterval(hTimer) };
$("hFrame").onmouseleave = heroPlay;
(function() { var x0 = null; var f = $("hFrame");
    f.addEventListener("pointerdown", function(e) { x0 = e.clientX });
    f.addEventListener("pointerup", function(e) { if (x0 !== null && Math.abs(e.clientX - x0) > 50) { heroGo(hi + (e.clientX < x0 ? 1 : -1));
            heroPlay() }
        x0 = null }) })();
window.addEventListener("resize", function() { heroGo(hi) });
heroBuild();
heroPlay();