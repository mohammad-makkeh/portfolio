export type Point = {
    x: number;
    y: number;
};
export type CellPos = {
    row: number;
    col: number;
};
export type CellContent = {
    cell: CellPos;
    content: React.ReactNode;
    colFromEnd?: boolean;
    rowFromEnd?: boolean;
    hideGlow?: boolean;
};