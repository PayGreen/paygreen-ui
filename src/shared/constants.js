/* Storybook folders */
const folderSeparator = '/';

const folder = {
    block: 'Blocks & banners' + folderSeparator,
    form: 'Form elements' + folderSeparator,
    graph: 'Graphs' + folderSeparator,
    grid: 'Grids & dividers' + folderSeparator,
    loading: 'Loading' + folderSeparator,
    list: 'Lists' + folderSeparator,
    media: 'Icons & Medias' + folderSeparator,
    nav: 'Layout' + folderSeparator,
    popup: 'Popups & messages' + folderSeparator,
    table: 'Tables' + folderSeparator,
    text: 'Texts & links' + folderSeparator,

    sub: {
        button: 'Buttons' + folderSeparator,
        daTable: 'DaTables' + folderSeparator,
        checkbox: 'Checkbox elements' + folderSeparator,
        control: 'Menu controls' + folderSeparator,
        footer: 'Footer' + folderSeparator,
        form: 'Special fields' + folderSeparator,
        menu: 'Menu elements' + folderSeparator,
        modal: 'Modal elements' + folderSeparator,
        pagination: 'Pagination elements' + folderSeparator,
        radio: 'Radio elements' + folderSeparator,
        sidebarMenu: 'Sidebar elements' + folderSeparator,
        table: 'Simple tables' + folderSeparator,
    },
};

// Debounce
const debounceTime = 200;

/* Colors */

// Color types
const colorTypeOptions = {
    original: 'original',
    reverse: 'reverse',
};

const colorTypeDefault = colorTypeOptions.original;

// Color styles
const colorStyleOptions = {
    main: 'main',
    light: 'light',
};

const colorStyleDefault = colorStyleOptions.main;

// Color pallet
const colorPalletOptions = {
    theme: 'theme',
    wab: 'wab',
    status: 'status',
};

const colorPalletDefault = colorPalletOptions.theme;

// Color themes
const colorThemeOptions = {
    primary: 'primary',
    secondary: 'secondary',
    tertiary: 'tertiary',
    quaternary: 'quaternary',
    quinary: 'quinary',
};

const colorThemeDefault = colorThemeOptions.primary;

// Color theme with none option
const colorThemeAllOptions = {
    ...{ none: 'none' },
    ...colorThemeOptions,
};

const colorThemeAllDefault = colorThemeAllOptions.none;

// Grey shades
const greyOptions = {
    white00: 'white00',
    white10: 'white10',
    white20: 'white20',
    grey10: 'grey10',
    grey20: 'grey20',
    grey30: 'grey30',
    grey40: 'grey40',
    grey50: 'grey50',
    grey60: 'grey60',
    black00: 'black00',
};

const greyDefault = greyOptions.grey40;

// Form input status
const formStatusOptions = {
    default: 'default',
    success: 'success',
    warning: 'warning',
    danger: 'danger',
};

const formStatusDefault = formStatusOptions.default;

/* Gradients, masks, decorations, buttons and lists styles + image types */

// Gradient color types
const gradientOptions = {
    none: 'none',
    brand: 'brand',
    theme: 'theme',
};

const gradientDefault = gradientOptions.none;

// Mask styles
const maskOptions = {
    none: 'none',
    gradient: 'gradient',
    waveLeft: 'waveLeft',
    waveRight: 'waveRight',
};

const maskDefault = maskOptions.none;

// Decoration styles
const decorationOptions = {
    none: 'none',
    left: 'left',
    right: 'right',
};

const decorationDefault = decorationOptions.left;

// List styles
const listStyleOptions = {
    dash: 'dash',
    icon: 'icon',
    number: 'number',
};

const listStyleDefault = listStyleOptions.dash;

// Dot styles
const dotStyleOptions = {
    circle: 'circle',
    dash: 'dash',
    slashes: 'slashes',
};

const dotStyleDefault = dotStyleOptions.circle;

// Button styles
const buttonStyleOptions = {
    fill: 'fill',
    line: 'line',
};

const buttonStyleDefault = buttonStyleOptions.fill;

// Corner styles
const cornerStyleOptions = {
    square: 'square',
    banner: 'banner',
};

const cornerStyleDefault = cornerStyleOptions.square;

// Image type
const imageTypeOptions = {
    normal: 'normal',
    picture: 'picture',
    cover: 'cover',
};

const imageTypeDefault = imageTypeOptions.normal;

// SkeletonItem types
const skeletonItemTypeOptions = {
    circle: 'circle',
    rectangle: 'rectangle',
    text: 'text',
};

const skeletonItemTypeDefault = skeletonItemTypeOptions.rectangle;

const skeletonTypeOptions = {
    imageCard: 'imageCard',
    textCard: 'textCard',
};

