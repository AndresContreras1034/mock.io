const categoryFolders = [
  {
    id: 'cascos',
    folder: '01_Cascos',
    label: 'Cascos',
    translationKey: 'category.helmets',
  },
  {
    id: 'chaquetas',
    folder: '02_Chaquetas_y_Sudaderas',
    label: 'Chaquetas y sudaderas',
    translationKey: 'category.jackets',
  },
  {
    id: 'chalecos',
    folder: '03_Chalecos',
    label: 'Chalecos',
    translationKey: 'category.vests',
  },
  {
    id: 'camisetas',
    folder: '04_Camisetas_y_Manga_Larga',
    label: 'Camisetas y manga larga',
    translationKey: 'category.shirts',
  },
  {
    id: 'gorros',
    folder: '05_Gorros_Pasamontanas_Sombreros',
    label: 'Gorros y sombreros',
    translationKey: 'category.hats',
  },
  {
    id: 'guantes',
    folder: '06_Guantes',
    label: 'Guantes',
    translationKey: 'category.gloves',
  },
];

const categoriesByFolder = new Map(
  categoryFolders.map((category) => [category.folder, category]),
);

const catalogImages = import.meta.glob(
  '../assets/Catalogo_imagenes/{01_Cascos,02_Chaquetas_y_Sudaderas,03_Chalecos,04_Camisetas_y_Manga_Larga,05_Gorros_Pasamontanas_Sombreros,06_Guantes}/*.jpeg',
  { eager: true, import: 'default' },
);

export const categories = categoryFolders.map(
  ({ id, label, translationKey }) => ({ id, label, translationKey }),
);

const englishProductNames = {
  '01_C01_casco_ventilado_azul': 'Blue vented hard hat',
  '01_C02_casco_ala_ancha_hidrografico_azul_negro':
    'Blue and black hydrographic wide-brim hard hat',
  '01_C03_casco_ala_ancha_calaveras_gris': 'Gray skull-print wide-brim hard hat',
  '01_C04_casco_ventilado_amarillo_hi_vis': 'Yellow high-visibility vented hard hat',
  '01_C05_casco_ala_ancha_blanco_el_salvador':
    'El Salvador white wide-brim hard hat',
  '01_C06_casco_ala_ancha_cristales_negro': 'Black crystal wide-brim hard hat',
  '01_C07_casco_ala_ancha_fibra_carbono_negro':
    'Black carbon-fiber wide-brim hard hat',
  '01_C08_casco_ala_ancha_bandera_mexico_captura':
    'Mexico flag wide-brim hard hat',
  '01_C09_casco_ala_ancha_fibra_carbono_azul':
    'Blue carbon-fiber wide-brim hard hat',
  '01_C10_casco_ala_ancha_blanco_guatemala':
    'Guatemala white wide-brim hard hat',
  '01_C11_casco_ventilado_rojo': 'Red vented hard hat',
  '01_C12_casco_ala_ancha_blanco_mate': 'Matte white wide-brim hard hat',
  '02_J01_chaleco_sudadera_hi_vis_amarillo_captura':
    'Yellow high-visibility hooded vest',
  '02_J02_sudadera_capucha_hi_vis_amarillo_naranja_captura':
    'Yellow and orange high-visibility hoodie',
  '02_J03_chaqueta_hi_vis_amarilla_negra_dos_tonos_captura':
    'Two-tone yellow and black high-visibility jacket',
  '02_J04_chaqueta_softshell_negra_hi_vis_captura':
    'Black high-visibility softshell jacket',
  '02_J05_chaqueta_azul_forro_sherpa_capucha_captura':
    'Blue sherpa-lined hooded jacket',
  '02_J06_sudadera_forro_sherpa_gris_captura': 'Gray sherpa-lined hoodie',
  '02_J07_impermeable_negro_reflectivo_modelo_captura':
    'Black reflective rain jacket',
  '02_J08_chaqueta_impermeable_negra_forro_sherpa_captura':
    'Black sherpa-lined waterproof jacket',
  '02_J09_chaqueta_hi_vis_amarilla_negra_naranja':
    'Yellow, black and orange high-visibility jacket',
  '02_J10_chaquetas_hi_vis_y_cubrenucas_captura':
    'High-visibility jackets with neck covers',
  '02_J11_sudadera_hi_vis_amarilla_negra_maniqui_captura':
    'Yellow and black high-visibility hoodie',
  '03_V01_chaleco_naranja_hi_vis_captura':
    'Orange high-visibility safety vest',
  '03_V02_chaleco_hi_vis_amarillo_negro_captura':
    'Yellow and black high-visibility safety vest',
  '03_V03_chaleco_acolchado_naranja_amarillo_negro_HK80597M_captura':
    'Orange, yellow and black padded safety vest',
  '04_M01_sudadera_capucha_camuflaje_arbol_captura':
    'Tree camouflage hooded sweatshirt',
  '04_M02_camiseta_manga_larga_hi_vis_colgadas_captura':
    'High-visibility long-sleeve shirts',
  '04_M03_sudadera_ligera_jaspeada_capucha_captura':
    'Lightweight heathered hooded sweatshirt',
  '04_M04_camiseta_manga_larga_camuflaje_captura':
    'Camouflage long-sleeve shirt',
  '04_M05_camiseta_manga_larga_hi_vis_colgadas_2_captura':
    'High-visibility long-sleeve shirts',
  '04_M06_camiseta_manga_larga_hi_vis_amarillo_naranja_captura':
    'Yellow and orange high-visibility long-sleeve shirt',
  '04_M07_camiseta_manga_corta_colores_captura':
    'Short-sleeve shirts in assorted colors',
  '05_G01_pasamontanas_invierno_maniquies': 'Winter balaclavas',
  '05_G02_sombrero_palma_bandera_mexico_captura':
    'Palm hat with Mexico flag',
  '05_G03_pasamontanas_camuflaje_empaque_captura':
    'Camouflage balaclava',
  '05_G04_pasamontanas_ninja_face_mask_empaque_captura':
    'Ninja-style balaclava',
  '05_G05_sombrero_cubrenuca_hi_vis_colores_captura':
    'High-visibility sun hat with neck flap',
  '05_G06_gorro_ushanka_invierno_WLF8127_captura': 'Winter ushanka hat',
  '05_G07_cubrecuello_gaiter_empaque_captura': 'Neck gaiter',
  '06_U01_guantes_tres_modelos_captura': 'Safety gloves in three styles',
};

export const products = Object.entries(catalogImages).flatMap(([path, image]) => {
    const [folder, filename] = path.split('/').slice(-2);
    const category = categoriesByFolder.get(folder);

    if (!category) return [];

    const name = filename
      .replace(/^\d{2}_[A-Z]\d+_/, '')
      .replace(/\.jpeg$/i, '')
      .replace(/_/g, ' ')
      .replace(/\bcaptura\b/gi, '')
      .replace(/\s+/g, ' ')
      .trim()
      .replace(/^./, (character) => character.toLocaleUpperCase('es-CO'));

    const id = filename.replace(/\.jpeg$/i, '');

    return [
      {
        id,
        name,
        nameEn: englishProductNames[id] ?? name,
        category: category.id,
        image,
      },
    ];
  },
);
