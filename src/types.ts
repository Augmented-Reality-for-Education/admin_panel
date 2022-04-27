export type UserDesign = {
    name?: string;
    dataURL?: string;
};

export type UserDesignSequence= {
    name?: string;
    data: UserDesign[]
};