const skeletonTypeDefault = skeletonTypeOptions.textCard;

/* Sizes */

// Shadow sizes
const shadowSizeOptions = {
    none: 'none',
    sm: 'sm',
    md: 'md',
    lg: 'lg',
};

const shadowSizeDefault = shadowSizeOptions.md;

// Button sizes
const buttonSizeOptions = {
    sm: 'sm',
    md: 'md',
    lg: 'lg',
};

const buttonSizeDefault = buttonSizeOptions.md;

// Input width
const inputWidthOptions = {
    xs: 'xs',
    sm: 'sm',
    md: 'md',
    lg: 'lg',
};

const inputWidthDefault = inputWidthOptions.md;

// InputCard sizes
const inputCardSizeOptions = {
    md: 'md',
    lg: 'lg',
};

const inputCardSizeDefault = inputCardSizeOptions.lg;

// Radius sizes
const radiusOptions = {
    none: 'none',
    sm: 'sm',
    lg: 'lg',
};

const radiusDefault = radiusOptions.lg;

// Spaces
const spaceOptions = {
    none: 'none',
    xs: 'xs',
    sm: 'sm',
    md: 'md',
    lg: 'lg',
    xl: 'xl',
};

const spaceDefault = spaceOptions.none;

// Icon size
const iconSizeOptions = {
    xxs: 'xxs',
    xs: 'xs',
    sm: 'sm',
    md: 'md',
    lg: 'lg',
    xl: 'xl',
};

const iconSizeDefault = iconSizeOptions.md;

// Image size
const imageSizeOptions = {
    auto: 'auto',
    tiny: 'tiny',
    xxs: 'xxs',
    xs: 'xs',
    sm: 'sm',
    md: 'md',
    lg: 'lg',
    xl: 'xl',
};

const imageSizeDefault = imageSizeOptions.auto;

// Font sizes
const fontSizeOptions = {
    tiny: 'tiny',
    xxs: 'xxs',
    xs: 'xs',
    sm: 'sm',
    base: 'base',
    md: 'md',
    lg: 'lg',
    xl: 'xl',
};

const fontSizeDefault = fontSizeOptions.base;

/* HTML tags */

// Card HTML tags
const cardHtmlTagOptions = {
    div: 'div',
    article: 'article',
    section: 'section',
    aside: 'aside',
    button: 'button',
};

const cardHtmlTagDefault = cardHtmlTagOptions.div;

// Title HTML tags
const titleHtmlTagOptions = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
    span: 'span',
};

const titleHtmlTagDefault = titleHtmlTagOptions.span;

// Text HTML tags
const textHtmlTagOptions = {
    p: 'p',
    div: 'div',
    span: 'span',
    em: 'em',
    q: 'q',
    strong: 'strong',
    kbd: 'kbd',
    sub: 'sub',
};

const textHtmlTagDefault = textHtmlTagOptions.p;

// Icon HTML tags
const iconHtmlTagOptions = {
    span: 'span',
    button: 'button',
};

const iconHtmlTagDefault = iconHtmlTagOptions.span;

// Item HTML tags
const itemHtmlTagOptions = {
    li: 'li',
    div: 'div',
};

const itemHtmlTagDefault = itemHtmlTagOptions.li;

// Label HTML tags
const labelHtmlTagOptions = {
    label: 'label',
    legend: 'legend',
};

const labelHtmlTagDefault = labelHtmlTagOptions.label;

// SidebarItem HTML tags
const sidebarItemHtmlTagOptions = {
    div: 'div',
    button: 'button',
};

const sidebarItemHtmlTagDefault = sidebarItemHtmlTagOptions.div;

/* Types */

// Input types
const multipleInputTypeOptions = {
    radio: 'radio',
    checkbox: 'checkbox',
};

const multipleInputTypeDefault = multipleInputTypeOptions.radio;

/* Grids, aligns and positions */

// Grids types
const displayOptions = {
    flex: 'flex',
    grid: 'grid',
    column: 'column',
};

const displayDefault = displayOptions.flex;

// Flex direction
const flexDirectionOptions = {
    row: 'row',
    column: 'column',
};

const flexDirectionDefault = flexDirectionOptions.row;

// Flex wrap
const flexWrapOptions = {
    wrap: 'wrap',
    nowrap: 'nowrap',
};

const flexWrapDefault = flexWrapOptions.wrap;

// Justify content
const justifyContentOptions = {
    left: 'flex-start',
    center: 'center',
    right: 'flex-end',
    spaceBetween: 'space-between',
};

const justifyContentDefault = justifyContentOptions.left;

// Justify items
const justifyItemsOptions = {
    stretch: 'stretch',
    center: 'center',
    start: 'start',
    end: 'end',
};

const justifyItemsDefault = justifyItemsOptions.center;

