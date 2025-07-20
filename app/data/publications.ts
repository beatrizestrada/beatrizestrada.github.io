export interface Publication {
  id: number;
  title: string;
  author: string;
  journal: string;
  month: number;
  year: number;
  otherAuthors?: string;
  doi?: string;
  ads?: string;
}

export const publications: Publication[] = [
  {
    id: 1,
    title:
      "A Disintegrating Rocky World Shrouded in Dust and Gas: Mid-IR Observations of K2-22b using JWST",
    author: "Nick Tusay",
    otherAuthors:
      "Jason T. Wright, Thomas G. Beatty, Steve Desch, Knicole Colón, Tushar Mittal, Hugh P. Osborn, Beatriz Campos Estrada, James E. Owen, Jessica Libby-Roberts, Arvind F. Gupta, Brad Foley, Erik Meier Valdés, Daniel J. Stevens, Ashley Herbst",
    journal: "arXiv e-prints",
    month: 1,
    year: 2025,
    doi: "https://doi.org/10.48550/arXiv.2501.08301",
    ads: "https://ui.adsabs.harvard.edu/abs/2025arXiv250108301T",
  },
  {
    id: 2,
    title:
      "The MSG model for cloudy sub-stellar atmospheres: A grid of self-consistent sub-stellar atmosphere models with microphysical cloud formation",
    author: "Beatriz Campos Estrada",
    otherAuthors:
      "David A. Lewis, Christiane Helling, Richard A. Booth, Francisco Ardévol Martínez, Uffe G. Jørgensen",
    journal: "A&A",
    month: 2,
    year: 2025,
    doi: "https://doi.org/10.1051/0004-6361/202451562",
    ads: "https://ui.adsabs.harvard.edu/abs/2025A&A...694A.275C",
  },
  {
    id: 3,
    title:
      "A grid of self-consistent MSG (MARCS-StaticWeather-GGchem) cool stellar, sub-stellar, and exoplanetary model atmospheres",
    author: "Uffe G. Jørgensen",
    otherAuthors:
      "Flavia Amadio, Beatriz Campos Estrada, Kristian Holten Møller, Aaron D. Schneider, Thorsten Balduin, Azzurra D’Alessandro, Eftychia Symeonidou, Christiane Helling, Åke Nordlund, Peter Woitke",
    journal: "A&A",
    month: 10,
    year: 2024,
    doi: "https://doi.org/10.1051/0004-6361/202450108",
    ads: "https://ui.adsabs.harvard.edu/abs/2024A&A...690A.127J",
  },
  {
    id: 4,
    title:
      "On the likely magnesium-iron silicate dusty tails of catastrophically evaporating rocky planets",
    author: "Beatriz Campos Estrada",
    otherAuthors:
      "James E. Owen, Marija R. Jankovic, Anna Wilson, Christiane Helling",
    journal: "MNRAS",
    month: 2,
    year: 2024,
    doi: "https://doi.org/10.1093/mnras/stae095",
    ads: "https://ui.adsabs.harvard.edu/abs/2024MNRAS.528.1249C",
  },
  {
    id: 5,
    title:
      "Masses and compositions of three small planets orbiting the nearby M dwarf L231-32 (TOI-270) and the M dwarf radius valley",
    author: "V. Van Eylen",
    otherAuthors:
      "N. Astudillo-Defru, X. Bonfils, J. Livingston, T. Hirano, R. Luque, K. W. F. Lam, A. B. Justesen, J. N. Winn, D. Gandolfi, G. Nowak, E. Palle, S. Albrecht, F. Dai, Beatriz Campos Estrada, J. E. Owen, D. Foreman-Mackey, M. Fridlund, J. Korth, S. Mathur, T. Forveille, T. Mikal-Evans, H. L. M. Osborne, C. S. K. Ho, J. M. Almenara, E. Artigau, O. Barragán, S. C. C. Barros, F. Bouchy, J. Cabrera, D. A. Caldwell, D. Charbonneau, P. Chaturvedi, W. D. Cochran, S. Csizmadia, M. Damasso, X. Delfosse, J. R. De Medeiros, R. F. Dı́az, R. Doyon, M. Esposito, G. Fűrész, P. Figueira, I. Georgieva, E. Goffo, S. Grziwa, E. Guenther, A. P. Hatzes, J. M. Jenkins, P. Kabath, E. Knudstrup, D. W. Latham, B. Lavie, C. Lovis, R. E. Mennickent, S. E. Mullally, F. Murgas, N. Narita, F. A. Pepe, C. M. Persson, S. Redfield, G. R. Ricker, N. C. Santos, S. Seager, L. M. Serrano, A. M. S. Smith, A. Suárez Mascareño, J. Subjak, J. D. Twicken, S. Udry, R. Vanderspek, M. R. Zapatero Osorio",
    journal: "MNRAS",
    month: 10,
    year: 2021,
    doi: "https://doi.org/10.1093/mnras/stab2143",
    ads: "https://ui.adsabs.harvard.edu/abs/2021MNRAS.507.2154V",
  },
  {
    id: 6,
    title: "Testing exoplanet evaporation with multitransiting systems",
    author: "James E. Owen",
    otherAuthors: "Beatriz Campos Estrada",
    journal: "MNRAS",
    month: 2,
    year: 2020,
    doi: "https://doi.org/10.1093/mnras/stz3435",
    ads: "https://ui.adsabs.harvard.edu/abs/2020MNRAS.491.5287O",
  },
];
