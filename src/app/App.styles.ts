import { styled } from '../../panda-styles/jsx';

export const Page = styled('div', {
    base: {
        maxWidth: '1200px',
        width: '100%',
    },
});

export const Header = styled('div', {
    base: {
        height: '200px',
    },
});

export const TabBar = styled('div', {
    base: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
});

export const Tab = styled('button', {
    base: {
        background: 'unset',
        border: 'unset',
        color: 'unset',
        cursor: 'pointer',
    },
    variants: {
        selected: {
            true: {
                textDecoration: 'underline',
            },
        },
    },
});

export const TabContent = styled('div', {
    base: {
        padding: '32px',
    },
});
