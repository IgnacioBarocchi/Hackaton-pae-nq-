import { COLLECTION_OF_IDEAS_FROM_HACKATHON_PAE } from '../src/data/COLLECTION_OF_IDEAS_FROM_HACKATHON_PAE';
import { sortByLikes } from '../src/store/helpers/dbSorters';
//@ts-ignore

describe('Mustation', () => {
    //@ts-ignore
    const input1 = [...COLLECTION_OF_IDEAS_FROM_HACKATHON_PAE];
    const input2 = [...COLLECTION_OF_IDEAS_FROM_HACKATHON_PAE];
    //@ts-ignore
    it('returns a sorted data base', () => {
        //@ts-ignore
        expect(sortByLikes(input1).length).toBe(COLLECTION_OF_IDEAS_FROM_HACKATHON_PAE.length);
        //@ts-ignore
        expect(sortByLikes(input2).length).toBe(COLLECTION_OF_IDEAS_FROM_HACKATHON_PAE.length);
    });
});
