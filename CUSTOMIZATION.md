# Uplift | Customization Guide

This template is a starting point, not a claim that Uplift has real customers, integrations, performance results, or a production AI platform. Replace sample content with facts you can substantiate before publishing or reselling a customized version.

## English

### 1. Install and run

Use Node.js 22 or newer. From the project folder, install the locked dependencies and start Next.js:

```bash
npm ci
npm run dev
```

Create and run a production build with:

```bash
npm run build
npm start
```

### 2. Update your brand and contact details

Edit `src/config/site.ts` first:

- `name`: the product or agency name shown in the navigation and footer. Update the page title separately in `src/app/layout.tsx`.
- `email`: the address used by the engagement, contact, and plan inquiry email links.
- `navigation`: visible section links and their anchor IDs.

Keep the section IDs in sync if you rename navigation anchors. The hero and navigation CTAs scroll to the contact form.

### 3. Edit page copy and sections

The homepage is assembled in `src/app/page.tsx`. Most sections are React Server Components and do not ship client-side JavaScript:

- `src/components/FeatureBento.tsx`: feature cards and their small CSS visuals.
- `src/components/Approach.tsx`: the three-step operating model.
- `src/components/Engagement.tsx`: service or engagement options.
- `src/components/FAQ.tsx`: questions and answers.
- `src/components/Pricing.tsx` and `src/components/Proof.tsx`: sample plans, USD prices, outcome figures, and testimonial. Replace these with your actual offer and verified evidence before publishing.
- `src/components/LeadForm.tsx`: contact fields are assembled into a `mailto:` link; it does not store leads or process payments. Connect a real CRM/form and checkout provider for automated sales.
- `src/components/ClosingCTA.tsx` and `SiteFooter.tsx`: final conversion point and footer.
- `src/components/SiteNav.tsx`: desktop and interactive mobile navigation.

All visitor-facing copy is currently in English. Keep headings descriptive, benefits specific, and answers accurate for the offer you are selling.

### 4. Customize the interactive islands

`src/components/HeroIsland.tsx` contains the animated hero and illustrative dashboard. Its values are explicitly labeled as sample data; replace or remove them rather than presenting them as measured results. The line chart is an inline SVG so its shape and colors can be edited in the component.

`src/components/PlatformMarquee.tsx` contains the grayscale platform-name marquee. These names are ecosystem examples, not proof of a partnership or a working integration. Remove names that do not apply, verify logo and trademark usage, and claim compatibility only for integrations that actually work.

The hero and marquee are client components because their motion is interactive. Both respect the operating system's reduced-motion preference; keep other sections as server components unless they need browser state or event handlers.

### 5. Adjust visual tokens and responsive rules

Edit `src/styles/global.css`:

- `tailwind.config.ts` defines reusable Tailwind colors and font families.
- `:root` in the CSS contains the background, panel, line, muted-text, indigo, and aqua variables.
- Component classes follow those variables; update both the tokens and any intentional one-off colors.
- Responsive layouts are grouped in the `900px` and `640px` media queries.
- Reduced-motion handling is kept in the `prefers-reduced-motion` query.

The active router is in `src/app/`. Do not add a `src/pages/` directory alongside it; Next.js rejects App Router and Pages Router directories at different levels.

The display and body fonts are loaded from Google Fonts in `src/app/layout.tsx`. For a fully self-hosted deployment, replace that link with licensed local font files and preload only the weights you actually use.

### 6. Update SEO and social sharing

`src/app/layout.tsx` provides the document language, title, description, theme color, and basic Open Graph metadata. Change the defaults there, add a canonical URL and a real social-preview image for your domain, and keep the description aligned with the page's actual offer. Add a favicon under `public/` and reference it from the metadata.

### 7. Before publishing

- Replace the sample dashboard numbers and any unverified outcome or AI capability claims.
- Confirm that platform names, customer logos, testimonials, and trademarks may be used.
- Replace the placeholder email with an inbox you monitor; connect a real form or booking flow if needed.
- Review accessibility, mobile layouts, links, analytics, privacy requirements, and consent requirements for your market.
- Run `npm run build` after changing content, dependencies, or integrations.

## Español

### 1. Instalar y ejecutar

Usa Node.js 22 o una versión posterior. Desde la carpeta del proyecto, instala las dependencias fijadas en el lockfile e inicia Next.js:

```bash
npm ci
npm run dev
```

Para generar y comprobar la versión de producción:

```bash
npm run build
npm start
```

### 2. Cambiar marca y datos de contacto

