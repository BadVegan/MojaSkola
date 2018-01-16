
const initialState = {
    groups: {
        listGroup: [
            {
                id: 1,
                name: 'GrupaA',
                students: [{ id: 1, name: 'Dawid', surname: 'Ryczko' }]
            },
            {
                id: 2,
                name: 'GrupaB',
                students: [{ id: 1, name: 'Jan', surname: 'Kowalski' }]
            }
        ]
    }
}


const reducer = (state = initialState, action) => {
    return state;
}


export default  reducer;