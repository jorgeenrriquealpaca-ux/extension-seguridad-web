# Extensión de seguridad web
Extensión para Chrome que analiza la URL de la página web que estás visitando y muestra un semáforo con avisos de posible phishing.
Proyecto personal de aprendizaje, hecho durante mi formación en administración de sistemas informáticos en red (ASIX).

## Qué comprueba
- Si la web **no usa HTTPS**
- Si la dirección usa una **IP** en vez de un dominio
- Si tiene **demasiados subdominios**
- Si el dominio tiene **caracteres raros** (punycode)
- Si la URL contiene **@** o es **muy larga**
- Si el dominio **imita a una marca conocida** (por ejemplo, `paypa1.com` en lugar de `paypal.com`)

## Cómo se interpreta el resultado
- ✅ Sin avisos
- ⚠️ Un aviso
- ⛔ Dos o más avisos
**Importe:** ✅ no significa que la web sea de fiar. Solo indica que no se ha detectado ninguna de estas señales. Esta herramientas es educativa y no sustituye a un antivirus.

## Instalación
1. Descarga este repositorio (**Code ==> Download ZIP**) y descomprímelo.
2. Abre `chrome://extensions` en Chrome.
3. Activa el **Modo desarrollador**.
4. Pulsa **Cargar descomprimida** y selecciona la carpeta.

## Tecnologías
HTML, JavaScript y Manifest v3.

## Próximos pasos
- [ ] Revisión de cabeceras de seguridad (HSTS, CSP)
- [ ] Análisis de cookies (Secure, HttpOnly, SameSite)
- [ ] Puntuación de seguridad global de la web

## Autor
Jorge - https://www.linkedin.com/in/jorge-enrrique-alpaca-farf%C3%A1n-03a218340/
