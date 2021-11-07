import styled, { css } from 'styled-components';

interface ContainerProps {
    debug?: string;
}

export const Container = styled.div<ContainerProps>`
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-auto-rows: 1fr;
    grid-gap: 0.8em;
    overflow: hidden;
    margin-top: 0;
    margin-left: 8rem;
    margin-right: 8rem;
    max-width: 1780px;
    background: ${ props => props.debug ? "red" : "transparent"};

    @media screen and (min-width: 1780px) {
        margin-left: auto;
        margin-right: auto;
    }

    @media screen and (max-width: 1360px) {
        margin-left: 3rem;
        margin-right: 3rem;
    }

    @media screen and (max-width: 480px) {
        margin-left: 1rem;
        margin-right: 1rem;
    }
`;

// 1360
interface ColProps {
    no?: number;
}

export const Col = styled.div<ColProps>`
    padding: 5px 10px;
    width: 100%;
`;

export const MarginSparcer = styled.div`
    height: 10px;
`;

export interface GridGlobal {
    colStart?: number;
    colEnd?: number;
    rowStart?: number;
    rowEnd?: number;
}

export interface GridTablet {
    colStart?: number;
    colEnd?: number;
    rowStart?: number;
    rowEnd?: number;
}


export interface GridMobile {
    colStart?: number;
    colEnd?: number;
    rowStart?: number;
    rowEnd?: number;
}

interface GridObjects {
    global: GridGlobal;
    tablet?: GridTablet;
    mobile?: GridMobile;
}


export const Grid = styled.div<GridObjects>`
    ${ props =>　props.global.colStart && css`grid-column-start: ${props.global.colStart};`}
    ${ props => props.global.colEnd && css`grid-column-end: ${props.global.colEnd};`}
    ${ props => props.global.rowStart && css`grid-row-start: ${props.global.rowStart};`}
    ${ props => props.global.rowEnd && css`grid-row-end: ${props.global.rowEnd};`}

    @media screen and (max-width: 1360px) {
        ${ props =>　props.tablet?.colStart && css`grid-column-start: ${props.tablet?.colStart};`}
        ${ props => props.tablet?.colEnd && css`grid-column-end: ${props.tablet?.colEnd};`}
        ${ props => props.tablet?.rowStart && css`grid-row-start: ${props.tablet?.rowStart};`}
        ${ props => props.tablet?.rowEnd && css`grid-row-end: ${props.tablet?.rowEnd};`}
    }

    @media screen and (max-width: 480px) {
        ${ props =>　props.mobile?.colStart && css`grid-column-start: ${props.mobile?.colStart};`}
        ${ props => props.mobile?.colEnd && css`grid-column-end: ${props.mobile?.colEnd};`}
        ${ props => props.mobile?.rowStart && css`grid-row-start: ${props.mobile?.rowStart};`}
        ${ props => props.mobile?.rowEnd && css`grid-row-end: ${props.mobile?.rowEnd};`}
    }
`;

export const Row = styled.div`
    width: 100%;
`;

interface MarginProps {
    height?: string;
    width?: string;
}

export const Margin = styled.div<MarginProps>`
    ${ props => props.height && css`height: ${props.height};`}
    ${ props => props.width && css`width: ${props.width};`}
`;
