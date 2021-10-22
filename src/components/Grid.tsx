import styled, { css } from 'styled-components';

interface ContainerProps {
    debug?: string;
}
  
export const Container = styled.div<ContainerProps>`
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: auto;
    overflow: hidden;
    margin-top: 0;
    background: ${ props => props.debug ? "red" : "transparent"};
`;

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

interface GridProps {
    colStart?: number;
    colEnd?: number;
    rowStart?: number;
    rowEnd?: number;
}

export const Grid = styled.div<GridProps>`
    ${ props =>　props.colStart && css`grid-column-start: ${props.colStart};`}
    ${ props => props.colEnd && css`grid-column-end: ${props.colEnd};`}
    ${ props => props.rowStart && css`grid-row-start: ${props.rowStart};`}
    ${ props => props.rowEnd && css`grid-row-end: ${props.rowEnd};`}
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
