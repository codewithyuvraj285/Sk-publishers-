/* Idiomas / Languages: Español (ES) + English (EN).
   - El texto original de la web esta en ingles. En modo ES, cada texto se traduce con el diccionario de abajo.
   - Para traducir un texto nuevo (producto, categoria, etc.) agrega una linea:  'English text':'Texto en español',
   - Si un texto no esta en el diccionario, se muestra en ingles (no se rompe nada).
   - Idioma por defecto: el del navegador (es / en). El boton ES|EN del menu lo cambia y se recuerda. */
(function(){
var lang='';try{lang=localStorage.getItem('sk_lang')||''}catch(e){}
if(lang!=='es'&&lang!=='en')lang=((navigator.language||'es').slice(0,2)==='en')?'en':'es';

var ES={
/* ---- menu / cabecera / pie ---- */
'Menu':'Menú','Categories':'Categorías','Home':'Inicio','All products':'Todos los productos','Shop':'Tienda','Contact':'Contacto','Blog':'Blog',
'Track your order':'Seguir mi pedido','Track':'Pedido','Search':'Buscar','Need help?':'¿Necesitas ayuda?','Quote':'Presupuesto','Close':'Cerrar',
'Hot selling 🔥':'Más vendido 🔥','Trending 😍':'Tendencia 😍','Main':'Principal',
'Search ID cards, T-shirts, mugs…':'Buscar tarjetas, camisetas, tazas…','Search products':'Buscar productos','Search…':'Buscar…',
'Company':'Empresa','Get a quote':'Pedir presupuesto','Instagram':'Instagram','Website':'Web','Logo printing for businesses':'Impresión de logotipos para empresas',
'Chat on WhatsApp':'Escríbenos por WhatsApp','Open in Google Maps':'Abrir en Google Maps','Open 24 hours':'Abierto 24 horas',
'Home | Shop':'Inicio | Tienda',
/* ---- carrito / presupuesto ---- */
'Quote cart':'Carrito de presupuesto','Request quote':'Pedir presupuesto','Your cart is empty.':'Tu carrito está vacío.','Browse products':'Ver productos',
'Your name *':'Tu nombre *','Phone / WhatsApp *':'Teléfono / WhatsApp *','City':'Ciudad','Email':'Correo electrónico',
'Company and logo details':'Empresa y detalles del logo','Company name, where to place the logo, deadline…':'Nombre de la empresa, dónde colocar el logo, plazo…',
'This is a quote request, not an order. We confirm the final price and design preview before printing.':'Esto es una solicitud de presupuesto, no un pedido. Confirmamos el precio final y la vista previa del diseño antes de imprimir.',
'Submit request':'Enviar solicitud','Back to cart':'Volver al carrito','Sending…':'Enviando…','Request received!':'¡Solicitud recibida!',
'We will call or WhatsApp you soon. Send your logo file on WhatsApp so we can prepare your free preview faster.':'Te llamaremos o te escribiremos por WhatsApp muy pronto. Envíanos tu logo por WhatsApp para preparar tu vista previa gratuita más rápido.',
'Send logo on WhatsApp':'Enviar logo por WhatsApp','Remove':'Quitar','Estimated total':'Total estimado',
'The final quote for printing and delivery will be confirmed later.':'El presupuesto final de impresión y envío se confirmará después.',
'Request quote ':'Pedir presupuesto','Quote on WhatsApp':'Presupuesto por WhatsApp','Decrease':'Reducir','Increase':'Aumentar','Quantity':'Cantidad',
'Added to quote cart':'Añadido al carrito de presupuesto','The server is not connected right now.':'El servidor no está conectado ahora mismo.',
'The server is not connected right now. ':'El servidor no está conectado ahora mismo. ','You can send the quote on WhatsApp.':'Puedes enviarnos el presupuesto por WhatsApp.',
'You can send it on WhatsApp.':'Puedes enviarlo por WhatsApp.','Error':'Error',
'Nothing found. Send us your requirement on the contact page.':'No hemos encontrado nada. Cuéntanos lo que necesitas en la página de contacto.',
/* ---- logo preview ---- */
'Your logo':'Tu logo','Your logo is on every product':'Tu logo aparece en todos los productos','The same logo will show on product pages':'El mismo logo se verá en las páginas de producto',
'Upload your logo to see a preview':'Sube tu logo para ver la vista previa','Free preview. The file stays in your browser only.':'Vista previa gratis. El archivo solo se queda en tu navegador.',
'Change logo':'Cambiar logo','Upload logo':'Subir logo','Logo removed':'Logo eliminado','Logo applied! See the products below':'¡Logo aplicado! Mira los productos de abajo',
'Upload my logo':'Subir mi logo','Remove logo':'Quitar logo',
/* ---- home ---- */
'Logo printing':'Impresión de logotipos','Shop now':'Comprar ahora','Get a free quote':'Pide presupuesto gratis',
'Free design preview':'Vista previa de diseño gratis','Bulk discounts':'Descuentos por volumen','Delivery across Spain':'Envíos a toda España','In-house printing':'Impresión propia',
'Shop by product':'Compra por producto','Whatever your team wears, carries or gifts, with your logo on it.':'Todo lo que tu equipo viste, lleva o regala, con tu logo.',
'All products →':'Todos los productos →','View all →':'Ver todo →','Shop all →':'Ver todo →','All articles →':'Todos los artículos →',
'Free logo preview':'Vista previa de logo gratis','See your logo on our products':'Mira tu logo en nuestros productos',
'Upload your logo':'Sube tu logo','See an automatic preview on every product':'Verás una vista previa automática en cada producto','If you like it, request a quote or order':'Si te gusta, pide presupuesto o encarga',
'Ordering is easy':'Pedir es muy fácil','Send your logo':'Envía tu logo','PNG, JPG, PDF or AI/CDR. On the website or on WhatsApp.':'PNG, JPG, PDF o AI/CDR. Por la web o por WhatsApp.',
'We design a preview with your logo and send it to you. We only print after you approve it.':'Preparamos un diseño con tu logo y te lo enviamos. Solo imprimimos cuando lo apruebas.',
'Print & quality check':'Impresión y control de calidad','In-house printing and a quality check on every piece.':'Impresión propia y control de calidad de cada pieza.',
'Delivery':'Envío','Delivery across Spain with safe packaging.':'Envío a toda España con embalaje seguro.',
'Featured products':'Productos destacados','The most popular branding items.':'Los artículos de marca más pedidos.','New arrivals':'Novedades','Best sellers':'Más vendidos',
'Browse by industry':'Explora por sector','Corporate':'Corporativo','Events':'Eventos','Retail':'Comercio','Startups':'Startups',
'Our work':'Nuestro trabajo','Popular sets made for companies.':'Algunos de los packs más pedidos por empresas.',
'Offers and new products':'Ofertas y novedades','Leave your email and we will send you bulk offers. No spam.':'Déjanos tu email y te enviaremos ofertas por volumen. Sin spam.',
'Your email':'Tu correo electrónico','Subscribe':'Suscribirme','Thank you! You are subscribed.':'¡Gracias! Ya estás suscrito.','Could not submit right now, please try again later.':'No se ha podido enviar ahora, inténtalo de nuevo más tarde.',
'More than printing':'Mucho más que impresión','SK Publicidad is a full marketing and advertising agency, so your brand looks great everywhere.':'SK Publicidad es una agencia de marketing y publicidad integral para que tu marca luzca bien en todas partes.',
'Graphic design':'Diseño gráfico','Professional printing':'Impresión profesional','Websites':'Páginas web','Online stores':'Tiendas online','SEO':'SEO','Google Ads':'Google Ads',
'Social media management':'Gestión de redes sociales','Branding':'Branding','Merchandising':'Merchandising',
'Frequently asked questions':'Preguntas frecuentes',
'What is the minimum order?':'¿Cuál es el pedido mínimo?','It depends on the product and is shown on the product page. ID cards start at 25, T-shirts at 10 and pens at 100.':'Depende del producto y aparece en su ficha. Tarjetas ID desde 25, camisetas desde 10 y bolígrafos desde 100.',
'Will I get a design preview before printing?':'¿Recibiré una vista previa antes de imprimir?','Yes. We send a free design preview with your logo. We only print after you approve it.':'Sí. Te enviamos una vista previa gratuita con tu logo. Solo imprimimos cuando la apruebas.',
'Which logo format should I send?':'¿En qué formato envío el logo?','PNG, JPG, PDF, AI or CDR. A high-quality logo is best. If you do not have one, we can redraw it.':'PNG, JPG, PDF, AI o CDR. Cuanta más calidad, mejor. Si no tienes uno, podemos rehacerlo.',
'How long does delivery take?':'¿Cuánto tarda el envío?','Usually 3 to 7 working days after approval. For large orders we give a separate timeline.':'Normalmente de 3 a 7 días laborables tras la aprobación. En pedidos grandes te indicamos otro plazo.',
'How do I pay?':'¿Cómo se paga?','Once the quote is confirmed, an advance payment (bank transfer or card) and the rest before delivery.':'Al confirmar el presupuesto se abona un anticipo (transferencia o tarjeta) y el resto antes del envío.',
'Our story':'Nuestra historia','Your logo, printed right':'Tu logo, bien impreso','Get a quote':'Pedir presupuesto',
'We print company logos on ID cards, badges, T-shirts, cups, pens and gifts so your brand gets seen. Share your logo, approve the preview, and we deliver.':'Imprimimos logotipos de empresa en tarjetas, identificadores, camisetas, tazas, bolígrafos y regalos para que tu marca se vea. Envíanos tu logo, aprueba la vista previa y nosotros lo entregamos.',
'Your logo on everything your team wears, carries and gifts.':'Tu logo en todo lo que tu equipo viste, lleva y regala.',
'FREE DESIGN PREVIEW | BULK DISCOUNTS FROM 50 PCS | DELIVERY ACROSS SPAIN':'VISTA PREVIA DE DISEÑO GRATIS | DESCUENTOS DESDE 50 UDS. | ENVÍOS A TODA ESPAÑA',
'We drive your business with creative marketing and advertising solutions: graphic design, professional printing, websites, online stores, SEO, Google Ads, social media, branding and merchandising. Quality, speed and personal service across Spain.':'Impulsamos tu negocio con soluciones creativas de marketing y publicidad. Diseño gráfico, impresión profesional, páginas web, tiendas online, SEO, Google Ads, gestión de redes sociales, branding y merchandising. Calidad, rapidez y atención personalizada en toda España.',
'CORPORATE BRANDING':'BRANDING CORPORATIVO','TEAM WEAR':'ROPA DE EQUIPO','GIFTS & GIVEAWAYS':'REGALOS Y DETALLES',
'Your logo on ID cards, badges and uniforms':'Tu logo en tarjetas, identificadores y uniformes','Shop ID cards':'Ver tarjetas ID',
'T-shirts, polos and caps with your company logo':'Camisetas, polos y gorras con el logo de tu empresa','Shop apparel':'Ver ropa',
'Mugs, pens and bottles your clients will keep':'Tazas, bolígrafos y botellas que tus clientes guardarán','Shop gifts':'Ver regalos',
'Office ID cards':'Tarjetas ID para oficina','Event T-shirts':'Camisetas para eventos','Client gift sets':'Packs de regalo para clientes',
'Free design preview':'Vista previa de diseño gratis','Delivery across India':'Envíos a toda España',
'ID card':'Tarjeta ID','Badge':'Identificador','Lanyard':'Cordón','Pen':'Bolígrafo','T-shirt':'Camiseta','Polo':'Polo','Cap':'Gorra','Hoodie':'Sudadera','Mug':'Taza','Bottle':'Botella','Diary':'Agenda','YOUR LOGO':'TU LOGO',
/* ---- tienda ---- */
'For Your Team':'Para tu equipo','For Gifting':'Para regalar','All':'Todo','Badges, T-Shirts & more':'Identificadores, camisetas y más','Gifts for clients':'Regalos para clientes',
'Popular':'Populares','Price: low to high':'Precio: de menor a mayor','Price: high to low':'Precio: de mayor a menor','Sort':'Ordenar',
'Products to print with your logo. Cheaper in bulk, with a free design preview.':'Productos para imprimir con tu logo. Más baratos por volumen y con vista previa de diseño gratis.',
'No products found':'No hemos encontrado productos','Try another category or tell us what you need.':'Prueba otra categoría o cuéntanos lo que necesitas.',
'Add to quote cart':'Añadir al carrito de presupuesto',
/* ---- producto ---- */
'Product not found':'Producto no encontrado','Colour':'Color','selected':'seleccionado','Size':'Talla','Bulk discount':'Descuento por volumen','Discount':'Descuento','Price / pc':'Precio / ud.',
'Ask on WhatsApp':'Consultar por WhatsApp','Material & print':'Material e impresión','Order notes':'Notas del pedido','SKU':'Ref.','Popular in':'Popular en','About this product':'Sobre este producto',
'You may also like':'También te puede gustar','Photo':'Foto','Quantity ':'Cantidad','Quantity':'Cantidad',
/* ---- contacto / blog ---- */
'Tell us what you need. We will get back to you with a free preview and our best price.':'Cuéntanos lo que necesitas. Te contestaremos con una vista previa gratuita y nuestro mejor precio.',
'Quote request':'Solicitud de presupuesto','Name *':'Nombre *','What do you want to print?':'¿Qué quieres imprimir?','Select':'Elegir','Approx. quantity':'Cantidad aproximada','Message':'Mensaje',
'Where to place the logo, deadline, colours…':'Dónde colocar el logo, plazo, colores…','Send your logo file on WhatsApp or by email.':'Envíanos tu logo por WhatsApp o por email.',
'Send request':'Enviar solicitud','Talk to us directly':'Habla con nosotros directamente','Call / WhatsApp':'Llamada / WhatsApp','Address':'Dirección','Opening hours':'Horario',
'Thank you! We received your request.':'¡Gracias! Hemos recibido tu solicitud.','We will contact you soon. Send your logo file on WhatsApp.':'Nos pondremos en contacto muy pronto. Envíanos tu logo por WhatsApp.',
'Tips on branding, printing and corporate gifting.':'Consejos sobre branding, impresión y regalos corporativos.','Coming soon.':'Muy pronto.','Article not found':'Artículo no encontrado',
'Guide':'Guía','How to Choose the Right Logo Print Method':'Cómo elegir el método de impresión de logo adecuado',
'Screen, DTF, sublimation or embroidery? A quick guide to picking the right method for each product.':'¿Serigrafía, DTF, sublimación o bordado? Una guía rápida para elegir el método adecuado para cada producto.',
'Screen printing is best for large runs with one or two colours. It is durable and cost-effective for T-shirts and tote bags.':'La serigrafía es lo mejor para tiradas grandes de uno o dos colores. Es duradera y económica en camisetas y bolsas.',
'DTF handles full-colour logos and photos on cotton and blends without minimum colour limits. Embroidery gives a premium feel on polos and caps.':'El DTF permite logos y fotos a todo color sobre algodón y mezclas, sin límite de colores. El bordado da un acabado premium en polos y gorras.',
'Not sure? Send your logo and we will suggest the best method and show a free preview before printing.':'¿No lo tienes claro? Envíanos tu logo, te sugerimos el mejor método y te mostramos una vista previa gratis antes de imprimir.',
'5 Branded Items That Actually Get Used':'5 artículos de marca que de verdad se usan',
'Not every giveaway works. These five keep your logo in front of people every single day.':'No todos los regalos funcionan. Estos cinco mantienen tu logo delante de la gente todos los días.',
'Mugs, pens, bottles, diaries and T-shirts top the list because people use them daily at work or home.':'Tazas, bolígrafos, botellas, agendas y camisetas encabezan la lista porque se usan a diario en el trabajo o en casa.',
'Choose quality over quantity. A well-made bottle is kept for years while a cheap giveaway is thrown away.':'Mejor calidad que cantidad. Una botella bien hecha se conserva años; un regalo barato acaba en la basura.',
'Match the item to your audience: staff get uniforms, clients get diaries and bottles, event guests get tote bags and pens.':'Adapta el artículo a tu público: uniformes para el personal, agendas y botellas para clientes, bolsas y bolígrafos para los asistentes a eventos.',
'ID Cards and Lanyards: What Every Office Needs':'Tarjetas ID y cordones: lo que necesita toda oficina',
'Photo ID cards improve security and make your team look professional. Here is how to order them right.':'Las tarjetas de identificación con foto mejoran la seguridad y dan imagen profesional. Así se piden bien.',
'Collect employee names, designations, IDs and photos in one spreadsheet. Clean photos with plain backgrounds print best.':'Reúne nombres, cargos, identificadores y fotos de tu plantilla en una sola hoja de cálculo. Las fotos limpias con fondo liso se imprimen mejor.',
'Match lanyard colours to your brand and add a retractable holder if staff swipe cards at doors.':'Combina el color de los cordones con tu marca y añade un portatarjetas retráctil si tu equipo pasa la tarjeta por puertas.',
'Order a few extra cards for new joiners so onboarding is smooth.':'Pide unas tarjetas de más para nuevas incorporaciones y facilita su llegada.',
/* ---- categorias ---- */
'ID Cards & Lanyards':'Tarjetas ID y cordones','PVC ID cards printed edge-to-edge with your logo, photo and employee details.':'Tarjetas PVC impresas de borde a borde con tu logo, foto y datos del empleado.',
'Name Badges':'Identificadores','Magnetic and pin name badges with your company logo, sharp and reusable.':'Identificadores magnéticos y de alfiler con el logo de tu empresa, nítidos y reutilizables.',
'T-Shirts & Polos':'Camisetas y polos','Round-neck and polo T-shirts with DTF, screen or embroidery logo printing.':'Camisetas de cuello redondo y polos con logo en DTF, serigrafía o bordado.',
'Caps & Uniforms':'Gorras y uniformes','Caps, hoodies and uniform wear branded with your logo for the whole team.':'Gorras, sudaderas y uniformes con tu logo para todo el equipo.',
'Cups & Mugs':'Vasos y tazas','Ceramic mugs and paper cups printed with your logo and brand colours.':'Tazas de cerámica y vasos de papel impresos con tu logo y los colores de tu marca.',
'Pens & Stationery':'Bolígrafos y papelería','Plastic and metal pens with laser or colour logo print for office and events.':'Bolígrafos de plástico y metal con logo en láser o a color para oficina y eventos.',
'Corporate Gifts':'Regalos corporativos','Bottles, diaries, tote bags and gift sets branded for clients and staff.':'Botellas, agendas, bolsas y sets de regalo con marca para clientes y personal.',
'ID Cards':'Tarjetas ID','Badges':'Identificadores','T-Shirts':'Camisetas','Cups & Pens':'Tazas y bolígrafos','Gifts':'Regalos',
/* ---- productos ---- */
'Cotton Tote Bag with Logo':'Bolsa de algodón con logo','Sturdy canvas tote with your logo screen printed. Perfect for conferences, exhibitions and retail packaging.':'Bolsa de lona resistente con tu logo serigrafiado. Perfecta para congresos, ferias y envoltorio de tienda.','Cotton canvas, screen print':'Lona de algodón, serigrafía',
'Corporate Diary with Logo':'Agenda corporativa con logo','A5 hardbound diary with your logo foil-stamped on the cover and optional company details inside. Year-end gifting favourite.':'Agenda A5 de tapa dura con tu logo estampado en foil en la cubierta y datos de empresa opcionales en el interior. Favorita para regalos de fin de año.','PU cover, 200 pages, foil stamping':'Cubierta de PU, 200 páginas, estampado en foil',
'Branded Steel Water Bottle':'Botella de acero personalizada','750 ml stainless steel bottle with your logo laser engraved or colour printed. Keeps drinks hot or cold for hours.':'Botella de acero inoxidable de 750 ml con tu logo grabado en láser o impreso a color. Mantiene las bebidas frías o calientes durante horas.','Stainless steel 750ml, laser / UV print':'Acero inoxidable 750 ml, láser / impresión UV',
'Metal Pen with Laser Engraved Logo':'Bolígrafo metálico con logo grabado en láser','Premium metal pen with a laser-engraved logo that never fades. Comes in a slim gift box on request.':'Bolígrafo metálico premium con logo grabado en láser que no se borra. Con estuche de regalo bajo petición.','Aluminium, laser engraving':'Aluminio, grabado láser',
'Plastic Pen with Logo':'Bolígrafo de plástico con logo','Smooth-writing ball pen with your company logo printed on the barrel. The most popular giveaway for offices and shows.':'Bolígrafo de escritura suave con el logo de tu empresa en el cuerpo. El regalo promocional más popular en oficinas y ferias.','ABS plastic, screen print':'Plástico ABS, serigrafía',
'Printed Paper Cups (Pack of 100)':'Vasos de papel personalizados (pack de 100)','Hot and cold drink paper cups with your logo printed all around. For cafes, offices and events.':'Vasos de papel para bebidas frías y calientes con tu logo impreso alrededor. Para cafeterías, oficinas y eventos.','Food-grade paper, flexo print':'Papel alimentario, impresión flexo',
'Magic Colour-Change Mug':'Taza mágica que cambia de color','Black mug that reveals your logo and design when a hot drink is poured. A memorable promotional item.':'Taza negra que revela tu logo y diseño al verter una bebida caliente. Un artículo promocional que no se olvida.','Ceramic 11oz, heat-sensitive coating':'Cerámica 11 oz, recubrimiento termosensible',
'Ceramic Mug with Logo':'Taza de cerámica con logo','11 oz white ceramic mug with high-gloss, dishwasher-safe logo print. A gift your clients actually use every day.':'Taza blanca de cerámica de 11 oz con logo brillante apto para lavavajillas. Un regalo que tus clientes usan a diario.','Ceramic 11oz, sublimation print':'Cerámica 11 oz, impresión por sublimación',
'Hoodie with Logo Print':'Sudadera con capucha y logo impreso','Fleece-lined 320 GSM hoodie with your logo printed or embroidered. Winter staff wear and startup merch.':'Sudadera de 320 g/m² con forro polar y tu logo impreso o bordado. Ropa de trabajo para invierno y merchandising para startups.','320 GSM fleece, DTF print or embroidery':'Felpa 320 g/m², DTF o bordado',
'Cap with Embroidered Logo':'Gorra con logo bordado','Adjustable cotton cap with your logo embroidered on the front. Sun-proof team wear and promotional giveaway.':'Gorra de algodón ajustable con tu logo bordado en el frente. Ropa de equipo para el sol y regalo promocional.','Cotton twill, 3D / flat embroidery':'Sarga de algodón, bordado 3D / plano',
'Dri-Fit Sports T-Shirt':'Camiseta deportiva técnica Dri-Fit','Lightweight breathable dri-fit T-shirt with full-front sublimation print. For marathons, tournaments and school sports days.':'Camiseta técnica ligera y transpirable con sublimación en todo el frontal. Para maratones, torneos y jornadas deportivas escolares.','Polyester dri-fit, sublimation print':'Poliéster técnico, sublimación',
'Polo T-Shirt with Embroidered Logo':'Polo con logo bordado','Dual-tone collar polo in 220 GSM cotton blend with your logo embroidered on the chest. The classic corporate uniform.':'Polo de cuello bicolor en mezcla de algodón de 220 g/m² con tu logo bordado en el pecho. El uniforme corporativo clásico.','220 GSM cotton blend, machine embroidery':'Mezcla de algodón 220 g/m², bordado a máquina',
'Round-Neck T-Shirt with Logo':'Camiseta de cuello redondo con logo','180 GSM combed cotton round-neck T-shirt with your logo on chest or back. Perfect for events, promotions and teams.':'Camiseta de algodón peinado de 180 g/m² con tu logo en el pecho o la espalda. Perfecta para eventos, promociones y equipos.','180 GSM cotton, DTF print':'Algodón 180 g/m², impresión DTF',
'Pin / Safety-Clip Name Badge':'Identificador con alfiler / clip de seguridad','Budget-friendly name badge with pin or safety-clip back. Ideal for retail, hospitals and restaurant staff.':'Identificador económico con alfiler o clip de seguridad. Ideal para comercio, hospitales y restauración.','Acrylic / aluminium, pin or clip back':'Acrílico / aluminio, alfiler o clip',
'Magnetic Name Badge':'Identificador magnético con nombre','Premium magnetic badge with your logo and the wearer\'s name. No pin holes in clothes, reusable and professional.':'Identificador magnético premium con tu logo y el nombre de quien lo lleva. Sin agujeros en la ropa, reutilizable y profesional.','Aluminium plate, magnetic back, UV colour print':'Placa de aluminio, imán trasero, impresión UV a color',
'Printed Lanyards (Logo on Both Sides)':'Cordones personalizados (logo en ambas caras)','Soft polyester lanyards with repeated logo or text print, metal hook and safety breakaway option. Great for events and offices.':'Cordones suaves de poliéster con logo o texto repetido, mosquetón metálico y opción de cierre de seguridad. Genial para eventos y oficinas.','Polyester 20mm, dye-sublimation print':'Poliéster 20 mm, sublimación',
'ID Card + Lanyard + Holder Combo':'Pack tarjeta ID + cordón + portatarjetas','Complete set: printed PVC ID card, branded lanyard with your logo and a clear card holder. Ready to wear on day one.':'Set completo: tarjeta PVC impresa, cordón con tu logo y portatarjetas transparente. Listo para usar desde el primer día.','PVC card, polyester lanyard, PVC holder':'Tarjeta PVC, cordón de poliéster, portatarjetas PVC',
'PVC ID Card with Logo':'Tarjeta de identificación PVC con logo','Standard CR80 PVC ID card, both sides printed in full colour with your company logo, employee photo, name and ID number. Glossy finish, long-lasting.':'Tarjeta PVC estándar CR80 impresa a todo color por ambas caras con el logo de tu empresa, foto, nombre y número del empleado. Acabado brillante y duradero.','PVC 0.76mm, full-colour digital print':'PVC 0,76 mm, impresión digital a todo color',
/* ---- notas de pedido (frases sueltas) ---- */
'Send logo + employee list in Excel.':'Envía el logo y la lista de empleados en Excel.','Lanyard colour matched to your brand.':'Color del cordón a juego con tu marca.','Free design preview.':'Vista previa de diseño gratis.',
'Bulk discount from 50 pieces.':'Descuento por volumen desde 50 unidades.','Gift box optional.':'Caja de regalo opcional.'
};

var UNIT={cards:'tarjetas',card:'tarjeta',sets:'sets',pieces:'unidades',pcs:'uds.',badges:'identificadores',bags:'bolsas',diaries:'agendas',bottles:'botellas',pens:'bolígrafos',cups:'vasos',mugs:'tazas'};
function tlKnown(c){return ES.hasOwnProperty(c)?ES[c]:null}
var RULES=[
 [/^Min\. (\d+) pcs?$/,function(m){return'Mín. '+m[1]+' uds.'}],
 [/^(\d+)% OFF$/,function(m){return m[1]+'% DTO.'}],
 [/^\/ pc$/,function(){return'/ ud.'}],[/^\/ piece$/,function(){return'/ unidad'}],
 [/^\(min (\d+)\)$/,function(m){return'(mín. '+m[1]+')'}],
 [/^(\d+)(\+|–\d+) pcs$/,function(m){return m[1]+m[2]+' uds.'}],
 [/^(\d+)% off$/,function(m){return m[1]+'% dto.'}],
 [/^Minimum order (\d+) pcs · Free design preview · VAT extra$/,function(m){return'Pedido mínimo '+m[1]+' uds. · Vista previa de diseño gratis · IVA no incluido'}],
 [/^Minimum order (\d+) ([a-z]+)(?: \((\d+) packs\))?\.?$/,function(m){return'Pedido mínimo: '+m[1]+' '+(UNIT[m[2]]||m[2])+(m[3]?' ('+m[3]+' packs)':'')+'.'}],
 [/^(.+) \/ pc(?: \(−(\d+)% bulk\))?$/,function(m){return m[1]+' / ud.'+(m[2]?' (−'+m[2]+'% por volumen)':'')}],
 [/^Estimated total \((\d+)% bulk discount\)$/,function(m){return'Total estimado ('+m[1]+'% de descuento por volumen)'}],
 [/^Bulk discount: (.+)$/,function(m){return'Descuento por volumen: '+m[1].replace(/ pcs = (\d+)% off/g,' uds. = $1% dto.')}],
 [/^Photo (\d+)$/,function(m){return'Foto '+m[1]}],[/^Slide (\d+)$/,function(m){return'Diapositiva '+m[1]}],
 [/^Colour (#[0-9a-fA-F]{3,8})$/,function(m){return'Color '+m[1]}],
 [/^(.+) branding$/,function(m){var k=tlKnown(m[1]);return k?'Branding '+k.toLowerCase():null}],
 [/^© (\d+) (.+)\. All rights reserved\.$/,function(m){return'© '+m[1]+' '+m[2]+'. Todos los derechos reservados.'}]
];
function one(c){var k=tlKnown(c);if(k!=null)return k;for(var i=0;i<RULES.length;i++){var m=RULES[i][0].exec(c);if(m){var r=RULES[i][1](m);if(r!=null)return r}}return null}
function tl(s){
 if(lang!=='es'||!s)return s;
 var c=String(s).trim();if(!c)return s;
 var lead=s.match(/^\s*/)[0],trail=s.match(/\s*$/)[0],r=one(c);
 if(r!=null)return lead+r+trail;
 if(c.indexOf('. ')>0){var parts=c.split(/(?<=\.)\s+/),ch=false,out=parts.map(function(p){var x=one(p);if(x!=null){ch=true;return x}return p});if(ch)return lead+out.join(' ')+trail}
 return s}
/* para mensajes de WhatsApp (varias lineas, con nombres de producto) */
var MSG=[['Hi, I want to get my company logo printed.','Hola, quiero imprimir el logotipo de mi empresa.'],
 ['Hi, I just sent a quote request. Sending my logo now.','Hola, acabo de enviar una solicitud de presupuesto. Te envío mi logo ahora.'],
 ['Hi, I want to check the status of my order.','Hola, quiero consultar el estado de mi pedido.'],
 ['Hi, I want a quote for:','Hola, quiero un presupuesto de:'],['Hi, I want a quote for','Hola, quiero un presupuesto de']];
var KEYS=Object.keys(ES).filter(function(k){return k.length>14}).sort(function(a,b){return b.length-a.length});
function tlMsg(s){if(lang!=='es')return s;s=String(s);MSG.forEach(function(p){s=s.split(p[0]).join(p[1])});KEYS.forEach(function(k){if(s.indexOf(k)>-1)s=s.split(k).join(ES[k])});return s}

var ATTR=['placeholder','aria-label','alt','title'];
function walk(n){
 if(n.nodeType===3){var v=n.nodeValue,t=tl(v);if(t!==v)n.nodeValue=t;return}
 if(n.nodeType!==1)return;
 var tag=n.nodeName;if(tag==='SCRIPT'||tag==='STYLE'||n.hasAttribute('data-notr'))return;
 for(var i=0;i<ATTR.length;i++){var a=n.getAttribute(ATTR[i]);if(a){var t2=tl(a);if(t2!==a)n.setAttribute(ATTR[i],t2)}}
 for(var c=n.firstChild;c;c=c.nextSibling)walk(c)}

window.SKI={lang:lang,tl:tl,tlMsg:tlMsg,
 set:function(l){try{localStorage.setItem('sk_lang',l)}catch(e){}location.reload()}};
document.documentElement.lang=lang;

if(lang==='es'){
 var start=function(){
  walk(document.body);
  new MutationObserver(function(ms){ms.forEach(function(m){if(m.type==='characterData')walk(m.target);else m.addedNodes.forEach(walk)})})
   .observe(document.body,{childList:true,subtree:true,characterData:true});
 };
 if(document.body)start();else document.addEventListener('DOMContentLoaded',start);
}
})();
