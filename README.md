# Next Shift by TicTAP

Static bilingual site. To preview, run `python3 -m http.server 4321 --bind 127.0.0.1 --directory dist`. Open `/` for Spanish or `/en.html` for English.

For a public release, set each page’s `og:image` to the absolute HTTPS URL of its corresponding PNG in `dist/images/`. Check the card on the published domain; some social crawlers do not resolve local image paths.

## Editorial references

- [HSE UK · Shift handover](https://www.hse.gov.uk/humanfactors/topics/shift-handover.htm): preparation, two-way handover and cross-checking; the example supports that process rather than replacing it.
- [BOE · Ley 31/1995, artículo 16](https://www.boe.es/buscar/act.php?id=BOE-A-1995-24292#a16) and [OSHA · Program Evaluation and Improvement](https://www.osha.gov/safety-management/program-evaluation): monitoring preventive and corrective actions and verifying controls.
- [TicTAP · Note Taker](https://www.tictap.me/note-taker/) and [TicTAP · Stock plugin](https://www.tictap.me/plugin-stock/): voice input to a configured form and interpretation of stock movements. The tailored report, handover, follow-up and integration examples are demonstrations, not product claims or case studies.
- [Official TicTAP vector](https://www.tictap.me/wp-content/uploads/2022/03/TicTAP-logo_completo_vector-180px-01.svg): stored unchanged in `dist/images/tictap-official.svg`.