// Align items
const alignItemsOptions = {
    flexStart: 'flex-start',
    center: 'center',
    flexEnd: 'flex-end',
    stretch: 'stretch',
    baseline: 'baseline',
};

const alignItemsDefault = alignItemsOptions.flexStart;

// Align
const alignOptions = {
    left: 'left',
    center: 'center',
    right: 'right',
};

const alignDefault = alignOptions.left;

// Hover directions
const hoverDirectionOptions = {
    none: 'none',
    top: 'top',
    right: 'right',
};

const hoverDirectionDefault = hoverDirectionOptions.none;

// Lateral positions
const lateralPositionOptions = {
    left: 'left',
    right: 'right',
};

const lateralPositionDefault = lateralPositionOptions.left;

// Positions (basic)
const positionOptions = {
    ...lateralPositionOptions,
    top: 'top',
    bottom: 'bottom',
};

const positionDefault = positionOptions.bottom;

// Block position
const blockPositionOptions = {
    none: 'none',
    center: 'center',
    ...lateralPositionOptions,
    topCenter: 'topCenter',
    topLeft: 'topLeft',
    topRight: 'topRight',
    bottomCenter: 'bottomCenter',
    bottomLeft: 'bottomLeft',
    bottomRight: 'bottomRight',
};

const blockPositionDefault = blockPositionOptions.none;

// Rotate
const rotateSizeOptions = {
    d0: 'd0',
    d45: 'd45',
    d90: 'd90',
    d135: 'd135',
    d180: 'd180',
    d225: 'd225',
    d270: 'd270',
    d315: 'd315',
};

const rotateSizeDefault = rotateSizeOptions.d0;

// Lang
const localeOptions = {
    fr: 'fr',
    en: 'en',
};

const localeDefault = localeOptions.fr;

// Other
const charModeOptions = {
    truncate: 'truncate',
    hide: 'hide',
};

const charModeDefault = charModeOptions.truncate;

export {
    folder,
    debounceTime,
    colorTypeOptions,
    colorTypeDefault,
    colorStyleOptions,
    colorStyleDefault,
    colorPalletOptions,
    colorPalletDefault,
    colorThemeOptions,
    colorThemeDefault,
    colorThemeAllOptions,
    colorThemeAllDefault,
    greyOptions,
    greyDefault,
    formStatusOptions,
    formStatusDefault,
    gradientOptions,
    gradientDefault,
    maskOptions,
    maskDefault,
    decorationOptions,
    decorationDefault,
    listStyleOptions,
    listStyleDefault,
    dotStyleOptions,
    dotStyleDefault,
    buttonStyleOptions,
    buttonStyleDefault,
    cornerStyleOptions,
    cornerStyleDefault,
    imageTypeOptions,
    imageTypeDefault,
    skeletonItemTypeOptions,
    skeletonItemTypeDefault,
    skeletonTypeOptions,
    skeletonTypeDefault,
    shadowSizeOptions,
    shadowSizeDefault,
    buttonSizeOptions,
    buttonSizeDefault,
    inputWidthOptions,
    inputWidthDefault,
    inputCardSizeOptions,
    inputCardSizeDefault,
    radiusOptions,
    radiusDefault,
    spaceOptions,
    spaceDefault,
    iconSizeOptions,
    iconSizeDefault,
    imageSizeOptions,
    imageSizeDefault,
    fontSizeOptions,
    fontSizeDefault,
    cardHtmlTagOptions,
    cardHtmlTagDefault,
    titleHtmlTagOptions,
    titleHtmlTagDefault,
    textHtmlTagOptions,
    textHtmlTagDefault,
    iconHtmlTagOptions,
    iconHtmlTagDefault,
    itemHtmlTagOptions,
    itemHtmlTagDefault,
    labelHtmlTagOptions,
    labelHtmlTagDefault,
    sidebarItemHtmlTagOptions,
    sidebarItemHtmlTagDefault,
    multipleInputTypeOptions,
    multipleInputTypeDefault,
    displayOptions,
    displayDefault,
    flexDirectionOptions,
    flexDirectionDefault,
    flexWrapOptions,
    flexWrapDefault,
    justifyContentOptions,
    justifyContentDefault,
    justifyItemsOptions,
    justifyItemsDefault,
    alignItemsOptions,
    alignItemsDefault,
    alignOptions,
    alignDefault,
    hoverDirectionOptions,
    hoverDirectionDefault,
    lateralPositionOptions,
    lateralPositionDefault,
    positionOptions,
    positionDefault,
    blockPositionOptions,
    blockPositionDefault,
    rotateSizeOptions,
    rotateSizeDefault,
    localeOptions,
    localeDefault,
    charModeOptions,
    charModeDefault,
};
