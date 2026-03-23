Prepara un release de nueva versión.

Pasos:
1. Lee `docs/CHANGELOG.md` para ver la versión actual
2. Lee `docs/LOGS.md` para identificar los cambios desde el último release
3. Pregúntame qué tipo de versión es si no lo indiqué:
   - PATCH: correcciones y cambios menores
   - MINOR: nueva funcionalidad retrocompatible
   - MAJOR: cambios que rompen compatibilidad
4. Actualiza `docs/CHANGELOG.md`:
   - Mueve los items de `[Unreleased]` a la nueva versión con fecha de hoy
   - Deja `[Unreleased]` vacío para futuros cambios
5. Muestra el comando de git tag para que yo lo ejecute:
   ```
   git tag -a vX.Y.Z -m "Release vX.Y.Z"
   ```

No ejecutes git commands por tu cuenta. Solo actualiza el CHANGELOG y muéstrame los comandos que debo correr.
