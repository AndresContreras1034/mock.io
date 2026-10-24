import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import { useLanguage } from '../../context/useLanguage';
import './CoverageMap.css';

// Topojson público de los estados de EE. UU.
const GEO_URL = 'https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json';

// Estado donde J&R Safety Wear LLC tiene presencia física confirmada.
const COVERED_STATES = [
  'Colorado',
];

function CoverageMap() {
  const { t } = useLanguage();

  return (
    <section className="coverage-map">
      <div className="coverage-map__intro">
        <h2>{t('coverage.title')}</h2>
        <p>{t('coverage.description')}</p>

        <ul className="coverage-map__legend">
          <li>
            <span className="coverage-map__dot coverage-map__dot--active" />
            {t('coverage.main')}
          </li>

          <li>
            <span className="coverage-map__dot" />
            {t('coverage.unknown')}
          </li>
        </ul>
      </div>

      <div className="coverage-map__figure">
        <ComposableMap
          projection="geoAlbersUsa"
          className="coverage-map__svg"
        >
          <Geographies geography={GEO_URL}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const isCovered = COVERED_STATES.includes(
                  geo.properties.name
                );

                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={isCovered ? '#F5B700' : '#DDE2DF'}
                    stroke="#FFFFFF"
                    strokeWidth={0.75}
                    style={{
                      default: {
                        outline: 'none',
                      },
                      hover: {
                        outline: 'none',
                        fill: isCovered
                          ? '#E67E22'
                          : '#C9D0CB',
                      },
                      pressed: {
                        outline: 'none',
                      },
                    }}
                  />
                );
              })
            }
          </Geographies>
        </ComposableMap>
      </div>
    </section>
  );
}

export default CoverageMap;