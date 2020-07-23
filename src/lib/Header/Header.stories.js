import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import {
    folder,
    spaceOptions,
    alignOptions,
    colorPalletOptions,
    greyOptions,
    itemHtmlTagOptions,
    iconHtmlTagOptions,
    iconSizeOptions,
    textHtmlTagOptions,
    decorationOptions,
    colorTypeOptions,
    fontSizeOptions,
} from '../../shared/constants';
import { UserIcon } from '../Icon/Icon';
import Card from '../Card/Card';
import Title from '../Title/Title';
import Banner from '../Banner/Banner';
import Text from '../Text/Text';
import Link from '../Link/Link';
import MenuItem from '../MenuItem/MenuItem';
import Menu from '../Menu/Menu';
import MenuPrimary from '../MenuPrimary/MenuPrimary';
import MenuSecondary from '../MenuSecondary/MenuSecondary';
import MenuTertiary from '../MenuTertiary/MenuTertiary';
import MenuList from '../MenuList/MenuList';
import MenuClose from '../MenuClose/MenuClose';
import MenuHamburger from '../MenuHamburger/MenuHamburger';
import Logo from '../Logo/Logo';
import Dot from '../Dot/Dot';
import MenuGroup from '../MenuGroup/MenuGroup';
import Header from './Header';
import { logo } from '../Logo/sample/logo';

const secondaryItem = {
    hasHoverBase: false,
    hasHoverEmphasis: true,
    align: alignOptions.center,
    isMain: true,
};

const mainLink = {
    hasHover: false,
    hasUnderline: false,
    colorPallet: colorPalletOptions.wab,
    hasUppercase: true,
};

const secondaryLink = {
    hasHover: false,
    hasUnderline: false,
    hasUppercase: true,
};

const subLink = {
    hasHover: false,
    hasUnderline: false,
};

const sampleLinks = [
    {
        link: 'lorem',
        label: 'Lorem ipsum dolor',
    },
    {
        link: 'sit-amet',
        label: 'Sit amet',
    },
    {
        link: 'consectetur',
        label: 'Consectetur adipiscing',
    },
    {
        link: 'ornare',
        label: 'Cras ornare laoreet',
    },
    {
        link: 'in-finibus',
        label: 'In finibus dolor',
    },
];

const isOpenMenuPrimaryLabel = 'Open MenuPrimary';

