type PaginationButton = {
    name: string;
    number: number;
    active: number;
};

export const paginationButton: PaginationButton[] = [
    {
        name: '«',
        number: 1,
        active: 0
    },
    {
        name: '<',
        number: 1,
        active: 0
    },
    {
        name: '1',
        number: 1,
        active: 1
    },
    {
        name: '2',
        number: 2,
        active: 2
    },
    {
        name: '>',
        number: 2,
        active: 0
    },
    {
        name: '»',
        number: 2,
        active: 0
    },
];
