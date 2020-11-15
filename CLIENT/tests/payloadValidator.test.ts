import { isIterable, isId } from '../src/store/helpers/payloadValidator';
import { COLLECTION_OF_IDEAS_FROM_HACKATHON_PAE } from '../src/data/COLLECTION_OF_IDEAS_FROM_HACKATHON_PAE';

//@ts-ignore
describe('library', () => {
    //@ts-ignore

    it('returns an array of records', () => {
        const input = COLLECTION_OF_IDEAS_FROM_HACKATHON_PAE;

        const booleanValueOfIsIterable = isIterable(COLLECTION_OF_IDEAS_FROM_HACKATHON_PAE);

        const booleanValueOfIsId = isId(56);
        //@ts-ignore
        expect(booleanValueOfIsIterable).toStrictEqual(true);
        //@ts-ignore
        expect(booleanValueOfIsId).toStrictEqual(true);
    });
});
