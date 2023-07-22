import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { config, library, dom } from '@fortawesome/fontawesome-svg-core'

config.autoReplaceSvg = "nest";
config.autoAddCss = true;
config.searchPseudoElements = true;
config.keepOriginalSource = true;

//add any icons from the font awesome packages here
library.add(fas);
library.add(far);
library.add(fab);

dom.watch();

export default dom;