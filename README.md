# CYBER ENGLISH 2077 — v0.2

Prototipo educativo de RPG cenital para FP Básica de Informática. Motor HTML5 Canvas y JavaScript, sin dependencias externas; no se ha podido instalar Phaser en el entorno de creación. Arte original pixel art generado por código, audio original sintetizado, no utiliza assets comerciales.

## Ejecutar
Abre `index.html` en Chrome o Edge actualizado. También se entrega una edición autónoma HTML con todos los recursos embebidos. Para firmas y persistencia se recomienda servir por HTTPS (GitHub Pages) o localhost. En archivo local, depende de las políticas de seguridad y almacenamiento de cada navegador.

## Controles
WASD o flechas; E o botón Interactuar. Sigue el objetivo amarillo y los nombres de las zonas; las entradas al apartamento y al laboratorio se activan al acercarse y pulsar E. Cada misión exige respuestas escritas en inglés; se corrigen por variantes previstas (no se evalúa automáticamente texto libre). Tras el reto, se genera la ficha manuscrita y se bloquea el avance hasta recibir código firmado por el profesor.

## Publicación GitHub Pages
Crear un repositorio público, subir **únicamente el contenido de esta carpeta pública** (index.html, game.js, missions.js, assets PNG, README y roadmap). En Settings > Pages, elegir Deploy from a branch, main, / (root). No publicar el panel docente, ni su clave privada, ni sus soluciones. No se ha publicado aún desde ChatGPT porque no hay repositorio autorizado y no se dispone de una acción de creación de repositorios. No hay costes previstos mientras se respeten límites de GitHub Pages.

## Seguridad y privacidad
ID anónimo aleatorio, estado y CSV locales. Firma ECDSA P-256 para vincular código a ID, submisión y nonce. El panel docente privado es el único portador de la clave de firma. La lógica sigue siendo local: un alumno con capacidad de editar JavaScript o localStorage puede manipular su progreso. El CSV local no es un sistema oficial de notas. No incluir nombres reales. Las respuestas digitales están en el código público; el solucionario manuscrito no. Usar panel privado fuera de la publicación y verificar personalmente las entregas. No usar para evaluación de alto impacto sin servidor seguro.

## Alcance y pruebas
Implementadas 10 submisiones de Identity Protocol, fichas, panel externo local, guardado, rechazo/aprobación, rúbrica 7/10 configurable, exportación CSV, ciudad y dos interiores. Las nueve misiones restantes son diseño, no jugables. No se han implementado inventario, niveles complejos, voces, retratos, niebla/iluminación dinámica avanzada, edición docente que se sincronice con alumnos ni autenticación en servidor. El arte y audio son de prototipo, no calidad comercial. No se ha usado Codex, Figma para diseño ni Replit para ejecución en esta sesión; Context7 se consultó antes. Prueba Node con DOM simulado pasó validación de firma, rechazo, reintento, 10 aprobaciones y persistencia de estado; la prueba en navegador no se pudo ejecutar por política de navegación del entorno. No se ha probado el movimiento real, la impresión, audio ni la compatibilidad completa en navegador. Verificar antes de usar con alumnos.


## v0.2 — Phaser
El punto de entrada web carga Phaser 3.90.0 desde jsDelivr (fallback unpkg). Nuevo motor de escenas, cámara, sprites y animación, arte original generado como texturas de píxeles, lluvia y luces. Se conserva la lógica educativa, las colisiones geométricas y la clave pública de validación, así como el almacenamiento ce2077.v1. Los archivos game.js y PNG anteriores se conservan para referencia. Los scripts nuevos se han comprobado sintácticamente; aún no se ha verificado la ejecución completa en un navegador real. Se necesita conexión al CDN en primera carga. No se han publicado datos privados ni el panel docente.
