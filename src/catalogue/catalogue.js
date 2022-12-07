import catalogueRings from './catalogueRings.js'; 
import catalogueEarrings from './catalogueEarrings.js';
import catalogueChains from  './catalogueChains.js';
import catalogueNecklaces from  './catalogueNecklaces.js';
import cataloguePendants from './cataloguePendants.js';

const catalogue = [...catalogueEarrings, ...catalogueRings, ...catalogueChains, ...catalogueNecklaces, ...cataloguePendants]
        
export default catalogue