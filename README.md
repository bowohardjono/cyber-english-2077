# CYBER ENGLISH 2077 — v0.5

Prototipo educativo de RPG cenital para FP Básica de Informática. Motor Phaser 3.90.0 y JavaScript; la versión anterior Canvas se conserva en game.js. Arte original pixel art generado por código, audio original sintetizado, no utiliza assets comerciales.

## Ejecutar
Abre `index.html` en Chrome o Edge actualizado. También se entrega una edición autónoma HTML con todos los recursos embebidos. Para firmas y persistencia se recomienda servir por HTTPS (GitHub Pages) o localhost. En archivo local, depende de las políticas de seguridad y almacenamiento de cada navegador.

## Controles
WASD o flechas; E o botón Interactuar. Sigue el objetivo amarillo y los nombres de las zonas; las entradas al apartamento y al laboratorio se activan al acercarse y pulsar E. Cada misión exige respuestas escritas en inglés; se corrigen por variantes previstas (no se evalúa automáticamente texto libre). Tras el reto, se genera la ficha manuscrita y se bloquea el avance hasta recibir código firmado por el profesor.

## Publicación GitHub Pages
Crear un repositorio público, subir **únicamente el contenido de esta carpeta pública** (index.html, game.js, missions.js, assets PNG, README y roadmap). En Settings > Pages, elegir Deploy from a branch, main, / (root). No publicar el panel docente, ni su clave privada, ni sus soluciones. El repositorio está autorizado y GitHub Pages está configurado; no se ha podido comprobar el estado de despliegue web desde esta sesión. No hay costes previstos mientras se respeten límites de GitHub Pages.

## Seguridad y privacidad
ID anónimo aleatorio, estado y CSV locales. Firma ECDSA P-256 para vincular código a ID, submisión y nonce. El panel docente privado es el único portador de la clave de firma. La lógica sigue siendo local: un alumno con capacidad de editar JavaScript o localStorage puede manipular su progreso. El CSV local no es un sistema oficial de notas. No incluir nombres reales. Las respuestas digitales están en el código público; el solucionario manuscrito no. Usar panel privado fuera de la publicación y verificar personalmente las entregas. No usar para evaluación de alto impacto sin servidor seguro.

## Alcance y pruebas
Implementadas 10 submisiones de Identity Protocol, fichas, panel externo local, guardado, rechazo/aprobación, rúbrica 7/10 configurable, exportación CSV, ciudad y dos interiores. Las nueve misiones restantes son diseño, no jugables. No se han implementado inventario, niveles complejos, voces, retratos, niebla/iluminación dinámica avanzada, edición docente que se sincronice con alumnos ni autenticación en servidor. El arte y audio son de prototipo, no calidad comercial. No se ha usado Codex, Figma para diseño ni Replit para ejecución en esta sesión; Context7 se consultó antes. Prueba Node con DOM simulado pasó validación de firma, rechazo, reintento, 10 aprobaciones y persistencia de estado; la prueba en navegador no se pudo ejecutar por política de navegación del entorno. No se ha probado el movimiento real, la impresión, audio ni la compatibilidad completa en navegador. Verificar antes de usar con alumnos.


## v0.2 — Phaser
El punto de entrada web carga Phaser 3.90.0 desde jsDelivr (fallback unpkg). Nuevo motor de escenas, cámara, sprites y animación, arte original generado como texturas de píxeles, lluvia y luces. Se conserva la lógica educativa, las colisiones geométricas y la clave pública de validación, así como el almacenamiento ce2077.v1. Los archivos game.js y PNG anteriores se conservan para referencia. Los scripts nuevos se han comprobado sintácticamente; aún no se ha verificado la ejecución completa en un navegador real. Se necesita conexión al CDN en primera carga. No se han publicado datos privados ni el panel docente.

Prueba adicional v0.2: escena con API Phaser simulada, creación de cuatro texturas y 16 fotogramas, desplazamiento y cambio de zona correctos. No sustituye una prueba con Phaser real en navegador.


## v0.3 — Anime Arcade
Arte original con seis personajes, 96 fotogramas de sprites (16 por personaje), retratos en diálogos, tres escenarios luminosos y nuevo HUD. Motor Phaser 3.90.0; se conservan coordenadas, colisiones, 10 retos/submisiones, fichas, clave pública y progreso local. La dirección artística es anime retro original, no utiliza assets de franquicias. Sintaxis y creación de texturas, retratos, movimiento y cambio de zona comprobados con API simulada; ejecución visual real en navegador pendiente. El panel docente de v0.1 sigue siendo compatible. No se publica el solucionario ni la clave privada.


## v0.4 — Grammar & classroom validation
Teoría de las diez misiones, ocho variantes de reintento por submisión (rotación), sin mostrar soluciones en el feedback. Rechazo docente reinicia reto y ficha y retira XP previo. Nombre y apellidos locales, perfiles locales por nombre. Código de ocho dígitos por nombre normalizado, misión/submisión, intento y decisión; validación final de misión separada. Código determinista verificable en cliente: NO es seguro contra manipulación ni debe usarse como calificación oficial. No enviar nombres al repositorio. Generador docente offline v0.4 requerido. Sintaxis, 80 variantes y flujo de diez aprobaciones, rechazo, reintento, validación final y perfiles probados con DOM simulado; navegador real pendiente.


## v0.5 — Assessment & teacher progression
Se conservan 10 submisiones, gramática de toda la campaña, arte y motor Phaser 3.90. Se añaden cuatro actividades por variante (orden interactivo, transformación, cambio de género o número y completar), instrucciones en español por pregunta, resultado digital /10 aunque se suspenda y ficha manuscrita con resumen personal en cada intento. Se puede repetir con otra variante o avanzar con autorización docente; el código de ocho cifras v0.5 contiene la nota ponderada de rúbrica y la liga al alumno, actividad e intentos. Penalización 0,3 por intento adicional, máximo 2,4, con suelo positivo si la nota base era positiva. Misión final: rúbrica global independiente y penalización basada en la media de intentos; media de submisiones como referencia. El CSV del juego registra notas digital y docente. El panel docente privado conserva los cinco criterios y exporta registro. El algoritmo público NO ofrece seguridad contra manipulación; no sustituye un registro oficial. Los códigos v0.4 no son compatibles. 90 variantes verificadas estructuralmente, cálculo y códigos probados, flujo de suspenso, reintento, aprobación por debajo de 7, diez validaciones y misión final comprobado con DOM simulado; navegador real y publicación Pages pendientes de comprobación.