Empieza por `src/config/site.ts`:

- `name`: nombre del producto o agencia que aparece en la navegación y el pie. Cambia el título por separado en `src/app/layout.tsx`.
- `email`: dirección utilizada en los enlaces de consulta de servicios, contacto y planes.
- `navigation`: enlaces visibles de las secciones y sus IDs de anclaje.

Mantén sincronizados los IDs si cambias los enlaces de navegación. Los CTA del hero y del menú llevan al formulario de contacto.

### 3. Editar textos y secciones

La página principal se ensambla en `src/app/page.tsx`. La mayoría de las secciones son React Server Components y no envían JavaScript al cliente:

- `src/components/FeatureBento.tsx`: tarjetas de características y sus gráficos CSS.
- `src/components/Approach.tsx`: modelo de trabajo en tres etapas.
- `src/components/Engagement.tsx`: modalidades de servicio o colaboración.
- `src/components/FAQ.tsx`: preguntas y respuestas.
- `src/components/Pricing.tsx` y `src/components/Proof.tsx`: planes, precios de muestra en USD, resultados y testimonio. Sustitúyelos por tu oferta y evidencia verificable antes de publicar.
- `src/components/LeadForm.tsx`: los campos se preparan en un enlace `mailto:`; no almacena contactos ni procesa pagos. Conecta un formulario/CRM y un proveedor de checkout para automatizar ventas.
- `src/components/ClosingCTA.tsx` y `SiteFooter.tsx`: conversión final y pie de página.
- `src/components/SiteNav.tsx`: navegación de escritorio y menú móvil interactivo.

Los textos visibles para los visitantes están en inglés. Mantén los títulos descriptivos, los beneficios concretos y las respuestas fieles a la oferta real.

### 4. Personalizar las islas interactivas

`src/components/HeroIsland.tsx` contiene el hero animado y el dashboard ilustrativo. Sus valores están identificados como datos de muestra; reemplázalos o elimínalos, no los presentes como resultados medidos. El gráfico de líneas usa SVG inline, por lo que puedes editar su forma y colores en el componente.

`src/components/PlatformMarquee.tsx` contiene el carrusel monocromático de plataformas. Sus nombres son ejemplos del ecosistema, no demuestran una alianza ni una integración funcional. Quita los que no correspondan, verifica el uso de marcas y logotipos, y afirma compatibilidad solo con integraciones que funcionen realmente.

El hero y el carrusel son componentes cliente porque sus animaciones son interactivas. Ambos respetan la preferencia del sistema para reducir movimiento; deja las demás secciones como componentes servidor salvo que necesiten estado o eventos del navegador.

### 5. Ajustar diseño y comportamiento adaptable

Edita `src/styles/global.css`:

- `tailwind.config.ts` define los colores y las familias tipográficas reutilizables de Tailwind.
- `:root` en CSS contiene las variables principales de fondo, panel, bordes, texto secundario, índigo y cian.
- Las clases de componentes usan esas variables; cambia los tokens y también los colores puntuales que quieras conservar.
- Las reglas adaptables están agrupadas en las media queries de `900px` y `640px`.
- La accesibilidad de movimiento reducido está en `prefers-reduced-motion`.

El router activo está en `src/app/`. No agregues `src/pages/` junto con esa carpeta: Next.js rechaza App Router y Pages Router en niveles distintos.

Las fuentes de títulos y texto se cargan desde Google Fonts en `src/app/layout.tsx`. Para alojarlas localmente, sustituye ese enlace por archivos de fuentes con licencia y precarga solo los pesos que utilices.

### 6. Actualizar SEO y vista previa social

`src/app/layout.tsx` define el idioma del documento, título, descripción, color del navegador y metadatos Open Graph básicos. Actualiza esos valores, añade la URL canónica y una imagen real de vista previa para tu dominio, y verifica que la descripción corresponda a la oferta publicada. Añade un favicon en `public/` y enlázalo desde los metadatos.

### 7. Antes de publicar

- Sustituye las cifras de ejemplo del dashboard y cualquier afirmación no verificada sobre resultados o capacidades de IA.
- Confirma que tengas permiso para usar nombres de plataformas, logotipos, testimonios y marcas.
- Cambia el correo provisional por una bandeja activa; conecta un formulario o flujo de reservas si lo necesitas.
- Revisa accesibilidad, diseño móvil, enlaces, analítica, privacidad y consentimiento según tu mercado.
- Ejecuta `npm run build` tras cambiar contenido, dependencias o integraciones.