storiesOf(folder.nav + 'Header', module)
    .addDecorator(withKnobs)
    .add('Header', () => (
        <>
            <Header isFixed={boolean('Fixed Header', true)}>
                <MenuGroup>
                    <div className="main-nav">
                        <MenuHamburger
                            isOpen={boolean(isOpenMenuPrimaryLabel, false)}
                        />

                        <a href="#">
                            <Logo
                                hasBaseline={false}
                                hasHoverRight={true}
                                blockWidth={spaceOptions.sm}
                            >
                                {logo}
                            </Logo>
                        </a>

                        <UserIcon
                            htmlTag={iconHtmlTagOptions.button}
                            iconSize={iconSizeOptions.xl}
                        />
                    </div>

                    <MenuPrimary
                        isOpen={boolean(isOpenMenuPrimaryLabel, false)}
                    >
                        <Menu>
                            <a href="#">
                                <MenuItem isMain={true}>
                                    <Link {...mainLink}>About us</Link>
                                </MenuItem>
                            </a>
                        </Menu>

                        <Menu>
                            <a href="#">
                                <MenuItem
                                    isMain={true}
                                    hasHoverBase={false}
                                    hasHoverAlternative={false}
                                >
                                    <Link {...mainLink}>Other products</Link>
                                </MenuItem>
                            </a>

                            <MenuList>
                                <a href="#">
                                    <MenuItem hasHoverEmphasis={true}>
                                        <Link {...subLink}>Tree</Link>

                                        <Text>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit.
                                            Maecenas sit amet accumsan dolor.
                                            Nullam fringilla quam leo.
                                        </Text>
                                    </MenuItem>
                                </a>

                                <a href="#">
                                    <MenuItem hasHoverEmphasis={true}>
                                        <Link {...subLink}>Payment</Link>
                                    </MenuItem>
                                </a>
                            </MenuList>
                        </Menu>

                        <Menu>
                            <a href="#">
                                <MenuItem isMain={true}>
                                    <Link {...mainLink}>Visit us</Link>
                                </MenuItem>
                            </a>
                        </Menu>
                    </MenuPrimary>

                    <Dot
                        className="hideOnSmallScreen"
                        colorPallet={colorPalletOptions.wab}
                        colorWab={greyOptions.grey10}
                        marginLeft={spaceOptions.lg}
                        marginRight={spaceOptions.lg}
                    />

                    <MenuSecondary
                        closeComponent={<MenuClose />}
                        isOpen={boolean('Open MenuSecondary', false)}
                    >
                        <Menu htmlTag={itemHtmlTagOptions.div}>
                            <a href="#">
                                <MenuItem {...secondaryItem}>
                                    <Link {...secondaryLink}>Login</Link>
                                </MenuItem>
                            </a>
                        </Menu>

                        <Menu htmlTag={itemHtmlTagOptions.div}>
                            <a href="#">
                                <MenuItem {...secondaryItem}>
                                    <Link {...secondaryLink}>Subscribe</Link>
                                </MenuItem>
                            </a>
                        </Menu>
                    </MenuSecondary>
                </MenuGroup>

                {boolean('Add MenuTertiary', true) ? (
                    <MenuTertiary>
                        {sampleLinks.map((sample, index) => (
                            <a href={'#' + sample.link} key={index}>
                                {sample.label}
                            </a>
                        ))}
                    </MenuTertiary>
                ) : null}
            </Header>

            <Banner topStyle={decorationOptions.none} isFirstContent={true}>
                <Card hasBackground={false}>
                    <Title
                        colorType={colorTypeOptions.reverse}
                        textSize={fontSizeOptions.xl}
                        marginLateral={spaceOptions.md}
                        marginTop={spaceOptions.md}
                    >
                        Your big title
                    </Title>

                    <Text
                        colorType={colorTypeOptions.reverse}
                        marginLateral={spaceOptions.md}
                        marginTop={spaceOptions.md}
                        marginBottom={spaceOptions.md}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Duis porttitor velit a ultricies aliquet. Donec vehicula
                        in arcu non sodales. Fusce et consectetur odio. Ut
                        bibendum ullamcorper turpis vel imperdiet.
                    </Text>
                </Card>
            </Banner>

            <Text
                marginTop={spaceOptions.xl}
                marginBottom={spaceOptions.md}
                marginLateral={spaceOptions.xl}
                htmlTag={textHtmlTagOptions.div}
            >
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Praesent a leo auctor, convallis diam vel, tincidunt lacus.
                    Donec eget neque vitae arcu interdum pharetra nec quis nisl.
                </p>

                <p>
                    Vestibulum sit amet lacus ut ipsum ornare gravida et ac
                    justo. Fusce in luctus odio. Integer id lorem sit amet est
                    laoreet egestas. Sed eu nulla hendrerit, aliquet leo id,
                    sagittis enim.
                </p>

                <p>
                    Duis orci mauris, bibendum sit amet nisl eget, laoreet
                    lobortis nibh. Pellentesque eu convallis risus. Cras
                    accumsan odio eu eros vulputate, viverra blandit nisi
                    fermentum.
                </p>

                <p>
                    Quisque dolor urna, porttitor at luctus eu, maximus in
                    justo. Nunc ultricies id nunc venenatis iaculis. Phasellus
                    et mollis tellus. Pellentesque nec lacinia quam. Quisque vel
                    tempus lectus, in dignissim diam.
                </p>

                <p>
                    Maecenas finibus ultrices nisl id pharetra. Nulla facilisi.
                    Fusce et viverra neque, vestibulum dignissim ligula. Nulla
                    ornare est ac porta feugiat.
                </p>

                <p>
                    Maecenas quis turpis ut diam imperdiet bibendum. Praesent
                    venenatis consectetur metus eu dignissim. Nulla ac tortor
                    malesuada, auctor ligula in, mattis leo. Vestibulum ante
                    ipsum primis in faucibus orci luctus et ultrices posuere
                    cubilia curae.
                </p>

                <p>
                    Morbi non dui rhoncus, semper lacus et, fermentum eros. Duis
                    porta quam sit amet cursus accumsan. Aenean at lacinia
                    massa. Proin mi erat, interdum eu pretium at, ullamcorper ut
                    tortor.
                </p>

                <p>
                    Sed et justo ut nibh congue consequat egestas eget diam.
                    Fusce tortor nibh, semper sit amet magna eget, dictum congue
                    urna. Quisque vestibulum vitae magna at dapibus. In eget
                    feugiat neque.
                </p>

                <p>
                    Aenean vitae facilisis enim, ultricies bibendum ex.
                    Phasellus sollicitudin purus quis auctor ultricies.
                </p>

                <p>
                    Vivamus nec tempus eros. Vivamus commodo urna purus, vitae
                    bibendum odio vehicula sit amet. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit.
                </p>

                <p>
                    Praesent a leo auctor, convallis diam vel, tincidunt lacus.
                    Donec eget neque vitae arcu interdum pharetra nec quis nisl.
                    Vestibulum sit amet lacus ut ipsum ornare gravida et ac
                    justo.
                </p>

                <p>
                    Fusce in luctus odio. Integer id lorem sit amet est laoreet
                    egestas. Sed eu nulla hendrerit, aliquet leo id, sagittis
                    enim. Duis orci mauris, bibendum sit amet nisl eget, laoreet
                    lobortis nibh.
                </p>

                <p>
                    Pellentesque eu convallis risus. Cras accumsan odio eu eros
                    vulputate, viverra blandit nisi fermentum.
                </p>

                <p>
                    Quisque dolor urna, porttitor at luctus eu, maximus in
                    justo. Nunc ultricies id nunc venenatis iaculis. Phasellus
                    et mollis tellus. Pellentesque nec lacinia quam.
                </p>

                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Praesent a leo auctor, convallis diam vel, tincidunt lacus.
                    Donec eget neque vitae arcu interdum pharetra nec quis nisl.
                </p>

                <p>
                    Vestibulum sit amet lacus ut ipsum ornare gravida et ac
                    justo. Fusce in luctus odio. Integer id lorem sit amet est
                    laoreet egestas. Sed eu nulla hendrerit, aliquet leo id,
                    sagittis enim.
                </p>
            </Text>
        </>
    ));
