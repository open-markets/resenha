# OSF

### Versioning

- This package uses semantic versioning on the form: `major.minor.patch`
- Any version that changes the OSF type schema is at least a `minor` change
    - This keeps the package version tied to the OSF version, which is of the format `major.minor`

### Modules

- `core`
- `consumer`
    - `calendar.sync`: Importa um calendário a partir de uma URL, em formato .osf
- `publisher`:
    - `publisher.<crud>` 
    - `calendar.<crud>`
    - `calendar.import`: Importa um calendário em formato .osf
    - `calendar.export`: Exporta um calendário em formato .osf
- `tracker`:
    - `publisher.<crud>`
