/* Colors */

// Color types
const colorTypeOptions = {
    original: 'original',
    reverse: 'reverse'
};

const colorTypeDefault = colorTypeOptions.original;

// Color pallet
const colorPalletOptions = {
    theme: 'theme',
    wab: 'wab',
    status: 'status'
};

const colorPalletDefault = colorPalletOptions.theme;

// Color themes
const colorThemeOptions = {
    primary: 'primary',
    secondary: 'secondary',
    tertiary: 'tertiary',
    quaternary: 'quaternary'
};

const colorThemeDefault = colorThemeOptions.primary;

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
    waveRight: 'waveRight'
};

const maskDefault = maskOptions.none;

// Decoration styles
const decorationOptions = {
    none: 'none',
    left: 'left',
    right: 'right'
};

const decorationDefault = decorationOptions.left;

// List styles
const listStyleOptions = {
    dash: 'dash',
    icon: 'icon',
    number: 'number',
};

const listStyleDefault = listStyleOptions.dash;

// Button styles
const buttonStyleOptions = {
    fill: 'fill',
    line: 'line'
};

const buttonStyleDefault = buttonStyleOptions.fill;

// Image type
const imageTypeOptions = {
    normal: 'normal',
    picture: 'picture',
    cover: 'cover'
};

const imageTypeDefault = imageTypeOptions.normal;

/* Sizes */

// Button sizes
const buttonSizeOptions = {
    sm: 'sm',
    md: 'md',
    lg: 'lg'
};

const buttonSizeDefault = buttonSizeOptions.md;

// Radio sizes
const radioSizeOptions = {
    md: 'md',
    lg: 'lg'
};

const radioSizeDefault = radioSizeOptions.lg;

// Shadow styles
const shadowSizeOptions = {
    none: 'none',
    sm: 'sm',
    md: 'md',
    lg: 'lg',
};

const shadowSizeDefault = shadowSizeOptions.md;

// Radius sizes
const radiusOptions = {
    none: 'none',
    sm: 'sm',
    lg: 'lg'
};

const radiusDefault = radiusOptions.lg;

// Spaces
const spaceOptions = {
    none: 'none',
    xs: 'xs',
    sm: 'sm',
    md: 'md',
    lg: 'lg',
    xl: 'xl'
};

const spaceDefault = spaceOptions.none;

// Block padding
const blockSpaceOptions = {
    none: 'none',
    xs: 'xs',
    sm: 'sm',
    md: 'md',
    lg: 'lg',
    xl: 'xl'
};

const blockSpaceDefault = blockSpaceOptions.none;

// Block width
const blockWidthOptions = {
    sm: 'sm',
    md: 'md',
    lg: 'lg',
    xl: 'xl'
};

const blockWidthDefault = blockWidthOptions.md;

// Icon size
const iconSizeOptions = {
    xs: 'xs',
    sm: 'sm',
    md: 'md',
    lg: 'lg',
    xl: 'xl'
};

const iconSizeDefault = iconSizeOptions.md;

// Image size
const imageSizeOptions = {
    auto: 'auto',
    xs: 'xs',
    sm: 'sm',
    md: 'md',
    lg: 'lg',
    xl: 'xl'
};

const imageSizeDefault = imageSizeOptions.auto;

// Input width
const inputWidthOptions = {
    sm: 'sm',
    md: 'md',
    lg: 'lg',
}

const inputWidthDefault = inputWidthOptions.md;

// Font sizes
const fontSizeOptions = {
    xxs: 'xxs',
    xs: 'xs',
    sm: 'sm',
    base: 'base',
    md: 'md',
    lg: 'lg',
    xl: 'xl'
};

const fontSizeDefault = fontSizeOptions.base;

/* HTML tags */

// Card HTML tags
const cardHtmlTagOptions = {
    div: 'div',
    article: 'article',
    section: 'section',
    aside: 'aside'
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
    span: 'span'
};

const titleHtmlTagDefault = titleHtmlTagOptions.span;

// Text HTML tags
const textHtmlTagOptions = {
    p: 'p',
    div: 'div'
};

const textHtmlTagDefault = textHtmlTagOptions.p;

/* Grids and aligns */

// Grids types

const displayOptions = {
    flex: 'flex',
    grid: 'grid',
    column: 'column'
};

const displayDefault = displayOptions.flex;

// Flex direction

const flexDirectionOptions = {
    row: 'row',
    column: 'column'
};

const flexDirectionDefault = flexDirectionOptions.row;

// Flex wrap

const flexWrapOptions = {
    wrap: 'wrap',
    nowrap: 'nowrap'
};

const flexWrapDefault = flexWrapOptions.wrap;

// Justify content

const justifyContentOptions = {
    left: 'flex-start',
    center: 'center',
    right: 'flex-end',
    spaceBetween: 'space-between'
};

const justifyContentDefault = justifyContentOptions.left;

// Justify items

const justifyItemsOptions = {
    stretch: 'stretch',
    center: 'center',
    start: 'start',
    end: 'end'
};

const justifyItemsDefault = justifyItemsOptions.center;

// Align items

const alignItemsOptions = {
    flexStart: 'flex-start',
    center: 'center',
    flexEnd: 'flex-end',
    stretch: 'stretch'
};

const alignItemsDefault = alignItemsOptions.flexStart;

// Align
const alignOptions = {
    left: 'left',
    center: 'center',
    right: 'right'
};

const alignDefault = alignOptions.left;

export {
    colorTypeOptions,
    colorTypeDefault,
    colorPalletOptions,
    colorPalletDefault,
    colorThemeOptions,
    colorThemeDefault,
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
    buttonStyleOptions,
    buttonStyleDefault,
    imageTypeOptions,
    imageTypeDefault,

    buttonSizeOptions,
    buttonSizeDefault,
    radioSizeOptions,
    radioSizeDefault,
    shadowSizeOptions,
    shadowSizeDefault,
    radiusOptions,
    radiusDefault,
    spaceOptions,
    spaceDefault,
    blockSpaceOptions,
    blockSpaceDefault,
    blockWidthOptions,
    blockWidthDefault,
    iconSizeOptions,
    iconSizeDefault,
    imageSizeOptions,
    imageSizeDefault,
    inputWidthOptions,
    inputWidthDefault,
    fontSizeOptions,
    fontSizeDefault,

    cardHtmlTagOptions,
    cardHtmlTagDefault,
    titleHtmlTagOptions,
    titleHtmlTagDefault,
    textHtmlTagOptions,
    textHtmlTagDefault,

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
};