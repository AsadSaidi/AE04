# Creación de tienda — Apuntes del curso

Apuntes redactados a partir de la transcripción automática (faster-whisper, modelo *small*) de los 58 vídeos del curso (lecciones 1–59; la 11 no existe) y del contenido de los 16 PDF de la carpeta de Drive. No es una transcripción literal: está resumido y reorganizado.

- **[dudoso]** marca datos que no se entienden bien en el audio o que no se pueden confirmar.
- Los enlaces, códigos y prompts de los PDF aparecen en la lección correspondiente, en el apartado **"Recursos del PDF"**.
- El ejemplo que sigue todo el curso es una tienda de un solo producto: **TrimPaws**, un recortador silencioso para las patas de los perros.
- Avisos importantes:
  - Lección 51: el vídeo "Katching Bundles" contiene en realidad el mismo clip de 12 s que la lección 59 (ver la lección).
  - Algunas prácticas que enseña el curso (packaging o logos de medios "de mentira", reseñas creadas por la tienda, garantías que luego no se aplican tal cual) pueden ir contra las políticas de publicidad de Meta o las normas de consumo de tu país. Revísalo antes de aplicarlas.

## Índice

1. [Lección 1 — Introducción: cuándo y cómo seguir esta sección](#leccion-01)
2. [Lección 2 — Por qué se hacen las cosas: venta impulsiva](#leccion-02)
3. [Lección 3 — Tiendas de ejemplo: qué tienen en común](#leccion-03)
4. [Lección 4 — Nombre de marca y correo de la tienda](#leccion-04)
5. [Lección 5 — Creación de la tienda Shopify (con tema gratuito)](#leccion-05)
6. [Lección 6 — Comprar e instalar Shrine Pro](#leccion-06)
7. [Lección 7 — Crear el producto y elegir su nombre](#leccion-07)
8. [Lección 8 — Qué precio poner: psicología de precios](#leccion-08)
9. [Lección 9 — Desactivar "Rastrear cantidad" (evitar el "Agotado")](#leccion-09)
10. [Lección 10 — Añadir variantes](#leccion-10)
11. [Lección 12 — Cambiar idioma del panel, idioma de la tienda y nombre](#leccion-12)
12. [Lección 13 — Conoce a tu cliente potencial (investigación de mercado)](#leccion-13)
13. [Lección 14 — Personalizar el tema: siempre en móvil y sin página de inicio](#leccion-14)
14. [Lección 15 — Extensión para ver webs en formato móvil](#leccion-15)
15. [Lección 16 — Barra de anuncios](#leccion-16)
16. [Lección 17 — Crear el logo (Canva o IA)](#leccion-17)
17. [Lección 18 — Comprar el dominio y vincularlo a Shopify](#leccion-18)
18. [Lección 19 — Paleta de colores (psicología del color)](#leccion-19)
19. [Lección 20 — Saber qué colores usa la competencia](#leccion-20)
20. [Lección 21 — Fotografías del producto](#leccion-21)
21. [Lección 22 — Galería: miniaturas, márgenes y línea separadora](#leccion-22)
22. [Lección 23 — Valoración con estrellas encima del nombre del producto](#leccion-23)
23. [Lección 24 — Título del producto en la página](#leccion-24)
24. [Lección 25 — Emoji benefits](#leccion-25)
25. [Lección 26 — Bundles (selector de cantidad con descuentos)](#leccion-26)
26. [Lección 27 — Botón de compra y tipo de carrito](#leccion-27)
27. [Lección 28 — Iconos de pago (payment badges)](#leccion-28)
28. [Lección 29 — Reseñas debajo del botón de compra](#leccion-29)
29. [Lección 30 — Filas desplegables (qué incluye, envío y garantía)](#leccion-30)
30. [Lección 31 — Orden de la descripción (estructura de bloques)](#leccion-31)
31. [Lección 32 — Descripción tipo PAS (Problema – Agitación – Solución)](#leccion-32)
32. [Lección 33 — Descripción tipo BFEL (Beneficio – Función – Emoción – Lógica)](#leccion-33)
33. [Lección 34 — Image/Video slider (vídeos tipo reseña)](#leccion-34)
34. [Lección 35 — FAQ (preguntas frecuentes)](#leccion-35)
35. [Lección 36 — Bloque imagen con texto (problema)](#leccion-36)
36. [Lección 37 — Horizontal ticker (logos de medios) y testimonios](#leccion-37)
37. [Lección 38 — Bloque de solución (imagen/vídeo + texto)](#leccion-38)
38. [Lección 39 — GIF o antes/después (Before & After slider)](#leccion-39)
39. [Lección 40 — Garantía, tabla comparativa y revisión con ChatGPT](#leccion-40)
40. [Lección 41 — Sticky Add to Cart, ajustes de vídeo, "Powered by Shrine" y logo en el checkout](#leccion-41)
41. [Lección 42 — Políticas legales, menú del pie y cookies](#leccion-42)
42. [Lección 43 — App Track123: página de seguimiento de pedidos y menú principal](#leccion-43)
43. [Lección 44 — Plantillas de producto (extra)](#leccion-44)
44. [Lección 45 — Mercados y tarifas de envío](#leccion-45)
45. [Lección 46 — Teléfono obligatorio en la pantalla de pago](#leccion-46)
46. [Lección 47 — Reseñas con Loox](#leccion-47)
47. [Lección 48 — Importar reseñas a Loox por CSV](#leccion-48)
48. [Lección 49 — Recrear la tienda con el tema gratuito (Zendrop)](#leccion-49)
49. [Lección 50 — Prime Bundles (bundles con el tema gratuito)](#leccion-50)
50. [Lección 51 — "Katching Bundles" ⚠️ contenido no coincide](#leccion-51)
51. [Lección 52 — Katching Bundles: protección de envío y extras del carrito](#leccion-52)
52. [Lección 53 — Sticky Add to Cart y section divider con el tema gratuito](#leccion-53)
53. [Lección 54 — EZGIF: de vídeo a GIF, recorte y peso](#leccion-54)
54. [Lección 55 — Variant Picker para ofertas por variantes](#leccion-55)
55. [Lección 56 — Personalizar el tema por mercado (Shopify Advanced)](#leccion-56)
56. [Lección 57 — Catálogos: precio distinto por país](#leccion-57)
57. [Lección 58 — Botón "Añadir al carrito" más grande y color Amazon](#leccion-58)
58. [Lección 59 — Formulario de creación de tienda](#leccion-59)

---

<a id="leccion-01"></a>

## Lección 1 — Introducción: cuándo y cómo seguir esta sección

**De qué va:** presentación de la parte de creación de tienda y del enfoque del curso.

**Ideas clave**
- No tiene sentido montar la tienda sin tener ya un **producto validado**.
- Recomendación del autor: ver la sección entera una primera vez **sin hacer nada**, solo tomando apuntes, y luego repetirla aplicando cada paso. Hacerlo directamente sobre la marcha es posible, pero advierte que se suele perder dinero.
- El método es crear **tiendas de marca de un solo producto** (one-product store), no tiendas generalistas con 20 productos: todo (colores, textos, descripciones) gira alrededor del cliente ideal, su problema y la solución.

**Avisos**
- El autor desaconseja expresamente las tiendas con muchos productos: según él, no funcionan y el curso no las enseña.

---

<a id="leccion-02"></a>

## Lección 2 — Por qué se hacen las cosas: venta impulsiva

**De qué va:** el principio que justifica todo el diseño de la tienda.

**Ideas clave**
- El dropshipping/e-commerce de este tipo es **venta impulsiva**: si el cliente se para a pensar, compara en Amazon/AliExpress u otras marcas y la venta se pierde.
- Por eso la tienda se construye para ser **funcional** (que genere impulso de compra), no solo bonita.
- Todo se enfoca al cliente ideal: si el público son, por ejemplo, mujeres de 30–50 años con un problema concreto, los colores, el logo, las tipografías, las imágenes y las reseñas (texto y fotos) se eligen para resolver sus dudas y tocar su problema.
- Elementos que se verán: paletas de colores, estructura de la descripción, orden de bloques, fotos, oferta, *emoji benefits* y neuromarketing.

**Consejo:** tomar apuntes de todo; la tienda bien hecha + el producto (+ los creativos) son la clave.

---

<a id="leccion-03"></a>

## Lección 3 — Tiendas de ejemplo: qué tienen en común

**De qué va:** análisis de tiendas de referencia para detectar patrones.

**Patrones que comparten**
- **Color con intención emocional** según el nicho. Ejemplos citados:
  - Azul → salud (también salud/comida de mascotas) y seguridad (p. ej. una alarma).
  - Rosa → belleza.
  - Tonos cálidos/suaves → maternidad, amor.
  - Colores vivos → infantil, juegos.
  - Negro/gris → viajes, seriedad, diseño, tecnología, coches.
  - Azul muy oscuro y apagado → producto serio/masculino.
  - Rosa con lila/morado → producto para mujeres.
- **Prueba social** muy visible: miles de reseñas (cifras de 325 a 33.000 en los ejemplos). Al pulsar en las estrellas te lleva a las reseñas.
- **Reseñas cuidadas**: las primeras con foto, nombres creíbles del país de venta y textos que atacan el problema (no "llegó rápido"). Algunas tiendas usan Trustpilot, que da aún más confianza.
- **Buenas imágenes** con fondos en el color de marca, mostrando al cliente ideal usando el producto.
- **Emoji benefits** (beneficios con emoji) en casi todas.
- Estructuras de página parecidas.

**Idea de fondo:** el curso no solo enseña *cómo* poner cada elemento, sino *por qué*, para poder adaptarlo a cada nicho (mascotas, salud, belleza…).

---

<a id="leccion-04"></a>

## Lección 4 — Nombre de marca y correo de la tienda

**De qué va:** elegir el nombre de la marca antes de crear la tienda y crear un correo con ese nombre.

**Pasos**
1. **No hace falta comprar todavía un dominio de correo** propio: se ahorra dinero usando Gmail.
2. Abrir **Namelix** (generador de nombres) y el documento de **prompts** (hacer una copia del Google Doc; enlace abajo).
3. Prompt 1 en ChatGPT: pedir una lista larga de **palabras clave** para la herramienta de nombres, describiendo el producto y el objetivo de la marca (en el ejemplo: un recortador de pelo silencioso para perros, "DogTrimmer", marca enfocada a perros/mascotas, sin limitarse a ese único producto).
4. En Namelix:
   - Escribir una palabra clave (ej. "Paws").
   - Elegir el estilo **Brandable names** (nombres inventados que no significan nada, como "Amazon") o **Short phrase**.
   - Marcar **Random ideas** (ideas más locas).
   - Describir el producto (ej. "I'm selling a dog trimmer for pet owners") y pegar las palabras clave que dio ChatGPT.
5. Revisar las propuestas (en el ejemplo salieron PetCute, SnipPaw, Groomster, TrimTail, "Trimipaws"…).
6. Comprobar disponibilidad del dominio en **GoDaddy** o **Namecheap** (ej. `.com` ocupado; probar variantes o `.co`, `.store`, `.pet`).
7. Alternativa: prompt 2 en ChatGPT ("eres un experto en e-commerce…") pidiendo al menos 10 nombres fáciles de recordar, que funcionen en redes y con dominio disponible. Así se eligió **TrimPaws** (más corto que Trimipaws).
8. Crear un Gmail del tipo **`info<marca>@gmail.com`** (ej. `infotrimpaws@gmail.com`) y abrir la tienda con ese correo. Cambiarlo después es posible pero engorroso.

**Avisos**
- Gmail puede rechazar un teléfono ya usado muchas veces para verificar: usar otro número (de otra persona) o crear el correo en otro proveedor (Hotmail…).
- Los nombres deben tener algo de sentido, pero no hay que obsesionarse.
- El mismo documento de prompts incluye otro prompt para el **título del producto** (se usa en la lección 7).

**Herramientas:** Namelix, ChatGPT, GoDaddy/Namecheap, Gmail.

**Recursos del PDF "4. Herramientas"**
- Namelix: <https://namelix.com/>
- Drive prompt creación de tienda (hacer copia): <https://docs.google.com/document/d/1CPjTUpVhmXpacbHC47VzUhIJBkJYkJGn/copy>

---

<a id="leccion-05"></a>

## Lección 5 — Creación de la tienda Shopify (con tema gratuito)

**De qué va:** abrir la tienda Shopify a través del enlace del curso para obtener gratis un tema parecido a Shrine Pro y dejarla limpia.

**Contexto:** el tema recomendado es **Shrine Pro** (unos 300 $). Quien no quiera pagarlo todavía puede registrarse desde el enlace del curso y obtener **un tema gratuito muy parecido** (el de Zendrop/StoreBuild). Registrarse con el enlace da bonificaciones al autor sin coste extra para ti.

**Pasos**
1. Abrir el enlace del curso → "Crear mi tienda gratis": nombre, correo y teléfono → "Reclamar tu tienda".
2. En el asistente, las opciones de nicho y banner dan igual (se borrará todo). **Color: elegir naranja, no azul**, porque el azul da problemas.
3. "Reclamar mi tienda ahora" → "Crear cuenta de Shopify" con **el mismo correo**.
4. Oferta: **3 meses por 1 €** en el plan Basic → empezar la prueba gratis.
5. **País de registro de la tienda:** pon el país desde el que vas a poder **verificar los datos y los cobros**, no el país donde vas a vender.
   - Ejemplos: mexicano que vende en EE. UU. → México; colombiano que vende en México → Colombia; español que vende en EE. UU. sin LLC → España.
   - Solo si tienes empresa en otro país (p. ej. una **LLC** en EE. UU.) pones ese país.
   - Si no, no podrás verificar la tienda ni activar Shopify Payments.
6. En el asistente de Shopify: **"Omitir todo" (Skip)**.
7. Elegir el **plan Basic** con el descuento (1 € × 3 meses) → introducir tarjeta (o PayPal) → verificar → dirección de facturación y teléfono → guardar.
8. Volver al asistente del enlace → copiar la URL `.myshopify.com` → pegarla → guardar → siguiente.
9. "Añadir productos ganadores" → instalar la app **Zendrop** cuando la pida (se borrará después).
10. "Recibir la tienda" → **Publicar** → esperar el tick → siguiente.
11. **Quitar la contraseña** de la tienda (interruptor arriba a la derecha) → guardar.
12. **Limpieza:**
    - Productos → seleccionar todos → ⋯ → eliminar. Repetir, porque a veces se añaden más con retraso (hasta unos 10).
    - Aplicaciones → *Apps and sales channel settings* → Zendrop → ⋯ → **Uninstall**, para que no cobre. **El tema no se pierde.**
    - Si llega algún cargo, escribir a Zendrop: lo devuelven.

**Avisos**
- Aunque uses el tema gratuito, el autor pide no saltarse ningún vídeo: en todos explica neuromarketing. Al final de la sección explica cómo replicar con este tema lo que se hace con Shrine.
- Shrine Pro, según el autor, sube mucho la conversión: regalos, tablas de comparación, antes/después, *reels*, porcentajes animados, carrito avanzado…

**Recursos del PDF "5. Enlace para crear tu tienda"**
- <https://app.storebuild.ai/crea-tu-tienda/adsbyorganicecom>

---

<a id="leccion-06"></a>

## Lección 6 — Comprar e instalar Shrine Pro

**De qué va:** compra de la licencia de Shrine Pro, alta de la clave y conexión con la tienda.

**Licencias**
- **Una licencia = una tienda activa.** Para más tiendas se compran más licencias (con descuento por volumen).
- Precio mostrado: **349 $** (sin el *Lifetime Support*, que se puede quitar). Con el código del autor bajó a **≈297 $** en el vídeo.
- Hay **Shrine** normal y **Shrine Pro**. El autor recomienda el **Pro** porque incluye bundles, upsells y carrito avanzado (lo que "más dinero da") y porque no se puede hacer upgrade después.

**Pasos de compra**
1. Añadir 1 licencia al carrito → aplicar el código de descuento.
2. **Poner como país de facturación uno sin IVA** (Andorra o EE. UU.); con España se añade un 21 % de IVA (~60 $ más). Con empresa se puede poner el número de IVA (VAT).
3. Usar un correo al que tengas acceso (puede ser el de la tienda), porque la licencia llega por email. Completar tarjeta, dirección y **teléfono** (es obligatorio) → *Complete purchase*.

**Activar y conectar**
1. En el email, abrir el enlace para crear la cuenta en Shrine (o iniciar sesión) → *Add existing key* → pegar la licencia → *Add key*.
2. **Connect store**:
   - *Website URL*: tu dominio (si aún no lo tienes, poner también la URL `https://…myshopify.com`).
   - *Shopify URL*: la `.myshopify.com`.
   - Ambas con `https://`.
3. Guardar y **generar el token** → *Copy token* → **descargar el tema** (.zip).
4. En Shopify → Tienda online → Temas: borrar el tema de muestra que sobra (no el de Zendrop) → **Import theme / Upload zip file** → subir el .zip (el botón cambia de sitio según la versión de Shopify).
5. Cuando aparezca como añadido → **Publicar**.
6. Si al personalizar el tema da error: *Theme settings* → **Authentication** → pegar el **token** → guardar. A veces ya viene puesto.

**Avisos**
- **No usar un Shrine pirata**: según el autor, rompe el carrito y otras funciones y no sabrás por qué no vendes. Antes que eso, mejor el tema gratuito.
- Al cambiar al dominio definitivo hay que actualizar la URL en Shrine y volver a poner el token (lo enseña más adelante).
- Si el token da error, suele ser porque el navegador **traduce la página**: desactivar la traducción.

**Recursos del PDF "6. Enlace a Shrine PRO"**
- <https://shrinesolutions.com/?ref=adsorganicecom>
- Código **ADSORGANICECOM**: 25 % de descuento.
- Nota: en el vídeo el código que se aplica suena a "Marc Verdú" [dudoso] y baja de 349 $ a ≈297 $ (≈15 %). El PDF indica otro código (ADSORGANICECOM, 25 %). Usa el que funcione en el momento.

---

<a id="leccion-07"></a>

## Lección 7 — Crear el producto y elegir su nombre

**De qué va:** crear la ficha del producto con título, una foto provisional y precio.

**Pasos**
1. Productos → borrar lo que sobre → **Añadir producto**. La tienda puede salir en inglés; el cambio de idioma se ve en la lección 12.
2. **Título** con el prompt de nombres de producto (del documento de prompts) en ChatGPT:
   - Incluir la descripción o el **link del competidor** que vende lo mismo y le va bien (en el ejemplo, una tienda de Reino Unido).
   - El nombre debe transmitir el **beneficio principal/transformación** y el **mecanismo único**, con 3–4 palabras como máximo, en el idioma del mercado.
   - Si las propuestas son flojas, darle más contexto: nombre de la marca al inicio ("TrimPaws"), beneficios (silencioso, no hace daño, ahorra peluquería) y el título del competidor (tipo "3 en 1 Electric Dog Trimmer").
   - Se puede añadir **™** tras el nombre: da sensación de marca.
   - Elegido: **"TrimPaws™ Recortador Profesional en Casa"** [dudoso: formato exacto]. "Profesional" gusta porque da sensación premium y sugiere ahorrar frente a la peluquería.
3. **Descripción:** de momento ninguna (se explica después).
4. **Foto provisional** (luego se rehace):
   - Buscar el producto en Amazon y asegurarse de que es exactamente la misma variante; si hace falta, usar **Google Lens** para encontrarlo.
   - Elegir una imagen limpia, mejor sin fondo.
   - En **Canva**: tamaño personalizado **1080 × 1080** (tamaño Shopify) → pegar la imagen → quitar el fondo → opcional, añadir la foto de un perro y una sombra → descargar → subir a Shopify → guardar.
5. Categoría: suele asignarse por defecto. Precio: siguiente lección.

**Herramientas:** ChatGPT, Amazon, Google Lens, Canva.

**Recursos del PDF "7. Drive prompt creación de tienda"**
- <https://docs.google.com/document/d/1CPjTUpVhmXpacbHC47VzUhIJBkJYkJGn/copy>

---

<a id="leccion-08"></a>

## Lección 8 — Qué precio poner: psicología de precios

**De qué va:** cómo fijar el precio de venta y el precio tachado.

**Conceptos**
- **Efecto del dígito izquierdo:** terminar en **,95 / ,99 / ,97** (el autor casi siempre usa **,95**). 19,99 se percibe mucho más barato que 20 porque leemos de izquierda a derecha.
  - Además, la gente redondea hacia abajo al justificar un gasto ("me costó 10 y pico").
  - Y percibe ese tipo de terminación como precio de oferta.
- **Efecto anclaje (precio de comparación):** el precio tachado hace que el actual parezca barato. Se usa siempre, pero tiene que ser **creíble**.
- **Números redondos** (20, 50): solo en productos premium de **más de ~130–150 €/$**, para dar sensación de calidad y lujo.
- **Números "exactos"** (19,83): parecen calculados y transparentes. El autor no los usa.
- Urgencia/escasez y precios señuelo: se ven más adelante.

**Cómo calcular**
1. **Precio de venta = coste del producto × 3**, terminado en ,95 bajando un número. Ejemplo: coste ~9,39 € con envío a España → ~10 × 3 = 30 → **29,95 €**.
2. **Precio de comparación:** **no poner el doble** a ciegas, porque es demasiado agresivo y nadie se lo cree. Mirar precios del mismo tipo de producto en **Amazon** (en el ejemplo, entre 30 y 55 €) y poner algo creíble. Elegido: **44,95–45,95 €** [dudoso: cifra final exacta]; 49,95 también valdría.
3. Revisar la **competencia** (en el ejemplo vendía a 19,99 £ con precio de comparación de 39,99 £, ≈46 €). Vender algo más caro es aceptable.
4. Guardar.

**Resumen del autor:** el precio no es solo lo que cuesta, sino cómo lo siente el cliente.

---

<a id="leccion-09"></a>

## Lección 9 — Desactivar "Rastrear cantidad" (evitar el "Agotado")

**De qué va:** un error frecuente que hace que el producto salga como agotado.

**Pasos**
1. En la ficha del producto → **Inventario**: si está activado **"Track quantity" (Rastrear cantidad)** con stock 0, la web muestra **Agotado**.
2. **Desactivar "Track quantity"** siempre → guardar.

**Aviso:** hacerlo en todos los productos; en dropshipping no se lleva stock propio.

---

<a id="leccion-10"></a>

## Lección 10 — Añadir variantes

**De qué va:** crear variantes de color u opciones personalizadas.

**Pasos**
1. "Producto físico": no tocar (salvo productos digitales).
2. **Variantes → Color** → añadir valores (ej. *Blue*, *Brown*, *Clear*) → *Done* → guardar.
3. Entrar en **cada variante** para ajustar su **precio** y asignarle su **imagen**.
4. Si la variante no es de color: **Create custom option** (ej. "Velocidades": 3, 5…) → *Done* → guardar → entrar en cada una para precio y foto.

---

<a id="leccion-12"></a>

## Lección 12 — Cambiar idioma del panel, idioma de la tienda y nombre

**De qué va:** dejar Shopify y la tienda en español y poner el nombre de la marca.

**Pasos**
1. **Idioma del panel (dashboard):** clic en tu usuario/correo (arriba) → perfil → **Idioma: Español**. Opcional: zona horaria (ej. Madrid/Bruselas) → *Save* → recargar (a veces tarda).
2. **Idioma de la tienda:** Configuración → **Idiomas** → *Cambiar predeterminado* de inglés a **español** → guardar.
   - Algunos textos seguirán en inglés porque vienen del tema (se corrigen más adelante).
3. **Nombre de la tienda:** Configuración → **General** → editar → nombre de la marca (ej. **TrimPaws**), en lugar del nombre por defecto.
4. **Moneda:** en Configuración → General → *Cambiar moneda de la tienda* (ej. a dólares si vendes en EE. UU.). En el ejemplo se deja en euros.

---

<a id="leccion-13"></a>

## Lección 13 — Conoce a tu cliente potencial (investigación de mercado)

**De qué va:** conocer al cliente ideal "mejor de lo que se conoce a sí mismo" antes de montar la página de producto. La lección la presenta otro ponente del curso.

**Fuentes**
- **Reseñas de Amazon** y **páginas de producto de la competencia**: muestran cómo el producto resuelve el problema.
- **Foros** (p. ej. Reddit): muestran el dolor que siente la gente antes de resolver el problema y cómo se expresa.

**Pasos**
1. Crear **4 documentos en Google Drive**:
   - Análisis de la competencia.
   - Reseñas de Amazon.
   - Posts de foros.
   - Resultado de ChatGPT.
2. **Amazon** (amazon.com): buscar tu producto o, si no está, uno que resuelva el mismo problema o del mismo nicho.
   - Fíjate en que sea realmente equivalente: en el ejemplo se descarta un cortapelos de cuerpo entero porque el producto es para las patas.
3. Aprovechar el **resumen por IA de las reseñas** de Amazon ("Customers say…") en varios listings. En el ejemplo destacaba que no hace ruido, que se usa con una mano, el tamaño y la batería. Con eso casi se podría hacer la página.
4. Leer **al menos 10 páginas de reseñas** y guardar **las 5 mejores**: cargadas de **emoción** y que mencionen **beneficios** del producto (más silencioso, sin cable…). No hace falta que sean largas.
5. **Foros:** buscar con muchas palabras clave (no solo el nombre del producto) y guardar los **5 mejores posts**.
   - En el ejemplo: hilos sobre cómo recortar el pelo bajo las patas, el **mal olor por hongos/infección** entre las almohadillas (un ángulo de venta clave) y peticiones de recomendación de recortadoras.
   - También salió que preocupa mucho **cortar las uñas** al perro: idea para un producto complementario u otra tienda.
6. **ChatGPT** con el prompt de perfil de cliente ideal (en amarillo, lo que hay que rellenar):
   - Link del competidor que vende lo mismo, o una descripción muy completa.
   - Las reseñas de Amazon.
   - Los posts de foros.
7. Guardar la respuesta en el documento.

**Resultado del ejemplo (resumido)**
- **Cliente:** mujeres de 35–65 años con perros pequeños/medianos, sobre todo mayores, sensibles o nerviosos.
- **Problema principal:** el ruido y la vibración del recorte estresan al perro.
- **Título del cliente ideal:** "mujer dueña de un perro nervioso y difícil de asear".
- **Problema físico:** no poder asear zonas delicadas (patas, cara, almohadillas) por la resistencia del animal.
- **Problema emocional:** culpa, frustración y vergüenza por no cuidar bien a su perro.
- **Transformación deseada:** sentirse una dueña responsable, capaz y orgullosa, con más conexión con su mascota y sin estrés ni culpa.
- El prompt también genera historias y frases tipo "Me siento…" que se reutilizan en la página.

**Recursos del PDF "13. Drive prompt perfil ideal"**
- Documento (hacer copia): <https://docs.google.com/document/d/1eIt-YciFFwvSsKez_ITmd5ZYzkf5cWkI1vFc2AgiaRI/copy>
- Prompt "Perfil del Cliente Ideal". Le das tu producto o el link de tu competidor nº 1, más 3–5 reseñas de Amazon y 3–5 posts de foros, y pide:
  - Demografía, problema principal y causas.
  - Título del cliente ideal.
  - "Conoce a nuestro cliente" (nombre, edad, rutina, trabajo, aficiones, problema).
  - Problema físico principal y transformación física principal.
  - Problema emocional principal y transformación emocional principal.
  - Transformación secundaria.
  - Temor principal.
  - Falsas creencias.
  - Otras soluciones y por qué no funcionan.
  - Mecanismo único.
  - Beneficios adicionales.
  - Frases y palabras comunes del cliente.
  - Historia negativa breve e historia positiva breve.
  - 5 frases "Me siento…" y 5 frases "Soy…".
  - Información adicional.
- Opcional, según el PDF: repetir el ejercicio para otro perfil con otro problema, o añadir más reseñas/posts si la respuesta no convence.

---

<a id="leccion-14"></a>

## Lección 14 — Personalizar el tema: siempre en móvil y sin página de inicio

**De qué va:** criterios básicos antes de tocar el tema.

**Pasos y ajustes**
1. Tienda online → Temas → **Personalizar** (Shrine o el tema gratuito). Se abre la **página de inicio**; la página de producto tiene secciones distintas.
2. **Editar siempre en vista móvil** (selector Computadora / **Móvil**): la publicidad en Meta (posts e historias de Instagram/Facebook) se ve sobre todo desde el móvil. Solo con Google Ads, más adelante, hay que cuidar también la vista de ordenador.
3. Activar el **inspector**: al pasar el ratón muestra qué sección es cada cosa.
4. **Página de inicio:**
   - Borrar todas las secciones (y ocultar las que no se puedan borrar).
   - **Agregar sección → Producto destacado** → seleccionar tu producto → guardar. Si alguien entra, pulsará "Ver todos los detalles" e irá a la página de producto.
5. **El enlace de los anuncios es siempre la URL de la página de producto.** Esa es la página que se optimiza.

**Avisos**
- No perder tiempo en la página de inicio mientras se testea el producto: nadie entra ahí.
- Marcas grandes (en los ejemplos, Pocket Speech) apenas cuidan la portada; su esfuerzo está en la página de producto.
- Excepción: marcas con catálogo (p. ej. ropa), o cuando ya se escala.

---

<a id="leccion-15"></a>

## Lección 15 — Extensión para ver webs en formato móvil

**De qué va:** ver cómo tiene la competencia su tienda en móvil.

- Con F12 (herramientas de desarrollador) normalmente puedes simular el móvil, pero **en tiendas con Shrine no funciona**.
- Solución: instalar la extensión de Chrome **"Simulador móvil – herramienta"**:
  1. Añadir a Chrome → añadir extensión.
  2. Aceptar cookies.
  3. **Fijarla** en la barra.
  4. Pulsarla sobre cualquier web para verla en formato móvil.
- Es gratuita.

**Recursos del PDF "15. Enlace a extensión de Chrome"**
- <https://chromewebstore.google.com/detail/simulador-m%C3%B3vil-herramien/ckejmhbmlajgoklhgbapkiccekfoccmk?hl=es&pli=1>

---

<a id="leccion-16"></a>

## Lección 16 — Barra de anuncios

**De qué va:** el primer bloque que ve el cliente; se usa para **urgencia y escasez** (sobre todo urgencia).

**Ejemplos vistos en otras tiendas**
- "Free shipping today".
- "Descuento de julio 50 % + 3 regalos con cada pedido".
- "Flash sale 50 % + envío gratis".
- "Prime sale 60 % off + free gifts".

**Pasos y valores**
1. Texto de la barra con la oferta. Ejemplos del vídeo:
   - "Descuento de julio: 34 % + 3 regalos gratis".
   - "Súper descuento del 34 % + 3 regalos gratis".
   - Usar "regalos gratis" juntos, aunque sea redundante: "gratis" atrae más.
2. **Que no ocupe dos líneas en móvil:** tamaño de texto en móvil **14** (lo habitual del autor) o **13** si no cabe.
3. **Quitar el icono** (preferencia del autor) y poner el texto en **negrita** si queda bien.
4. Truco: hacer capturas de las ofertas de la competencia y pedir a ChatGPT variantes para tu descuento y tus regalos.

**Emojis**
- En nichos serios (salud, cuidado del perro) **no** se ponen, porque restan profesionalidad.
- En nichos femeninos o infantiles, sí.
- Ante la duda, no ponerlos.

---

<a id="leccion-17"></a>

## Lección 17 — Crear el logo (Canva o IA)

**De qué va:** un logo sencillo y coherente con lo que transmite el producto.

**Idea clave:** las marcas de referencia tienen logos muy simples, a menudo solo **una buena tipografía**, a veces con un pequeño icono (en los ejemplos, Doggy Kings y Pocket Speech). No hacen falta logos recargados.

**Pasos en Canva**
1. Crear diseño → tamaño personalizado **2000 × 500 px**.
2. Buscar plantillas escribiendo **"logo"** en "Crear" (salen en formato cuadrado, pero sirven de idea) junto al nicho ("dog", "pet").
   - El autor recomienda **pagar Canva Pro**; en el vídeo lo hace con la versión gratuita.
3. Elegir estilos acordes al producto. En el ejemplo, un cuidado de salud con aire "veterinario/peluquería canina", no infantil. Copiar 2–3 opciones a páginas del diseño 2000 × 500.
4. Rehacerlas con el nombre de la marca (TrimPaws). Ideas:
   - Integrar una **huella** como punto de la "i" o al final del nombre. Buscar en Elementos "paws" una huella alargada, de perro y no de gato.
   - Poner una parte del nombre más clara o sin negrita ("Trim") y otra en negrita ("Paws").
5. **Color del texto: no usar negro puro `#000000`**, sino **`#1C1C1C`** (un gris muy oscuro). El negro puro da sensación de amateur.
6. Exportar:
   - Con Canva Pro: **descargar con fondo transparente**.
   - Sin Pro: hacer un recorte de pantalla para evitar la marca de agua.
7. Shopify → Personalizar → **Configuración del tema → Logo** → subir en el campo **principal** (no en el secundario).
8. Ajustar **"Mobile logo width"** (ancho del logo en móvil) hasta que se vea bien; 300 es demasiado grande.
9. Si dudas: pasar a ChatGPT las opciones con el contexto del producto y la competencia y pedir su valoración. En el ejemplo eligió la opción con aspecto de veterinario.

**Avisos**
- La tipografía debe ir con el mensaje: nada de letras infantiles para un producto de salud, ni para belleza dirigida a mujeres adultas.
- Más adelante hay un módulo de branding con otra experta del curso; si dice algo distinto, hacerle caso a ella.
- Los colores se ajustan en la siguiente lección.

---

<a id="leccion-18"></a>

## Lección 18 — Comprar el dominio y vincularlo a Shopify

**De qué va:** comprar el dominio directamente en Shopify y ponerlo como principal.

**Por qué en Shopify:** antes el autor recomendaba GoDaddy o Hostinger, pero últimamente vincularlos da muchos errores. En Shopify es algo más caro, pero da "cero errores".

**Pasos**
1. Configuración → **Dominios** → **Comprar un dominio nuevo** → buscar la marca (ej. `trimpaws.com`).
2. Si el `.com` está ocupado:
   - Probar con **una "d" delante** (ej. `dtrimpaws.com`), ~16 $.
   - El autor desaconseja `.shop` o `.store` (más baratos y casi siempre libres): prefiere pagar unos dólares más por un `.com`.
3. Al comprar, **desactivar la renovación automática anual**, para que no te cobren dominios de tiendas abandonadas; renovarlo a mano si hace falta. Con una marca ya fuerte, vigilar que no caduque.
4. Comprar → *Ver estado del dominio* → **verificar el correo** que llega para completar el registro.
5. En Dominios aparecerá **"SSL pendiente"** (normal; tarda ~5 min o algo más).
6. Entrar en el dominio con **www** → *Cambiar tipo de dominio* → **Dominio principal**.
7. Mientras el SSL esté pendiente, la web puede dar error: seguir trabajando y se arregla solo.

**Consejo de presupuesto:** si vas a testear productos de nichos distintos, compra **un dominio con un nombre que no signifique nada** (como en Namelix, pidiéndolo en el prompt) y reutilízalo para todos, cambiando solo el logo. Así no gastas en un dominio por cada test.

**Si lo compras fuera:** en Shopify usar *Conectar dominio existente* y hacer la vinculación.

**Recordatorio:** con Shrine, al cambiar de dominio hay que actualizar la URL en tu cuenta de Shrine (lección 6).

---

<a id="leccion-19"></a>

## Lección 19 — Paleta de colores (psicología del color)

**De qué va:** elegir el color principal y una paleta coherente con el producto y el cliente ideal. Según el autor, el color puede hacer que alguien se vaya sin leer nada.

**Psicología del color (resumen del vídeo)**
- **Rojo:** dinamismo, calidez, pasión… pero también agresividad y peligro. Arma de doble filo (Coca-Cola, Nintendo).
- **Azul:** profesionalidad, seriedad, integridad, calma, confianza, salud e higiene.
- **Verde:** naturaleza, ética, crecimiento, frescura, salud, orgánico.
- **Amarillo:** calidez y alegría, pero se lee mal con texto. El autor no lo usaría salvo que no haya alternativa.
- **Naranja:** innovación, juventud, diversión, accesibilidad.
- **Blanco:** pureza y paz. Siempre es el **fondo** de la web.
- Hay que equilibrar la psicología con el color del propio producto.

**Pasos**
1. Pasar a **ChatGPT**:
   - El link del producto (proveedor o AliExpress).
   - El **perfil del cliente ideal** de la lección 13. Si no lo tienes, describe el problema que resuelves; en el ejemplo, recortar las patas para evitar hongos y resbalones, sin ruido para perros pequeños, miedosos o mayores, y ahorrando peluquería.
   - El público: mujeres de 30–65 años con perros pequeños o medianos.
   - Pedir qué color usar según la psicología del color.
2. En el ejemplo salió **azul** (confianza, calma, salud), por delante del verde. Pedir a ChatGPT los **códigos HEX** de varios tonos: pastel/celeste, claro, intermedio y marino.
3. Probarlos en Shopify: Personalizar → **Configuración del tema → Colores**.
   - **Acento 1** (primario) = color principal: encabezado/barra de anuncios.
   - **Acento 2** = elementos secundarios (p. ej. la etiqueta de ahorro "Save").
4. Montar una **paleta**: el tono oscuro para banners/encabezados (profesionalidad) y los otros tonos para botones, etiquetas de oferta y detalles.

**Reglas de la paleta**
- **Colores distintos: máximo 3, contando el blanco del fondo.**
- **Tonos de un mismo color: máximo 3, sin contar el blanco** (ej. 3 azules, o 3 lilas como una de las tiendas de ejemplo). El texto oscuro aparte es normal.
- Usar varios tonos del mismo color da más sensación de marca, como hacen las grandes marcas. Es opcional.

**Logo y color**
- Probar el logo en azul oscuro, azul claro y negro (`#1C1C1C`).
- Hacer capturas de la tienda con cada opción y preguntar a ChatGPT cuál transmite mejor lo buscado. En el ejemplo recomendó el **azul oscuro** como equilibrio entre profesionalidad y cercanía. El negro es más serio y corporativo.
- El autor admite que, al final, le gusta más el logo **negro** y que no es una decisión crítica.

**Aviso:** si el logo lleva un icono que no encaja (ej. un gato en una marca solo para perros), quitarlo.

---

<a id="leccion-20"></a>

## Lección 20 — Saber qué colores usa la competencia

**De qué va:** validar el color mirando a la competencia y copiar códigos de color exactos.

**Buscar competencia**
1. **Google Lens** con la foto del producto. Si solo salen AliExpress o similares, buscar en Google (mejor en **incógnito** y, si se puede, con **VPN de EE. UU.**) el nombre del producto (ej. "dog trimmer").
2. Herramientas de espionaje de anuncios: **GetHookd**, **Minea**, **AdSpy** [dudoso: nombres exactos de las herramientas].
   - Filtrar por rendimiento alto (performance 4–5) para ver tiendas que venden.
   - Usar *Hide brand* para ocultar una marca que acapara resultados.
   - También la **biblioteca de anuncios de Meta (Ads Library)** o TikTok.
3. Observación del ejemplo: **el azul aparece en casi todas las marcas de perros** (Doggy Kings usa un verde; otra usaba el mismo azul que la tienda del ejemplo).
4. Comprobar que esa competencia **vende** con **SimilarWeb** antes de fijarse en sus colores. En el ejemplo, una tenía 28–47 mil visitas.

**Copiar un color exacto**
- Extensión **ColorZilla** (Chrome): añadirla y fijarla → *selector de color de la página activa* → clic sobre el color → copia el HEX (ej. `#050B49`) → pegarlo en Shopify (Colores) o en Canva.
- Alternativa en **Canva**: color → añadir nuevo → **cuentagotas** sobre la web abierta en otra pestaña o sobre una foto.

**Aviso:** los colores no son de nadie, pero si puedes, usa tu propio tono, para que quien vea las dos tiendas seguidas no piense "es lo mismo".

**Recursos del PDF "20. Enlace a Colorzilla"**
- <https://chromewebstore.google.com/detail/colorzilla/bhlhnicpbhignbdhedgjhgdocnmhomnp?hl=es-419>

---

<a id="leccion-21"></a>

## Lección 21 — Fotografías del producto

**De qué va:** qué fotos poner en la galería del producto y cómo hacer rápido la foto principal y las infografías en Canva.

**Patrón de las marcas que venden (análisis del vídeo)**
1. **Foto principal** limpia, con fondo en el color de marca (o degradado blanco → color), mostrando el producto en la **mano** del cliente ideal (para ver tamaño y calidad) y, a menudo:
   - **regalos** incluidos;
   - una **garantía** ("Feel better or get your money back");
   - o el **descuento**.
2. **Infografías**: fotos con información que responden objeciones (cómo funciona, qué incluye, cuánto ahorras, tablas, beneficios, aval de un médico…).
3. **Antes/después**, varias veces.
4. **Persona usando el producto** (modelo con la que el cliente se identifica).
5. **Reseñas en imagen** (foto + comentario tipo Facebook) y prueba social.
- Amazon es el referente en infografías: la gente no lee los *bullet points*, mira las imágenes. Los vendedores que más venden tienen las mejores infografías y resuelven más objeciones.

**Foto principal en Canva (paso a paso del ejemplo)**
1. Diseño **1080 × 1080**.
2. Subir una foto de calidad del producto (de la **variante** que vendes) → **quitar fondo**.
3. Fondo con el color de marca o un **degradado** (desde el centro, blanco + color).
4. **Sombra** al producto (estilo "paralela" para dar profundidad).
5. Opcional:
   - Generar con **ChatGPT** un *packaging* con tu logo y colores, para que parezca marca.
   - Ponerlo detrás del producto.
6. **Regalos:** círculos blancos con iconos de los regalos.
   - Ejemplos: e-book, cepillo de limpieza, correa (*leash*), *mystery box*.
   - Título tipo **"3 regalos gratis"** en tipografía **Poppins** (la del tema), con una flecha sutil.
7. Variante: mostrar solo los regalos y añadir **antes/después** del perro (copiar la imagen → quitar fondo).
8. Descargar → subir a Shopify como **primera imagen** → guardar.

**Infografías rápidas**
- Tomar como base las de la competencia y **recrearlas con tus colores**: quitar fondo, poner tus colores, añadir formas y líneas, estrellas ("5 stars").
- Ejemplo: "Han confiado en nosotros más de 90.000 dueños de perros".
- **Collage de clientes contentos:**
  - Elementos → **marcos**.
  - Rellenarlos con fotos de **reseñas con imagen** de Amazon (filtrar *opiniones con imágenes* en el producto más vendido) o de la competencia.
  - Que salgan **personas** con el producto o con el animal.

**Avisos**
- No poner solo una foto del producto sobre fondo blanco: según el autor, "no es de marca".
- Mientras testeas, prioriza la **velocidad**: no crees infografías desde cero.
- **No copies literalmente** imágenes de la competencia: te pueden tumbar la tienda. Adáptalas.
- No mostrar en la foto principal regalos o *packaging* que luego no llegan de verdad: el autor lo hace en el ejemplo, pero pide "tener cuidado con esto".
- Más adelante hay un módulo específico de Canva y edición.

---

<a id="leccion-22"></a>

## Lección 22 — Galería: miniaturas, márgenes y línea separadora

**De qué va:** dejar la galería de fotos limpia en móvil y quitar la línea del encabezado. Incluye también cómo descargar imágenes y GIF de otras webs.

**Orden de la galería del ejemplo:**
1. Foto principal con los 3 regalos.
2. Collage de reseñas: "más de 21.000 dueños de perros". El autor bajó la cifra de 90.000 porque era exagerada.
3. Infografía de garantía: "pruébalo durante 30 días; si no te encanta, te devolvemos el dinero".
4. Infografía de beneficios: silencioso, cortes seguros sin estrés, batería recargable, ahorro, 30 días de prueba.
5. Comparativa con la peluquería canina.

Toma como base el orden de la competencia.

**Ajustes (Personalizar → página de producto → bloque "Información de producto")**
1. **Scroll padding (px) = 0**, para que la foto ocupe todo el ancho y no asome la siguiente.
2. **Spacing between slides:** algo de separación entre fotos si son de fondo blanco. En el ejemplo se dejó en 0 porque la siguiente foto era azul.
3. **Miniaturas** (*Mobile media → Thumbnails position*): viene en *Hidden*.
   - Poner **Bottom** (debajo). **Nunca a la izquierda**.
   - Número de miniaturas visibles igual al número de fotos, o uno menos para que se intuya que hay más. Que nunca quede un hueco.
   - Si la competencia no usa miniaturas, no las pongas. Si las usa, sí. El autor suele ponerlas.
4. **Paginación** (puntos/números/flechas): con miniaturas, ocultarla o dejar solo las flechas.
5. **Línea separadora del encabezado:** con el inspector, clic en el logo (encabezado) → desactivar **"Mostrar líneas separadoras"**. Queda más profesional.

**Descargar imágenes y GIF de otras webs**
- Extensiones de Chrome **Image Downloader** y **Video DownloadHelper**: añadir, fijar y usar en la web de la competencia.
- Los GIF se descargan como imagen. Para vídeos, usar DownloadHelper e ir probando cuál es cada archivo.

**Avisos del autor**
- **Packaging de "mentira"** (mostrar una caja de marca que no llega así):
  - Según el autor sube la conversión. Si alguien se queja, propone explicar que hubo rotura de stock de la caja personalizada y ofrecer un 20 % en la siguiente compra.
  - Si hay **muchas quejas**, quitarlo, porque Meta puede considerarlo **publicidad engañosa**.
  - Al escalar, fabricar una caja parecida y usar su foto real.
- **Usar fotos de la competencia** es rápido para testear, pero puede traer problemas con Meta o por marca. Cuando vayas en serio, no lo hagas.

**Recursos del PDF "22. Enlaces a extensiones de Chrome"**
- Image Downloader: <https://chromewebstore.google.com/detail/image-downloader/cnpniohnfphhjihaiiggeabnkjhpaldj>
- Video DownloadHelper: <https://www.downloadhelper.net/>

---

<a id="leccion-23"></a>

## Lección 23 — Valoración con estrellas encima del nombre del producto

**De qué va:** mover el bloque de estrellas de Shrine encima del título y redactarlo bien.

**Pasos y valores**
1. Arrastrar el bloque de **reseñas/estrellas** a la **primera posición**, encima del título.
2. **Nota media: entre 4,8 y 4,9. Nunca 5**, porque parece falso.
3. **Color de las estrellas:** el autor recomienda no cambiarlo (ya hay bastante color). Si se cambia, nada estridente; mirar la competencia.
4. **Texto:** en vez del típico "668 ★★★★★", algo más informativo, por ejemplo:
   - "4,8/5 · +21.500 reseñas", o
   - una frase dirigida al cliente: "+21.500 padres de perros", "dueños de mascotas".
   - El número tiene que cuadrar con lo que dicen las fotos (21.000 en la infografía).
5. **Nunca en dos líneas:** bajar el tamaño de fuente (12–13 en el ejemplo), quitar palabras ("Valorado") o ambas cosas. Negrita opcional (en la lección 24 la quita porque abultaba).
6. **Bottom margin = 0**, para pegarlo al título. Alineación a la izquierda.

**Aviso:** en el texto del vídeo se habla de "más de 21 mil reseñas". El número de reseñas que conviene mostrar se trata más adelante. Con Facebook Ads, que no parezca una exageración.

---

<a id="leccion-24"></a>

## Lección 24 — Título del producto en la página

**De qué va:** tamaño y contenido del título.

**Pasos**
1. Bloque **Título** → tamaño **Small**, para que quepa en ~2 líneas. Con Medium ocupaba 3 líneas y con Large era desproporcionado.
   - Objetivo: que toda la información clave se vea nada más abrir en el móvil.
2. **Mayúsculas:** se activan desde el propio bloque, no cambiando el nombre del producto. El autor no lo recomienda porque queda feo.
3. **Contenido:** si el producto ya se entiende por las fotos, en vez de "Marca + qué es" se puede poner **"Marca + beneficios"**.
   - Ejemplo del vídeo: "TrimPaws: sin estrés, silencioso y en casa".
4. Repasar el conjunto: en el ejemplo quitó la negrita a las estrellas porque abultaban demasiado.

**Aviso:** a veces el editor de Shopify no refresca los cambios. Volver a la página de inicio, entrar de nuevo en el producto y se actualiza.

---

<a id="leccion-25"></a>

## Lección 25 — Emoji benefits

**De qué va:** la lista de beneficios con emoji bajo el título, presente en casi todas las marcas. El curso la usa para **dar información y atacar emociones**, más que para "envío gratis" o "regalos".

**Pasos**
1. Información del producto → debajo del título → **Agregar bloque → "Emoji benefit"**.
2. Márgenes: unos **6 px** arriba y abajo (o *bottom margin* bajo) para que quede compacto.
3. **Qué poner:** lo que **más valoran los clientes**.
   - Mirar las reseñas en **Amazon (mejor .com, EE. UU.)** de un producto equivalente con muchas ventas (en el ejemplo, 13.000).
   - Fijarse en el resumen de valoraciones y en las reseñas más completas: muestran el punto de dolor y lo que más gusta.
   - Pegar varias reseñas en **ChatGPT** y pedir "¿qué es lo que más valora la gente de este producto? Hazme una lista de beneficios".
4. **Emoji:** buscarlo en **Emojipedia** o pedirlo a ChatGPT. Evitar caras si no encajan; en el ejemplo, un altavoz silenciado para "silencioso".
5. **Texto:** pedir a ChatGPT frases breves.
   - Ejemplos: "Cero ruido, cero estrés", "Sin ruido, sin miedo".
   - Emoji y texto en la **misma línea**, en **negrita**, formato párrafo (o título 5/6 si queda mejor).
6. Beneficios finales del ejemplo:
   - Sin ruido, sin miedo.
   - Inalámbrico y fácil de manejar.
   - Sin tirones ni cortes.
   - Mejora la vida del perro.
7. Quitar los dos puntos y cuidar que **ninguno ocupe dos líneas**.

**Valores:** **3–4** emoji benefits (los ejemplos tenían 3).

**Avisos**
- No usar beneficios que suenen a "chollo" (p. ej. "excelente relación calidad-precio"): el autor dice que suena a estafa.
- Las ofertas no van aquí; van en los bundles.

---

<a id="leccion-26"></a>

## Lección 26 — Bundles (selector de cantidad con descuentos)

**De qué va:** ofertas por cantidad (compra 1, compra 2 y ahorra…) para subir el ticket medio, y cómo crear los descuentos reales en Shopify para que el precio cuadre en el carrito.

**Pasos en el tema**
1. **Ocultar el bloque "Precio"** (ojo): el precio ya aparece en el bundle y repetirlo sobra.
2. Activar el bloque **"Quantity selector"** (bundles):
   - Mantener activada la opción de cantidad.
   - Título del bloque: cambiar "Bundle & save" por algo como "Ofertas y descuentos", "Compra más, ahorra más" o una fecha especial (Black Friday, Día de la Madre).
   - Estilo **Classic** (el más usado).
   - **Opción preseleccionada: la 2.** Sube el gasto medio; quien quiera puede elegir la 1.
   - Esquinas: si dudas, dejarlas como estaban. Producto redondeado, esquinas redondeadas; producto cuadrado, cuadradas. Los botones algo redondeados convierten mejor.
   - Con variantes de color, activar **"Enable variant selector on single quantity"**.
3. Configurar cada opción (*Buy one*, *Buy two*…): texto ("Compra 1", "Compra 2…"), "You save" → "Te ahorras", cantidad y tipo de descuento (porcentaje o importe fijo).
4. **Etiqueta (badge)** en la opción 2: "Más popular". Si hay 3 opciones, la etiqueta va igualmente en la 2.
5. Cambiar los colores que vengan en **lila** por el color de marca (o un negro normal). El color de marca se copia de Configuración del tema → Colores.
6. Para quitar opciones sobrantes: cantidad de la opción 3 a **0** y desactivar la 4.

**Crear el descuento real (imprescindible)**
- El bundle **solo muestra** el descuento. Si no se crea en Shopify, en el carrito se cobra el precio completo y el cliente se siente estafado.
- **Descuento por cantidad:**
  1. Admin → **Descuentos → Crear descuento → Descuento en productos → Automático**.
  2. Porcentaje o importe fijo (ej. 5 $).
  3. Aplicar al producto concreto.
  4. **Una vez por pedido**.
  5. Sin requisitos mínimos.
  6. Guardar.
- **"Compra 2 y llévate 1 gratis":**
  1. En el bundle, poner **3 unidades** al precio de 2.
  2. Crear un descuento **"Compra X, llévate Y" (Buy X get Y)** automático:
     - Cantidad mínima **2** del producto.
     - El cliente se lleva **1** del mismo producto **gratis**.
     - Sin límite de usos por pedido.
  3. Así el carrito muestra 2 × precio y una unidad a 0 en vez de cobrar las 3.

**Valores recomendados:** **máximo 3 opciones**, siempre con la del medio preseleccionada. Comprueba que el descuento te sigue siendo rentable.

**Aviso:** la sección de ofertas se ve en profundidad en otro módulo del curso.

---

<a id="leccion-27"></a>

## Lección 27 — Botón de compra y tipo de carrito

**De qué va:** configurar el botón "Agregar al carrito" para que todo el mundo pase por el carrito.

**Pasos**
1. Bloque **Botones de compra**:
   - **Desactivar "Mostrar botones de pago dinámico"** (pago directo) y no activar nunca *skip cart*. En el carrito se ofrecerán más cosas.
   - **Quitar las mayúsculas** (menos fricción).
   - Texto: normalmente **"Agregar al carrito"** (lo que funciona mejor). Se puede cambiar por "Comprar ahora", "Hazte con tu oferta"…
   - **Color del botón:** el azul de la marca.
   - Márgenes superior e inferior a gusto (se pueden quitar).
2. **Configuración del tema → Carrito (Cart) → tipo "Lateral" (drawer)**, ni página ni notificación emergente. Así, si alguien añade sin querer, sigue en la misma página y no se pierde.

---

<a id="leccion-28"></a>

## Lección 28 — Iconos de pago (payment badges)

**De qué va:** mostrar los métodos de pago debajo del botón y en el carrito. Suele funcionar en la mayoría de países.

**Pasos**
1. Debajo de los botones de compra → **Agregar bloque → Payment badges**.
2. Para elegirlos, pasar a ChatGPT la lista de iconos disponibles y el país de venta. Pedir los más usados por orden de relevancia.
   - Ejemplo: Visa, Mastercard, PayPal, Apple Pay, Google Pay, Shop Pay, Klarna…
3. Escribir los nombres separados por **espacio** (ej. `visa master paypal apple_pay klarna google_pay`) [dudoso: formato exacto de los identificadores].
4. **Siempre en una sola línea:** si salta a dos, quitar el último.
5. Repetir en el **carrito**: añadir un producto → sección **Cart drawer** → *Payment badges* → pegar la misma lista.

**Aviso:** al editar cosas del carrito, a veces Shrine no deja deshacer. El autor lo atribuye a un fallo del tema.

---

<a id="leccion-29"></a>

## Lección 29 — Reseñas debajo del botón de compra

**De qué va:** quitar la fecha estimada de entrega y poner tres reseñas cortas que rompan objeciones.

**Pasos**
1. **Quitar el bloque de "recíbelo el día X"**: con envíos desde China, mostrar una fecha a 10+ días echa para atrás. Solo tiene sentido con envíos de 2–4 días.
2. Bloque de **reviews** bajo el botón: **3 reseñas**, ni más ni menos.
3. **De dónde sacarlas:** reseñas de Amazon del producto equivalente, traducidas.
   - Elegir las realistas y que **rompan objeciones**.
   - Acortarlas y quitar lo que no aporte o genere dudas (en el ejemplo, una mención a semillas de pasto y un "por el precio").
   - Ejemplos resumidos: "es silencioso y mi perro se acostumbró enseguida, imprescindible si tienes un perro peludo"; "silenciosa, llega a las zonas pequeñas de las patas y no necesita estar enchufada".
   - Se puede personalizar con el nombre de la mascota.
4. **Nombre del autor de la reseña:** común en el país de venta y coherente con el cliente ideal.
   - Ejemplos: mujeres de 30–55 años en España, "Susana", "Maricarmen", "Paola F."
   - Para EE. UU., pedir a ChatGPT nombres comunes de ese perfil.
5. **Foto (opcional y arriesgado):** solo si estás seguro.
   - Imagen de una mujer adulta con su mascota, de bancos gratuitos o Google.
   - Recortarla en Canva (~300 × 300 o 400 × 400).
   - Ante la duda, sin foto.
6. Márgenes superior/inferior a 0. No tocar fondo, esquinas ni bordes. Se puede elegir visualización con flechas o puntos.

---

<a id="leccion-30"></a>

## Lección 30 — Filas desplegables (qué incluye, envío y garantía)

**De qué va:** los desplegables bajo el botón de compra, con información que da confianza.

**Qué se suele poner (según la competencia):** qué incluye el pedido, envío y garantía/devoluciones. Productos especiales añaden otros (edad recomendada, dónde se usa, cómo funciona…).

**Pasos**
1. Información del producto → **Agregar bloque → Fila desplegable** (o duplicar una existente). Normalmente **3**.
2. Para el **icono**, escribir el nombre de uno de la librería de iconos del tema (ej. `box`) o subir uno propio (SVG o hecho en Canva).
3. **Fila 1 · "¿Qué incluye?" / "Regalos gratis":** lista del pedido.
   - Ejemplo: 1× TrimPaws, 1× cable de carga, 1× e-book de educación canina gratis, 1× caja misteriosa (valorada en +15 €), 1× correa de paseo gratis.
   - Refuerza que hay regalos.
4. **Fila 2 · Envío:**
   - Título tipo "Envío con seguimiento" o "Envío gratis y asegurado".
   - Texto con tiempos de procesamiento y entrega. Ejemplo: "Todos los pedidos requieren de 3 a 4 días hábiles de procesamiento. El tiempo de envío aproximado es de **4 a 6 días hábiles**", con los días en negrita, más el correo de contacto.
   - Truco del autor: repartir el plazo total (~10 días desde China) entre "procesamiento" y "envío" para que el envío parezca más corto.
   - Icono: caja o camión.
5. **Fila 3 · Garantía:**
   - Título tipo "Pruébalo durante 30 días".
   - Texto: si en 30 días desde la recepción no está satisfecho, puede devolverlo y se le reembolsa el 100 %.
   - Icono de devolución (flecha circular).
6. Evitar repetir "gratis" en todos los títulos. **Ningún título en dos líneas.**
7. Ordenar de **más corto a más largo** (efecto escalera).

**Avisos del autor**
- Por ley hay que ofrecer al menos 15 días de devolución [dudoso: plazo legal exacto según país]. Anunciar 30/60/90 días aumenta la conversión.
- El propio autor reconoce que la garantía "sin preguntas" no se aplica tal cual: no acepta devoluciones de productos usados, rotos o sin su embalaje original.

---

<a id="leccion-31"></a>

## Lección 31 — Orden de la descripción (estructura de bloques)

**De qué va:** la estructura de la parte baja de la página de producto, probada por el equipo del autor.

**Estructura recomendada (debajo de los desplegables)**
1. **Image/Video slider** (vídeos tipo reseña que se reproducen solos). Primero se hace con Shrine; más adelante se puede usar la app **Reelup**, que "se ve más guapa".
2. **FAQ / Preguntas frecuentes** (bloque desplegable/*collapsible*):
   - Fondo en **Accent 1** (color de marca).
   - Un **Section divider** encima y otro debajo: duplicar y, en el de abajo, usar **flip vertical**.
3. **Bloques de descripción** con imagen/GIF y texto, eligiendo lo que necesite el producto:
   - problema/agitación;
   - antes/después (si tiene sentido);
   - garantía;
   - beneficios (iconos);
   - resultados;
   - tabla de comparación;
   - más reseñas.

**Pasos**
1. Borrar los bloques de descripción por defecto (se puede conservar el *section divider*).
2. Agregar sección **Image video slider** encima del divider y elegir tipo vídeo.
3. Agregar la sección de FAQ y colocar los dividers.
4. Añadir bloques de **imagen con texto** sin botones.

**Idea clave:** cada bloque debe atacar emociones o romper objeciones. No pongas un "antes/después" si no tiene sentido para tu producto.

---

<a id="leccion-32"></a>

## Lección 32 — Descripción tipo PAS (Problema – Agitación – Solución)

**De qué va:** la fórmula de copy principal. La gente compra por cómo se siente y por el problema que le resuelves, no porque el producto sea bonito.

**Estructura**
1. **Problema:** el problema real que frustra, incomoda o preocupa al cliente, para que se identifique de inmediato.
2. **Agitación:** profundizar en lo malo de no resolverlo, con consecuencias y datos **que no sean mentira**.
3. **Solución:** presentar el producto como la solución, sin riesgo (garantía).

**Ejemplo del vídeo, resumido**
- **Problema:** muchos perros pequeños o mayores se ponen nerviosos con el sonido de la máquina, y tú te quedas frustrada y con culpa.
- **Agitación:** el pelo largo entre las almohadillas puede causar hongos, infecciones o resbalones; las peluquerías son caras y llevarlos es una pesadilla.
- **Solución:** recortadora silenciosa, inalámbrica y segura, con cuchillas suaves para zonas difíciles, para usar en casa sin estrés y por una fracción de lo que cuesta la peluquería.

**Consejos**
- "Somos egoístas por naturaleza": habla de cómo se sentirá **la clienta**, no solo el perro.
- Iterar con ChatGPT: "ataca más el beneficio para el cliente", "que no suene a teletienda".
- Evitar descripciones planas del tipo "corta el pelo muy bien sin enredos".

---

<a id="leccion-33"></a>

## Lección 33 — Descripción tipo BFEL (Beneficio – Función – Emoción – Lógica)

**De qué va:** la segunda fórmula de copy, que combina motivos emocionales y racionales.

**Estructura**
1. **Beneficio:** qué gana el cliente de inmediato (comodidad, ahorro, sentirse mejor).
2. **Función:** cómo lo consigue el producto.
3. **Emoción:** cómo se sentirá después (tranquilidad, orgullo, alivio, conexión con su perro).
4. **Lógica:** prueba o dato objetivo que justifica la compra (precio, duración, valor, facilidad, garantía).

**Cuál usar**
- Pasar a ChatGPT toda la información del cliente ideal (documentos de la lección 13) y preguntarle si conviene **PAS** o **BFEL**.
- En el ejemplo recomendó **PAS** como principal, por ser compra impulsiva.
- BFEL encaja mejor en productos de compra más racional.

**Aviso:** no escribir descripciones del tipo "esta foto transmite un antes y un después"; hay que atacar lo que debe sentir el cliente.

---

<a id="leccion-34"></a>

## Lección 34 — Image/Video slider (vídeos tipo reseña)

**De qué va:** rellenar el carrusel de vídeos que aparece tras los desplegables.

**Ajustes**
- **Título:** prueba social, p. ej. "+21.500 clientes contentos" (o "dueños satisfechos"). Usar "+" para acortar y tamaño **Small/Medium** para que no ocupe dos líneas.
- **Esquema de color:** blanco.
- **Autoplay** activado. Estilo *classic*. El resto como venga.
- **Relleno superior** mínimo y **relleno inferior** ~4–8.
- Cada vídeo: *looping*, **silenciado (mute)** y *autoplay*.

**Vídeos**
- **Mínimo 3–4**, **sin texto**, para que parezcan reseñas reales. Tienen que ser **del mismo producto**.
- Sácalos de **TikTok** o **Instagram** buscando el producto (ej. "dog trimmer paw"). No hace falta que sean virales.
- Descarga sin marca de agua con **SSSTik** (pegar el enlace → "sin marca de agua" → descargar).
- En **Canva**:
  1. Subirlo y silenciarlo.
  2. Recortarlo a **~5 s** del momento en que se ve el producto (pesan menos).
  3. Si tiene texto, ampliarlo para cortarlo.
  4. Descargar en **MP4**.
- Si pesa demasiado, usar un compresor de MP4 online.
- Cuando tengas el producto, grabar vídeos propios.

---

<a id="leccion-35"></a>

## Lección 35 — FAQ (preguntas frecuentes)

**De qué va:** responder las objeciones **del producto**. El envío, lo que incluye y la garantía ya están arriba.

**Pasos**
1. Título del bloque desplegable: **"Preguntas frecuentes"**, tamaño Small si salta a dos líneas.
2. Mirar las FAQ de la competencia. Ejemplos: "¿puede hacer daño a mi perro?", "¿lleva batería?", "¿el ruido asustará a mi perro?", "¿por qué usar esto y no tijeras?", "¿se puede usar en otras partes del cuerpo?".
3. Pasar a ChatGPT:
   - captura de las FAQ de la competencia;
   - reseñas de Amazon (EE. UU.) de un producto equivalente con muchas ventas, o el documento de la lección 13;
   - pedirle las dudas u objeciones **por orden de relevancia** y una **respuesta profesional que rompa la objeción**.
4. Acortar las respuestas y quedarse con lo esencial.
   - Ejemplo: "No es 100 % silencioso, pero sí lo suficiente para que muchos perros asustadizos lo toleren".
5. **Icono por pregunta**, relacionado con el tema (sonido, corazón para "daño"…). Se pueden hacer iconos propios en Canva.
6. Poner solo las importantes y quitar las menos preguntadas (ej. "¿cuánto dura la batería?"). La descripción también tocará puntos de dolor.

---

<a id="leccion-36"></a>

## Lección 36 — Bloque imagen con texto (problema)

**De qué va:** montar los bloques de descripción con el orden **título → texto → imagen** y redactar el bloque de **problema/agitación**.

**Cómo montarlo**
1. Agregar **Texto enriquecido** (título + texto, sin botón) encima.
2. Debajo, **Imagen con texto** sin título, texto ni botón (solo la imagen).
3. Así cada bloque queda: título, texto e imagen.

**Copy con el prompt PAS**
- Usar el **prompt de descripción de producto** del documento de prompts del curso.
- Pide imagen/GIF/vídeo, titular y un párrafo de **máx. 125** [dudoso: si son palabras o caracteres] por bloque, siguiendo PAS.
- Ejemplo de titular corto: "Cada intento termina en estrés para los dos".
- Texto resumido: el perro no deja que le toquen las patas; la peluquería tampoco es opción porque lo pasa mal y sale caro; resultado: patas enredadas, cara sucia y tú sintiéndote culpable.
- **Recortar el texto**: "nadie lee tanto". Dividirlo en dos párrafos cortos.
- Imagen sugerida: GIF o vídeo de un perro nervioso al asearlo o con el pelo enredado (buscar en TikTok).

---

<a id="leccion-37"></a>

## Lección 37 — Horizontal ticker (logos de medios) y testimonios

**De qué va:** una franja animada entre secciones para dar sensación de marca, y una sección de testimonios.

**Horizontal ticker**
1. Agregar sección **Horizontal ticker** y darle algo de relleno arriba y abajo.
2. En lugar de texto ("envío gratis…"), lo ideal es poner **imágenes de logos** de medios o marcas.
   - Pedir a ChatGPT medios del país o del nicho. En el ejemplo, para España: medios generalistas o de mascotas [dudoso: nombres exactos].
3. Montar cada logo en Canva:
   - duplicando el diseño del logo propio;
   - pegando el logo del medio;
   - descargando con fondo transparente (Canva Pro).
4. Ajustar el tamaño y añadir *section dividers* (el de abajo con *flip*).
5. El autor reconoce que es "mentira" en muchas marcas. Si no quieres poner nombres de medios, **quita esta sección**.

**Testimonials (reseñas)**
1. Agregar sección **Testimonials**. Título: "Lo que opinan nuestros clientes" (pequeño).
2. **3 testimonios**. Cada uno con:
   - Foto (banco gratuito o Google, montada en Canva **1080 × 1080**; "woman/man with pet").
   - Texto: basado en reseñas reales de Amazon EE. UU., traducido y adaptado a cómo hablaría tu cliente ideal (mujer española de 30–55 años preocupada por su perro).
   - Título corto (ej. "El único que tolera mi perrita").
   - Nombre distinto a los ya usados (ej. "María V.").
3. Relleno superior al mínimo.

**Orden resultante:** prueba social → resolver objeciones → problema → confianza. El autor advierte que ticker y testimonios juntos quizá sea demasiado. Después viene el bloque de **solución**.

---

<a id="leccion-38"></a>

## Lección 38 — Bloque de solución (imagen/vídeo + texto)

**De qué va:** el bloque que presenta el producto como solución.

**Pasos**
1. **Duplicar** el texto enriquecido y la imagen con texto del bloque anterior (para conservar el estilo) y colocarlos encima del *section divider*. En el editor se ve raro, pero en la web sale bien.
2. Texto del bloque de solución (de ChatGPT, acortado):
   - Título tipo "Un recortador silencioso, perfecto para perros pequeños y nerviosos".
   - Texto: llega a zonas difíciles (cara, patas) sin ruido ni tirones; tamaño compacto y cuchilla de seguridad; ideal para perros mayores sensibles.
   - Dividirlo en dos párrafos.
3. **Imagen o vídeo:** producto en uso, perro relajado, dueña feliz, zonas pequeñas.
   - Buscarlo en TikTok y pasarlo a cuadrado **1080 × 1080** (con **EZGIF** o Canva).

**Calidad del GIF vs vídeo**
- Los GIF comprimidos pierden mucha calidad. Alternativa: montarlo en Canva, **descargar como MP4** y subirlo como **vídeo**; se ve mucho mejor.
- Cuidar que no pese demasiado.
- Regla: GIF si se ve bien; si no, MP4.
- Se puede validar con ChatGPT si la imagen encaja con el mensaje.

---

<a id="leccion-39"></a>

## Lección 39 — GIF o antes/después (Before & After slider)

**De qué va:** un bloque visual más tras los testimonios. Puede ser otro GIF con texto o un **deslizador antes/después**, que según el autor muy pocas tiendas usan.

**Orden en este punto:** desplegables → vídeos → FAQ → problema/agitación → logos → solución → opiniones de clientes → este bloque.

**Pasos**
1. Bajar la sección de testimonios para dejar sitio.
2. Opción GIF: duplicar el texto enriquecido y la imagen con texto, y poner el GIF descargado antes (lección 22).
3. **Opción Before & After slider:**
   - Fotos de antes y después del **mismo perro**, sacadas de una reseña de Amazon y mejoradas en Canva (o con ChatGPT).
   - En Canva, encuadrarlas en la misma posición: poner una encima de otra con transparencia para alinearlas.
   - Subir la foto de **antes** y la de **después**.
   - Cambiar las etiquetas "Before/After" por **"Antes/Después"**.
4. **Título y texto** pedidos a ChatGPT. Ejemplos:
   - Título: "De patas salvajes a patitas limpias".
   - Descripción de dos líneas: "Menos estrés, más limpieza y un perrito feliz (y tú también)".
5. Ajustar el relleno.

---

<a id="leccion-40"></a>

## Lección 40 — Garantía, tabla comparativa y revisión con ChatGPT

**De qué va:** cerrar la página con un bloque de garantía y una tabla comparativa, actualizar el dominio en Shrine y revisar la página con ChatGPT.

**Bloque de garantía**
1. Sección **Banner de imagen**.
   - Imagen hecha en Canva con "30 días de garantía" o "money back guarantee".
   - El autor suele ofrecer **30–60 días** porque todo el mundo ofrece 15, aunque en las políticas excluye los productos maltratados o sin embalaje original.
2. Título tipo "30 días de garantía de reembolso".
3. Texto: tienes 30 días para probarlo y, si no te gusta, te devolvemos el dinero sin preguntas.
4. **Botón** "Comprar ahora" enlazado al producto (quitar el segundo botón). Sirve para quien llega hasta abajo.
5. *Section dividers* arriba y abajo (el de abajo con *flip*).

**Tabla comparativa**
1. Agregar sección **Comparison table**, con **tu logo** en tu columna.
   - En "Others" escribir "Otros". El autor desaconseja poner el logo de la competencia.
2. Pedir a ChatGPT las filas. Ejemplos:
   - "Silencioso": tú sí, otros no.
   - "Seguridad al recortar": tú sí, otros no.
   - Una fila invertida, "Gasto en peluquería": tú no, otros sí.
3. Título y descripción cortos de ChatGPT (ej. "La diferencia está en los detalles"). Igualar colores al resto y quitar negritas sobrantes.

**Otras secciones disponibles en Shrine** (el autor no las usa todas para no liar):
- resultados con porcentajes (ej. "99 % de perros ya no se quejan", "el 99 % ahorra +500 €/año");
- *icons with text*;
- *Facebook testimonials* (muy útiles si anuncias en Meta);
- *icon bar* (envío gratis… bajo el carrito);
- Instagram stories, *pricing table*, *product features*, vídeos de TikTok, Trustpilot.

**Lo que no puede faltar:** descripción PAS, resolver todas las objeciones y **prueba social variada** (compradores, reseñas, vídeos, logos, garantía, reseñas finales). Textos cortos pero relevantes.

**Actualizar Shrine al nuevo dominio**
1. Si la tienda redirige o da error tras comprar el dominio: en tu cuenta de Shrine, cambiar la *Website URL* por el dominio nuevo → *Save domains*.
2. Copiar el **nuevo token** → Shopify → Configuración del tema → *Authentication* → sustituir el token → guardar.

**Revisión final con ChatGPT**
- Pasarle la URL y preguntarle qué falta para romper las objeciones del cliente ideal y empujar a la compra impulsiva.
- En el ejemplo sugirió reseñas con Loox, garantía visible, urgencia, vídeo demostrativo y una tabla comparativa sencilla (por eso se añadió).
- Repetir tras los cambios.
- Al final de la página irán las **reseñas de Loox** (lección 47) y después el pie de página.

---

<a id="leccion-41"></a>

## Lección 41 — Sticky Add to Cart, ajustes de vídeo, "Powered by Shrine" y logo en el checkout

**De qué va:** varios ajustes rápidos.

**Pasos**
1. **Video slider:**
   - Desactivar todas las opciones de controles del vídeo (si no, sale un velo grisáceo).
   - **Silenciar** los vídeos al descargarlos (Canva); si no, se oyen.
2. **Quitar "Powered by Shrine"** del pie de página:
   - En Configuración del tema o en la sección **Pie de página** (cambia según la versión).
   - Borrar el texto; queda el año y la marca.
3. **Sticky Add to Cart** (barra fija que aparece al bajar y perder de vista el botón principal):
   - Seleccionarla con el inspector.
   - **Acción del botón:** *Add to cart*. Alternativa: *Product information*, que sube hasta el selector para elegir variante/bundle. Se puede testear cuál convierte mejor.
   - Texto: **"Agregar al carrito"**.
   - Mostrar precio y ahorro.
   - Imagen y título: opcionales. El autor los quita si abulta demasiado.
   - Estrellas: no.
   - *Variant picker* si hay variantes.
   - Botón a ancho completo (*full*).
4. **Logo en la pantalla de pago:**
   - Configuración → **Pantalla de pago (Checkout) → Personalizar** → **Logo**: subirlo **pequeño** y **centrado**. Sin logo genera desconfianza.
   - Poner el **color de los botones** con el de la marca.

---

<a id="leccion-42"></a>

## Lección 42 — Políticas legales, menú del pie y cookies

**De qué va:** crear las políticas obligatorias, enlazarlas en el pie de página, crear la página de contacto y activar el banner de cookies.

**Políticas**
- **Opción A:** generador externo (buscar "generador de políticas Shopify"), crear páginas en Tienda online → Páginas y pegarlas. A veces da errores.
- **Opción B (la del vídeo):** Configuración → **Políticas** → **Insertar plantilla** en cada una:
  - **Devoluciones y reembolsos:**
    - poner una **dirección real de devolución** (no inventarla);
    - plazo de 15 o 30 días;
    - revisar con ChatGPT si falta algo (derecho de desistimiento, quién paga la devolución, garantía legal de conformidad de 2 años, plazos de reembolso de 14 días);
    - pedirle que lo añada.
  - **Privacidad:** viene automatizada.
  - **Términos del servicio:** plantilla con datos de contacto. Registro mercantil y número de IVA no son obligatorios según el vídeo.
  - **Envío:** generada con ChatGPT con tus plazos (ej. 3–4 días hábiles de preparación y 6–8 de envío; puede variar), aduanas y aranceles, sin emojis. Puede incluir un plazo máximo con reembolso si no llega.
  - **Información de contacto** y **Aviso legal** (generado con ChatGPT; requiere datos fiscales y nombre completo).
- El autor confía en las plantillas de Shopify. Recomienda revisarlas con ChatGPT o con un abogado si tienes dudas. Si tratas bien a los clientes, no habrá problemas.

**Menú del pie de página**
1. Contenido → **Menús** → *Footer menu* (renombrarlo, p. ej. "Enlaces de interés").
2. Quitar lo que sobre y añadir: Política de privacidad, Términos y condiciones, Devoluciones y reembolsos, Política de envío y Contacto.
3. En el tema: Pie de página → menú de **enlaces rápidos** → seleccionar "Enlaces de interés".

**Página de contacto bonita**
1. Tienda online → Páginas → **Añadir página** "Contacta con nosotros", con plantilla **contact** y un texto breve. Que sea **visible**.
2. En el menú, sustituir el enlace de contacto por esta página.
3. Personalizar sus textos desde el tema ("Get in touch" → "Contáctanos").

**Banner de cookies**
- Configuración → **Privacidad del cliente → Banner de cookies** → activarlo.
- Opcional: personalizar colores (fondo con el color de marca, texto blanco) y textos.

---

<a id="leccion-43"></a>

## Lección 43 — App Track123: página de seguimiento de pedidos y menú principal

**De qué va:** que el cliente pueda rastrear su pedido, y simplificar el menú superior.

**Instalar Track123**
1. Apps → buscar **Track123** e instalar.
   - Gratis hasta **50 pedidos/mes**.
   - **300 pedidos/mes ≈ 9 $**.
   - Planes superiores de pago.
   - Alternativa recomendada: **ParcelPanel**.
2. Asistente:
   - **Yes**.
   - Marcar que eres **dropshipper**, para que oculte referencias a China o dropshipping.
   - Estilo **rounded**.
   - *Done*.
3. Copiar la URL de la **tracking page**.

**Menú principal**
1. Contenido → Menús → **Main menu** ("Menú principal").
2. **Quitar "Home" (Inicio)**: que no salgan de la página de producto.
3. **Quitar "Catálogo"**: solo hay un producto.
4. Dejar **"Contacta con nosotros"** (la página de la lección 42).
5. Añadir **"Rastrear tu pedido"**: pegar la URL de Track123 y hacer clic en la sugerencia que aparece (importante) → guardar.

**Uso:** al gestionar pedidos, enviar al cliente esa URL con su número para que lo siga y no pregunte "¿dónde está mi pedido?".

**Aviso:** con varias líneas de producto o una marca de ropa sí tiene sentido poner catálogo o colecciones; en dropshipping de un producto, no.

**Recursos del PDF "43. Enlace a Track123"**
- <https://platform.shoffi.app/r/rl_SS0iBwGu>
- Cupón **D7CK4MYXYK51**: 20 % de descuento durante 2 meses.

---

<a id="leccion-44"></a>

## Lección 44 — Plantillas de producto (extra)

**De qué va:** tener secciones distintas para productos diferentes en la misma tienda, sin crear otra web.

**Caso de uso:** misma marca, logo y colores, pero dos productos con público distinto (ej. versión para perros y para gatos). Cada uno necesita sus propios vídeos, emoji benefits, reseñas, bundles…

**Pasos**
1. En el editor del tema → selector de plantillas → **Productos → Crear plantilla** (ej. "paw gato"), basada en la predeterminada.
2. Crear o duplicar el producto. En la ficha → **Plantilla del tema** → elegir la nueva → guardar.
3. Editar esa plantilla. Los cambios solo afectan a los productos que la usan (en el ejemplo: otros emoji benefits, otro bundle, otras estrellas).
4. Se pueden crear tantas como haga falta.

**Aviso:** no usarlo para montar **tiendas generalistas** con productos sin relación. Solo para variantes lógicas de la misma marca (ej. sudaderas de chico y de chica, o perro/gato).

---

<a id="leccion-45"></a>

## Lección 45 — Mercados y tarifas de envío

**De qué va:** activar los países de venta y las tarifas de envío para que se pueda comprar.

**Mercados (Markets)**
1. Configuración → **Mercados** → crear un mercado (ej. "Internacional") → añadir los países donde vas a anunciarte. Solo comprará gente de donde anuncies.
   - Ejemplo: México.
   - Para el *top 4*: EE. UU., Canadá, Reino Unido y Australia.
2. Activarlo y guardar.

**Envío**
1. Configuración → **Envío y entrega** → **Crear perfil personalizado** (ej. "TrimPaws" o "México") → **agregar productos**.
2. **Agregar zona de envío** con los países del mercado.
3. **Agregar tarifa:**
   - Nombre tipo **"Envío gratis y con seguimiento"** ("Free and insured shipping").
   - Precio 0 o el que cobres. El autor explicará más adelante una estrategia para cobrar el envío con las ofertas.
4. Se pueden crear varias zonas, p. ej. una de habla inglesa (EE. UU., Canadá, Reino Unido) y otra de habla hispana, cada una con su tarifa.
5. **Añadir al perfil todo lo que se envíe**: variantes, regalos, upsells… Si no, quedan en el perfil general, que tiene otras condiciones.

**Moneda local (solo con Shopify Payments)**
- En Mercados → moneda → completar la configuración de **Shopify Payments**. Así cada país ve su moneda (pesos mexicanos, dólares australianos…).
- Sin Shopify Payments no se puede así; el autor lo explica más adelante.

**Prueba antes de anunciar**
- Como visitante (y desde el país correcto o con VPN), añadir al carrito → comprar → poner una dirección del país de venta.
- Si aparecen el envío y los métodos de pago, está bien. Si no, falta algo.
- En el vídeo salía "agotado" porque el autor estaba en Andorra, fuera del mercado.

---

<a id="leccion-46"></a>

## Lección 46 — Teléfono obligatorio en la pantalla de pago

**De qué va:** pedir siempre email y teléfono al cliente.

**Pasos (Configuración → Pantalla de pago)**
1. **Método de contacto del cliente:** **solo correo electrónico**, no "teléfono o correo".
2. **Nombre completo:** requerir **nombre y apellido**.
3. Nombre de la empresa: no incluir. Línea de dirección 2: opcional o no incluir.
4. **Teléfono de la dirección de envío: obligatorio.**
5. Guardar (puede tardar en reflejarse).

**Por qué**
- El **email** permite hacer **email marketing** y es más profesional y privado que contactar por teléfono.
- El **teléfono** lo exige el **proveedor** (AliExpress u otro) para enviar el pedido.

---

<a id="leccion-47"></a>

## Lección 47 — Reseñas con Loox

**De qué va:** instalar Loox para el bloque de reseñas con foto al final de la página, crear a mano las primeras reseñas de calidad y configurar el widget.

**Instalación**
1. Entrar por el enlace del curso (**30 días gratis**) → instalar.
2. Plan:
   - **Beginner** (~13 $/mes tras la prueba).
   - El plan **Scale** (~40 $) solo hace falta al crecer (más de ~100–500 pedidos/mes) y permite reseñas en vídeo.
   - En el upsell, quedarse con el barato.
3. Asistente, sin saltárselo:
   - **Cuándo pedir reseña: 70 días** (para que no se la pida a los clientes reales, porque las reseñas las pones tú).
   - **Desactivar el descuento a cambio de reseña** (10–20 %): clic encima para quitarlo.
   - **Enable Loox core script** → guardar.
4. *Go to Loox admin* → **Product review widget**. Normalmente se añade solo a la página de producto. Si no: Agregar sección → Apps → *Product review widget* → guardar.

**Crear las primeras 12–15 reseñas a mano (las importantes)**
- No usar el importador directo de AliExpress (marcador "Import Loox"): según el autor, las reseñas importadas así son "feísimas".
- **Opción 1:**
  1. En **Amazon**, ir a las reseñas con foto de un producto equivalente.
  2. **Recortar la foto** de forma que no se vea el producto si es distinto (ej. el perro recién arreglado).
  3. Traducir el texto con ChatGPT y pedir que suene natural para el país (ej. "como lo diría una persona de México").
  4. En tu web, como visitante → **Escribir reseña** → 5 estrellas → foto → texto → nombre común del país (pedido a ChatGPT, ej. "María G.") → cualquier email.
- **Opción 2:**
  1. Pasar a ChatGPT el documento del cliente ideal y pedir unas 10 reseñas cortas y realistas que **rompan objeciones**: fácil de usar, sin ruido, batería, ansiedad del perro, ahorro en peluquería, apto para principiantes…
  2. Crearlas a mano con foto.
- Reglas del autor:
  - **Nunca reseñas sin foto, malas ni del tipo "envío rápido / todo OK"**.
  - Mínimo 12–15 con foto (30 o 100, mejor).

**Gestión (Reviews → Manage reviews)**
- Despublicar (⋯ → *Unpublish*), responder (*Reply*), cambiar de producto y marcar **Verificado** (el autor lo pone en buena parte de las reseñas con foto).

**Product review widget → Customize**
- **Layout:** lista (tipo Amazon), mosaico o grid; resumen *compact*.
- **Estilo:** dark/classic/none/light.
- **Esquinas:** *rounded* (o según la forma del producto).
- **Tamaño de letra:** *small*; más grande solo si el público es mayor de 50.
- **No tocar los colores** del widget, el *header* ni las *review tabs*.
- **Textos:** traducir al idioma de la tienda (Valoración, Reseñas, Escribe una reseña, Ver más…). El plan Scale autotraduce.
- **Preferencias:**
  - **Quitar el botón "Escribir reseña"** (*Show write a review button*), para que la competencia no te llene de reseñas malas. Activarlo solo cuando añadas reseñas y volver a quitarlo.
  - **Quitar la fecha** (*Show review date*): si no, todas salen del mismo día.
  - **Quitar el tipo de producto** (*Show item type*).
  - **Reseñas por página: 7–12** (la gente rara vez pulsa "ver más").

**Otros widgets**
- *Star rating*: no hace falta (ya lo da el tema).
- **Pop-up widget**: desactivarlo.
- *Trust badge* / carrusel: opcional; el tema ya lo tiene.
- *Snippet widget* (reseñas con foto bajo el carrito): opcional. El autor prefiere hacerlas a mano para controlar cuáles salen.
- *Referrals*: no.
- *Upsell*: no.
- **Settings:** cambiar el color o el icono de las estrellas solo si encaja. El autor prefiere estrellas clásicas.

**Muy importante**
- Settings → **Integraciones → Shop app → Manage → desactivar**. Las reseñas que lleguen por Shop App **no se pueden borrar**; quitarlas obliga a rehacer la página de producto.

**Recursos del PDF "47. Enlace a Loox con 30 días gratis"**
- <https://loox.io/app/ADSORGANICECOM>

---

<a id="leccion-48"></a>

## Lección 48 — Importar reseñas a Loox por CSV

**De qué va:** añadir cientos de reseñas de golpe con una hoja de cálculo. Presenta otro ponente del curso.

**Pasos**
1. Loox → Reviews → **Import reviews → Custom file → Make a copy** (se abre en Google Sheets).
2. Columna **handle**: el *handle* de tu producto (en la ficha de Shopify, abajo, en la URL; ej. `trimpaws`).
3. Rellenar **mínimo 300 reseñas** con ChatGPT:
   - **Estrellas:** combinación de 3–5 que dé una media de **4,8**. Las 10 primeras, de 5 (como mucho algún 4).
   - **Nombres:** 300 nombres típicos del país de venta (EE. UU., Alemania…).
   - **Textos:** pasar la URL del producto y una breve descripción, y pedir 300 reseñas. Si no las da todas de una vez, pedirlas en tandas (ej. 150 + 150).
   - **Fotos:** subir las imágenes a Shopify → Contenido → **Archivos** → copiar la URL de cada una → pegarla en la columna de foto.
   - **Fechas:** pedir 300 fechas en el formato de la plantilla, **alternadas** (no consecutivas) y muchas del año en curso.
   - Columna de verificado: *TRUE*.
4. **Que no sobren ni falten celdas** (todas las filas completas). Si no, el CSV falla.
5. Descargar como **CSV** → Loox → *Continue to upload* → seleccionar el archivo.
6. Comprobar en el editor del tema que las reseñas aparecen en el producto.

**Idea clave:** casi nadie pasa de las **10–12 primeras reseñas**. Esas deben ser perfectas (las de la lección 47). El resto importa poco al principio; cuídalo cuando factures mucho.

---

<a id="leccion-49"></a>

## Lección 49 — Recrear la tienda con el tema gratuito (Zendrop)

**De qué va:** replicar con el tema gratuito lo hecho en Shrine, para quien no compre Shrine. **No usar un Shrine pirata.**

**Pasos (página de producto, vista móvil)**
1. **Colores:** Configuración del tema → Colores → **esquemas**. Poner el azul de marca en botones, etiquetas, contorno y sombra; **texto siempre en negro**.
2. **Logo:** Configuración del tema → logo. Encabezado: quitar las líneas separadoras y los rellenos superior e inferior.
3. **Información del producto:** quitar los rellenos.
4. **Estrellas (Rating stars)** encima del título, con el mismo texto (ej. "4,8/5…").
5. **Quitar el bloque de urgencia** (*urgency text*).
6. **Título:** en este tema **no se puede reducir el tamaño**.
7. **Miniaturas:** *Diseño para móviles → Mostrar miniaturas* (abajo).
8. **Quitar precio y selector de cantidad** (se usarán bundles con app).
9. **Emoji benefits:** con bloques de **Texto**, uno por beneficio. Si se escriben todos en el mismo bloque, salen seguidos sin salto de línea.
10. **Bundles:** el bloque *Quantity discounts* del tema **no funciona bien**. Usar una app (lección 50).
11. **Botones de compra:** desactivar los botones de pago dinámico.
12. **Quitar "recíbelo el día X"**.
13. Reseñas bajo el botón (bloque *reviews*) y **3 filas desplegables**.
14. **Quitar el Sticky Add to Cart del tema** (da problemas; ver lección 53).

**Descripción (secciones)**
- **Image video slider** → bloques *video slide* (cuidar que todos los vídeos tengan el mismo tamaño) → título "Reseñas de clientes" → desactivar los controles.
- **Preguntas frecuentes:**
  - con la sección *Contenido desplegable*; los iconos son limitados;
  - *esquema 3* para el color;
  - **Section divider** *animated* con el color de marca, duplicado y con *flip vertical*.
- **Texto enriquecido + Imagen con texto** (sin botones), igual que en Shrine.
- **Horizontal ticker:** en este tema **solo admite texto**, no logos (ej. "Visto en TikTok", "Envío gratis").
- **Testimonials:** admite imagen y título, pero los testimonios se apilan hacia abajo; **poner solo uno**.
- **Antes/después:** el tema lo retiró porque daba error. Usar un banner de imagen.
- **Tabla comparativa:** sección *Comparison table*.
- **Reseñas:** Agregar sección → Apps → *Product review widget* (Loox).

**Conclusión del autor:** el tema gratuito es menos bonito y da errores (carrito, bundles, sin antes/después), pero sirve para testear. Cuando un producto funcione, pasar a Shrine si se quiere lo mejor.

---

<a id="leccion-50"></a>

## Lección 50 — Prime Bundles (bundles con el tema gratuito)

**De qué va:** la app que sustituye al selector de cantidad del tema gratuito, que da errores (precios manuales, regalos que no se añaden…).

**Pasos**
1. Apps → **Prime Bundles** → instalar.
   - ~**15 $/mes** con **14 días** de prueba.
   - Con el código del curso baja a **11,99 $**: aplicarlo en **Billing → Enter discount code**.
2. Tema → Personalizar → **página de producto** → bloque Información del producto → **Agregar bloque → Apps → Prime Bundles**, encima del botón de compra → guardar.
   - Si no aparece, pulsar **"Activate Prime Bundles"** y guardar.
3. En la app: **Add new bundle** → nombre → aplicar solo a tu producto → estilo normal (o con foto si son packs) → *Create*.
4. Configurar las ofertas (igual que en Shrine):
   - **Oferta 1:** "Compra 1" · "Te ahorras 16 €".
   - **Oferta 2:**
     - "Compra 2 y llévate 1 gratis" · cantidad **3** · tipo **Buy X get Y** (1 gratis al 100 %).
     - La app aplica el descuento, **sin crearlo a mano en Shopify**.
     - Texto "Te ahorras 77,90 €".
     - **Selected by default**.
     - Badge "Más popular"/"Más vendido" con el color de marca.
   - Quitar la oferta 3 si no se usa (*Remove offer*).
5. **Diseño:**
   - Estilo *stacked*, *condensed*, etiqueta junto al título.
   - **Borde y fondo del seleccionado** con el color de marca y un tono casi blanco, para que se vea cuál está elegido.
   - Esquinas redondeadas.
   - Botón *Add to cart* con el color de marca y texto blanco.
6. **Settings:**
   - Título del bloque ("Compra más y ahorra más", o una campaña como Navidad).
   - Producto.
   - Mostrar variantes si las hay.
   - Precio total o por unidad.
   - **Ocultar "Buy now"** y dejar solo **"Agregar al carrito"**.
   - Sin animación de "shaking".

**Recursos del PDF "50. Prime Bundles"**
- Código **MARC**: 20 % en la primera suscripción mensual.
- Cómo aplicarlo, según el PDF:
  1. Acepta el plan inicial para usar la app.
  2. Ve a la página de facturación.
  3. Introduce **MARC**, confirma y aprueba la nueva página de facturación.

---

<a id="leccion-51"></a>

## Lección 51 — "Katching Bundles" ⚠️ contenido no coincide

**Qué hay en el vídeo:** aunque el archivo se llama **"51. Katching Bundles.mp4"**, solo dura **12 s**. Su audio es **idéntico al de la lección 59**: "este es el vídeo donde te dejamos el formulario, lo tienes abajo, sé constructivo, mírate la siguiente sección".

**Conclusión:** parece que en Drive se subió un vídeo equivocado con este nombre. **La explicación de la app Katching Bundles no está en la carpeta.** De ella solo hay el añadido de la lección 52.

---

<a id="leccion-52"></a>

## Lección 52 — Katching Bundles: protección de envío y extras del carrito

**De qué va:** un añadido corto al vídeo (que falta) de Katching Bundles.

**Contenido**
- Katching Bundles no solo hace bundles. Incluye también funciones de carrito:
  - **urgency timer** (contador de urgencia);
  - **free shipping bar** (barra de envío gratis);
  - **upsell slider** y **upsell toggle**;
  - **payment icons**;
  - **shipping protection** (protección de envío en el carrito, en el ejemplo ~3 €/$).
- Ventaja: en una sola app tienes lo que si no harían falta varias (app de carrito, Prime Bundles y una app de *checkbox* para la protección de envío) [dudoso: nombres exactos de las apps que menciona].

---

<a id="leccion-53"></a>

## Lección 53 — Sticky Add to Cart y section divider con el tema gratuito

**De qué va:** dos fallos del tema gratuito y cómo sortearlos.

**Sticky Add to Cart**
- El del tema gratuito **da error**. Instalar una app desde la tienda de Shopify buscando "sticky add to cart".
- El autor no recomienda ninguna en concreto; la mayoría son gratis. Mirar su tienda de demostración y elegir una que quede bien (algunas incluyen urgencia).
- Es importante tenerlo: muestra el botón de compra mientras el cliente baja por la página.

**Section divider que no cambia de color**
- A veces, al cambiar el color de un *section divider* ya colocado, no se aplica.
- Solución:
  1. **Borrarlo**.
  2. Agregar uno nuevo (al final de la página), ponerle el estilo y el color.
  3. **Duplicarlo** y poner uno con *flip vertical*.
  4. **Arrastrar** ambos a su sitio.

---

<a id="leccion-54"></a>

## Lección 54 — EZGIF: de vídeo a GIF, recorte y peso

**De qué va:** uso de la web gratuita **EZGIF**.

**Pasos (Video to GIF)**
1. *Video to GIF* → seleccionar el archivo (ej. un vídeo de TikTok) → *Upload video*.
2. Poner el **segundo de inicio y de fin** (ej. del 2 al 9, cuando se ve el producto en uso) → *Convert to GIF*.
3. **Crop** para dejarlo **cuadrado** y solo con la zona buena.
   - A veces la herramienta no responde: pulsar varias veces o pasar por *Resize* y volver a *Crop*.
4. *Save* → descargar el GIF.

**Otros usos:** GIF maker, redimensionar y **reducir el peso (MB)** de los GIF.

---

<a id="leccion-55"></a>

## Lección 55 — Variant Picker para ofertas por variantes

**De qué va:** cuando la oferta no es por cantidad (compra 1, compra 2…) sino entre **variantes** (ej. "estándar" vs "pro" por 5 € más, o "1, 2, 5 velocidades" a distintos precios).

**Pasos (Shrine)**
1. En vez del bloque **Quantity selector**, usar el bloque **Variant picker**. Se puede hacer en una plantilla de producto aparte (lección 44).
2. En su configuración, escribir exactamente: **`quantity breaks, dropdown, dropdown`**.
3. Así se muestran las variantes como opciones de oferta con su precio y se añade la elegida al carrito.

**Regla**
- Ofertas por **cantidad** → *Quantity selector*.
- Ofertas por **variantes** → *Variant picker* con ese valor.

**Recursos del PDF "55. Variant Picker"**
- Texto a copiar: `quantity breaks, dropdown, dropdown`

---

<a id="leccion-56"></a>

## Lección 56 — Personalizar el tema por mercado (Shopify Advanced)

**De qué va:** editar secciones del tema solo para un país.

**Pasos**
1. Configuración → **Mercados** → crear el mercado y añadir el país.
2. Editor del tema → página de producto → selector de **mercado** (arriba) → elegir el país (ej. Australia).
3. Los cambios hechos ahí **solo los ve ese país**. Las secciones editadas se marcan en **verde**.
4. **Reset** (sobre lo verde) devuelve la sección al contenido general.

**Usos del vídeo**
- Ajustar cifras con moneda (no es lo mismo 175 USD que 175 AUD).
- Indicar "envío desde nuestro almacén en Australia" (lo hacen al menos en el top 5 de países y donde tengan envíos rápidos).
- Adaptar el copy a cada variante del español (México, Chile, Colombia, España).

**Avisos**
- Disponible desde el plan **Shopify Advanced** en adelante; con Basic no.
- Si modificas una sección en un mercado, los cambios posteriores en el mercado por defecto **ya no se aplican** a ese mercado; hay que cambiarla a mano o hacer *Reset*.

---

<a id="leccion-57"></a>

## Lección 57 — Catálogos: precio distinto por país

**De qué va:** fijar precios "redondos" por mercado (ej. 54,99 £ en vez de 53,50 £ por conversión) o precios distintos por país (ej. 70 $ en EE. UU. y 60–65 $ en Colombia).

**Pasos**
1. **Mercados:** crear un mercado con el país (ej. España) sin tocar nada más.
   - **Un país no puede estar en dos mercados activos a la vez**: borrar el mercado antiguo o sacar el país del mercado general.
2. **Catálogos → Crear catálogo:** nombre, asignar ese mercado. La moneda sale sola.
3. **Guardar** y después **Export** en CSV.
   - Se puede cambiar el precio a mano en el catálogo, pero **no actualiza el precio de comparación**; por eso conviene el CSV.
   - El CSV llega por email.
4. En el CSV, cambiar el precio (y el de comparación) solo de los productos que se ven en ese mercado: el **principal** y el **upsell del carrito**.
   - Los upsells *post-purchase* solo se muestran a quien paga en la moneda de la tienda, así que no hace falta tocarlos.
   - Evitar precios "feos" como 17,32.
5. Si usas Numbers (Mac), convertir el archivo a CSV con un conversor online.
6. Mercados → **Catálogos** → el del país → **Importar catálogo** → *Preview* → *Import* → comprobar el nuevo precio.

---

<a id="leccion-58"></a>

## Lección 58 — Botón "Añadir al carrito" más grande y color Amazon

**De qué va:** mejoras del botón de compra que, según sus *split tests*, han funcionado bien.

**Tamaño del botón (Shrine)**
1. Tema → ⋯ → **Edit code** → archivo indicado en el vídeo, hacia la **línea 417** [dudoso: el nombre del archivo no se entiende bien; suena a un `.liquid` del tema].
2. Pegar el CSS del PDF (abajo) → guardar.
3. Afecta al botón principal y al **sticky add to cart**.
4. Valor habitual **65 px**. Si quieres más grande, cambia el número y haz split test.
5. Con otro tema el código es distinto: pedir ayuda a ChatGPT o dejar el tamaño estándar.

**Color del botón como Amazon (naranja)**
1. Copiar el color del botón de Amazon con una extensión de color (ColorZilla).
2. **Shrine Pro:** activar el **custom color** en el botón de compra, en el **sticky add to cart** y en el **botón de checkout del carrito**, y pegar el código.
3. Sin Pro: poner ese naranja en uno de los **Accent** de Colores y asignarlo al botón.
4. Si el naranja no pega nada con tu web, no hace falta.

**Recursos del PDF "58. Código"** (CSS del botón; el PDF corta antes de la llave de cierre):

```css
.atc-button.product-form__submit,
.main-product-atc,
button[id*="ProductSubmitButton"] {
  height: 65px !important;
  min-height: 65px !important;
}
```

La llave de cierre `}` no aparece en el PDF; la he añadido para que el bloque sea válido.

---

<a id="leccion-59"></a>

## Lección 59 — Formulario de creación de tienda

**De qué va:** vídeo de **12 s** que solo indica que el formulario está en la descripción ("sé constructivo") y que pases a la siguiente sección.

**Recursos del PDF "59. Enlace al formulario de creación de tienda"**
- <https://forms.gle/LZJZHfHAQhQ43WVE6>
